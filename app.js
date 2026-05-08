
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
                3: "Las Tiradas de Salvación Inteligencia, Sabiduría y Carisma se realizan con Ventaja"
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
                3: "Puedes reforzar una de tus infusiones que requieran sintonización, aplicando un módulo de mejora adicional"
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

        // Convertimos a array y ordenamos por nombre
        const rasgosOrdenados = Object.entries(RASGOS)
            .sort((a, b) => a[1].nombre.localeCompare(b[1].nombre, "es"));

        // Creamos las opciones ya ordenadas
        rasgosOrdenados.forEach(([key, rasgo]) => {
            const opt = document.createElement("option");
            opt.value = key;
            opt.textContent = rasgo.nombre;
            select.appendChild(opt);
        });
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
        const modal = document.getElementById("modalRasgos");
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
        modalBody.innerHTML = "";  // Limpiamos el contenido del modal

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
        contenedor.innerHTML = "";  // Limpiamos la lista de rasgos

        const rasgosSeleccionados = obtenerRasgosSeleccionados(fila);  // Obtenemos los rasgos seleccionados

        if (rasgosSeleccionados.length === 0) {
            contenedor.innerHTML = "<em>No hay rasgos activos</em>";
            return;
        }

        const rasgosYaAñadidos = new Set();  // Para evitar añadir rasgos repetidos
        rasgosSeleccionados.forEach(key => {
            if (!rasgosYaAñadidos.has(key)) {
                const rasgo = RASGOS[key];
                if (!rasgo) return;

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

    /* =============================== EXPORTAR A TXT ================================ */
    const btnDescargarTxt = document.getElementById("btnDescargarTxt");

    if (btnDescargarTxt) {
        btnDescargarTxt.addEventListener("click", () => {
            // 1. Obtener datos del jugador
            const nombreJugador = document.getElementById("nombreJugador").value.trim() || "Desconocido";
            const nombrePersonaje = document.getElementById("nombrePersonaje").value.trim() || "Sin_Nombre";

            // 2. Empezar a crear el contenido del texto
            let contenidoTxt = `=================================\n`;
            contenidoTxt += `      INVENTARIO DE CAMPAÑA      \n`;
            contenidoTxt += `=================================\n\n`;
            contenidoTxt += `Jugador:   ${nombreJugador}\n`;
            contenidoTxt += `Personaje: ${nombrePersonaje}\n\n`;
            contenidoTxt += `---------------------------------\n`;
            contenidoTxt += `            OBJETOS              \n`;
            contenidoTxt += `---------------------------------\n`;

            // 3. Recorrer cada fila de la tabla de objetos
            const filas = tbody.querySelectorAll(".objeto");
            filas.forEach((fila, index) => {
                const nombreObj = fila.querySelector(".obj-nombre").value.trim() || "Objeto sin nombre";
                
                const selectOrigen = fila.querySelector(".obj-origen");
                const origen = selectOrigen.options[selectOrigen.selectedIndex]?.text || "Ninguno";

                const selectCat1 = fila.querySelector(".obj-cat1");
                const cat1 = selectCat1.options[selectCat1.selectedIndex]?.text || "Ninguna";

                const selectCat2 = fila.querySelector(".obj-cat2");
                const cat2 = selectCat2.options[selectCat2.selectedIndex]?.text || "Ninguna";

                // Capturar todos los rasgos de este objeto
                const selectsRasgos = fila.querySelectorAll(".obj-rasgos");
                const rasgos = [];
                selectsRasgos.forEach(select => {
                    if (select.value) {
                        rasgos.push(select.options[select.selectedIndex].text);
                    }
                });
                const rasgosTexto = rasgos.length > 0 ? rasgos.join(", ") : "Ninguno";

                // Agregar los datos del objeto al texto final
                contenidoTxt += `\n[ Objeto ${index + 1} ]: ${nombreObj}\n`;
                contenidoTxt += `  - Origen:      ${origen}\n`;
                contenidoTxt += `  - Categoría 1: ${cat1}\n`;
                contenidoTxt += `  - Categoría 2: ${cat2}\n`;
                contenidoTxt += `  - Rasgos:      ${rasgosTexto}\n`;
            });

            // 4. Crear el archivo (Blob) y forzar la descarga
            const blob = new Blob([contenidoTxt], { type: "text/plain;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            
            const enlaceDescarga = document.createElement("a");
            enlaceDescarga.href = url;
            // El nombre del archivo se adaptará al nombre del personaje
            enlaceDescarga.download = `Inventario_${nombrePersonaje.replace(/\s+/g, '_')}.txt`;
            
            document.body.appendChild(enlaceDescarga);
            enlaceDescarga.click(); // Simulamos un clic
            
            // Limpieza
            document.body.removeChild(enlaceDescarga);
            URL.revokeObjectURL(url);
        });
    }

    /* =============================== IMPORTAR DESDE TXT ================================ */
    const inputCargarTxt = document.getElementById("inputCargarTxt");

    if (inputCargarTxt) {
        inputCargarTxt.addEventListener("change", (evento) => {
            const archivo = evento.target.files[0];
            if (!archivo) return;

            const lector = new FileReader();
            lector.onload = (e) => {
                const contenido = e.target.result;
                procesarArchivoTxt(contenido);
            };
            lector.readAsText(archivo);
            
            // Limpiamos el input para permitir cargar el mismo archivo dos veces seguidas si el usuario quiere
            inputCargarTxt.value = ""; 
        });
    }

    // Función auxiliar para seleccionar opciones por su Texto visible y no por su 'value' oculto
    function seleccionarOpcionPorTexto(selectElement, textoDeseado) {
        if (!textoDeseado || textoDeseado === "Ninguno" || textoDeseado === "Ninguna") {
            selectElement.value = "";
            selectElement.dispatchEvent(new Event("change"));
            return;
        }

        for (let i = 0; i < selectElement.options.length; i++) {
            if (selectElement.options[i].text === textoDeseado) {
                selectElement.selectedIndex = i;
                selectElement.dispatchEvent(new Event("change")); // Forzamos el evento para actualizar Sinergias
                return;
            }
        }
    }

    function procesarArchivoTxt(texto) {
        const lineas = texto.split('\n');
        
        let jugador = "Desconocido";
        let personaje = "Sin_Nombre";
        const objetosData = [];
        let objetoActual = null;

        // 1. Extraer los datos leyendo el .txt línea por línea
        lineas.forEach(linea => {
            if (linea.startsWith("Jugador:   ")) jugador = linea.replace("Jugador:   ", "").trim();
            if (linea.startsWith("Personaje: ")) personaje = linea.replace("Personaje: ", "").trim();

            const matchObjeto = linea.match(/\[ Objeto \d+ \]: (.*)/);
            if (matchObjeto) {
                objetoActual = { nombre: matchObjeto[1].trim(), rasgos: [] };
                objetosData.push(objetoActual);
            } else if (objetoActual) {
                if (linea.startsWith("  - Origen:      ")) objetoActual.origen = linea.replace("  - Origen:      ", "").trim();
                if (linea.startsWith("  - Categoría 1: ")) objetoActual.cat1 = linea.replace("  - Categoría 1: ", "").trim();
                if (linea.startsWith("  - Categoría 2: ")) objetoActual.cat2 = linea.replace("  - Categoría 2: ", "").trim();
                if (linea.startsWith("  - Rasgos:      ")) {
                    const rasgosStr = linea.replace("  - Rasgos:      ", "").trim();
                    if (rasgosStr !== "Ninguno") {
                        objetoActual.rasgos = rasgosStr.split(",").map(r => r.trim());
                    }
                }
            }
        });

        // 2. Restaurar Jugador y Personaje
        document.getElementById("nombreJugador").value = (jugador === "Desconocido") ? "" : jugador;
        document.getElementById("nombrePersonaje").value = (personaje === "Sin_Nombre") ? "" : personaje;

        // 3. Restaurar Objetos en la interfaz
        // Limpiamos la tabla dejando solo una fila
        const filasActuales = tbody.querySelectorAll(".objeto");
        for (let i = 1; i < filasActuales.length; i++) {
            filasActuales[i].remove();
        }
        
        // Vaciamos la primera fila por completo
        const primeraFila = tbody.querySelector(".objeto");
        primeraFila.querySelector(".obj-nombre").value = "";
        primeraFila.querySelectorAll("select").forEach(s => { 
            s.value = ""; 
            s.dispatchEvent(new Event("change"));
        });
        
        // Quitar todos los desplegables de Rasgos extra que se hayan sumado, excepto el primero
        const selectsRasgosPrimera = primeraFila.querySelectorAll(".obj-rasgos");
        for (let i = 1; i < selectsRasgosPrimera.length; i++) {
            selectsRasgosPrimera[i].remove();
        }

        // Si el archivo no tenía objetos (raro, pero posible), terminamos aquí
        if (objetosData.length === 0) {
            actualizarContador();
            actualizarSinergias();
            return;
        }

        // 4. Crear tantas filas como objetos hay en el TXT (usando el botón oculto)
        for (let i = 1; i < objetosData.length; i++) {
            btnAgregar.click(); 
        }

        // 5. Llenar cada fila con los datos extraídos
        const nuevasFilas = tbody.querySelectorAll(".objeto");
        objetosData.forEach((objData, index) => {
            const fila = nuevasFilas[index];

            fila.querySelector(".obj-nombre").value = (objData.nombre === "Objeto sin nombre") ? "" : objData.nombre;
            
            seleccionarOpcionPorTexto(fila.querySelector(".obj-origen"), objData.origen);
            seleccionarOpcionPorTexto(fila.querySelector(".obj-cat1"), objData.cat1);
            seleccionarOpcionPorTexto(fila.querySelector(".obj-cat2"), objData.cat2);

            // Cargar los rasgos y generar los desplegables extra si son necesarios
            if (objData.rasgos && objData.rasgos.length > 0) {
                const primerSelectRasgo = fila.querySelector(".obj-rasgos");
                seleccionarOpcionPorTexto(primerSelectRasgo, objData.rasgos[0]);

                const btnSumarRasgo = fila.querySelector(".btn-agregar-rasgo");
                for (let i = 1; i < objData.rasgos.length; i++) {
                    btnSumarRasgo.click(); // Esto crea un nuevo desplegable vacío automáticamente
                    const todosLosSelects = fila.querySelectorAll(".obj-rasgos");
                    const ultimoSelect = todosLosSelects[todosLosSelects.length - 1]; // Tomamos el que se acaba de crear
                    seleccionarOpcionPorTexto(ultimoSelect, objData.rasgos[i]);
                }
            }
        });

        actualizarContador();
        actualizarSinergias();
        alert("¡Inventario cargado exitosamente! 🐉");
    }
}); 
