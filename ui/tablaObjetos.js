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

            const valores = [...cont.querySelectorAll(".obj-rasgos")]
                .map(s => s.value)
                .filter(Boolean);

            fila.dataset.rasgosSeleccionados = JSON.stringify(valores);

            notificar();
        });
    }

    function crearRasgoSelector(cont, fila) {

        const select = document.createElement("select");
        select.classList.add("obj-rasgos");

        llenarRasgos(select);
        bindRasgo(select, cont, fila);

        return select;
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

        const btnOld = cont.querySelector(".btn-agregar-rasgo");

        cont.innerHTML = "";

        const primer = crearRasgoSelector(cont, fila);
        cont.appendChild(primer);

        const btn = document.createElement("button");
        btn.type = "button";
        btn.classList.add("btn-agregar-rasgo");
        btn.textContent = "+";

        btn.addEventListener("click", () => {
            cont.insertBefore(crearRasgoSelector(cont, fila), btn);
            notificar();
        });

        cont.appendChild(btn);
    }

    /* =============================== AGREGAR OBJETO =============================== */

    btnAgregar.addEventListener("click", () => {

        const filas = tbody.querySelectorAll(".objeto");

        if (filas.length >= MAX_OBJETOS) return;

        const nueva = filas[0].cloneNode(true);

        nueva.querySelectorAll("input").forEach(i => i.value = "");
        nueva.querySelectorAll("select").forEach(s => s.value = "");

        tbody.appendChild(nueva);

        inicializarFila(nueva);

        actualizarContador();
        notificar();
    });

    /* =============================== INIT =============================== */

    document.querySelectorAll(".objeto").forEach(inicializarFila);

    actualizarContador();
}