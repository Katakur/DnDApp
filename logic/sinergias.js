import { CATEGORIAS } from "../data/categorias.js";

export function obtenerConteoCategorias(tbody) {
    const conteo = {};

    tbody.querySelectorAll(".objeto").forEach(fila => {
        const c1 = fila.querySelector(".obj-cat1")?.value;
        const c2 = fila.querySelector(".obj-cat2")?.value;

        if (c1) conteo[c1] = (conteo[c1] || 0) + 1;
        if (c2) conteo[c2] = (conteo[c2] || 0) + 1;
    });

    return conteo;
}

export function actualizarSinergias(tbody, contenedor) {

    const conteo = obtenerConteoCategorias(tbody);

    contenedor.innerHTML = "";

    let hay = false;

    Object.entries(conteo).forEach(([key, cantidad]) => {

        const categoria = CATEGORIAS[key];
        if (!categoria) return;

        const beneficios = [];
        const b = categoria.beneficios || {};
        
        // REEMPLAZO: Bucle dinámico que revisa desde 1 hasta la cantidad de objetos que tengas
        for (let i = 1; i <= cantidad; i++) {
            // Si existe un beneficio para esta cantidad específica en categorias.js, lo añade
            if (b[i]) {
                beneficios.push(b[i]);
            }
        }

        if (!beneficios.length) return;

        hay = true;

        const div = document.createElement("div");

        div.className = "sinergia";

        div.innerHTML = `
            <strong>${categoria.nombre}</strong>
            <ul>
                ${beneficios.map(x => `<li>${x}</li>`).join("")}
            </ul>
        `;

        contenedor.appendChild(div);
    });

    if (!hay) {
        contenedor.innerHTML = "<em>No hay sinergias activas</em>";
    }
}