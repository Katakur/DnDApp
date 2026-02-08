alert("app.js cargado");

document.addEventListener("DOMContentLoaded", () => {

    /* =============================== CONFIGURACIÓN ================================ */
    const MAX_OBJETOS = 5;
    const btnAgregar = document.getElementById("btnAgregarObjeto");
    const tabla = document.getElementById("tablaObjetos");
    const tbody = tabla.querySelector("tbody");
    const contador = document.getElementById("contadorObjetos");
    const contenedorSinergias = document.getElementById("listaSinergias");
    const botonesRasgos = document.querySelectorAll(".btn-abrir-rasgos");

    botonesRasgos.forEach(boton => {
        boton.addEventListener("click", (event) => {
            const fila = event.target.closest("tr");  // Encontramos la fila del objeto correspondiente
            abrirModalRasgos(fila);  // Llamamos a la función para abrir el modal
        });
    });

    /* =============================== CATEGORÍAS ================================ */
    const CATEGORIAS = {
        cuerpo: {
            nombre: "Cuerpo",
            beneficios: {
                2: "+1 Fuerza o Constitución (Por Objeto)",
                3: "Competencia en Tiradas de Salvación de Fuerza o Constitución"
            }
        },
        mente: {
            nombre: "Mente",
            beneficios: {
                2: "+1 Inteligencia o Sabiduría (Por Objeto)",
                3: "Competencia en Tiradas de Salvación de Inteligencia o Sabiduría"
            }
        },
        alma: {
            nombre: "Alma",
            beneficios: {
                2: "+1 Destreza o Carisma (Por Objeto)",
                3: "Competencia en Tiradas de Salvación de Destreza o Carisma"
            }
        },
        abjurador: {
            nombre: "Abjurador",
            beneficios: {
                2: "+1 CD de Conjuro (Por Objeto)",
                3: "La primera vez por Descanso Largo que lances un Conjuro de Abjuración, este no consume ninguna Ranura de Hechizo"
            }
        },
        evocador: {
            nombre: "Evocador",
            beneficios: {
                2: "+1 Tirada de Ataque de Conjuro (Por Objeto)",
                3: "La primera vez por Descanso Largo que lanzas un Conjuro de Evocación, el daño que realiza el Conjuro se considera un nivel superior. (Hasta tu máximo espacio de Conjuro)"
            }
        },
        controlador: {
            nombre: "Controlador",
            beneficios: {
                2: "Obtienes inmunidad al Encantado y Ventaja para evitar Paralizado",
                3: "Las Tiradas de Salvación contra tus Conjuros se realizan con Desventaja"
            }
        },
        purificador: {
            nombre: "Purificador",
            beneficios: {
                2: "Obtienes inmunidad al estado Envenenado, Ensordecido y Cegado",
                3: "Tus puntos de Golpe aumentan en 10 (por Objeto)"
            }
        },
        conjurador: {
            nombre: "Conjurador",
            beneficios: {
                2: "Una vez por Amanecer puedes conjurar un Objeto de Almacén de Items",
                3: "Una vez por Amanecer puedes Conjurar un Objeto Consumible"
            }
        },
        trasmutador: {
            nombre: "Trasmutador",
            beneficios: {
                2: "Tus trucos de trasmutación tienen el doble de alcance y duración de efecto",
                3: "Cuando realizas daño con un Conjuro de nivel 1 o superior, puedes cambiar temporalmente el daño al de otro Conjuro de mismo nivel."
            }
        },
        invocador: {
            nombre: "Invocador",
            beneficios: {
                2: "Compartes tus sentidos con tus invocaciones",
                3: "Las invocaciones que usan un Espacio de Conjuro tienen un aumento de puntos de golpes en 10 (Por Objeto)"
            }
        },
        vidente: {
            nombre: "Vidente",
            beneficios: {
                2: "Obtienes Visión Verdadera de 60 pies",
                3: "Obtienes inmunidad al Cegado y puedes como Acción, ver a través de una persona voluntaria y sentir sus sentidos, tu cuerpo queda vulnerable y como Acción adicional puedes volver a tus sentidos"
            }
        },
        traslocador: {
            nombre: "Traslocador",
            beneficios: {
                2: "Tus pies aumentan +5 (Por Objeto)",
                3: "No pueden realizarte golpes de oportunidad durante tu movimiento"
            }
        },
        marcial: {
            nombre: "Marcial",
            beneficios: {
                2: "+1 en tus Tiradas de Ataque y Daño con armas (Por Objeto)",
                3: "Tus ataques con armas consiguen Crítico con 18-20"
            }
        },
        defensivo: {
            nombre: "Defensivo",
            beneficios: {
                2: "CA +1 (Por Objeto)",
                3: "Cuando recibes Daño Contundente, Perforante o Cortante, el daño se reduce en un d12"
            }
        },
        natural: {
            nombre: "Natural",
            beneficios: {
                2: "Elige un tipo de daño entre Fuego, Frío, Trueno, Relámpago o Ácido. Cuanto tiras daño del tipo elegido, cualquier 1 en el dado de daño, puede ser tratado como un 2",
                3: "Obtienes resistencia al tipo de daño seleccionado"
            }
        },
        venenoso: {
            nombre: "Venenoso",
            beneficios: {
                2: "Obtienes Resistencia al Veneno y Resistencia contra Estado Envenenado",
                3: "Obtienes inmunidad al Veneno y estado Envenenado"
            }
        },
        magico: {
            nombre: "Mágico",
            beneficios: {
                2: "Las Tiradas de Salvación para mantener la Concentración son con Ventaja",
                3: "Ganas Resistencia al daño producido por Conjuros y otros medios mágicos"
            }
        },
        psionico: {
            nombre: "Psiónico",
            beneficios: {
                2: "Inmunidad para que te lean la mente",
                3: "las Tiradas de Salvación Inteligencia, Sabiduría y Carisma se realizan con Ventaja"
            }
        },
        espiritual: {
            nombre: "Espiritual",
            beneficios: {
                2: "Elige una Resistencia entre daño Necrótico o Radiante",
                3: "Dependiendo de la Resistencia elegida obtienes un Rasgo. Necrótico: Visión en la oscuridad verdadera 60p | Radiante: Obtienes inmunidad al Cegado y Ensordecido"
            }
        },
        tecnico: {
            nombre: "Técnico",
            beneficios: {
                2: "Tus Tiradas para mantener Concentración CD 10, se consideran un éxito automático",
                3: "Puedes reforzar una de tus infusiones que requieran sintonización, aplicando un modulo de mejora adicional"
            }
        }
    };

    /* =============================== UTILIDADES ================================ */
    function actualizarContador() {
        const cantidad = tbody.querySelectorAll(".objeto").length;
        contador.textContent = `Objetos: ${cantidad} / ${MAX_OBJETOS}`;
    }

    function llenarSelectCategorias(select) {
        if (select.options.length > 1) return;
        for (const key in CATEGORIAS) {
            const opt = document.createElement("option");
            opt.value = key;
            opt.textContent = CATEGORIAS[key].nombre;
            select.appendChild(opt);
        }
    }

    function llenarSelectRasgos(select) {
        if (!window.RASGOS) return;
        select.innerHTML = `<option value="">-- Seleccionar Rasgo --</option>`;
        for (const key in RASGOS) {
            const opt = document.createElement("option");
            opt.value = key;
            opt.textContent = RASGOS[key].nombre;
            select.appendChild(opt);
        }
    }

    function inicializarFila(fila) {
        console.log("inicializarFila llamada", fila);

        const cat1 = fila.querySelector(".obj-cat1");
        const cat2 = fila.querySelector(".obj-cat2");
        const contenedorRasgos = fila.querySelector(".obj-rasgos-container");

        // Llenamos los selects con sus opciones
        llenarSelectCategorias(cat1);
        llenarSelectCategorias(cat2);

        // Función para validar que no se repitan categorías
        function validarCategorias() {
            if (cat1.value && cat1.value === cat2.value) {
                cat2.value = "";
            }
            actualizarSinergias();
        }

        // Listeners de las categorías
        cat1.addEventListener("change", validarCategorias);
        cat2.addEventListener("change", validarCategorias);

        // Función para agregar listener a cualquier select de rasgo
        function agregarListenerSelectRasgo(select) {
            select.addEventListener("change", () => {
                // Recorremos todos los selects de rasgo de la fila
                const todosSelects = contenedorRasgos.querySelectorAll(".obj-rasgos");
                const valores = [];
                todosSelects.forEach(s => {
                    if (s.value) valores.push(s.value);
                });

                // Guardamos temporalmente estos valores en la fila
                fila.dataset.rasgosSeleccionados = JSON.stringify(valores);

                // Actualizamos la lista de rasgos debajo de la tabla
                actualizarRasgos(fila);
            });
        }

        // Inicializamos el primer select de rasgo existente
        const primerSelect = contenedorRasgos.querySelector(".obj-rasgos");
        llenarSelectRasgos(primerSelect);
        agregarListenerSelectRasgo(primerSelect);

        // Listener del botón de "Agregar Rasgo"
        const btnAgregarRasgo = contenedorRasgos.querySelector(".btn-agregar-rasgo");
        btnAgregarRasgo.addEventListener("click", () => {
            const nuevoSelect = document.createElement("select");
            nuevoSelect.classList.add("obj-rasgos");
            llenarSelectRasgos(nuevoSelect); // llenamos con todos los rasgos disponibles
            contenedorRasgos.insertBefore(nuevoSelect, btnAgregarRasgo); // insertamos antes del botón
            agregarListenerSelectRasgo(nuevoSelect);
        });
    }


    /* =============================== RASGOS OBJETOS ================================ */

    function abrirModalRasgos(fila) {
        // Aquí abres tu modal, tal vez actualizando los valores de rasgos existentes en la fila
        const modal = document.getElementById("modalRasgos");  // Asegúrate de tener un modal en tu HTML
        modal.style.display = "block";  // Muestra el modal

        // Opcional: para poder cerrar el modal, puedes agregar un botón de cerrar
        const btnCerrarModal = modal.querySelector(".cerrar");
        btnCerrarModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Aquí agregas la lógica para llenar el modal con los rasgos, según los rasgos del objeto.
        llenarModalConRasgos(fila);
    }

    function llenarModalConRasgos(fila) {
        const rasgosSeleccionados = fila.querySelector(".obj-rasgos").value;
        const modalBody = document.getElementById("modalRasgosBody");

        // Ejemplo de llenado del modal (puedes adaptarlo según cómo manejas los rasgos)
        modalBody.innerHTML = ""; // Limpiamos el contenido del modal

        for (const key in window.RASGOS) {
            const rasgo = window.RASGOS[key];
            const label = document.createElement("label");
            label.innerHTML = `<input type="checkbox" value="${key}" ${rasgosSeleccionados.includes(key) ? "checked" : ""}> ${rasgo.nombre}`;
            modalBody.appendChild(label);
            modalBody.appendChild(document.createElement("br"));
        }
    }

    function obtenerRasgosSeleccionados() {
        const rasgos = [];

        document.querySelectorAll(".objeto").forEach(fila => {
            fila.querySelectorAll(".obj-rasgos").forEach(select => {
                if (select && select.value) {
                    rasgos.push(select.value);
                }
            });
        });

        return rasgos;
    }


    function actualizarRasgos(fila) {
        const contenedor = document.getElementById("listaRasgos");
        contenedor.innerHTML = ""; // Limpiamos la lista de rasgos

        const rasgosSeleccionados = obtenerRasgosSeleccionados(fila); // Obtenemos los rasgos seleccionados

        if (rasgosSeleccionados.length === 0) {
            contenedor.innerHTML = "<em>No hay rasgos activos</em>";
            return;
        }

        // Revisamos cada rasgo seleccionado
        const rasgosYaAñadidos = new Set(); // Para evitar añadir rasgos repetidos
        rasgosSeleccionados.forEach(key => {
            if (!rasgosYaAñadidos.has(key)) {
                const rasgo = RASGOS[key];
                if (!rasgo) return;

                // Marcamos este rasgo como añadido
                rasgosYaAñadidos.add(key);

                const bloque = document.createElement("div");
                bloque.classList.add("rasgo");

                let encabezado = `<strong>${rasgo.nombre}`;
                if (rasgo.usos) encabezado += ` (${rasgo.usos})`;
                encabezado += `</strong>`;

                bloque.innerHTML = `
                ${encabezado}
                ${rasgo.prerrequisitos ? `<p><em>Prerrequisitos:</em> ${rasgo.prerrequisitos}</p>` : ""}
                <p>${rasgo.descripcion.replace(/\n/g, "<br>")}</p>
            `;

                // Opciones como checkboxes
                if (Array.isArray(rasgo.opciones)) {
                    const lista = document.createElement("div");
                    lista.innerHTML = "<em>Opciones:</em><br>";
                    rasgo.opciones.forEach((op, index) => {
                        const id = `checkbox-${key}-${index}`;
                        const checkbox = document.createElement("input");
                        checkbox.type = "checkbox";
                        checkbox.id = id;
                        checkbox.checked = op.activo || false;
                        checkbox.addEventListener("change", (e) => {
                            op.activo = e.target.checked;
                            console.log(`Opción ${op.nombre} de ${rasgo.nombre} activada:`, op.activo);
                        });
                        const label = document.createElement("label");
                        label.htmlFor = id;
                        label.textContent = `${op.nombre}${op.costo ? ` (${op.costo})` : ""}`;
                        lista.appendChild(checkbox);
                        lista.appendChild(label);
                        lista.appendChild(document.createElement("br"));
                    });
                    bloque.appendChild(lista);
                }

                contenedor.appendChild(bloque);
            }
        });
    }


    /* =============================== SINERGIAS ================================ */
    function obtenerConteoCategorias() {
        const conteo = {};
        tbody.querySelectorAll(".objeto").forEach(fila => {
            const c1 = fila.querySelector(".obj-cat1").value;
            const c2 = fila.querySelector(".obj-cat2").value;
            if (c1) conteo[c1] = (conteo[c1] || 0) + 1;
            if (c2) conteo[c2] = (conteo[c2] || 0) + 1;
        });
        return conteo;
    }

    function actualizarSinergias() {
        contenedorSinergias.innerHTML = "";
        const conteo = obtenerConteoCategorias();
        let hay = false;
        for (const key in conteo) {
            const categoria = CATEGORIAS[key];
            const cantidad = conteo[key];
            if (!categoria) continue;
            const beneficios = [];
            if (cantidad >= 2 && categoria.beneficios[2]) beneficios.push(categoria.beneficios[2]);
            if (cantidad >= 3 && categoria.beneficios[3]) beneficios.push(categoria.beneficios[3]);
            if (beneficios.length) {
                hay = true;
                const div = document.createElement("div");
                div.innerHTML = `<strong>${categoria.nombre}</strong> <ul>${beneficios.map(b => `<li>${b}</li>`).join("")}</ul>`;
                contenedorSinergias.appendChild(div);
            }
        }
        if (!hay) {
            contenedorSinergias.innerHTML = "<em>No hay sinergias activas</em>";
        }
    }

    /* =============================== EVENTOS ================================ */
    btnAgregar.addEventListener("click", () => {
        const filas = tbody.querySelectorAll(".objeto");
        if (filas.length >= MAX_OBJETOS) {
            alert("Máximo 5 objetos.");
            return;
        }

        // Clonamos la primera fila
        const nueva = filas[0].cloneNode(true);

        // Limpiamos todos los inputs
        nueva.querySelectorAll("input").forEach(i => i.value = "");

        // Limpiamos todos los selects de categorías
        nueva.querySelectorAll("select.obj-cat1, select.obj-cat2").forEach(s => s.value = "");

        // Limpiamos los selects de rasgo y dejamos solo uno
        const contenedorRasgos = nueva.querySelector(".obj-rasgos-container");
        contenedorRasgos.querySelectorAll(".obj-rasgos").forEach((s, index) => {
            if (index === 0) {
                s.value = ""; // el primero queda vacío
            } else {
                s.remove(); // eliminamos los demás
            }
        });

        tbody.appendChild(nueva);
        inicializarFila(nueva);
        actualizarContador();
        actualizarSinergias();
    });


    /* =============================== INIT ================================ */
    document.querySelectorAll(".objeto").forEach(inicializarFila);
    actualizarContador();
    actualizarSinergias();
});
