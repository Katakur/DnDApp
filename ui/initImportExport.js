import { exportarInventario, importarInventario } from "../logic/importExport.js";

export function initImportExport({
    tbody,
    actualizarTodo
}) {
    const btnGuardar = document.getElementById("btnGuardarInventario");
    const inputImport = document.getElementById("inputCargarTxt");
    const btnAgregar = document.getElementById("btnAgregarObjeto");

    /* ================= EXPORTAR ================= */

    if (btnGuardar) {
        btnGuardar.addEventListener("click", () => {

            const nombreJugador = document.getElementById("nombreJugador")?.value || "";
            const nombrePersonaje = document.getElementById("nombrePersonaje")?.value || "";

            exportarInventario({
                tbody,
                nombreJugador,
                nombrePersonaje
            });
        });
    }

    /* ================= IMPORTAR ================= */

    if (inputImport) {
        inputImport.addEventListener("change", (e) => {

            const file = e.target.files?.[0];
            if (!file) return;

            const reader = new FileReader();

            reader.onload = (ev) => {

                importarInventario({
                    texto: ev.target.result,
                    tbody,
                    btnAgregar,

                    seleccionarOpcionPorTexto: (select, text) => {
                        if (!select || !text) return;

                        const opt = [...select.options].find(
                            o => o.textContent.trim() === text.trim()
                        );

                        if (opt) select.value = opt.value;
                    },

                    actualizarContador: () => {
                        actualizarTodo();
                    },

                    actualizarSinergias: () => {
                        actualizarTodo();
                    }
                });

                actualizarTodo();
            };

            reader.readAsText(file);
        });
    }
}