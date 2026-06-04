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
    let contadorObjetosReales = 0; // Para enumerar correctamente en el txt

    filas.forEach((fila) => {

        const nombreObj = fila.querySelector(".obj-nombre")?.value.trim() || "";

        const origenSelect = fila.querySelector(".obj-origen");
        const origen = origenSelect?.selectedOptions[0]?.text || "Ninguno";

        const cat1Select = fila.querySelector(".obj-cat1");
        const cat2Select = fila.querySelector(".obj-cat2");

        const cat1 = cat1Select?.selectedOptions[0]?.text || "Ninguna";
        const cat2 = cat2Select?.selectedOptions[0]?.text || "Ninguna";

        const rasgosTexto = [...fila.querySelectorAll(".obj-rasgos")]
            .map(s => s.value)
            .filter(Boolean)
            .map(key => RASGOS[key]?.nombre || key)
            .join(", ") || "Ninguno";

        // 🔥 Capturamos los datos de la meta
        const metaTexto = fila.querySelector(".obj-meta-texto")?.value.trim() || "";
        const metaCompletada = fila.querySelector(".obj-meta-completada")?.checked ? "Sí" : "No";

        // 🔥 Evaluamos si el objeto está completamente vacío
        const estaVacio = 
            nombreObj === "" && 
            (origen === "Ninguno" || origen === "-- Seleccionar --") && 
            (cat1 === "Ninguna" || cat1 === "-- Seleccionar --") && 
            (cat2 === "Ninguna" || cat2 === "-- Seleccionar --") && 
            rasgosTexto === "Ninguno" &&
            metaTexto === ""; 

        // Si está vacío, cortamos aquí y no lo escribimos en el archivo txt
        if (estaVacio) return; 

        // Si tiene al menos un dato, sumamos al contador y lo guardamos
        contadorObjetosReales++;

        // Si tiene datos pero el jugador no le puso nombre, le ponemos el por defecto
        const nombreFinal = nombreObj !== "" ? nombreObj : "Objeto sin nombre";

        contenidoTxt += `\n[ Objeto ${contadorObjetosReales} ]: ${nombreFinal}\n`;
        contenidoTxt += `  - Origen:      ${origen}\n`;
        contenidoTxt += `  - Categoría 1: ${cat1}\n`;
        contenidoTxt += `  - Categoría 2: ${cat2}\n`;
        contenidoTxt += `  - Rasgos:      ${rasgosTexto}\n`;
        
        // 🔥 Guardamos la meta solo si el jugador escribió algo
        if (metaTexto !== "") {
            contenidoTxt += `  - Meta:        ${metaTexto.replace(/\n/g, " ")}\n`;
            contenidoTxt += `  - Completada:  ${metaCompletada}\n`;
        }
    });

    // Si después de revisar todo no había ningún objeto válido, ponemos un mensaje
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
    actualizarSinergias,
    contenedorSinergias,
    contenedorRasgos // Si decides usarlo en el futuro, está aquí
}) {
    const lineas = texto.split("\n");

    let jugador = "";
    let personaje = "";
    const objetosData = [];

    let objetoActual = null;

    for (const linea of lineas) {

        if (linea.startsWith("Jugador:")) {
            jugador = linea.replace("Jugador:", "").trim();
        }

        if (linea.startsWith("Personaje:")) {
            personaje = linea.replace("Personaje:", "").trim();
        }

        const match = linea.match(/\[ Objeto \d+ \]: (.*)/);

        if (match) {
            objetoActual = {
                nombre: match[1].trim(),
                rasgos: [],
                meta: "",
                completada: false
            };
            objetosData.push(objetoActual);
            continue;
        }

        if (!objetoActual) continue;

        if (linea.includes("- Origen:")) {
            objetoActual.origen = linea.split("- Origen:")[1].trim();
        }

        if (linea.includes("- Categoría 1:")) {
            objetoActual.cat1 = linea.split("- Categoría 1:")[1].trim();
        }

        if (linea.includes("- Categoría 2:")) {
            objetoActual.cat2 = linea.split("- Categoría 2:")[1].trim();
        }

        if (linea.includes("- Rasgos:")) {
            const val = linea.split("- Rasgos:")[1].trim();
            if (val !== "Ninguno") {
                objetoActual.rasgos = val.split(",").map(v => v.trim());
            }
        }
        
        // 🔥 Leer la meta del .txt
        if (linea.includes("- Meta:")) {
            objetoActual.meta = linea.split("- Meta:")[1].trim();
        }

        if (linea.includes("- Completada:")) {
            objetoActual.completada = linea.split("- Completada:")[1].trim() === "Sí";
        }
    }

    /* 🔥 FILTRO ESTRICTO DE IMPORTACIÓN =============================== */
    
    const objetosValidos = objetosData.filter(obj => {
        // Si no tiene nombre, está vacío, o se llama "Objeto sin nombre", se descarta por completo
        const tieneNombre = obj.nombre && obj.nombre.trim() !== "" && obj.nombre !== "Objeto sin nombre";
        return tieneNombre;
    });

    /* =============================== RESTAURAR CAMPOS =============================== */

    const inputJugador = document.getElementById("nombreJugador");
    const inputPersonaje = document.getElementById("nombrePersonaje");

    if (inputJugador) inputJugador.value = jugador;
    if (inputPersonaje) inputPersonaje.value = personaje;

    /* =============================== LIMPIAR TABLA =============================== */

    const filas = tbody.querySelectorAll(".objeto");

    for (let i = 1; i < filas.length; i++) {
        filas[i].remove();
    }

    const base = tbody.querySelector(".objeto");

    if (base) {
        base.querySelector(".obj-nombre").value = "";
        base.querySelectorAll("select").forEach(s => (s.value = ""));

        base.querySelectorAll(".obj-rasgos").forEach((s, i) => {
            if (i > 0) {
                s.parentElement.remove(); 
            } else {
                s.value = "";
            }
        });
        
        // Limpiar panel de metas base
        const txtMeta = base.querySelector(".obj-meta-texto");
        const chkCompletada = base.querySelector(".obj-meta-completada");
        const panelMeta = base.querySelector(".meta-container");
        
        if(txtMeta) txtMeta.value = "";
        if(chkCompletada) chkCompletada.checked = false;
        if(panelMeta) panelMeta.style.display = "none";
    }

    /* =============================== RECREAR OBJETOS =============================== */

    // Solo "clickeamos" el botón de agregar si hay objetos válidos que dibujar
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

        if (obj.rasgos?.length) {

            const selects = fila.querySelectorAll(".obj-rasgos");

            obj.rasgos.forEach((r, i) => {
                if (i >= selects.length) {
                    const btnAgregarRasgoInterno = fila.querySelector(".btn-agregar-rasgo");
                    btnAgregarRasgoInterno?.click();
                }
            });

            const nuevosSelects = fila.querySelectorAll(".obj-rasgos");

            obj.rasgos.forEach((r, i) => {
                if (nuevosSelects[i]) {
                    seleccionarOpcionPorTexto(nuevosSelects[i], r);
                }
            });
        }
        
        // 🔥 Restaurar visualmente la Meta en la UI
        if (obj.meta) {
            const txtMeta = fila.querySelector(".obj-meta-texto");
            const chkCompletada = fila.querySelector(".obj-meta-completada");
            const panelMeta = fila.querySelector(".meta-container");

            if (txtMeta) txtMeta.value = obj.meta;
            if (chkCompletada) chkCompletada.checked = obj.completada;
            
            // Si el objeto traía una meta guardada, dejamos el panel abierto para que se vea de inmediato
            if (panelMeta) panelMeta.style.display = "block"; 
        }
    });

    /* =============================== REFRESH =============================== */

    actualizarContador?.();
    actualizarSinergias?.(tbody, contenedorSinergias);
}