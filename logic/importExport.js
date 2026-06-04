import { RASGOS } from "../data/rasgos.js";

/* =============================== EXPORTAR =============================== */

export function exportarInventario({
    tbody,
    nombreJugador,
    nombrePersonaje
}) {
    let contenidoTxt = `
=================================
      INVENTARIO DE CAMPAÑA      
=================================

Jugador:   ${nombreJugador}
Personaje: ${nombrePersonaje}

---------------------------------
            OBJETOS              
---------------------------------
`;

    const filas = tbody.querySelectorAll(".objeto");
    let contadorObjetosReales = 0;

    filas.forEach((fila) => {

        const nombreObj = fila.querySelector(".obj-nombre")?.value.trim() || "";
        const origen = fila.querySelector(".obj-origen")?.selectedOptions[0]?.text || "Ninguno";
        const cat1 = fila.querySelector(".obj-cat1")?.selectedOptions[0]?.text || "Ninguna";
        const cat2 = fila.querySelector(".obj-cat2")?.selectedOptions[0]?.text || "Ninguna";

        // Obtener selects de rasgos
        const rasgosSelects = [...fila.querySelectorAll(".obj-rasgos")];
        
        // Texto legible para el .txt
        const rasgosNombres = rasgosSelects
            .map(s => s.value)
            .filter(Boolean)
            .map(key => RASGOS[key]?.nombre || key)
            .join(", ") || "Ninguno";

        // 🔥 NUEVO: Capturar datos dinámicos (Plantillas)
        const datosRasgosArray = rasgosSelects
            .map(s => {
                if (!s.value) return null;
                let data = {};
                if (s.dataset.dinamico) {
                    try { data = JSON.parse(s.dataset.dinamico); } catch(e) {}
                }
                return { id: s.value, data: data };
            })
            .filter(Boolean);

        const metaTexto = fila.querySelector(".obj-meta-texto")?.value.trim() || "";
        const metaCompletada = fila.querySelector(".obj-meta-completada")?.checked ? "Sí" : "No";

        const estaVacio = 
            nombreObj === "" && 
            (origen === "Ninguno" || origen === "-- Seleccionar --") && 
            (cat1 === "Ninguna" || cat1 === "-- Seleccionar --") && 
            (cat2 === "Ninguna" || cat2 === "-- Seleccionar --") && 
            rasgosNombres === "Ninguno" &&
            metaTexto === ""; 

        if (estaVacio) return; 

        contadorObjetosReales++;
        const nombreFinal = nombreObj !== "" ? nombreObj : "Objeto sin nombre";

        contenidoTxt += `\n[ Objeto ${contadorObjetosReales} ]: ${nombreFinal}\n`;
        contenidoTxt += `  - Origen:      ${origen}\n`;
        contenidoTxt += `  - Categoría 1: ${cat1}\n`;
        contenidoTxt += `  - Categoría 2: ${cat2}\n`;
        contenidoTxt += `  - Rasgos:      ${rasgosNombres}\n`;
        
        // 🔥 NUEVO: Guardamos la data oculta JSON para importarla luego de forma exacta
        if (datosRasgosArray.length > 0) {
            contenidoTxt += `  - Datos Rasgos: ${JSON.stringify(datosRasgosArray)}\n`;
        }
        
        if (metaTexto !== "") {
            contenidoTxt += `  - Meta:        ${metaTexto.replace(/\n/g, " ")}\n`;
            contenidoTxt += `  - Completada:  ${metaCompletada}\n`;
        }
    });

    if (contadorObjetosReales === 0) {
        contenidoTxt += `\n(Inventario vacío)\n`;
    }

    const blob = new Blob([contenidoTxt], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Inventario_${(nombrePersonaje || "sin_personaje").replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/* =============================== IMPORTAR =============================== */

export function importarInventario({
    texto,
    tbody,
    btnAgregar,
    seleccionarOpcionPorTexto,
    actualizarContador,
    actualizarSinergias
}) {
    const lineas = texto.split("\n");
    let jugador = "";
    let personaje = "";
    const objetosData = [];
    let objetoActual = null;

    for (const linea of lineas) {
        if (linea.startsWith("Jugador:")) jugador = linea.replace("Jugador:", "").trim();
        if (linea.startsWith("Personaje:")) personaje = linea.replace("Personaje:", "").trim();

        const match = linea.match(/\[ Objeto \d+ \]: (.*)/);
        if (match) {
            objetoActual = { nombre: match[1].trim(), rasgos: [], datosRasgos: null, meta: "", completada: false };
            objetosData.push(objetoActual);
            continue;
        }

        if (!objetoActual) continue;

        if (linea.includes("- Origen:")) objetoActual.origen = linea.split("- Origen:")[1].trim();
        if (linea.includes("- Categoría 1:")) objetoActual.cat1 = linea.split("- Categoría 1:")[1].trim();
        if (linea.includes("- Categoría 2:")) objetoActual.cat2 = linea.split("- Categoría 2:")[1].trim();
        
        if (linea.includes("- Rasgos:")) {
            const val = linea.split("- Rasgos:")[1].trim();
            if (val !== "Ninguno") objetoActual.rasgos = val.split(",").map(v => v.trim());
        }

        // 🔥 NUEVO: Leer los datos dinámicos ocultos
        if (linea.includes("- Datos Rasgos:")) {
            try {
                objetoActual.datosRasgos = JSON.parse(linea.split("- Datos Rasgos:")[1].trim());
            } catch(e) {}
        }
        
        if (linea.includes("- Meta:")) objetoActual.meta = linea.split("- Meta:")[1].trim();
        if (linea.includes("- Completada:")) objetoActual.completada = linea.split("- Completada:")[1].trim() === "Sí";
    }

    const objetosValidos = objetosData.filter(obj => obj.nombre && obj.nombre.trim() !== "" && obj.nombre !== "Objeto sin nombre");

    const inputJugador = document.getElementById("nombreJugador");
    const inputPersonaje = document.getElementById("nombrePersonaje");
    if (inputJugador) inputJugador.value = jugador;
    if (inputPersonaje) inputPersonaje.value = personaje;

    const filas = tbody.querySelectorAll(".objeto");
    for (let i = 1; i < filas.length; i++) filas[i].remove();

    const base = tbody.querySelector(".objeto");
    if (base) {
        base.querySelector(".obj-nombre").value = "";
        base.querySelectorAll("select").forEach(s => (s.value = ""));
        
        const wrapper = base.querySelector(".wrapper-rasgos");
        if(wrapper) {
            const divsRasgos = wrapper.querySelectorAll(".rasgo-item-wrap");
            for (let i = 1; i < divsRasgos.length; i++) divsRasgos[i].remove();
            const primerSelect = wrapper.querySelector(".obj-rasgos");
            if(primerSelect) {
                primerSelect.value = "";
                delete primerSelect.dataset.dinamico;
            }
        }
        
        const txtMeta = base.querySelector(".obj-meta-texto");
        const chkCompletada = base.querySelector(".obj-meta-completada");
        const panelMeta = base.querySelector(".meta-container");
        if(txtMeta) txtMeta.value = "";
        if(chkCompletada) chkCompletada.checked = false;
        if(panelMeta) panelMeta.style.display = "none";
    }

    for (let i = 1; i < objetosValidos.length; i++) {
        btnAgregar?.click();
    }

    const filasFinales = tbody.querySelectorAll(".objeto");

    objetosValidos.forEach((obj, index) => {
        const fila = filasFinales[index];
        if (!fila) return; 

        fila.querySelector(".obj-nombre").value = obj.nombre;
        seleccionarOpcionPorTexto(fila.querySelector(".obj-origen"), obj.origen);
        seleccionarOpcionPorTexto(fila.querySelector(".obj-cat1"), obj.cat1);
        seleccionarOpcionPorTexto(fila.querySelector(".obj-cat2"), obj.cat2);

        // 🔥 NUEVO: Restaurar Rasgos usando la data exacta del JSON
        if (obj.datosRasgos && obj.datosRasgos.length > 0) {
            const btnAgregarRasgoInterno = fila.querySelector(".btn-agregar-rasgo");
            
            // Creamos suficientes selects si faltan
            obj.datosRasgos.forEach((r, i) => {
                const selectsActivos = fila.querySelectorAll(".obj-rasgos");
                if (i >= selectsActivos.length) btnAgregarRasgoInterno?.click();
            });

            const nuevosSelects = fila.querySelectorAll(".obj-rasgos");
            
            // Llenamos la información y la memoria de las plantillas
            obj.datosRasgos.forEach((rasgoData, i) => {
                const select = nuevosSelects[i];
                if (select) {
                    select.value = rasgoData.id;
                    if (Object.keys(rasgoData.data).length > 0) {
                        select.dataset.dinamico = JSON.stringify(rasgoData.data);
                    }
                    // Simulamos un cambio para que la UI de abajo se entere y dibuje las fichas
                    select.dispatchEvent(new Event("change"));
                }
            });
            
        } 
        // Lógica antigua por si importas un archivo .txt viejo que no tenía JSON
        else if (obj.rasgos?.length) {
            const btnAgregarRasgoInterno = fila.querySelector(".btn-agregar-rasgo");
            obj.rasgos.forEach((r, i) => {
                const selectsActivos = fila.querySelectorAll(".obj-rasgos");
                if (i >= selectsActivos.length) btnAgregarRasgoInterno?.click();
            });

            const nuevosSelects = fila.querySelectorAll(".obj-rasgos");
            obj.rasgos.forEach((r, i) => {
                if (nuevosSelects[i]) {
                    seleccionarOpcionPorTexto(nuevosSelects[i], r);
                    nuevosSelects[i].dispatchEvent(new Event("change"));
                }
            });
        }
        
        // Restaurar Meta
        if (obj.meta) {
            const txtMeta = fila.querySelector(".obj-meta-texto");
            const chkCompletada = fila.querySelector(".obj-meta-completada");
            const panelMeta = fila.querySelector(".meta-container");

            if (txtMeta) txtMeta.value = obj.meta;
            if (chkCompletada) chkCompletada.checked = obj.completada;
            if (panelMeta) panelMeta.style.display = "block"; 
        }
    });

    actualizarContador?.();
    actualizarSinergias?.(tbody, document.getElementById("listaSinergias"));
}