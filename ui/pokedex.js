// 👇 AQUÍ ESTABA EL ERROR: La ruta correcta es hacia la carpeta data 👇
import { RASGOS } from "../data/rasgos.js"; 

export function initPokedex() {
    const panelPokedex = document.getElementById("pokedexRasgos");
    const btnAbrirPokedex = document.getElementById("btnAbrirPokedex");
    const btnCerrarPokedex = document.getElementById("btnCerrarPokedex");
    const buscadorPokedex = document.getElementById("buscadorPokedex");
    const listaNombresPokedex = document.getElementById("listaNombresPokedex");
    const detallePokedex = document.getElementById("detalleRasgoPokedex");

    if (!panelPokedex) return; 

    // Abrir y cerrar el panel lateral
    btnAbrirPokedex.addEventListener("click", () => panelPokedex.classList.add("abierto"));
    btnCerrarPokedex.addEventListener("click", () => panelPokedex.classList.remove("abierto"));

    // Función para renderizar la lista
    function renderizarListaPokedex(filtro = "") {
        if (!RASGOS) return; 
        
        listaNombresPokedex.innerHTML = "";
        const textoBuscado = filtro.toLowerCase();

        // Convertir a array y ordenar alfabéticamente
        const rasgosOrdenados = Object.entries(RASGOS)
            .sort((a, b) => a[1].nombre.localeCompare(b[1].nombre, "es"));

        rasgosOrdenados.forEach(([key, rasgo]) => {
            if (rasgo.nombre.toLowerCase().includes(textoBuscado)) {
                const li = document.createElement("li");
                li.textContent = rasgo.nombre;
                
                // Al hacer clic, mostramos el detalle abajo
                li.addEventListener("click", () => mostrarDetalleRasgo(rasgo));
                listaNombresPokedex.appendChild(li);
            }
        });
    }

    // Función para inyectar la información en la zona de detalles
    function mostrarDetalleRasgo(rasgo) {
        detallePokedex.style.display = "block";
        
        let html = `<h4>${rasgo.nombre}</h4>`;
        if (rasgo.usos) html += `<p><strong>Usos:</strong> ${rasgo.usos}</p>`;
        if (rasgo.prerrequisitos) html += `<p><strong>Prerrequisitos:</strong> ${rasgo.prerrequisitos}</p>`;
        html += `<p>${rasgo.descripcion.replace(/\n/g, "<br>")}</p>`;
        
        detallePokedex.innerHTML = html;
    }

    // Escuchar cada vez que el usuario escribe en el buscador
    buscadorPokedex.addEventListener("input", (evento) => {
        renderizarListaPokedex(evento.target.value);
    });

    // Cargar la lista completa al inicio
    renderizarListaPokedex();
}