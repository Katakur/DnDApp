// ui/tablaObjetos.js
import { RASGOS } from "../data/rasgos.js";
import { CATEGORIAS } from "../data/categorias.js";

export function initTablaObjetos({ onChange }) {

    const MAX_OBJETOS = 5;

    const btnAgregar = document.getElementById("btnAgregarObjeto");
    const tbody = document.querySelector("#tablaObjetos tbody");
    const contador = document.getElementById("contadorObjetos");

    if (!btnAgregar || !tbody || !contador) return;

    /* =============================== NOTIFICAR =============================== */

    function notificar() {
        if (typeof onChange === "function") onChange();
    }

    /* =============================== CONTADOR =============================== */

    function actualizarContador() {
        const cantidad = tbody.querySelectorAll(".objeto").length;
        contador.textContent = `Objetos: ${cantidad} / ${MAX_OBJETOS}`;
    }

    /* =============================== SELECTS =============================== */

    function llenarCategorias(select) {
        if (!select) return;

        select.innerHTML = `<option value="">-- Seleccionar --</option>`;

        for (const key in CATEGORIAS) {
            const opt = document.createElement("option");
            opt.value = key;
            opt.textContent = CATEGORIAS[key].nombre;
            select.appendChild(opt);
        }
    }

    function llenarRasgos(select) {
        if (!select) return;

        select.innerHTML = `<option value="">-- Seleccionar Rasgo --</option>`;

        Object.entries(RASGOS)
            .sort((a, b) => a[1].nombre.localeCompare(b[1].nombre, "es"))
            .forEach(([key, r]) => {
                const opt = document.createElement("option");
                opt.value = key;
                opt.textContent = r.nombre;
                select.appendChild(opt);
            });
    }

    /* =============================== RASGOS =============================== */

    function bindRasgo(select, cont, fila) {
        select.addEventListener("change", () => {
            actualizarDatasetRasgos(cont, fila);
        });
    }

    function actualizarDatasetRasgos(cont, fila) {
        const valores = [...cont.querySelectorAll(".obj-rasgos")]
            .map(s => s.value)
            .filter(Boolean);

        fila.dataset.rasgosSeleccionados = JSON.stringify(valores);
        notificar();
    }

    function crearRasgoSelector(cont, fila) {
        const contenedorRasgo = document.createElement("div");
        contenedorRasgo.classList.add("rasgo-item-lista");
        // 🔥 [F-03] MODIFICADO: Estética y Diseño de Lista de Rasgos
        // Cambiamos 'inline-flex' por 'flex' para forzar que ocupen una línea cada uno (lista vertical).
        // Ajustamos márgenes para alineación visual con el botón [+] al final.
        contenedorRasgo.style.display = "flex";
        contenedorRasgo.style.alignItems = "center";
        contenedorRasgo.style.gap = "8px";
        contenedorRasgo.style.marginBottom = "0px";

        const select = document.createElement("select");
        select.classList.add("obj-rasgos");
        select.style.flex = "1"; // El select ocupa el espacio disponible
        select.style.width = "160";
        select.style.minWidth = "0";

        llenarRasgos(select);
        bindRasgo(select, cont, fila);

        const btnEliminarRasgo = document.createElement("button");
        btnEliminarRasgo.type = "button";
        btnEliminarRasgo.classList.add("btn-eliminar-rasgo");
        btnEliminarRasgo.textContent = "[ - ]";
        
        // 🔥 NUEVO: Evita que el botón se deforme o se encoja
        btnEliminarRasgo.style.flexShrink = "0"; 
        
        btnEliminarRasgo.addEventListener("click", () => {
            contenedorRasgo.remove();
            actualizarDatasetRasgos(cont, fila);
        });

        contenedorRasgo.appendChild(select);
        contenedorRasgo.appendChild(btnEliminarRasgo);

        return contenedorRasgo;
    }

    /* 🔥 [F-03] NUEVO: Helper para crear el icono del basurero (SVG) */
    function crearIconoBasurero() {
        const svgNamespace = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNamespace, "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("stroke", "currentColor");
        svg.setAttribute("stroke-width", "2");
        svg.setAttribute("stroke-linecap", "round");
        svg.setAttribute("stroke-linejoin", "round");
        svg.classList.add("icono-basurero");
        svg.style.width = "18px";
        svg.style.height = "18px";
        svg.style.pointerEvents = "none"; // Evita que el SVG capture el clic

        const polyline = document.createElementNS(svgNamespace, "polyline");
        polyline.setAttribute("points", "3 6 5 6 21 6");
        svg.appendChild(polyline);

        const path = document.createElementNS(svgNamespace, "path");
        path.setAttribute("d", "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2");
        svg.appendChild(path);

        return svg;
    }

    /* =============================== FILA =============================== */

    function inicializarFila(fila) {

        const cat1 = fila.querySelector(".obj-cat1");
        const cat2 = fila.querySelector(".obj-cat2");
        const cont = fila.querySelector(".obj-rasgos-container");

        if (!cat1 || !cat2 || !cont) return;

        llenarCategorias(cat1);
        llenarCategorias(cat2);

        cat1.addEventListener("change", notificar);
        cat2.addEventListener("change", notificar);

        /* 🔥 RECONSTRUIR RASGOS LIMPIAMENTE */

        /* 🔥 RECONSTRUIR RASGOS LIMPIAMENTE */

        cont.innerHTML = "";

        cont.style.display = "flex";
        cont.style.flexWrap = "wrap"; 
        cont.style.gap = "2px"; 
        cont.style.alignItems = "center"; 
        
        // 🔥 NUEVO: Bloqueamos el crecimiento horizontal innecesario.
        // 450px suele ser la medida perfecta para 3 rasgos delgados (110px) + sus botones [-] + espacios.
        // Si notas que caben 4 o que solo caben 2, puedes jugar un poco con este número (ej. 420px o 480px).
        cont.style.maxWidth = "620px";

        const primer = crearRasgoSelector(cont, fila);
        cont.appendChild(primer);

        const btn = document.createElement("button");
        btn.type = "button";
        btn.classList.add("btn-agregar-rasgo");
        btn.textContent = "[ + ]";

        btn.addEventListener("click", () => {
            cont.insertBefore(crearRasgoSelector(cont, fila), btn);
            notificar();
        });

        cont.appendChild(btn);

        if (!fila.querySelector(".btn-borrar-objeto")) {
            const btnBorrarObjeto = document.createElement("button");
            btnBorrarObjeto.type = "button";
            btnBorrarObjeto.classList.add("btn-borrar-objeto");
            // 🔥 [F-03] MODIFICADO: Icono de basurero en lugar de texto
            btnBorrarObjeto.appendChild(crearIconoBasurero());
            btnBorrarObjeto.title = "Borrar Objeto"; // Accesibilidad: texto al pasar el ratón

            btnBorrarObjeto.addEventListener("click", () => {
                const totalFilas = tbody.querySelectorAll(".objeto").length;

                if (totalFilas > 1) {
                    fila.remove();
                } else {
                    fila.querySelector(".obj-nombre").value = "";
                    const origen = fila.querySelector(".obj-origen");
                    if (origen) origen.value = "";
                    cat1.value = "";
                    cat2.value = "";
                    fila.dataset.rasgosSeleccionados = "[]";
                    inicializarFila(fila);
                }

                actualizarContador();
                notificar();
            });

            if (fila.tagName === "TR") {
                const td = document.createElement("td");
                td.style.textAlign = "center"; // Centramos el icono en la celda
                td.appendChild(btnBorrarObjeto);
                fila.appendChild(td);
            } else {
                fila.appendChild(btnBorrarObjeto);
            }
        }
    }

    /* =============================== AGREGAR OBJETO =============================== */

    btnAgregar.addEventListener("click", () => {

        const filas = tbody.querySelectorAll(".objeto");

        if (filas.length >= MAX_OBJETOS) return;

        const nueva = filas[0].cloneNode(true);

        nueva.querySelectorAll("input").forEach(i => i.value = "");
        nueva.querySelectorAll("select").forEach(s => s.value = "");

        const btnViejo = nueva.querySelector(".btn-borrar-objeto");
        if (btnViejo) {
            if (btnViejo.parentElement.tagName === "TD") {
                btnViejo.parentElement.remove();
            } else {
                btnViejo.remove();
            }
        }

        tbody.appendChild(nueva);

        inicializarFila(nueva);

        actualizarContador();
        notificar();
    });

    /* =============================== INIT =============================== */

    document.querySelectorAll(".objeto").forEach(inicializarFila);

    actualizarContador();
}