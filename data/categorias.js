/* =============================== CATEGORÍAS ================================ */
    
export const CATEGORIAS = {
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
        //// CATEGORÍAS DLC ////
        tecnico: {
            nombre: "Técnico",
            beneficios: {
                1: "Puedes crear Paquete(s) de Sintonización (Por Objeto Técnico)",
                2: "Tus Tiradas para mantener Concentración CD 10, se consideran un éxito automático",
                3: "A cada Objeto con Técnico le puedes añadir un módulo de mejora"
            }
        },
        marca_sangre: {
            nombre: "Marca de Sangre",
            beneficios: {
                1: "Puedes gastar dados de golpe para recuperar cargas de una Marca de Sangre",
                2: "Los usos de Rasgos entre Marca de Sangre se unen en una lista de cargas compartida",
                3: "A cada Marca de Sangre le puedes añadir un rasgo adicional (Resistencia al Daño, Inmunidad a Estado o Mejora sobrenatural)"
            }
        },
        escriba_arcana: {
            nombre: "Escriba Arcana",
            beneficios: {
                1: "Reduce el tiempo de copiar un Conjuro en 1 hora (Por Escriba Arcana) hasta un mínimo de 1 hora",
                2: "Si gastas una Ranura de Hechizo o usas un pergamino, lanzas un d20, en un 20, restauras un Espacio de Conjuro (Hasta un nivel de conjuro igual a la cantidad de Escriba Arcana)",
                3: "A cada Escriba Arcana le puedes añadir un Conjuro innato de tu lista conocida (Hasta un nivel de conjuro igual a la cantidad de Escriba Arcana)"
            }
        },
        compuesto_Q: {
            nombre: "Compuesto Q",
            beneficios: {
                1: "Tu categoría incrementa en una talla (Por cada Compuesto Q)",
                2: "La duración de los compuestos Q se suman. Al terminar el efecto, terminas cualquier condición sobre ti mismo, pero ganas un nivel de agotamiento",
                3: "A cada compuesto Q le añades Máxima Habilidad (a elección)"
            }
        }
    };