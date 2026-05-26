import { RASGOS } from "../data/rasgos.js";

/* =============================== OBTENER RASGOS =============================== */

export function obtenerRasgosSeleccionados(tbody) {
    const rasgos = new Set();

    tbody.querySelectorAll(".objeto").forEach(fila => {
        fila.querySelectorAll(".obj-rasgos").forEach(select => {
            const val = select?.value?.trim();
            if (val) rasgos.add(val);
        });
    });

    return [...rasgos];
}

/* =============================== ACTUALIZAR LISTA =============================== */

export function actualizarRasgos(tbody, contenedor) {
    if (!tbody || !contenedor) return;

    contenedor.innerHTML = "";

    const seleccionados = obtenerRasgosSeleccionados(tbody);

    if (!seleccionados.length) {
        contenedor.innerHTML = "<em>No hay rasgos activos</em>";
        return;
    }

    seleccionados.forEach(key => {
        const rasgo = RASGOS[key];
        if (!rasgo) return;

        const bloque = document.createElement("div");
        bloque.classList.add("rasgo");

        // 🔥 FIX: normalizar opciones (array o string)
        let opcionesHTML = "";

        if (rasgo.opciones) {

            if (Array.isArray(rasgo.opciones)) {
                opcionesHTML = `
                    <div class="rasgo-opciones" data-rasgo="${key}">
                        <strong>Opciones:</strong><br>
                        ${rasgo.opciones.map(opt => `
                            <label>
                                <input type="checkbox" value="${opt.id}">
                                ${opt.nombre}
                            </label>
                        `).join("<br>")}
                    </div>
                `;
            }

            else if (typeof rasgo.opciones === "string") {
                opcionesHTML = `
                    <p><strong>Opciones:</strong> ${rasgo.opciones}</p>
                `;
            }
        }

        bloque.innerHTML = `
            <strong>${rasgo.nombre}</strong>
            ${rasgo.prerrequisitos ? `<p><em>Prerrequisitos:</em> ${rasgo.prerrequisitos}</p>` : ""}
            <p>${rasgo.descripcion.replace(/\n/g, "<br>")}</p>
            ${opcionesHTML}
        `;

        contenedor.appendChild(bloque);
    });
}