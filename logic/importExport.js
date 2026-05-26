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

    filas.forEach((fila, index) => {

        const nombreObj = fila.querySelector(".obj-nombre")?.value.trim() || "Objeto sin nombre";

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

        contenidoTxt += `

[ Objeto ${index + 1} ]: ${nombreObj}
  - Origen:      ${origen}
  - Categoría 1: ${cat1}
  - Categoría 2: ${cat2}
  - Rasgos:      ${rasgosTexto}
`;
    });

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
    contenedorRasgos
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
                rasgos: []
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
    }

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

    base.querySelector(".obj-nombre").value = "";
    base.querySelectorAll("select").forEach(s => (s.value = ""));

    base.querySelectorAll(".obj-rasgos").forEach((s, i) => {
        if (i > 0) s.remove();
        else s.value = "";
    });

    /* =============================== RECREAR OBJETOS =============================== */

    for (let i = 1; i < objetosData.length; i++) {
        btnAgregar?.click();
    }

    const filasFinales = tbody.querySelectorAll(".objeto");

    objetosData.forEach((obj, index) => {

        const fila = filasFinales[index];

        fila.querySelector(".obj-nombre").value = obj.nombre || "";

        seleccionarOpcionPorTexto(fila.querySelector(".obj-origen"), obj.origen);
        seleccionarOpcionPorTexto(fila.querySelector(".obj-cat1"), obj.cat1);
        seleccionarOpcionPorTexto(fila.querySelector(".obj-cat2"), obj.cat2);

        if (obj.rasgos?.length) {

            const selects = fila.querySelectorAll(".obj-rasgos");

            obj.rasgos.forEach((r, i) => {
                if (i >= selects.length) {
                    btnAgregar?.click();
                }
            });

            const nuevosSelects = fila.querySelectorAll(".obj-rasgos");

            obj.rasgos.forEach((r, i) => {
                if (nuevosSelects[i]) {
                    seleccionarOpcionPorTexto(nuevosSelects[i], r);
                }
            });
        }
    });

    /* =============================== REFRESH =============================== */

    actualizarContador?.();
    actualizarSinergias?.(tbody, contenedorSinergias);
}