import { RASGOS } from "../data/rasgos.js";

/* =============================== OBTENER RASGOS =============================== */

export function obtenerInstanciasRasgos(tbody) {
    const instancias = [];
    
    tbody.querySelectorAll(".objeto").forEach((fila, i) => {
        const objNombre = fila.querySelector(".obj-nombre").value.trim() || `Objeto ${i + 1}`;
        
        fila.querySelectorAll(".obj-rasgos").forEach((select) => {
            const val = select.value;
            if (val && RASGOS[val]) {
                instancias.push({
                    key: val,
                    objNombre: objNombre,
                    selectElem: select // Pasamos la referencia del DOM para guardar datos
                });
            }
        });
    });

    return instancias;
}

/* =============================== ACTUALIZAR LISTA LATERAL =============================== */

export function actualizarRasgos(tbody, contenedor) {
    if (!tbody || !contenedor) return;

    contenedor.innerHTML = "";

    const instancias = obtenerInstanciasRasgos(tbody);

    if (!instancias.length) {
        contenedor.innerHTML = "<em>No hay rasgos activos</em>";
        return;
    }

    instancias.forEach((instancia) => {
        const rasgo = RASGOS[instancia.key];
        
        const card = document.createElement("div");
        card.className = "rasgo-card";

        // 🔥 Restaurar estado de expansión previo (si lo había)
        if (instancia.selectElem.dataset.expanded === "true") {
            card.classList.add("expanded");
        }

        // Recuperar datos guardados (si existen)
        let savedData = {};
        if (instancia.selectElem.dataset.dinamico) {
            try { savedData = JSON.parse(instancia.selectElem.dataset.dinamico); } catch(e) {}
        }

        /* ===================== CABECERA MINIMIZADA ===================== */
        const header = document.createElement("div");
        header.className = "rasgo-header";

        const tituloHtml = `<h4 style="margin: 0; color: #333; padding-right: 20px;">
            ${rasgo.nombre} 
            <span style="font-weight: normal; font-size: 0.8em; color: #777;">(${instancia.objNombre})</span>
        </h4>`;

        const resumenSpan = document.createElement("div");
        resumenSpan.className = "rasgo-resumen";

        // Función mágica que actualiza el resumen con lo que escribas
        const actualizarResumenUI = () => {
            if (rasgo.tipo === "estatico") {
                resumenSpan.innerHTML = "<em>(Rasgo Estático)</em>";
                return;
            }
            
            const partes = [];
            Object.values(savedData).forEach(val => {
                if (Array.isArray(val) && val.length > 0) partes.push(val.join(", "));
                else if (val && !Array.isArray(val)) partes.push(val);
            });

            resumenSpan.innerHTML = partes.length > 0 
                ? partes.join(" <span style='color:#ccc'>|</span> ") 
                : "<em>(Haz clic para configurar)</em>";
        };

        actualizarResumenUI(); // Llenar la primera vez
        
        header.innerHTML = tituloHtml;
        header.appendChild(resumenSpan);

        // Click para expandir/colapsar y guardar el estado
        header.addEventListener("click", () => {
            const isExpanded = card.classList.toggle("expanded");
            instancia.selectElem.dataset.expanded = isExpanded ? "true" : "false";
        });

        /* ===================== CUERPO EXPANDIDO (DETALLES) ===================== */
        const detalles = document.createElement("div");
        detalles.className = "rasgo-detalles";

        const usos = rasgo.usos
            ? `<p style="margin: 12px 0 5px 0; font-size: 0.9em; color: #666;"><strong>Usos:</strong> ${rasgo.usos}</p>`
            : `<div style="margin-top: 12px;"></div>`;

        const descripcion = `<p style="margin: 0 0 10px 0; font-size: 0.9em; color: #444;">${rasgo.descripcion.replace(/\n/g, "<br>")}</p>`;

        detalles.innerHTML = usos + descripcion;

        /* ===================== CAMPOS DINÁMICOS (PLANTILLAS) ===================== */
        if (rasgo.tipo === "plantilla" && rasgo.campos_dinamicos) {
            
            const panelInputs = document.createElement("div");
            panelInputs.className = "panel-dinamico-rasgo"; // Aprovechamos el estilo gris claro que ya tenías
            panelInputs.style.display = "block";

            Object.entries(rasgo.campos_dinamicos).forEach(([campoId, config]) => {
                const fieldDiv = document.createElement("div");
                fieldDiv.style.marginBottom = "8px";

                const lbl = document.createElement("label");
                lbl.textContent = config.label || campoId;
                lbl.style.display = "block";
                lbl.style.fontWeight = "bold";
                lbl.style.fontSize = "0.85em";
                lbl.style.color = "#333";
                lbl.style.marginBottom = "3px";
                fieldDiv.appendChild(lbl);

                // TEXTO O NÚMERO
                if (config.tipo === "texto" || config.tipo === "numero") {
                    const inp = document.createElement("input");
                    inp.type = config.tipo === "numero" ? "number" : "text";
                    inp.className = "dinamico-input";
                    inp.placeholder = config.tipo === "numero" ? "Ej: 15" : "...";
                    inp.style.width = "100%";
                    inp.style.boxSizing = "border-box";
                    
                    if (savedData[campoId]) inp.value = savedData[campoId];

                    inp.addEventListener("input", (e) => {
                        savedData[campoId] = e.target.value;
                        instancia.selectElem.dataset.dinamico = JSON.stringify(savedData);
                        actualizarResumenUI(); // Actualiza el texto en vivo
                    });
                    
                    fieldDiv.appendChild(inp);
                } 
                // SELECTOR ÚNICO
                else if (config.tipo === "select") {
                    const sel = document.createElement("select");
                    sel.className = "dinamico-select";
                    sel.style.width = "100%";
                    sel.innerHTML = `<option value="">-- Elegir --</option>`;
                    
                    config.opciones.forEach(o => {
                        const opt = document.createElement("option");
                        opt.value = o;
                        opt.textContent = o;
                        sel.appendChild(opt);
                    });

                    if (savedData[campoId]) sel.value = savedData[campoId];

                    sel.addEventListener("change", (e) => {
                        savedData[campoId] = e.target.value;
                        instancia.selectElem.dataset.dinamico = JSON.stringify(savedData);
                        actualizarResumenUI(); // Actualiza el texto en vivo
                    });
                    
                    fieldDiv.appendChild(sel);
                } 
                // LISTA DE CHECKBOXES
                else if (config.tipo === "checkbox_list") {
                    const chkContainer = document.createElement("div");
                    chkContainer.style.display = "flex";
                    chkContainer.style.flexDirection = "column";
                    chkContainer.style.gap = "4px";

                    if (!Array.isArray(savedData[campoId])) savedData[campoId] = [];

                    config.opciones.forEach(o => {
                        const lblChk = document.createElement("label");
                        lblChk.style.fontSize = "0.9em";
                        lblChk.style.display = "flex";
                        lblChk.style.alignItems = "center";
                        lblChk.style.gap = "5px";

                        const chk = document.createElement("input");
                        chk.type = "checkbox";
                        chk.value = o;
                        chk.className = "dinamico-check";
                        
                        if (savedData[campoId].includes(o)) chk.checked = true;

                        chk.addEventListener("change", (e) => {
                            if (e.target.checked) {
                                savedData[campoId].push(o);
                            } else {
                                savedData[campoId] = savedData[campoId].filter(v => v !== o);
                            }
                            instancia.selectElem.dataset.dinamico = JSON.stringify(savedData);
                            actualizarResumenUI(); // Actualiza el texto en vivo
                        });

                        lblChk.appendChild(chk);
                        lblChk.appendChild(document.createTextNode(o));
                        chkContainer.appendChild(lblChk);
                    });
                    
                    fieldDiv.appendChild(chkContainer);
                }

                panelInputs.appendChild(fieldDiv);
            });
            
            detalles.appendChild(panelInputs);
        }

        // Ensamblar ficha
        card.appendChild(header);
        card.appendChild(detalles);
        contenedor.appendChild(card);
    });
}