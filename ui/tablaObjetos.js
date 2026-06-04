import { CATEGORIAS } from "../data/categorias.js";
import { ORIGENES } from "../data/origenes.js";
import { RASGOS } from "../data/rasgos.js";

export function initTablaObjetos({ onChange }) {
    const MAX_OBJETOS = 5;
    const btnAgregar = document.getElementById("btnAgregarObjeto");
    const tbody = document.querySelector("#tablaObjetos tbody");
    const contador = document.getElementById("contadorObjetos");

    if (!btnAgregar || !tbody || !contador) return;

    const tooltip = document.createElement("div");
    tooltip.className = "rasgo-tooltip";
    tooltip.style.display = "none";
    document.body.appendChild(tooltip);

    function notificar() {
        if (typeof onChange === "function") onChange();
    }

    function actualizarContador() {
        const cantidad = tbody.querySelectorAll(".objeto").length;
        contador.textContent = `Objetos: ${cantidad} / ${MAX_OBJETOS}`;
    }

    function llenarSelect(select, datos, defaultText) {
        if (!select) return;
        select.innerHTML = `<option value="">-- ${defaultText} --</option>`;
        if (Array.isArray(datos)) {
            datos.forEach(d => select.insertAdjacentHTML('beforeend', `<option value="${d.id}">${d.nombre}</option>`));
        } else {
            Object.entries(datos).forEach(([id, d]) => select.insertAdjacentHTML('beforeend', `<option value="${id}">${d.nombre}</option>`));
        }
    }

    // 🔥 TABLA SÚPER COMPACTA: Solo el selector y el botón de borrar
    function crearRasgoSelector(cont, fila) {
        const divWrap = document.createElement("div");
        divWrap.className = "rasgo-item-wrap";
        
        const topRow = document.createElement("div");
        topRow.style.display = "flex";
        topRow.style.alignItems = "center";
        topRow.style.gap = "4px";

        const selectRasgo = document.createElement("select");
        selectRasgo.className = "obj-rasgos";
        selectRasgo.style.flex = "1";
        llenarSelect(selectRasgo, RASGOS, "Seleccionar");

        selectRasgo.addEventListener("mouseover", (e) => {
            const val = selectRasgo.value;
            if (e.target.tagName === "OPTION" || val) {
                const datos = RASGOS[val];
                if (datos) {
                    let html = `<strong>${datos.nombre}</strong><br><br>${datos.descripcion.replace(/\n/g, '<br>')}`;
                    if (datos.usos) html += `<br><br><em>Usos: ${datos.usos}</em>`;
                    tooltip.innerHTML = html;
                    tooltip.style.display = "block";
                    tooltip.style.left = (e.pageX + 15) + "px";
                    tooltip.style.top = (e.pageY + 15) + "px";
                }
            }
        });
        selectRasgo.addEventListener("mousemove", (e) => {
            if (tooltip.style.display === "block") {
                tooltip.style.left = (e.pageX + 15) + "px";
                tooltip.style.top = (e.pageY + 15) + "px";
            }
        });
        selectRasgo.addEventListener("mouseout", () => tooltip.style.display = "none");

        // Al cambiar el rasgo, notificamos a la lista inferior para que lo dibuje
        selectRasgo.addEventListener("change", notificar);

        const btnEliminarRasgo = document.createElement("button");
        btnEliminarRasgo.type = "button";
        btnEliminarRasgo.textContent = "[-]";
        btnEliminarRasgo.className = "btn-eliminar-rasgo";

        btnEliminarRasgo.addEventListener("click", () => {
            if (cont.querySelectorAll(".obj-rasgos").length > 1) {
                divWrap.remove();
            } else {
                selectRasgo.value = "";
                delete selectRasgo.dataset.dinamico; // Limpia datos guardados
            }
            notificar();
        });

        topRow.appendChild(selectRasgo);
        topRow.appendChild(btnEliminarRasgo);
        divWrap.appendChild(topRow);

        return divWrap;
    }

    function inicializarFila(fila) {
        const inputNombre = fila.querySelector(".obj-nombre");
        const origen = fila.querySelector(".obj-origen");
        const cat1 = fila.querySelector(".obj-cat1");
        const cat2 = fila.querySelector(".obj-cat2");
        const contenedorRasgos = fila.querySelector(".obj-rasgos-container");
        const celdaAccion = fila.querySelector(".obj-acciones");

        llenarSelect(origen, ORIGENES, "Seleccionar");
        llenarSelect(cat1, CATEGORIAS, "Cat 1");
        llenarSelect(cat2, CATEGORIAS, "Cat 2");

        // 🔥 Notificar cuando cambian datos clave para la UI
        inputNombre.addEventListener("change", notificar);
        origen.addEventListener("change", notificar);

        function checkCategoriasDuplicadas(modificado, elOtro) {
            if (modificado.value !== "" && modificado.value === elOtro.value) {
                modificado.value = ""; 
                alert("No puedes elegir la misma categoría dos veces en el mismo objeto.");
            }
            notificar();
        }

        cat1.addEventListener("change", (e) => checkCategoriasDuplicadas(e.target, cat2));
        cat2.addEventListener("change", (e) => checkCategoriasDuplicadas(e.target, cat1));

        contenedorRasgos.innerHTML = "";
        
        const wrapperRasgos = document.createElement("div");
        wrapperRasgos.className = "wrapper-rasgos";
        wrapperRasgos.appendChild(crearRasgoSelector(wrapperRasgos, fila));
        
        const divBotones = document.createElement("div");
        divBotones.style.marginTop = "8px";
        
        const btnAgregaRasgo = document.createElement("button");
        btnAgregaRasgo.textContent = "[+] Rasgo";
        btnAgregaRasgo.className = "btn-agregar-rasgo";
        btnAgregaRasgo.type = "button";
        btnAgregaRasgo.addEventListener("click", () => wrapperRasgos.appendChild(crearRasgoSelector(wrapperRasgos, fila)));

        const btnEvolucion = document.createElement("button");
        btnEvolucion.textContent = "⭐ Meta";
        btnEvolucion.className = "btn-evolucion";
        btnEvolucion.type = "button";

        divBotones.appendChild(btnAgregaRasgo);
        divBotones.appendChild(btnEvolucion);

        const panelMeta = document.createElement("div");
        panelMeta.className = "meta-container";
        panelMeta.style.display = "none";
        panelMeta.innerHTML = `
            <textarea class="obj-meta-texto" placeholder="Escribe la meta aquí..." style="width:100%; margin-top:5px; box-sizing: border-box;"></textarea>
            <label style="font-size:0.9em; display:flex; align-items:center; gap:5px; margin-top:5px;">
                <input type="checkbox" class="obj-meta-completada"> Meta Completada
            </label>
        `;
        btnEvolucion.addEventListener("click", () => panelMeta.style.display = panelMeta.style.display === "none" ? "block" : "none");

        contenedorRasgos.appendChild(wrapperRasgos);
        contenedorRasgos.appendChild(divBotones);
        contenedorRasgos.appendChild(panelMeta);

        celdaAccion.innerHTML = ""; 
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "🗑️";
        btnBorrar.className = "btn-borrar-objeto";
        btnBorrar.type = "button";
        btnBorrar.style.cursor = "pointer";
        btnBorrar.style.fontSize = "18px";
        btnBorrar.style.background = "transparent";
        btnBorrar.style.border = "none";
        
        btnBorrar.addEventListener("click", () => {
            if (tbody.querySelectorAll(".objeto").length > 1) {
                fila.remove(); 
            } else {
                inputNombre.value = "";
                origen.value = "";
                cat1.value = "";
                cat2.value = "";
                
                wrapperRasgos.innerHTML = "";
                wrapperRasgos.appendChild(crearRasgoSelector(wrapperRasgos, fila));
                
                panelMeta.style.display = "none";
                panelMeta.querySelector(".obj-meta-texto").value = "";
                panelMeta.querySelector(".obj-meta-completada").checked = false;
            }
            actualizarContador();
            notificar();
        });

        celdaAccion.appendChild(btnBorrar);
    }

    btnAgregar.addEventListener("click", () => {
        const filas = tbody.querySelectorAll(".objeto");
        if (filas.length >= MAX_OBJETOS) return;
        const nuevaFila = filas[0].cloneNode(true);
        tbody.appendChild(nuevaFila);
        inicializarFila(nuevaFila); 
        actualizarContador();
        notificar();
    });

    document.querySelectorAll(".objeto").forEach(inicializarFila);
    actualizarContador();
}