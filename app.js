import { initTablaObjetos } from "./ui/tablaObjetos.js";
import { actualizarRasgos } from "./logic/rasgosLogic.js";
import { actualizarSinergias } from "./logic/sinergias.js";
import { initImportExport } from "./ui/initImportExport.js"; 
import { initPokedex } from "./ui/pokedex.js"; // <-- NUEVA IMPORTACIÓN

document.addEventListener("DOMContentLoaded", () => {
    /* =============================== ELEMENTOS =============================== */
    const tbody = document.querySelector("#tablaObjetos tbody");
    const contenedorSinergias = document.getElementById("listaSinergias");
    const contenedorRasgos = document.getElementById("listaRasgos");
    const btnAgregar = document.getElementById("btnAgregarObjeto");

    /* =============================== FUNCIÓN CENTRAL =============================== */
    function actualizarTodo() {
        actualizarSinergias(tbody, contenedorSinergias);
        actualizarRasgos(tbody, contenedorRasgos);
    }

    /* =============================== INIT TABLA =============================== */
    initTablaObjetos({
        onChange: actualizarTodo
    });

    /* =============================== IMPORT / EXPORT =============================== */
    initImportExport({
        tbody,
        btnAgregar,
        actualizarTodo
    });

    /* =============================== INIT POKÉDEX =============================== */
    initPokedex(); // <-- INICIALIZAMOS EL PANEL
});