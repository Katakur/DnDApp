/* ========================================================================
   =============================== RASGOS =================================
   ======================================================================== */

export const RASGOS = {
    // --- PLANTILLAS DINÁMICAS (PERSONALIZABLES) ---
    magia_prestada: {
        nombre: "Magia Prestada",
        tipo: "plantilla",
        usos: null,
        descripcion: "Puedes lanzar cualquier truco de la clase de magia del objeto, pero antes de lanzar cualquier truco requiere que el portador realice una prueba de Inteligencia (Arcana). La prueba es CD 10, si la supera, lanza el conjuro usando tus modificadores de inteligencia, en caso contrario, no surte efecto y pierde el tiempo requerido del truco. (Acción, acción adicional, etc)",
        campos_dinamicos: {
            clases_permitidas: {
                tipo: "checkbox_list",
                label: "Lista de Clases",
                opciones: ["Mago", "Hechicero", "Brujo", "Druida", "Clérigo", "Bardo", "Artificiero"]
            }
        }
    },
    aprendizaje_heredado: {
        nombre: "Aprendizaje heredado",
        tipo: "plantilla",
        usos: null,
        descripcion: "Obtienes un truco y una lista de conjuros ampliados cuando aprendes un conjuro. El número de trucos y el nivel máximo de conjuro al que puedes acceder escala según la Puntuación de Habilidad de Lanzamiento de Conjuros de la clase definida por el objeto.\n3 a 7 (1 Truco), 8 a 11 (2 Trucos, Conjuros de Nivel 1), 12 a 15 (3 Trucos, Conjuros de Nivel 2), 16+ (4 Trucos, Conjuros de Nivel 3)",
        campos_dinamicos: {
            clase_definida: {
                tipo: "checkbox_list",
                label: "Clase",
                opciones: ["Mago", "Hechicero", "Clérigo", "Druida", "Bardo", "Brujo"]
            }
        }
    },
    estudio_arcano: {
        nombre: "Estudio arcano",
        tipo: "plantilla",
        usos: null,
        descripcion: "Obtienes un truco y hasta 6 conjuros preparados de la escuela de mágia definida por el objeto.",
        campos_dinamicos: {
            escuela_magia: {
                tipo: "checkbox_list",
                label: "Escuela de Magia",
                opciones: ["Abjuración", "Adivinación", "Conjuración", "Encantamiento", "Evocación", "Ilusión", "Nigromancia", "Trasmutación"]
            }
        }
    },
    esencia_primordial: {
        nombre: "Esencia primordial",
        tipo: "plantilla",
        usos: null,
        descripcion: "Obtienes un truco y una lista de conjuros ampliados cuando aprendes un conjuro basado en el tipo de daño definida por el objeto.",
        campos_dinamicos: {
            tipos_daño: {
                tipo: "checkbox_list",
                label: "Tipos de daño",
                opciones: ["Acido", "Frío", "Fuego", "Fuerza", "Relámpago", "Necrótico", "Veneno", "Psiquico", "Radiante", "Trueno"]
            }
        }
    },
    resistencia_al_danno: {
        nombre: "Resistencia al Daño",
        tipo: "plantilla",
        usos: null,
        descripcion: "Obtienes una resistencia a un tipo de daño de la lista (Según el objeto, una lista d10 aleatorio o a elección)",
        campos_dinamicos: {
            tipos_daño: {
                tipo: "checkbox_list",
                label: "Tipos de daño",
                opciones: ["Contundente", "Perforante", "Cortante", "Acido", "Frío", "Fuego", "Fuerza", "Relámpago", "Necrótico", "Veneno", "Psiquico", "Radiante", "Trueno"]
            }
        }
    },
    resistencia_maldita: {
        nombre: "Resistencia maldita",
        tipo: "plantilla",
        usos: null,
        descripcion: "Obtienes resistencia entre Contundente, Perforante o Cortante, las antes no elegidas son vulnerabilidades",
        campos_dinamicos: {
            lista_resistencias: {
                tipo: "checkbox_list",
                label: "Lista de Resistencias",
                opciones: [
                    "Resistencia al Contundente, Vulnerabilidad al Perforante y Cortante",
                    "Resistencia al Perforante, Vulnerabilidad al Contundente y Cortante",
                    "Resistencia al Cortante, Vulnerabilidad al Perforante y Contundente"
                ]
            }
        }
    },
    inmunidad_al_estado: {
        nombre: "Inmunidad a estado",
        tipo: "plantilla",
        usos: null,
        descripcion: "Obtienes una inmunidad a un estado de la lista (Según el objeto, una lista d10 aleatorio o a elección)",
        campos_dinamicos: {
            lista_inmunidad: {
                tipo: "checkbox_list",
                label: "Lista de inmunidad",
                opciones: ["Asustado", "Agarrado", "Apresado", "Encantado", "Derribado", "Ensordecido", "Cegado", "Envenenado", "Petrificado", "Paralizado", "Dormido", "Agotado"]
            }
        }
    },
    resistencia_dragon: {
        nombre: "Resistencia Dragón",
        tipo: "plantilla",
        usos: null,
        descripcion: "Resistencia a un tipo de daño dependiendo del color del dragón",
        campos_dinamicos: {
            lista_estadisticas: {
                tipo: "checkbox_list",
                label: "Lista de Estadísticas",
                opciones: ["Negro o Cobre (Acido)", "Azul o Bronce (Relámpago)", "Blanco o Plata (Frío)", "Rojo, Oro o Latón (Fuego)", "Verde (Veneno)"]
            }
        }
    },
    escama_dragon: {
        nombre: "Escama de dragón",
        tipo: "plantilla",
        usos: null,
        descripcion: "Tus tiradas de Ataque con Arma a distancia realizan un d6 de daño adicional, el tipo de daño depene tipo de dragón.",
        campos_dinamicos: {
            lista_estadisticas: {
                tipo: "checkbox_list",
                label: "Lista de Estadísticas",
                opciones: ["Negro o Cobre (Acido)", "Azul o Bronce (Relámpago)", "Blanco o Plata (Frío)", "Rojo, Oro o Latón (Fuego)", "Verde (Veneno)"]
            }
        }
    },
    refuerzo: {
        nombre: "Refuerzo",
        tipo: "plantilla",
        usos: null,
        descripcion: "Obtienes un bonificador de +1 a las Tiradas de Salvación especificado en el objeto",
        campos_dinamicos: {
            lista_estadisticas: {
                tipo: "checkbox_list",
                label: "Lista de Estadísticas",
                opciones: ["Fuerza", "Destreza", "Constitución", "Inteligencia", "Sabiduría", "Carisma"]
            }
        }
    },
    fuerza_suprema: {
        nombre: "Fuerza Suprema",
        tipo: "plantilla",
        usos: null,
        descripcion: "Tu puntuación de Fuerza cambia (lo determina el objeto). No surte efecto si tienes misma cantidad o más",
        campos_dinamicos: {
            puntuacion_fuerza: {
                tipo: "select",
                label: "Puntuación de Fuerza",
                opciones: ["21", "23", "25", "27"]
            }
        }
    },
    invocacion_elemental: {
        nombre: "Invocación Elemental",
        tipo: "plantilla",
        usos: null,
        descripcion: "Como acción, puedes gastar cargas para invocar Mefits (1 carga) o Elemental (3 cargas) del tipo determinado por el Objeto, esta invocación dura por 1 minuto, terminado el tiempo, se desvanecen en Magia. La hoja de los Elementales es otorgada por el GM.",
        campos_dinamicos: {
            lista_invocacion: {
                tipo: "checkbox_list",
                label: "Lista de Invocación elemental",
                opciones: [
                    "Aire: Mephit de vapor y Elemental de Aire",
                    "Agua: Mephit de Hielo y Elemental de Agua",
                    "Fuego: Mephit de Fuego y Elemental de Fuego",
                    "Tierra: Mephit de Polvo y Elemental de Tierra"
                ]
            }
        }
    },
    invocacion_celestial: {
        nombre: "Llamada del héroe",
        tipo: "plantilla",
        usos: "1 carga/Amanecer",
        descripcion: "Como acción, puedes gastar una carga para invocar a un soldado del Valhalla definido por el objeto, dura hasta que pierda todos sus puntos de golpe o se ponga el sol, sin dejar rastro. La hoja del Héroe es otorgada por el GM.",
        campos_dinamicos: {
            lista_invocacion: {
                tipo: "checkbox_list",
                label: "Lista de Invocación heróica",
                opciones: ["Caballero"]
            }
        }
    },
    invocacion_infernal: {
        nombre: "Invocación Infernal",
        tipo: "plantilla",
        usos: "3 cargas/d3 Amanecer",
        descripcion: "Realizas una invocación infernal definida por el rol del objeto. Tras invocar un demonio, se gasta una carga. Hasta que no pierda todos sus puntos de golpe, peleará atacando al objetivo que gatilló la invocación, si la creatura o el Objetivo cae a 0 puntos de golpe, la invocación desaparece sin dejar rastro. Si recibe daño de otra creatura, esta se vuelve el nuevo Objetivo. La hoja del Demonio es otorgada por el GM.",
        campos_dinamicos: {
            lista_invocacion: {
                tipo: "checkbox_list",
                label: "Lista de Invocación infernal",
                opciones: [
                    "Ataque: Tras realizas daño puedes invocar un Sangrón",
                    "Defensa: Tras recibir daño puedes invocar un Castrón"
                ]
            }
        }
    },
    extremofilo: {
        nombre: "Extremófilo",
        tipo: "plantilla",
        usos: null,
        descripcion: "Obtienes resistencia a las temperaturas extremas climáticas, y el tipo de daño relacionado.",
        campos_dinamicos: {
            temperaturas: {
                tipo: "select",
                label: "Temperaturas",
                opciones: ["Calor (Fuego)", "Frío (Frío)"]
            }
        }
    },
    polimorfia_mejorada: {
        nombre: "Polimorfia+",
        tipo: "plantilla",
        usos: null,
        descripcion: "Esta versión de Polimorfia, mantienes tu Inteligencia, Sabiduría y Carisma. Puedes lanzar Conjuros en forma animal y obtienes resistencia a todo tipo de daño mientras tengas esta forma. Las límitaciones para el tipo de animal son definidas por el objeto.",
        campos_dinamicos: {
            tipo_animal: {
                tipo: "texto",
                label: "Tipo de animal"
            }
        }
    },
    conjuro_almacenado: {
        nombre: "Conjuro Almacenado",
        tipo: "plantilla",
        usos: "1 Carga cada Conjuro/Amanecer",
        descripcion: "Un objeto con un Conjuro innato, en caso de tener CD es 10+Competencia y su Tirada de Ataque de Hechizo es 2+Competencia. Si el conjuro requiere Concentración normalmente, ahora dura su máxima duración o su límite condicional",
        campos_dinamicos: {
            nombre_conjuro: { tipo: "texto", label: "Nombre del conjuro" },
            cd_salvacion: { tipo: "numero", label: "CD Salvación" },
            metodo_recarga: { tipo: "texto", label: "Método de recarga" }
        }
    },
    conjuro_almacenadoo: {
        nombre: "Conjuro Almacenado+",
        tipo: "plantilla",
        usos: null,
        descripcion: "Conjuros innatos, no requieren cargas ni espacios de conjuros para usarse en su nivel original.\nPuedes usar tus espacios de conjuros para lanzarlos de nivel superior.",
        campos_dinamicos: {
            nombre_conjuro: { tipo: "texto", label: "Nombre del conjuro" },
            cd_salvacion: { tipo: "numero", label: "CD Salvación" }
        }
    },
    errante: {
        nombre: "Errante",
        tipo: "plantilla",
        usos: "10 minutos/Amanecer",
        descripcion: "Obtienes un tipo de movimiento adicional igual a tus pies de movimiento. Además, tienes +5 en tus Tiradas de Atletismo relacionadas al tipo de movimiento obtenido. Puedes usar el conjunto de pies adicionales que tengas por este rasgo una cantidad de tiempo igual a 10 minutos por día en total. Si estabas escalando o volando, bajas 30 pies por ronda",
        campos_dinamicos: {
            tipos_movimiento: {
                tipo: "checkbox_list",
                label: "Tipos de pies de movimiento",
                opciones: ["Escalada", "Nado", "Vuelo"]
            }
        }
    },
    errante_mejorada: {
        nombre: "Errante Mejorada+",
        tipo: "plantilla",
        usos: "3 cargas/d3 Amanecer",
        descripcion: "El objeto posee cargas que pueden gastarse para lanzar conjuros innatos de los pies de movimientos adicionales.",
        campos_dinamicos: {
            tipos_movimiento: {
                tipo: "checkbox_list",
                label: "Tipos de pies de movimiento",
                opciones: [
                    "Escalada = Escalada de Araña",
                    "Nado = Alterar forma (Adaptación acuática",
                    "Vuelo = Volar"
                ]
            }
        }
    },
    protesis: {
        nombre: "Protesis",
        tipo: "plantilla",
        usos: null,
        descripcion: "Una parte faltante ahora es reemplazada con una parte mecánica de ese miembro. Como acción, te lo puedes sacar y si pierdes la sintonización se destruye. En caso que la prótesis sea una extremidad, cuenta como arma mágica cuerpo a cuerpo competente. d8 de Fuerza, tiene propiedad lanzamiento (20/60). Tras atacar vuelve a ti. En caso de ser un ojo, tienes visión en la oscuridad no mágica.",
        campos_dinamicos: null
    },
    absorsion_arcana: {
        nombre: "Absorsión Arcana",
        tipo: "plantilla",
        usos: null,
        descripcion: "Como reacción, puedes absorber un conjuro que solo es dirigido a ti y no en área de efecto. El efecto del hechizo se cancela, y la energía del hechizo. - No el hechizo en sí - se almacena en la Vara. La energía es igual al nivel del conjuro absorbido. Puede absorber y almacenar hasta 50 cargas.\nSi eres lanzador de hechizos, puedes convertir la energía en ranuras de conjuros para lanzar conjuros que haya preparado o conozcas. Solo puedes lanzar conjuros hasta de nivel 5 o menor, siempre y cuando sea igual o menor a las rarnuras de hechizo que tengas.",
        campos_dinamicos: {
            cantidad_cargas: {
                tipo: "texto",
                label: "Cantidad de cargas de nivel"
            }
        }
    },

    // --- RASGOS ESTÁTICOS ---
    reflejo_ilusorio: {
        nombre: "Reflejo ilusorio",
        tipo: "estatico",
        usos: null,
        descripcion: "El objeto proyecta una ilusión de ti que hace que cualquier tirada contra ti sea con desventaja. Si sufres daño, el efecto deja de afectar hasta el inicio de tu próximo turno. El efecto tampoco funciona si estás incapacitado, inmovilizado o eres incapaz de moverte."
    },
    copia: {
        nombre: "Copia",
        tipo: "estatico",
        usos: "1 Carga/Amanecer",
        descripcion: "Invocas una proyección ilusoria tuya en un punto a 30 pies que dura una ronda. Las pruebas de Percepción o Investigación requieren superar un CD que usa tu modificador de Carisma."
    },
    sirenido: {
        nombre: "Sirenido",
        tipo: "estatico",
        usos: null,
        descripcion: "While estés en contacto con el agua, tu cuerpo toma una cola de pez. Obtienes pies de nado iguales a tus pies normales. Tus pruebas de Carisma son con Ventaja y puedes lanzar conjuros de Componente Verbal bajo el agua."
    },
    aracnido: {
        nombre: "Arácnido",
        tipo: "estatico",
        usos: null,
        descripcion: "Mientras posees este objeto, Puedes moverte sobre superficie arriba, abajo y sobre superficie verticales o boca abajo en techos si tienes las manos libres ,y no puedes quedar atrapado en tela de araña y puedes moverte a través de ella como si fuera terreno difícil"
    },
    vuelo_nocturno: {
        nombre: "Vuelo nocturno",
        tipo: "estatico",
        usos: null,
        descripcion: "Mientras estás en luz tenue u oscuridad, puedes agarrar los bordes de la capa con ambas manos y usarla para volar 40 pies. Si sueltas los bordes de la capa o sales de la luz tenue u oscuridad, pierdes los pies de vuelo."
    },
    coraza_guerrera: {
        nombre: "Bombardero",
        tipo: "estatico",
        usos: null,
        descripcion: "Mientras poseas este objeto, puedes gastar tus dados de puntos de golpe para infligir daño de ácido, realizas una explosión en cono de 10 pies centrado en ti."
    },
    multiojos: {
        nombre: "Multiojos",
        tipo: "estatico",
        usos: null,
        descripcion: "Mientras posees este objeto, obtienes los siguientes beneficios -Te permite ver en todas las direcciones y tienes Ventaja en Percepción que depende de la vista -Visión en la socuridad 120 pies Puedes ver objetos y criaturas invisibles, como dentro del plano etéreo a 120 pies. No se puede cerrar ni desviar esos ojos. Aunque puedes cerrarlos, no cuentan como tal mientras poseas el objeto. Si usan Luz a la túnica o Luz diruna a 5 pies de ti o menos, quedas ciego por 1 minuto. Al final de cada turno, realizas una Tirada de Salvación de Constitución CD 11 (Luz) o 15 (Luz diurna), termina la ceguera en un éxito"
    },
    atraccion: {
        nombre: "Atracción",
        tipo: "estatico",
        usos: null,
        descripcion: "Todo ataque con arma a distancia a 10 pies de ti, ya sea del origen del ataque o el objetivo del ataque, te vuelve a ti su objetivo."
    },
    defensa_contra_proyectiles: {
        nombre: "Defensa contra Proyectiles",
        tipo: "estatico",
        usos: null,
        descripcion: "Obtienes un +2 al CA contra tiradas de ataque a distancia"
    },
    proteccion: {
        nombre: "Protección",
        tipo: "estatico",
        usos: null,
        descripcion: "Como reacción, puedes redirigir un ataque de una creatura a 5 pies de ti, para volverte tu el objetivo del ataque."
    },
    defensa_descubierto: {
        nombre: "Defensa descubierto",
        tipo: "estatico",
        usos: null,
        descripcion: "Obtienes un +2 al CA si no tienes armadura, ni escudo"
    },
    desviar_misiles: {
        nombre: "Desviar Misiles",
        tipo: "estatico",
        usos: null,
        descripcion: "Al recibir un ataque de arma a distancia, como reacción y si tienes una mano desocupada, puedes reducir el daño a d10 + Modificador de Destreza. Si reduces el daño a 0 y el misil cae en tu mano, puedes atraparlo"
    },
    evasion: {
        nombre: "Evasión",
        tipo: "estatico",
        usos: "3 cargas/d3 Amanecer",
        descripcion: "Cuando fallas una Tirada de Salvación de Destreza, como reacción, puedes gastar 1 carga y superarla"
    },
    normalizacion: {
        nombre: "Normalización",
        tipo: "estatico",
        usos: "3 cargas/d3 Amanecer",
        descripcion: "Gastas una carga para volver a un crítico de una creatura que puedas ver en un golpe normal, para realizarlo no debes estar incapacitado"
    },
    marea: {
        nombre: "Marea",
        tipo: "estatico",
        usos: "2 carga/Amanecer",
        descripcion: "Si una creatura a 30 pies de ti (Incluyéndote) realiza una Tirada de Salvación, como Reacción puedes gasta una carga para agregarle un bonificador o penalizador igual a un d4."
    },
    elevacion_mar: {
        nombre: "Marea+",
        tipo: "estatico",
        usos: null,
        descripcion: "Marea incrementa su dado a un d6. Además, puedes añadirlo a Pruebas de Habilidad, Tiradas de Ataque y Daño."
    },
    repulsion: {
        nombre: "Repulsión",
        tipo: "estatico",
        usos: "3 cargas/d3 Amanecer",
        descripcion: "Como reacción, cuando una tirada de ataque cuerpo a cuerpo falla contra ti, empujas a la creatura atacante 10 pies en dirección contraria"
    },
    resistencia_magica: {
        nombre: "Resistencia Mágica",
        tipo: "estatico",
        usos: null,
        descripcion: "Resistencia en las Tiradas de Salvación de Hehcizo y otros efectos mágicos."
    },
    resistencia_magicaa: {
        nombre: "Resistencia Mágica+",
        tipo: "estatico",
        usos: null,
        descripcion: "Resistencia en las Tiradas de Salvación de Hechizo y otros efectos mágicos. Además de que la Tirada de Ataque de Hechizos contra ti son con Desventaja"
    },
    resistencia_arcana: {
        nombre: "Resistencia Arcana",
        tipo: "estatico",
        usos: null,
        descripcion: "Resistencia al daño por Fuerza y tienes inmunidad a Misiles Mágicos"
    },
    resistencia_contra_proyectiles: {
        nombre: "Resistencia contra proyectiles",
        tipo: "estatico",
        usos: null,
        descripcion: "Resistencia al daño hecho con armas a distancia"
    },
    autocuracion: {
        nombre: "Autocuración",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción, puedes recuperar magicamente 2d8+2 puntos de golpe"
    },
    paz_iluminada: {
        nombre: "Paz iluminada",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción, restableces una condición sobre ti mismo"
    },
    pureza: {
        nombre: "Pureza",
        tipo: "estatico",
        usos: null,
        descripcion: "Puedes usar Paz iluminada como Reacción"
    },
    regeneracion: {
        nombre: "Regeneración",
        tipo: "estatico",
        usos: null,
        descripcion: "Mientras tengas 1 punto de golpe. Cada 10 minutos recuperas d6 de vida. Si has perdido una parte del cuerpo, se regenera en 1d6+1 días"
    },
    seguir_delante: {
        nombre: "Seguir delante",
        tipo: "estatico",
        usos: null,
        descripcion: "Si al inicio de tu turno, te estás muriendo, te estabilizas. Cada vez que recuperas dado de golpe, duplicas el restulado"
    },
    aguanta_dragones: {
        nombre: "Aguanta Dragones",
        tipo: "estatico",
        usos: null,
        descripcion: "Ventaja en las Tiradas de Salvación contra Presencia Pavorosa y Armas de Aliento de Dragón."
    },
    instinto_dragon: {
        nombre: "Instinto Dragón",
        tipo: "estatico",
        usos: "1 carga/Amanecer",
        descripcion: "Como acción, puedes sentir la presencia y dirección de otro dragón del mismo tipo de armadura en 30 millas"
    },
    mente_reforzada: {
        nombre: "Mente Reforzada",
        tipo: "estatico",
        usos: null,
        descripcion: "No pueden leer tus pensamientos, saber tus mentiras, conocer su alineación o conocer tu tipo de criatura. Solo pueden comunicarse telepáticamente contigo si lo permites. Puedes usar una acción para que el objeto se haga invisible, hasta que te lo quites o mueras. \nSi mueres con el objeto sintonizado, tu alma es absorbida por el. Puedes quedarte ahí o morir definitivamente. Mientras estés en el objeto, puedes comunicarte telepáticamente con cualquier creatura que lo lleve. Quien lo lleve puede impedir esta comunicación telepática."
    },
    telepata: {
        nombre: "Telépata",
        tipo: "estatico",
        usos: null,
        descripcion: "Obtienes la capacidad de hablar por telepatía y que te contesten, el rango se basa en la Puntuación de Habilidad Inteligencia.\n3 a 7 (15 pies), 8 a 11 (30p), 12 a 15 (60p), 16+ (120p)"
    },
    destello: {
        nombre: "Destello",
        tipo: "estatico",
        usos: null,
        descripcion: "Obtienes la capacidad de Iluminar usando tu mente, la luz está centrada en ti y el radio se basa en la Puntuación de Habilidad Inteligencia.\n3 a 7 (5p), 8 a 11 (10p), 12 a 15 (20p), 16+ (30p)"
    },
    evocacion_imprudente: {
        nombre: "Evocación Imprudente",
        tipo: "estatico",
        usos: "2 cargas/Amanecer",
        descripcion: "Si se lanza un Conjuro de Evocación, puedes cubrir una cantidad de Criaturas igual a tu Competencia para que no pueda recibir ningún tipo de daño del conjuro lanzado"
    },
    onda_de_abjuracion: {
        nombre: "Onda de Adjuración",
        tipo: "estatico",
        usos: null,
        descripcion: "Si se lanza un Conjuro de Abjuración, la criatura afectada emite una onda de choque, cualquier criatura a elección al rededor del objetivo recibe daño de Fuerza igual a tu Competencia"
    },
    alma_curativa: {
        nombre: "Alma Curativa",
        tipo: "estatico",
        usos: "2 cargas/Amanecer",
        descripcion: "Si restauras puntos de golpe a una creatura aliada gastando un Espacio de Conjuro de nivel 1 o superior, a la creatura la empezará a seguir un espíritu curativo, que al final del siguiente turno de la creatura restaura la misma cantidad de puntos de golpe y se consume."
    },
    combate_en_grupo: {
        nombre: "Combate en Grupo",
        tipo: "estatico",
        usos: null,
        descripcion: "Tus Tiradas de Ataque de Hechizo que requieren al menos un Espacio de Conjuro, y tiene una invocación tuya a 5 pies de la creatura objetivo, son con Ventaja."
    },
    vision_robada: {
        nombre: "Visión Robada",
        tipo: "estatico",
        usos: "2 cargas/Amanecer",
        descripcion: "Cuando una creatura es golpeada por un Hechizo que requiera al menos un Espacio de Conjuro lanzado por ti, durante el siguiente minuto, puedes ver a través de sus ojos al cerrar los tuyos."
    },
    ilusion_superior: {
        nombre: "Ilusión Superior",
        tipo: "estatico",
        usos: null,
        descripcion: "Tus creaciones realizadas por Conjuros de Ilusión son altamente realistas, las tiradas de Percepción para identificarlas se hacen con Desventajas"
    },
    canje_trasmutador: {
        nombre: "Canje Trasmutador",
        tipo: "estatico",
        usos: "2 cargas/Amanecer",
        descripcion: "Cuando lanzas un Conjuro con una Ranura de Hechizo de nivel 2 o Superior, puedes gastar una carga para que cueste un Espacio de Conjuro menor"
    },
    control_de_movimiento: {
        nombre: "Control de Movimiento",
        tipo: "estatico",
        usos: null,
        descripcion: "Cuando pierdas la Concentración en un Conjuro, puedes moverte a un Espacio desocupado que puedas ver a 30 pies"
    },
    foco_arcano: {
        nombre: "Foco Arcano",
        tipo: "estatico",
        usos: null,
        descripcion: "Este objeto de magia concentrada permite usarse como Foco Arcano. (Componente Material)"
    },
    magia_pura: {
        nombre: "Magia pura",
        tipo: "estatico",
        usos: null,
        descripcion: "Puedes gastar una carga para lanzar un Conjuro ignorando los componentes materiales."
    },
    invisbilidad_ante_la_adiviniacion: {
        nombre: "Invisibilidad ante la Adivinación",
        tipo: "estatico",
        usos: null,
        descripcion: "Estás oculto de la magia de adivinación. No puedes ser objetivo de esa magia ni percibido por sensores mágicos de adivinación"
    },
    aptitud_mejorada: {
        nombre: "Aptitud Mejorada",
        tipo: "estatico",
        usos: null,
        descripcion: "Obtienes un +1 en las Pruebas de Habilidad y Tiradas de Salvación"
    },
    resguardo: {
        nombre: "Resguardo",
        tipo: "estatico",
        usos: null,
        descripcion: "Obtienes un +1 al CA y Tiradas de Salvación"
    },
    reserva: {
        nombre: "Reserva",
        tipo: "estatico",
        usos: null,
        descripcion: "Obtienes un punto de golpe adicional por cada nivel que hayas alcanzado"
    },
    lenguaje_prestado: {
        nombre: "Lenguaje Prestado",
        tipo: "estatico",
        usos: null,
        descripcion: "Obtienes competencia a un tipo de lenguaje otorgado por el objeto"
    },
    maxima_habilidad: {
        nombre: "Máxima Habilidad",
        tipo: "estatico",
        usos: null,
        descripcion: "Tu puntuación de Habilidad (Decidida por el objeto) es 19. No tiene efecto si tienes 19 o más"
    },
    vision_de_aguila: {
        nombre: "Visión de Águila",
        tipo: "estatico",
        usos: null,
        descripcion: "Ventaja en Percepción por vista. Puedes distinguir todo en tu visión en luz clara"
    },
    velo_de_sigilo: {
        nombre: "Velo de Sigilo",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción, puedes ponerte y quitarte la capucha. Si te la pones, obtienes Desventaja en Percepción, pero Ventaja en Sigilo"
    },
    versatil: {
        nombre: "Versátil+",
        tipo: "estatico",
        usos: null,
        descripcion: "Tus tiradas de daño con armas Versátil infligen un tipo de dado de daño más alto (d4->d6->d8->d10->d12)"
    },
    arrojadiza: {
        nombre: "Arrojadiza+",
        tipo: "estatico",
        usos: null,
        descripcion: "Tus tiradas de daño con armas Arrojadizas infligen un d8 extra. Tras el ataque vuelve a tu mano."
    },
    tiro_arco: {
        nombre: "Tiro con Arco+",
        tipo: "estatico",
        usos: null,
        descripcion: "Tus tiradas de daño con armas a Distancia infligen un d8 extra. Ignoras cobertura 1/2 y cobertura 3/4"
    },
    defensa: {
        nombre: "Defensa+",
        tipo: "estatico",
        usos: null,
        descripcion: "Mientras llevas armadura ligera, media y pesada, cuando recibes daño por armas, reduces el daño igual a tu competencia."
    },
    duelista: {
        nombre: "Duelista+",
        tipo: "estatico",
        usos: null,
        descripcion: "Cuando sostienes un arma cuerpo a cuerpo and ninguna otra, tras realizar una tirada de ataque puedes ubicarte en un espacio desocupado a 5 pies sin provocar ataques de oportunidad."
    },
    gran_armas: {
        nombre: "Gran Armas+",
        tipo: "estatico",
        usos: null,
        descripcion: "Puedes como acción adicional, darte ventaja en tus tiradas de ataque con armas. El arma debe tener la propiedad de Dos manos o Versátil para obtener este beneficio"
    },
    dos_armas: {
        nombre: "Dos armas+",
        tipo: "estatico",
        usos: null,
        descripcion: "Cuando hacer un ataque extra como resultado de un arma que tiene la propiedad Ligera, puedes realizar la tirada de ataque con Ventaja si no lo tiene."
    },
    desarmado: {
        nombre: "Combate desarmado+",
        tipo: "estatico",
        usos: null,
        descripcion: "Cuando golpeas con tu Golpe Desarmado y haces daño, puedes elegir que la creatura también quede agarrada. Puedes usar a creaturas que puedes cargar como Arma improvisadas competentes con un alcance 20/60 y daño igual a 1d6 contundente. El daño incrementa en +1d6 por cada categoría sobre mediano."
    },
    frase_almacenada: {
        nombre: "Frase Almacenada",
        tipo: "estatico",
        usos: null,
        descripcion: "Este objeto puede decir hasta 6 frases en las condiciones que especifiques"
    },
    trazado_temporal: {
        nombre: "Trazado temporal",
        tipo: "estatico",
        usos: "3 cargas/Amanecer",
        descripcion: "Puedes escribir un mensaje de hasta 10 palabras en un objeto, este mensaje dura por 1 día"
    },
    bendita_suerte: {
        nombre: "Bendita Suerte",
        tipo: "estatico",
        usos: null,
        descripcion: "Siempre obtienes un resultado favorable al apostar con el objeto (Basado en la forma que tiene)"
    },
    descanso_rapido: {
        nombre: "Descanso Rápido",
        tipo: "estatico",
        usos: "1 carga/en d3 Amanecer(es)",
        descripcion: "Requieres solo de la mitad de tiempo para recuperar los beneficios de un Descanso Largo. Y no pueden tomarte por sorpresa mientras descansas"
    },
    descanso_relajante: {
        nombre: "Descanso Relajante",
        tipo: "estatico",
        usos: "1 carga/en d3 Amanecer(es)",
        descripcion: "Si tomas un día de no sobre esfuerzo (Lo establece el GM), Tras el Descanso Largo obtienes Inspiración [No acumulable]"
    },
    efecto_aleatorio: {
        nombre: "Efecto Aleatorio",
        tipo: "estatico",
        usos: "7 cargas/d6+1 cargas",
        descripcion: "Apuntas a un objetivo ya sea creatura, objeto o espacio desocupado. Tira un d100 y consulta la tabla. La tabla es otorgada por el GM. el CD es 15, el rango del hechizo es hasta 120 pies. Si cubre un área, se centra desde el punto elegido, el GM determina las creaturas afectadas."
    },
    flautista: {
        nombre: "Flautista",
        tipo: "estatico",
        usos: "3 cargas/d3 Amanecer",
        descripcion: "Las ratas de ningún tipo de atacarán a menos que tu las ataques a ellas. Como acción, puedes invocar un enjambre de ratas por cada carga gastada, mantienes el ritmo tocando como una Concentración de un Hechizo. Si pierdes la concentración, las ratas se vuelven neutrales y pueden decidir si atacar o retirarse. La hoja de las Ratas es otorgada por el GM."
    },
    arma_serpiente: {
        nombre: "Arma serpiente",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción adicional, pronuncias unas palabras de comando y puedes hacer que del objeto se asome una cabeza de serpiente animada venenosa durante 1 minuto. Al usar otra acción adicional, vuelve a su forma normal.\nMientras está en esta forma, puedes realizar tiradas de ataques cuerpo a cuerpo con competencia de 5 pies de alcance. Al acertar, inflige 1d6 perforante y el objetivo realiza una Tirada de Salvación de Constitución CD 15 o recibe 3d6 de Veneno.\nLa cabeza puede ser atacada mientras está animada. CA de 15, puntos de golpe 20. Si cae a 0 puntos de golpe, es destruida. Mientras no sea destruido, el objeto recupera todos los puntos de golpe al volver a la normalidad."
    },
    invocar_serpiente: {
        nombre: "Invocar Serpiente",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción, pronuncias unas palabras de comando y puedes lanzar el objeto hasta 10p de ti, este se transforma en una Serpiente constrictora gigante bajo tu control. Al usar una acción adicional, vuelve a su forma normal.\nMientras está en esta forma, recibe ordenes de ti siempre que estés a al menos 60 pies y no estés incapacitado. Tu decides, acción y movimiento de la serpiente, o recibe una orden general.\nSi la serpiente cae a 0 puntos de golpe, es destruida. Mientras no sea destruida, el objeto recupera todos los puntos de golpe al volver a la normalidad"
    },
    respiracion_adaptativa: {
        nombre: "Respiración adaptativa",
        tipo: "estatico",
        usos: null,
        descripcion: "Puedes respirar en cualquier entorno y tienes Ventaja en las Tiradas de Salvación contra gases, venenos inhalados y armas de aliento de algunos Dragones"
    },
    respiracion_artificial: {
        nombre: "Resiración Artificial",
        tipo: "estatico",
        usos: null,
        descripcion: "Cuando cubres tu rostro con este objeto, puedes respirar incluso en campos anti-magia, y no puede ser suprimida por magia"
    },
    vision_verdadera: {
        nombre: "Visión Verdadera",
        tipo: "estatico",
        usos: "3 cargas/d3 Amanecer",
        descripcion: "Como acción, pronuncias y gastas 1 carga, Obtienes visión verdadera por 120 pies por 10 minutos"
    },
    sigilo_natural: {
        nombre: "Sigilo Natural",
        tipo: "estatico",
        usos: null,
        descripcion: "Si estás en un área mínimo ligeramente oscurecida, puedes ocultarte."
    },
    cuidado: {
        nombre: "Cuidado",
        tipo: "estatico",
        usos: null,
        descripcion: "Mientras portes el objeto, obtienes Ventaja en las Tiradas de iniciativa. No puede ser sorprendido tu y cualquier creatura a 30p, excepto si están discapacitadas. El arma despierta ante cualquier peligro si alguien está durmiendo naturalmente cuando empieza el combate"
    },
    gatillo_fragil: {
        nombre: "Gatillo Frágil",
        tipo: "estatico",
        usos: "1 carga/Amanecer",
        descripcion: "Tras lanzar iniciativa, puedes elegir añadirle un bonificador de +10 al resultado"
    },
    sigilo_instintivo: {
        nombre: "Sigilo instintivo",
        tipo: "estatico",
        usos: null,
        descripcion: "Tras lanzar iniciativa, puedes realizar una prueba de Sigilo como reacción, antes de que comience el primer turno del combate. Si supera la Percepción pasiva de una criatura, te consideras oculto frente a ella al inicio del combate"
    },
    talento_de_liebre: {
        nombre: "Talento de Liebre",
        tipo: "estatico",
        usos: null,
        descripcion: "Tras lanzar iniciativa, puedes como Reacción, lanzarte el conjuro Salto y obtener uno de los siguientes beneficios en tu reacción.\n-+5 a la iniciativa\n-Caminas 10 pies para realizar un salto largo o alto\n-Saltas y realizas un único ataque cuerpo a cuerpo a una creatura al rango de tu salto"
    },
    canalizar_divinidad: {
        nombre: "Canalizar Divinidad+",
        tipo: "estatico",
        usos: null,
        descripcion: "Obtienes un uso de Canalizar Divinidad"
    },
    recuperacion_arcana: {
        nombre: "Recuperación Arcana+",
        tipo: "estatico",
        usos: null,
        descripcion: "Los niveles de recuperación de ranura de hechizo de Recuperación Arcana aumento en 1"
    },
    regeneracion_ki: {
        nombre: "Regeneración de Ki",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción, recuperas puntos de KI iguales a un dado marcial."
    },
    pozo_sangre: {
        nombre: "Pozo de Sangre",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción, recuperas 5 puntos de hechicería usando dados de puntos de golpe"
    },
    meta_mov: {
        nombre: "Meta movimiento",
        tipo: "estatico",
        usos: null,
        descripcion: "Tras gastar puntos de hechicería, puedes teletrasportarte a 30p a un espacio descocupado."
    },
    meta_aura: {
        nombre: "Meta aura",
        tipo: "estatico",
        usos: null,
        descripcion: "Tras gastar puntos de hechicería, puedes explotar en magia elemental, toda creatura a 10p de ti, realiza una Tirada de Salvación de Constitución, infligiéndole 2d6 de daño por Fuego o Frío. En un éxito, no recibe daño."
    },
    meta_terr: {
        nombre: "Meta terror",
        tipo: "estatico",
        usos: null,
        descripcion: "Tras gastar puntos de hechicería, puedes obligar a la creatura afectada a hacer una Tirada de Salvación de Sabiduría, o recibir 3d6 psíquico y quedar asustada de ti. En un éxito, no queda asustada, ni recibe daño."
    },
    meta_esp: {
        nombre: "Meta espiritual",
        tipo: "estatico",
        usos: null,
        descripcion: "Tras gastar puntos de hechicería, puedes restaurar 3d6 puntos de golpe o infligir 3d6 necrótico al objetivo. Para realizar daño, debe realizar una Tirada de Salvación de Carisma, en un éxito no recibe daño."
    },
    meta_pur: {
        nombre: "Meta purificar",
        tipo: "estatico",
        usos: null,
        descripcion: "Tras gastar puntos de hechicería, puedes restaurar una condición sobre ti mismo."
    },
    recuperacion_bardica: {
        nombre: "Recuperación Bárdica",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción, recuperas un uso de Inspiración bárdica"
    },
    recuperacion_pacto: {
        nombre: "Recuperación de Pacto",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción, recuperas un espacio de Conjuro de Brujo"
    },
    herramienta: {
        nombre: "Herramienta",
        tipo: "estatico",
        usos: null,
        descripcion: "El objeto se transforma en cualquier herramienta de Artesano y obtienes un truco de artificiero"
    },
    drenaje: {
        nombre: "Absorber Elemento+",
        tipo: "estatico",
        usos: null,
        descripcion: "Cuando realizas el daño del Conjuro Absorber Elemento, puedes recuperar puntos de golpe igual al daño infligido"
    },
    sugerencia_mejorada: {
        nombre: "Sugerencia+",
        tipo: "estatico",
        usos: null,
        descripcion: "Mientras puedas comunicarte mediante telepatía con una creatura, puedes lanzar Sugerencia sobre el directamente, sin componentes. V, S, M."
    },
    armadura_mago: {
        nombre: "Armadura de Mago+",
        tipo: "estatico",
        usos: null,
        descripcion: "Tu CA mientras portes el objetos siempre es 13 + Modificador de Destreza, incluso incosciente."
    },
    conjuro_mutado: {
        nombre: "Conjuro Mutado",
        tipo: "estatico",
        usos: "3 cargas/d3 Amanecer",
        descripcion: "Al realizar un Conjuro de daño por Fuego, Frío, Relámpago, Trueno o Ácido. Puedes opcionalmente volverlo más fuerte de lo normal para superar resistencias"
    },
    recarga: {
        nombre: "Recarga",
        tipo: "estatico",
        usos: "1 carga/Amanecer",
        descripcion: "Como acción, pronuncias palabras de comando y recuperas un espacio de conjuro. Si la ranura gastada era de nivel 4 o superior, la nueva es de nivel 3"
    },
    magia_salvaje: {
        nombre: "Magia Salvaje",
        tipo: "estatico",
        usos: null,
        descripcion: "La magia puede perder su control, si fallas una Tirada de Ataque de Hechizo con un 1 o un objetivo supera una Tirada de Salvación de Hechizo con un 20, se lanza la tabla de Magia Salvaje."
    },
    premonicion: {
        nombre: "Premonición",
        tipo: "estatico",
        usos: null,
        descripcion: "Después de un Descanso largo, lanzas un d20, el resultado del d20 lo puedes gastar en cualquier tirada de d20 de una creatura que puedas ver, siempre y cuando no estés incapacitado."
    },
    diez_en_punto: {
        nombre: "10 en punto",
        tipo: "estatico",
        usos: "4 cargas/Amaneceres",
        descripcion: "Puedes gastar una carga para que en un resultado d20 tuyo, el resultado del dado sea 10."
    },
    movimiento_libre: {
        nombre: "Movimiento libre",
        tipo: "estatico",
        usos: null,
        descripcion: "El terreno difícil no cueste movimiento extra, la magia no reduce tu velocidad, ni paralizarte, ni restringirte."
    },
    salto_largo: {
        nombre: "Salto Largo",
        tipo: "estatico",
        usos: null,
        descripcion: "Tus pies pasan a ser 30 pies, a menos que sea mayor, y tu velocidad no baja por peso. Tus saltos son 3 veces más alto"
    },
    taloneo: {
        nombre: "Taloneo",
        tipo: "estatico",
        usos: "10 minutos en total/Descanso Largo",
        descripcion: "Como acción adicional, duplicas tus pies de caminata y los Ataques de oportunidad son con Desventaja. Otra acción adicional, termina el efecto."
    },
    ataque_veloz: {
        nombre: "Ataque Veloz",
        tipo: "estatico",
        usos: null,
        descripcion: "En cada turno, puedes realizar un Ataque cuerpo a cuerpo con esta arma como acción adicional"
    },
    ardiente: {
        nombre: "Ardiente",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción adicional, prendes el objeto en fuego, brilla 40 pies de luz brillante y 40 pies adicionales de luz suave. Mientras esté en llamas y sea un arma cuerpo a cuerpo, inflige 2d6 de Fuego adicional en cada golpe, el fuego dura hasta que sueltes el arma, uses otra acción adicional para apagarla o envaines el arma."
    },
    tundra: {
        nombre: "Tundra",
        tipo: "estatico",
        usos: null,
        descripcion: "Tus Tiradas de ataque con armas obtienen un d6 de frío. Además durante tu movimiento puedes pasar sobre el agua, esta se descongela al terminar tu movimiento."
    },
    brisa: {
        nombre: "Brisa",
        tipo: "estatico",
        usos: null,
        descripcion: "Al desvainar esta arma, puede extinguir todas las llamas no mágicas a 30 pies o menos, después de su uso, debe esperar 1 hora para usarse denuevo."
    },
    quemadura: {
        nombre: "Quemadura",
        tipo: "estatico",
        usos: "2 carga/Amanecer",
        descripcion: "En cada ronda, la primera vez que aciertes un ataque con esta arma leaves marcada al objetivo. Recibe daño por fuego igual a todo el daño de fuego recibido hasta el inicio de su turno, donde la marca desaparece."
    },
    estallido: {
        nombre: "Estallido",
        tipo: "estatico",
        usos: null,
        descripcion: "Cuando infliges daño por Fuego con este objeto, las brasas queman el mismo daño por fuego a toda creatura de tu elección a 5 pies del objetivo"
    },
    venenoso: {
        nombre: "Venenoso",
        tipo: "estatico",
        usos: "2 carga/Amanecer",
        descripcion: "Cuando aciertas un Golpe con esta arma y el objetivo es una creatura, la Envenena, dura hasta el final de su siguiente turno"
    },
    corrosivo: {
        nombre: "Corrosivo",
        tipo: "estatico",
        usos: null,
        descripcion: "Tu Daño de Veneno con este objeto es Especial, este especial Veneno supera Resistencias y una creatura Inmune, recibe daño como si fuera Resistente"
    },
    cicatriz_sombra: {
        nombre: "Cicatriz Sombra",
        tipo: "estatico",
        usos: null,
        descripcion: "Al realizar un crítico en la Tirada de Ataque Cuerpo a cuerpo, el daño obtiene 2d6 Necrótico extra y Tumba a la creatura"
    },
    disparo_rafaga: {
        nombre: "Disparo en Ráfaga",
        tipo: "estatico",
        usos: null,
        descripcion: "Cuando realizas una Tirada de Ataque a Distancia con este objeto, si aciertas un golpe, el resto de ataques en ese mismo turno se realizan con Ventaja"
    },
    experto_en_tiro: {
        nombre: "Experto en Tiro",
        tipo: "estatico",
        usos: null,
        descripcion: "Obtienes competencia con Arco Corto y Largo. Tus Tiradas de ataque con este tipo de armas obtienen un bonificador +2"
    },
    precision_arcana: {
        nombre: "Precisión Arcana",
        tipo: "estatico",
        usos: null,
        descripcion: "Tus Tirada de Ataque de Hechizo a distancia ignoran la cobertura media"
    },
    precision_maldita: {
        nombre: "Presición Maldita",
        tipo: "estatico",
        usos: null,
        descripcion: "Cuando realizas una Tirada de Ataque de Hechizo a distancia obtiene un +2 al daño. Si en la Tirada de Ataque sale 1, el hechizo se redirige a ti."
    },
    herida_grave: {
        nombre: "Herida Grave",
        tipo: "estatico",
        usos: null,
        descripcion: "El daño realizado con esta arma, solo se puede regenerar con un Descanso Corto o Largo, no funciona regeneración, magia o cualquier otro medio. Una vez por turno, cuando realices daño con esta arma puedes herir al objetivo, mientras esté herida de esta forma, cada inicio de ronda recibe 1d4 necrótico por cada vez que haya sido herido, y luego una Tirada de Salvación de Constitución (CD 15), terminando el efecto de todas las heridas sobre si mismo en un éxito. Alternativamente, la creatura herida u otra creatura a 5 pies, puedes usar una Acción para realizar Medicina (CD 15), terminando el efecto de las heridas"
    },
    matagigantes: {
        nombre: "Matagigantes",
        tipo: "estatico",
        usos: null,
        descripcion: "Si el objetivo es de talla Gigante obtiene 2d8 de daño extra realizado por esta arma"
    },
    levitacion: {
        nombre: "Levitación",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción adicional, pronuncias unas palabras de comando y puedes hacer que el Objeto levite hasta 30 pies de ti. Puedes terminar su duración si la agarras, sales de su cuerpo o cumple su función.\n- Si es un arma, como acción adicional, puedes realizar una Tirada de Ataque y daño con tus modificadores de daño. Realiza hasta 4 ataques.\n- Si es un escudo, como Acción adicional, puedes aumentar la clase de armadura igual a la del escudo a una creatura de tu elección dentro de tu rango (incluyéndote), se esforzará por seguirla y protegerla flotando hasta 30 pies de ti, bloquea hasta 4 ataques.\nTras cumplir su función vuela 30 pies e intenta volver a tu mano. Si no alcanza o tienes las manos ocupadas cae al suelo"
    },
    muerte_instantanea: {
        nombre: "Fatality: Muerte Instantánea",
        tipo: "estatico",
        usos: "d8+1 cargas",
        descripcion: "Si aciertas un golpe crítico con esta arma y la criatura tiene menos de 100 puntos de golpe, debe superar una Tirada de Salvación de Constitución (CD 15) o morir instantánea. (Constructos y no muertos son inmunes). El objeto consume una carga si la creatura muere. Cuando se queda sin cargas restantes este rasgo se pierde"
    },
    roba_vida: {
        nombre: "Roba Vida",
        tipo: "estatico",
        usos: null,
        descripcion: "Si sacas crítico en la Tirada de Ataque, este objetivo recibe 10 de daño necrótico no reducible extra, siempre que no sea constructo o no-muerto. Ganas puntos de golpe iguales al daño necrótico"
    },
    corte_limpio: {
        nombre: "Corte limpio",
        tipo: "estatico",
        usos: null,
        descripcion: "Si sacas crítico en la Tirada de Ataque de un ataque de daño cortante, este objetivo recibe 14 de daño extra, vuelves a lanzar un d20, si sale otro 20, el objetivo pierde una extremidad a criterio del GM."
    },
    vinculo: {
        nombre: "Vínculo",
        tipo: "estatico",
        usos: null,
        descripcion: "Tras realizar un Descanso Corto, puedes vincular un arma a este objeto. Puedes guardar en un espacio mágico el arma vinculada e invocarla en tu mano como Acción adicional"
    },
    vinculo_flecha: {
        nombre: "Vinculo de Flecha",
        tipo: "estatico",
        usos: null,
        descripcion: "Puedes vincular 20 flechas. Luego en una acción, puedes atraer todas las flechas vinculadas a ti sin importar lo lejos que estén (en 1000 pies)"
    },
    vinculo_maldito: {
        nombre: "Vinculo maldito",
        tipo: "estatico",
        usos: null,
        descripcion: "Esta arma maldita, otorga Desventaja a cualquier Tirada de Ataque con arma que no sea esta. Además, cada vez que recibes daño en combate lanzas Tirada de Salvación de Sabiduría (CD 15). Si falla, te esfuerzas por pegarle a la criatura que te dañó, hasta que caigas a 0 puntos de golpe o logres golpearle, o hasta que no alcances a la creatura en un ataque cuerpo a cuerpo contra ella. Si usas Destierro sobre el objeto, pierde su maldición dejando al arma con sus respectivos bonificadores y resto de rasgos"
    },
    arma_luz: {
        nombre: "Arma de Luz",
        tipo: "estatico",
        usos: null,
        descripcion: "La mayor parte del tiempo, el objeto se ve como una pequeña empuñadura, al realizar una Acción adicional, el arma se despliega en un arma de Luz, el daño normal del arma, ahora es Radiante. Brilla 15 pies fuerte, y otros 15 adicionales suave."
    },
    calor_sol: {
        nombre: "Calor del Sol",
        tipo: "estatico",
        usos: "1 carga/Amanecer",
        descripcion: "Cuando infliges daño de Fuego o Radiante, puedes volver a tirar los dados y quedarte con el nuevo resultado."
    },
    visor: {
        nombre: "Visor",
        tipo: "estatico",
        usos: null,
        descripcion: "Al portar este objeto, las Tiradas de Ataque con arma a distancia aumentan en +1 por cada 10 pies que estés de la criatura. Este efecto aplica siempre que no tengas Desventaja en la Tirada de Ataque"
    },
    estoque_radiante: {
        nombre: "Estoque Radiante",
        tipo: "estatico",
        usos: null,
        descripcion: "Tras realizar la Acción Atacar, puedes como Acción adicional realizar un ataque especial con este objeto, usa tu Modificador de Carisma para la Tirada de Ataque. Si Acierta, la creatura y tu se mueven 5 pies en dirección al ataque y realiza d4 Radiante. En niveles superiores: El daño de la estocada aumenta en 1d4 al alcanzar el nivel 5(2d4), el nivel 11(3d4) y el nivel 17(4d6)"
    },
    castigo_cielo: {
        nombre: "Castigo del Cielo",
        tipo: "estatico",
        usos: null,
        descripcion: "Como Acción, con esta arma puedes realizar un castigo sobre todas las creatura a 15 pies, hasta un máximo igual a tu Competencia. Toda creatura que recibe el castigo debe realizar una Tirada de Salvación de Destreza que usa tu Modificador de Sabiduría o Carisma para establecer el CD de Salvación. Si fallan, las creaturas reciben d8 Radiante. En niveles superiores: El daño de los látigos de luz aumenta en 1d8 al alcanzar nivel 5(2d8), el nivel 11(3d8) y el nivel 17(4d8)"
    },
    lluvia_flechas: {
        nombre: "Lluvia de Flechas",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción, en un turno mientras empuñas el arma, cuando realizas una Tirada de Ataque a distancia con esta arma, la Tirada de Ataque también enfrenta el CA de los enemigos adyacente a 5 pies del objetivo y si lo supera, igual reciben el daño del arma"
    },
    luz_juicio: {
        nombre: "Luz de Juicio",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción adicional en tu turno mientras empuñas el arma, marcas a una creatura que puedas ver a 60 pies, el primer golpe que recibe de ti en cada turno con el Arma provoca d6 de daño extra Radiante. Este efecto dura hasta que tu o la creatura marcada quede a 0 puntos de golpe, o que pase 1 hora"
    },
    carga: {
        nombre: "Carga",
        tipo: "estatico",
        usos: "3 Cargas/d3 Amanecer",
        descripcion: "Como Acción, puedes gastar de 1 a 3 cargas para realizar una Tirada de Ataque de Hehcizo a 60 pies que produce una cabeza de un animal que simula una carga con un bonificador de +7. En un acierto, por cada carga realiza 2d10 de Fuerza y es empujado a 5 pies de distancia. Alternativamente, puedes gastar 1 a 3 cargas como Acción para tratar de romper un objeto a 60 pies que no se esté usando o trasportando. Realiza una Prueba de Fuerza con un bonificador +5 por carga."
    },
    Fugaz: {
        nombre: "Fugaz",
        tipo: "estatico",
        usos: "3 Cargas/Amanecer",
        descripcion: "Como Acción adicional, puedes gastar de 1 carga para elegir uno de los siguientes beneficios por 1 ronda, recuperar puntos de golpe iguales a un d8+Competencia, infligir 2d6 de Fuego con ataques con arma a distancia o tener la Condición invisible."
    },
    estellar: {
        nombre: "Estellar",
        tipo: "estatico",
        usos: "6 Cargas/Anochecer",
        descripcion: "Cuando gastas una carga, un conjunto de estrellas salen del objeto y lanza misiles mágicos como conjuro de nivel 5. También puedes gastar una carga para entrar o salir del plano astral."
    },
    tentaculos: {
        nombre: "Tentáculos",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción, hasta 3 creatura a 15 pies reciben una Tirada de Ataque con un bonificador de +9, al acertar inflige d6 contundente. Si aciertas los 3 ataques al mismo objetivo, realizas una Tirada de Salvación de Constitución (CD 15), si falla, sus pies se ven reducidos a la mitad, tiene Desventaja en las Tiradas de Salvación de Destreza y no tienen reacciones por 1 minuto. Además en cada turno, realizar una acción o acción adicional, pero no ambas. Al final de cada turno, puedes repetir la Tirada de Salvación, terminando el efecto sobre si mismo si tiene éxito"
    },
    kraken: {
        nombre: "Kraken",
        tipo: "estatico",
        usos: null,
        descripcion: "El daño de los ataques de tentáculos aumentan a 2d6 contundente mágico. Si aceirtas los 3 ataques al mismo objetivo, brota la cabeza del Kraken, la Tirada de Salvación aumenta a CD 20 y el daño auementa en un dado de daño por cada tentáculo."
    },
    marchitar: {
        nombre: "Marchitar",
        tipo: "estatico",
        usos: null,
        descripcion: "Al acertar daño con esta arma, realiza su daño normal, y puede gastar 1 carga para infligir 2d10 necrótico extra al objetivo. Además, el objetivo debe superar una Tirada de Salvación de Constitución CD 15 o tener desventaja en las pruebas de Habilidad y Salvación de Fuerza y Constitución por 1 hora."
    },
    pudrir: {
        nombre: "Pudrir",
        tipo: "estatico",
        usos: null,
        descripcion: "Al realizar daño necrótico, puedes añadirle tu modificador de competencia al daño. Tu daño necrótico no puede ser recuperado por medios no mágicos hasta un Descanso Largo."
    },
    obediencia: {
        nombre: "Obediencia",
        tipo: "estatico",
        usos: "1 carga/Amanecer",
        descripcion: "Como acción, tras presentar el objeto y verbalmente ordenar obediencia a cada creatura a 120 pies o menos. Cada objetivo debe tener éxito en una Tirada de Salvación de Sabiduría CD 15 o ser encantado por 8 horas. Mientras esté encantado de esta forma, te considera su líder de confianza. Si usted o sus compañeros le hacen daño o le ordenan algo contrario a su naturaleza, un objetivo deja de ser encatado de esta manera."
    },
    ola_de_terror: {
        nombre: "Ola de Terror",
        tipo: "estatico",
        usos: "3 cargas/d3 Amaneceres",
        descripcion: "Como acción, puedes gastar 1 carga para librar una ola de terror. Cada criatura de tu elección a 30 pies, debe realizar una Tirada de Salvación de Sabiduría (CD 15) o asustarse por 1 minuto de ti. Mientras se asuste de esta forma, la criatura se esfuerza por huir de ti, no tiene reacciones, solo puede usar Correr o intentar escapar de un efecto que le retiene el movimiento, si no tiene donde correr, usa Esquivar. Al final de cada turno, puedes repetir la Tirada de Salvación para liberarse"
    },
    colores_cent: {
        nombre: "Colores Centellantes",
        tipo: "estatico",
        usos: "3 cargas/d3 Amaneceres",
        descripcion: "Como acción, puedes gastar 1 carga para prender un patrón cambiante de tonos deslumbrantes hasta el final de tu siguiente turno. Durante ese tiempo, emites 30 pies de luz fuerte, 30 pies de luz ténue adicionales. Creaturas que te vean, tienen desventaja en las Tiradas de ataque contra ti. Además, cualquier creatura que pueda verte cuando activas la luz, debe realizar una Tirada de Salvación de Sabiduría o quedar aturdida hasta que termine el efecto"
    },
    vision_x: {
        nombre: "Visión X",
        tipo: "estatico",
        usos: null,
        descripcion: "Como Acción, pronuncias palabras de comando. Cuando lo haces puedes ver a través de las paredes y materia por 1 minuto. Visión de 30 pies, haciendo los solidos trasparentes para ti, no afecta la luz. La visión penetra 1 pie de piedra, 1 pulgada de metal común o 3 pies de madera o tierra. Sustancia más espesas, y plomo bloquean la visión. Cada vez que lo usas de nuevo antes de un Descanso Largo, debes tener éxito en una Tirada de Salvación de Constitución CD 15 o ganar un nivel de agotamiento"
    },
    enemigo_jurado: {
        nombre: "Enemigo Jurado",
        tipo: "estatico",
        usos: null,
        descripcion: "Cuando realizas una Tirada de Ataque a Distancia con este objeto, puedes elegir que el objetivo se vuelve tu enemigo jurado. Solo puede ver un enemigo jurado a la vez. El enemigo jurado dura 7 amaneceres o hasta que muera. Cuando el enemigo muere, puedes elegir uno nuevo el próximo amanecer.\nTu enemigo jurado no puede beneficiarse de cobertura, salvo total y tus tiradas de ataque son con ventajas. No tienes desventaja por largo alcance. Si el objetivo recibe daño, recibe 3d6 daño extra de daño perforante. Mientras tu enemigo jurado viva, tienes desventaja en cualquier otra Tirada de ataque con las demás armas o focos arcanos."
    },
    circulo_guerra: {
        nombre: "Circulo de Guerra",
        tipo: "estatico",
        usos: null,
        descripcion: "Como acción, gastas una carga y en un radio de 15 pies centrado en ti mismo se crea un circulo por un mínuto. Toda Tirada de Ataque and daño dentro del círculo aumenta en +3"
    }
};