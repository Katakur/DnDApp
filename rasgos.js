window.RASGOS = {
    // Objetos de Almacen de Artificiero
    vision_de_aguila: {
        nombre: "Visión de Águila",
        prerrequisitos: null,
        descripcion: "Ventaja en Percepción por vista. Puedes distinguir todo en tu visión en luz clara",
        opciones: null,
        usos: null
    },
    salto_largo: {
        nombre: "Salto Largo",
        prerrequisitos: null,
        descripcion: "Tus pies pasan a ser 30 pies, a menos que sea mayor, y tu velocidad no baja por peso. Tus saltos son 3 veces más alto",
        opciones: null,
        usos: null
    },
    seguir_delante: {
        nombre: "Seguir delante",
        prerrequisitos: null,
        descripcion: "Si al inicio de tu turno, te estás muriendo, te estabilizas. Cada vez que recuperas dado de golpe, duplicas el restulado",
        opciones: null,
        usos: null
    },
    flautista: {
        nombre: "Flautista",
        prerrequisitos: null,
        descripcion: "Las ratas de ningún tipo de atacarán a menos que tu las ataques a ellas.\n \nComo acción, puedes invocar un enjambre de ratas por cada carga gastada, mantienes el ritmo tocando como una Concentración de un Hechizo\n \nSi pierdes la concentración, las ratas se vuelven neutrales y pueden decidir si atacar o retirarse",
        opciones: null,
        usos: "3 cargas/d3 Amanecer"
    },
    gatillo_fragil: {
        nombre: "Gatillo Frágil",
        prerrequisitos: null,
        descripcion: "Cuando realizas una Tirada de Iniciativa le añades un bonificador de +10",
        opciones: null,
        usos: "1 carga/Amanecer"
    },
    talento_de_liebre: {
        nombre: "Talento de Liebre",
        prerrequisitos: null,
        descripcion: "Tras lanzar iniciativa, puedes como Reacción, lanzarte el conjuro Salto y obtener uno de los siguientes beneficios en tu reacción.\n \n-+5 a la iniciativa\n-Caminas 10 pies para realizar un salto largo o alto\n-Saltas y realizas un único ataque cuerpo a cuerpo a una creatura al rango de tu salto",
        opciones: null,
        usos: null
    },
    mente_reforzada: {
        nombre: "Mente Reforzada",
        prerrequisitos: null,
        descripcion: "No pueden leer tus pensamientos, saber tus mentiras, conocer su alineación o conocer tu tipo de criatura. Solo pueden comunicarse telepáticamente contigo si lo permites.\n \nPuedes usar una acción para que se haga invisible el anillo, hasta que te lo quites o mueras.\n \nSi mueres con el objeto sintonizado, tu alma es absorbida por el. Puedes quedarte ahí o morir definitivamente. Mientras estés en el objeto, puedes comunicarte telepáticamente con cualquier creatura que lo lleve. Quien lo lleve puede impedir esta comunicación telepática.",
        opciones: null,
        usos: null
    },
    taloneo: {
        nombre: "Taloneo",
        prerrequisitos: null,
        descripcion: "Como acción adicional, duplicas tus pies de caminata y los Ataques de oportunidad son con Desventaja. Otra acción adicional, termina el efecto.",
        opciones: null,
        usos: "10 minutos en total/Descanso Largo"
    },
    respiracion_artificial: {
        nombre: "Respiración Artificial",
        prerrequisitos: null,
        descripcion: "Cuando cubres tu rostro con este objeto, puedes respirar incluso en campos anti-magia, y no puede ser suprimida por magia",
        opciones: null,
        usos: null
    },
    vision_verdadera: {
        nombre: "Visión Verdadera",
        prerrequisitos: null,
        descripcion: "Como acción, pronuncias y gastas 1 carga, Obtienes visión verdadera por 120 pies por 10 minutos",
        opciones: null,
        usos: "3 cargas/d3 Amanecer"
    },
    visor: {
        nombre: "Visor",
        prerrequisitos: null,
        descripcion: "Al portar este objeto, las Tiradas de Ataque con arma a distancia aumentan en +1 por cada 10 pies que estés de la criatura.\nEste efecto aplica siempre que no tengas Desventaja en la Tirada de Ataque",
        opciones: null,
        usos: null
    },
    disparo_rafaga: {
        nombre: "Disparo en Ráfaga",
        prerrequisitos: null,
        descripcion: "Cuando realizas una Tirada de Ataque a Distancia con este objeto, si aciertas un golpe, el resto de ataques en ese mismo turno se realizan con Ventaja",
        opciones: null,
        usos: null
    },
    // Objetos Comunes
    magia_prestada: {
        nombre: "Magia Prestada",
        prerrequisitos: null,
        descripcion: "Puedes lanzar cualquier truco de la clase de magia del objeto, pero antes de lanzar cualquier truco requiere que el portador realice una prueba de Inteligencia (Arcana).\n \nLa prueba es CD 10, si la supera, lanza el conjuro usando tus modificadores de inteligencia, en caso contrario, no surte efecto y pierde el tiempo requerido del truco. (Acción, acción adicional, etc)",
        opciones: [
            {
                id: "mago",
                nombre: "Mago",
                costo: null,
                activo: false
            },
            {
                id: "hechicero",
                nombre: "Hechicero",
                costo: null,
                activo: false
            },
            {
                id: "brujo",
                nombre: "Brujo",
                costo: null,
                activo: false
            },
            {
                id: "druida",
                nombre: "Druida",
                costo: null,
                activo: false
            },
            {
                id: "clerigo",
                nombre: "Clérigo",
                costo: null,
                activo: false
            },
            {
                id: "bardo",
                nombre: "Bardo",
                costo: null,
                activo: false
            },
            {
                id: "artificiero",
                nombre: "Artificiero",
                costo: null,
                activo: false
            }
        ], 
        usos: null
    },
    trazado_temporal: {
        nombre: "Trazado temporal",
        prerrequisitos: null,
        descripcion: "Puedes escribir un mensaje de hasta 10 palabras en un objeto, este mensaje dura por 1 día",
        opciones: null,
        usos: "3 cargas/Amanecer"
    },
    foco_arcano: {
        nombre: "Foco Arcano",
        prerrequisitos: null,
        descripcion: "Este objeto de magia concentrada permite usarse como Foco Arcano. (Componente Material)",
        opciones: null,
        usos: null
    },
    frase_almacenada: {
        nombre: "Frase Almacenada",
        prerrequisitos: null,
        descripcion: "Este objeto puede decir hasta 6 frases en las condiciones que especifiques",
        opciones: null,
        usos: null
    },
    bendita_suerte: {
        nombre: "Bendita Suerte",
        prerrequisitos: null,
        descripcion: "Siempre obtienes un resultado favorable al apostar con el objeto (Basado en la forma que tiene)",
        opciones: null,
        usos: null
    },
    protesis: {
        nombre: "Protesis",
        prerrequisitos: null,
        descripcion: "Una parte faltante ahora es reemplazada con una parte mecánica de ese miembro.\n \nComo acción, te lo puedes sacar y si pierdes la sintonización se destruye.\n \nEn caso que la prótesis sea una extremidad, cuenta como arma mágica cuerpo a cuerpo competente. d8 de Fuerza, tiene propiedad lanzamiento (20/60). Tras atacar vuelve a ti.",
        opciones: null,
        usos: null
    },
    // Objetos Poco Comunes
    experto_en_tiro: {
        nombre: "Experto en Tiro",
        prerrequisitos: null,
        descripcion: "Obtienes competencia con Arco Corto y Largo. Tus Tiradas de ataque con este tipo de armas obtienen un bonificador +2",
        opciones: null,
        usos: null
    },
    resguardo: {
        nombre: "Resguardo",
        prerrequisitos: null,
        descripcion: "Obtienes un +1 al CA y Tiradas de Salvación",
        opciones: null,
        usos: null
    },
    velo_de_sigilo: {
        nombre: "Velo de Sigilo",
        prerrequisitos: null,
        descripcion: "Como acción, puedes ponerte y quitarte la capucha.Si te la pones, obtienes Desventaja en Percepción, pero Ventaja en Sigilo",
        opciones: null,
        usos: null
    },
    sigilo_instintivo: {
        nombre: "Sigilo instintivo",
        prerrequisitos: "Realizar 15 pruebas de Sigilo exitosos contra criaturas hostiles",
        descripcion: "Cuando lanzas iniciativa, puedes realizar una prueba de Sigilo como reacción, ates de que comience el primer turno del combate\n \nSi supera la Percepción pasiva de una criatura, te consideras oculto frente a ella al inicio del combate",
        opciones: null,
        usos: null
    },
    vuelo_nocturno: {
        nombre: "Vuelo nocturno",
        prerrequisitos: "Realizar 20 pruebas de sigilo exitosos contra criaturas hostiles",
        descripcion: "Mientras estás en luz tenue u oscuridad, puedes agarrar los bordes de la capa con ambas manos y usarla para volar 40 pies. Si sueltas los bordes de la capa o sales de la luz tenue u oscuridad, pierdes los pies de vuelo. También, mientras estés en luz tenue u oscuridad, puedes usar Polimorfia para volverte un Murciélago, pero mantienes tu Inteligencia, Sabiduría y Carisma",
        opciones: null,
        usos: "1 Polimorfia/Amanecer"
    },
    aracnido: {
        nombre: "Arácnido",
        prerrequisitos: "Realizar 25 pruebas de sigilo exitosos contra criaturas hostiles",
        descripcion: "Mientras posees este objeto, obtienes los siguientes beneficios:\n \n-Resistencia al Veneno\n-Velocidad de Escalada igual al de caminata\n-Puedes moverte sobre superficie arriba, abajo y sobre superficie verticales o boca abajo en techos si tienes las manos libres\n-No puedes quedar atrapado en tela de araña y puedes moverte a través de ella como si fuera terreno difícil\n-Como acción, puedes lanzar Telaraña (CD 13). La telaraña creada de esta manera, ocupa el doble del espacio.",
        opciones: null,
        usos: "1 Telaraña+/Amanecer"
    },
    coraza_guerrera: {
        nombre: "Coraza Guerrera",
        prerrequisitos: "Realizar 15 Ataques sorpresa exitosos",
        descripcion: "Cual hormiga que defiende tu templo que es tu cuerpo, obteniendo los siguientes beneficios.\n \n- Resistencia al Perforante, Cortante y Contundente.\n- Velocidad de Excavar igual a la mitad de tu caminata.\n- Explosión Defensiva: Cuando te consideres rodeado o busques producir un daño masivo, puedes como Acción, gastar una cantidad de dados de Golpe iguales a tu Competencia.Toda creatura a 5 pies de ti realiza una Tirada de Salvación de Destreza(CD 13) o recibe el daño igual a los dados de golpe gastados por ácido.Si la explosión es por sorpresa recibe el doble de daño.",
        opciones: null,
        usos: null
    },
    maxima_habilidad: {
        nombre: "Máxima Habilidad",
        prerrequisitos: null,
        descripcion: "Tu puntuación de Habilidad (Decidida por el objeto) es 19. No tiene efecto si tienes 19 o más",
        opciones: [
            {
                id: "fuerza",
                nombre: "Fuerza",
                costo: null,
                activo: false
            },
            {
                id: "destreza",
                nombre: "Destreza",
                costo: null,
                activo: false
            },
            {
                id: "constitucion",
                nombre: "Constitución",
                costo: null,
                activo: false
            },
            {
                id: "inteligencia",
                nombre: "Inteligencia",
                costo: null,
                activo: false
            },
            {
                id: "sabiduria",
                nombre: "Sabiduría",
                costo: null,
                activo: false
            },
            {
                id: "carisma",
                nombre: "Carisma",
                costo: null,
                activo: false
            }
        ],
        usos: null
    },
    refuerzo: {
        nombre: "Refuerzo",
        prerrequisitos: null,
        descripcion: "Obtienes un bonificador a las Tiradas de Salvación especificado en el objeto",
        opciones: [
            {
                id: "fuerza",
                nombre: "Fuerza",
                costo: null,
                activo: false
            },
            {
                id: "destreza",
                nombre: "Destreza",
                costo: null,
                activo: false
            },
            {
                id: "constitucion",
                nombre: "Constitución",
                costo: null,
                activo: false
            },
            {
                id: "inteligencia",
                nombre: "Inteligencia",
                costo: null,
                activo: false
            },
            {
                id: "sabiduria",
                nombre: "Sabiduría",
                costo: null,
                activo: false
            },
            {
                id: "carisma",
                nombre: "Carisma",
                costo: null,
                activo: false
            }
        ],
        usos: null
    },
    errante: {
        nombre: "Errante",
        prerrequisitos: null,
        descripcion: "Obtienes un tipo de movimiento adicional igual a tus pies de movimiento. Además, tienes +5 en tus Tiradas de Atletismo relacionadas al tipo de movimiento obtenido.\n \nPuedes usar el conjunto de pies adicionales que tengas por este rasgo una cantidad de tiempo igual a 10 minutos por día en total. Si estabas escalando o volando, bajas 30 pies por ronda",
        opciones: [
            {
                id: "escalada",
                nombre: "Escalada",
                costo: null,
                activo: false
            },
            {
                id: "nado",
                nombre: "Nado",
                costo: null,
                activo: false
            },
            {
                id: "vuelo",
                nombre: "Vuelo",
                costo: null,
                activo: false
            }
        ],
        usos: "10 minutos/Amanecer"
    },
    errante_mejorada: {
        nombre: "Errante Mejorada+",
        prerrequisitos: "Recorrer 500 pies en combate con el movimiento de Errante",
        descripcion: "El objeto posee cargas que pueden gastarse para lanzar conjuros innatos.",
        opciones: [
            {
                id: "escalada_arana",
                nombre: "Escalada de Araña",
                costo: "1 carga",
                activo: false
            },
            {
                id: "alterar_forma",
                nombre: "Alterar forma (Adaptación acuática)",
                costo: "1 carga",
                activo: false
            },
            {
                id: "vuelo",
                nombre: "Vuelo",
                costo: "3 cargas",
                activo: false
            }
        ],
        usos: "3 cargas/d3 Amanecer"
    },
    polimorfia_mejorada: {
        nombre: "Polimorfia Mejorada",
        prerrequisitos: "Usar Polimorfia sobre ti mismo 10 veces",
        descripcion: "Esta versión de Polimorfia, mantienes tu Inteligencia, Sabiduría y Carisma. Puedes lanzar Conjuros en forma animal y obtienes resistencia a todo tipo de daño mientras tengas esta forma.",
        opciones: null,
        usos: null
    },
    desviar_misiles: {
        nombre: "Desviar Misiles",
        prerrequisitos: null,
        descripcion: "Si recibes un ataque de arma a distancia y tienes una mano libre, puedes reducir el daño a d10 + Modificador de Destreza. Si reduces el daño a 0 y el misil cae en tu mano, puedes atraparlo",
        opciones: null,
        usos: null
    },
    vinculo_telepatico: {
        nombre: "Vínculo Telepático",
        prerrequisitos: null,
        descripcion: "Como acción, puedes lanzar Detección de Pensamiento (CD 13) desde el. Mientras mantengas la concentración del hechizo, puedes mandarle mensajes al vinculado como Acción adicional. El vinculado puede responder con su propia Acción adicional\n \nMientras esté vinculado, puedes usar tu Acción para lanzar Sugerencia (CD 13) sobre directamente la criatura",
        opciones: null,
        usos: "Sugerencia 1/Amanecer)"
    },
    vinculo_maldito: {
        nombre: "Vinculo maldito",
        prerrequisitos: null,
        descripcion: "Esta arma maldita, otorga Desventaja a cualquier Tirada de Ataque con arma que no sea esta. Además, cada vez que recibes daño en combate lanzas Tirada de Salvación de Sabiduría (CD 15). Si falla, te esfuerzas por pegarle a la criatura que te dañó, hasta que caigas a 0 puntos de golpe o logres golpearle, o hasta que no alcances a la creatura en un ataque cuerpo a cuerpo contra ella.\n \nSi usas Destierro sobre el objeto, pierde su maldición dejando al arma con sus respectivos bonificadores y resto de rasgos",
        opciones: null,
        usos: null
    },
    aptitud_mejorada: {
        nombre: "Aptitud Mejorada",
        prerrequisitos: null,
        descripcion: "+1 en las Tiradas de Salvación y Pruebas de habilidad",
        opciones: null,
        usos: null
    },
    recarga: {
        nombre: "Recarga",
        prerrequisitos: "Usar marea 20 veces",
        descripcion: "Como acción, pronuncias palabras de comando y recuperas un espacio de conjuro. Si la ranura gastada era de nivel 4 o superior, la nueva es de nivel 3",
        opciones: null,
        usos: "1 carga/Amanecer"
    },
    recuperacion_arcana: {
        nombre: "Recuperación_Arcana+",
        prerrequisitos: null,
        descripcion: "Los niveles de recuperación de ranura de hechizo de Recuperación Arcana aumento en 1",
        opciones: null,
        usos: null
    },
    canalizar_divinidad: {
        nombre: "Canalizar Divinidad+",
        prerrequisitos: null,
        descripcion: "Obtienes un uso de Canalizar Divinidad",
        opciones: null,
        usos: null
    },
    precision_arcana: {
        nombre: "Precisión Arcana",
        prerrequisitos: null,
        descripcion: "Tus Tirada de Ataque de Hechizo ignoran la cobertura media",
        opciones: null,
        usos: null
    },
    // Objetos Raro
    defensa_contra_proyectiles: {
        nombre: "Defensa contra Proyectiles",
        prerrequisitos: null,
        descripcion: "+2 al CA contra tiradas de ataque a distancia",
        opciones: null,
        usos: null
    },
    defensa_descubierto: {
        nombre: "Defensa descubierto",
        prerrequisitos: null,
        descripcion: "+2 al CA si no tienes armadura, ni escudo",
        opciones: null,
        usos: null
    },
    proteccion: {
        nombre: "Protección",
        prerrequisitos: null,
        descripcion: "Como reacción, puedes dirigir ataque a una creatura a 5 pies a ti",
        opciones: null,
        usos: null
    },
    repulsion: {
        nombre: "Repulsión",
        prerrequisitos: null,
        descripcion: "Como reacción, cuando una tirada de ataque cuerpo a cuerpo falla contra ti, empujas a la creatura atacante 10 pies en dirección contraria",
        opciones: null,
        usos: "3 cargas/d3 Amanecer"
    },
    resistencia_contra_proyectiles: {
        nombre: "Resistencia contra proyectiles",
        prerrequisitos: null,
        descripcion: "Resistencia al daño hecho con armas a distancia",
        opciones: null,
        usos: null
    },
    atraccion: {
        nombre: "Atracción",
        prerrequisitos: null,
        descripcion: "Todo ataque con arma a distancia a 10 pies de ti, ya sea del origen del ataque o el objetivo del ataque, te vuelve a ti su objetivo",
        opciones: null,
        usos: null
    },
    resistencia_maldita: {
        nombre: "Resistencia maldita",
        prerrequisitos: null,
        descripcion: "Obtienes resistencia entre Contundente, Perforante o Cortante, las otras no elegidas son vulnerabilidades",
        opciones: [
            {
                id: "contundente",
                nombre: "Resistencia al Contundente, Vulnerabilidad al Perforante y Cortante",
                costo: null,
                activo: false
            },
            {
                id: "perforante",
                nombre: "Resistencia al Perforante, Vulnerabilidad al Contundente y Cortante",
                costo: null,
                activo: false
            },
            {
                id: "cortante",
                nombre: "Resistencia al Cortante, Vulnerabilidad al Perforante y Contundente",
                costo: null,
                activo: false
            }
        ],
        usos: null
    },
    evasion: {
        nombre: "Evasión",
        prerrequisitos: null,
        descripcion: "Cuando fallas una Tirada de Salvación de Destreza, como reacción, puedes gastar 1 carga y superarla",
        opciones: null,
        usos: "3 cargas/d3 Amanecer"
    },
    movimiento_libre: {
        nombre: "Movimiento libre",
        prerrequisitos: null,
        descripcion: "El terreno difícil no cueste movimiento extra, la magia no reduce tu velocidad, ni paralizarte, ni restringirte.",
        opciones: null,
        usos: null
    },
    tundra: {
        nombre: "Tundra",
        prerrequisitos: "Moverte 200 pies en Terreno Difícil",
        descripcion: "Resistencia al Frío, inmunidad a las bajas temperaturas. Tus Tiradas de ataque con armas obtienen un d6 de frío.",
        opciones: null,
        usos: null
    },
    // Resguardo ya está
    carga: {
        nombre: "Carga",
        prerrequisitos: null,
        descripcion: "Como Acción, puedes gastar de 1 a 3 cargas para realizar una Tirada de Ataque de Hehcizo a 60 pies que produce una cabeza de un animal que simula una carga con un bonificador de +7. En un acierto, por cada carga realiza 2d10 de Fuerza y es empujado a 5 pies de distancia\n \nAlternativamente, puedes gastar 1 a 3 cargas como Acción para tratar de romper un objeto a 60 pies que no se esté usando o trasportando. Realiza una Prueba de Fuerza con un bonificador +5 por carga.",
        opciones: "3 Cargas/d3 Amanecer",
        usos: null
    },
    vision_x: {
        nombre: "Visión X",
        prerrequisitos: null,
        descripcion: "Como Acción, pronuncias palabras de comando. Cuando lo haces puedes ver a través de las paredes y materia por 1 minuto. Visión de 30 pies, haciendo los solidos trasparentes para ti, no afecta la luz. La visión penetra 1 pie de piedra, 1 pulgada de metal común o 3 pies de madera o tierra. Sustancia más espesas, y plomo bloquean la visión.\n \nCada vez que lo usas de nuevo antes de un Descanso Largo, debes tener éxito en una Tirada de Salvación de Constitución CD 15 o ganar un nivel de agotamiento",
        opciones: null,
        usos: null
    },
    invisbilidad_ante_la_adiviniacion: {
        nombre: "Invisibilidad ante la Adivinación",
        prerrequisitos: null,
        descripcion: "Estás oculto de la magia de adivinación. No puedes ser objetivo de esa magia ni percibido por sensores mágicos de adivinación",
        opciones: null,
        usos: null
    },
    resistencia_arcana: {
        nombre: "Resistencia Arcana",
        prerrequisitos: null,
        descripcion: "Resistencia al daño por Fuerza y tienes inmunidad a Misiles Mágicos",
        opciones: null,
        usos: null
    },
    // Vuelo Nocturno está abajo de Velo de Sigilo
    multiojos: {
        nombre: "Multiojos",
        prerrequisitos: null,
        descripcion: "Mientras posees este objeto, obtienes los siguientes beneficios\n \n-Te permite ver en todas las direcciones y tienes Ventaja en Percepción que depende de la vista\n-Visión en la socuridad 120 pies\nPuedes ver objetos y criaturas invisibles, como dentro del plano etéreo a 120 pies\n \nNo se puede cerrar ni desviar esos ojos. Aunque puedes cerrarlos, no cuentan como tal mientras poseas el objeto. Si usan Luz a la túnica o Luz diruna a 5 pies de ti o menos, quedas ciego por 1 minuto. Al final de cada turno, realizas una Tirada de Salvación de Constitución CD 11 (Luz) o 15 (Luz diurna), termina la ceguera en un éxito",
        opciones: null,
        usos: null
    },
    obediencia: {
        nombre: "Obediencia",
        prerrequisitos: null,
        descripcion: "Como acción, tras presentar el objeto y verbalmente ordenar obediencia a cada creatura a 120 pies o menos. Cada objetivo debe tener éxito en una Tirada de Salvación de Sabiduría CD 15 o ser encantado por 8 horas. Mientras esté encantado de esta forma, te considera su líder de confianza. Si usted o sus compañeros le hacen daño o le ordenan algo contrario a su naturaleza, un objetivo deja de ser encatado de esta manera.",
        opciones: "1 carga/Amanecer",
        usos: null
    },
    tentaculos: {
        nombre: "Tentáculos",
        prerrequisitos: null,
        descripcion: "Como acción, hasta 3 creatura a 15 pies reciben una Tirada de Ataque con un bonificador de +9, al acertar inflige d6 contundente. Si aciertas los 3 ataques al mismo objetivo, realizas una Tirada de Salvación de Constitución (CD 15), si falla, sus pies se ven reducidos a la mitad, tiene Desventaja en las Tiradas de Salvación de Destreza y no tienen reacciones por 1 minuto\n \nAdemás en cada turno, realizar una acción o acción adicional, pero no ambas. Al final de cada turno, puedes repetir la Tirada de Salvación, terminando el efecto sobre si mismo si tiene éxito",
        opciones: null,
        usos: null
    },
    kraken: {
        nombre: "Kraken",
        prerrequisitos: "Usar Tentáculos 25 veces",
        descripcion: "El daño de los ataques de tentáculos aumentan a 2d6 contundente mágico. Si aceirtas los 3 ataques al mismo objetivo, brota la cabeza del Kraken, la Tirada de Salvación aumenta a CD 20 y el daño auementa en un dado de daño por cada tentáculo.",
        opciones: null,
        usos: null
    },
    herida_grave: {
        nombre: "Herida Grave",
        prerrequisitos: null,
        descripcion: "El daño realizado con esta arma, solo se puede regenerar con un Descanso Corto o Largo, no funciona regeneración, magia o cualquier otro medio.\n \nUna vez por turno, cada vez que realices daño con esta arma puedes herir al objetivo, mientras esté herida de esta forma, cada inicio de ronda recibe 1d4 necrótico por cada vez que haya sido herido, y luego una Tirada de Salvación de Constitución (CD 15), terminando el efecto de todas las heridas sobre si mismo en un éxito. Alternativamente, la creatura herida u otra creatura a 5 pies, puedes usar una Acción para realizar Medicina (CD 15), terminando el efecto de las heridas",
        opciones: null,
        usos: null
    },
    roba_vida: {
        nombre: "Roba Vida",
        prerrequisitos: null,
        descripcion: "Si sacas crítico en la Tirada de Ataque, este objetivo recibe 10 de daño necrótico no reducible extra, siempre que no sea constructo o no-muerto. Ganas puntos de golpe iguales al daño necrótico",
        opciones: null,
        usos: null
    },
    ardiente: {
        nombre: "Ardiente",
        prerrequisitos: null,
        descripcion: "Como acción adicional, prendes el arma en fuego, brilla 40 pies de luz brillante y 40 pies adicionales de luz suave. Mientras esté en llamas, inflige 2d6 de Fuego adicional en cada golpe, el fuego dura hasta que sueltes el arma, uses otra acción adicional para apagarla o envaines el arma.",
        opciones: null,
        usos: null
    },
    ola_de_terror: {
        nombre: "Ola de Terror",
        prerrequisitos: null,
        descripcion: "Como acción, puedes gastar 1 carga para librar una ola de terror. Cada criatura de tu elección a 30 pies, debe realizar una Tirada de Salvación de Sabiduría (CD 15) o asustarse por 1 minuto de ti. Mientras se asuste de esta forma, la criatura se esfuerza por huir de ti, no tiene reacciones, solo puede usar Correr o intentar escapar de un efecto que le retiene el movimiento, si no tiene donde correr, usa Esquivar. Al final de cada turno, puedes repetir la Tirada de Salvación para liberarse",
        opciones: "3 cargas/d3 Amanecer",
        usos: null
    },
    fuerza_suprema: {
        nombre: "Fuerza Suprema",
        prerrequisitos: null,
        descripcion: "Tu puntuación de Fuerza cambia (lo determina el objeto). No surte efecto si tienes misma cantidad o más",
        opciones: [
            {
                id: "21",
                nombre: "Puntuación de Fuerza 21",
                costo: null,
                activo: false
            },
            {
                id: "23",
                nombre: "Puntuación de Fuerza 23",
                costo: null,
                activo: false
            },
            {
                id: "25",
                nombre: "Puntuación de Fuerza 25",
                costo: null,
                activo: false
            },
            {
                id: "27",
                nombre: "Puntuación de Fuerza 27",
                costo: null,
                activo: false
            }
        ],
        usos: null
    },
    inmunidad_al_estado: {
        nombre: "Inmunidad a un estado",
        prerrequisitos: null,
        descripcion: "Obtienes una inmunidad a un estado de la lista (Según el objeto, una lista d10 aleatorio o a elección)",
        opciones: [
            {
                id: "asustado",
                nombre: "Asustado",
                costo: null,
                activo: false
            },
            {
                id: "agarrado",
                nombre: "Agarrado",
                costo: null,
                activo: false
            },
            {
                id: "apresado",
                nombre: "Apresado",
                costo: null,
                activo: false
            },
            {
                id: "encantado",
                nombre: "Encantado",
                costo: null,
                activo: false
            },
            {
                id: "derribado",
                nombre: "Derribado",
                costo: null,
                activo: false
            },
            {
                id: "ensordecido",
                nombre: "Ensordecido",
                costo: null,
                activo: false
            },
            {
                id: "cegado",
                nombre: "Cegado",
                costo: null,
                activo: false
            },
            {
                id: "envenenado",
                nombre: "Envenenado",
                costo: null,
                activo: false
            },
            {
                id: "petrificado",
                nombre: "Petrificado",
                costo: null,
                activo: false
            },
            {
                id: "paralizado",
                nombre: "Paralizado",
                costo: null,
                activo: false
            },
            {
                id: "dormido",
                nombre: "Dormido",
                costo: null,
                activo: false
            },
            {
                id: "agotado",
                nombre: "Agotado",
                costo: null,
                activo: false
            }
        ],
        usos: null
    },
    resistencia_al_danno: {
        nombre: "Resistencia al Daño",
        prerrequisitos: null,
        descripcion: "Obtienes una resistencia a un tipo de daño de la lista (Según el objeto, una lista d10 aleatorio o a elección)",
        opciones: [
            {
                id: "contundente",
                nombre: "Contundente",
                costo: null,
                activo: false
            },
            {
                id: "perforante",
                nombre: "Perforante",
                costo: null,
                activo: false
            },
            {
                id: "cortante",
                nombre: "Cortante",
                costo: null,
                activo: false
            },
            {
                id: "acido",
                nombre: "Acido",
                costo: null,
                activo: false
            },
            {
                id: "frio",
                nombre: "Frío",
                costo: null,
                activo: false
            },
            {
                id: "fuego",
                nombre: "Fuego",
                costo: null,
                activo: false
            },
            {
                id: "fuerza",
                nombre: "Fuerza",
                costo: null,
                activo: false
            },
            {
                id: "relampago",
                nombre: "Relámpago",
                costo: null,
                activo: false
            },
            {
                id: "necrotico",
                nombre: "Necrótico",
                costo: null,
                activo: false
            },
            {
                id: "veneno",
                nombre: "Veneno",
                costo: null,
                activo: false
            },
            {
                id: "psíquico",
                nombre: "Psiquico",
                costo: null,
                activo: false
            },
            {
                id: "radiante",
                nombre: "Radiante",
                costo: null,
                activo: false
            },
            {
                id: "trueno",
                nombre: "Trueno",
                costo: null,
                activo: false
            }
        ],
        usos: null
    },
    // Objetos Muy Raros
    ataque_veloz: {
        nombre: "Ataque Veloz",
        prerrequisitos: null,
        descripcion: "En cada turno, puedes realizar un Ataque con arma como acción adicional",
        opciones: null,
        usos: null
    },
    levitacion: {
        nombre: "Levitación",
        prerrequisitos: null,
        descripcion: "Como acción adicional, pronuncias unas palabras de comando y puedes hacer que el Objeto evite hasta 30 pies de ti. Puedes terminar su duración si la agarras, sales de su cuerpo o cumple su función.\n \nSi es un arma, como acción adicional, puedes realizar una Tirada de Ataque y daño con tus modificadores de daño. Realiza hasta 4 ataques\n \nSi es un escudo, como Acción adicional, puedes aumentar la clase de armadura igual a la del escudo a una creatura de tu elección dentro de tu rango (incluyéndote), se esforzará por seguirla y protegerla flotando hasta 30 pies de ti, bloquea hasta 4 ataques.\n \nTras cumplir su función vuela 30 pies e intenta volver a tu mano. Si no alcanza o tienes las manos ocupadas cae al suelo",
        opciones: null,
        usos: null
    },
    muerte_instantanea: {
        nombre: "Muerte Instantánea",
        prerrequisitos: null,
        descripcion: "Si aciertas un golpe crítico con esta arma y la criatura tiene menos de 100 puntos de golpe, debe superar una Tirada de Salvación de Constitución (CD 15) o morir instantánea. (Constructos y no muertos son inmunes). El objeto consume una carga si la creatura muere. Cuando se queda sin cargas restantes este rasgo se pierde",
        opciones: null,
        usos: "d8+1 cargas"
    },
    arrojadiza: {
        nombre: "Arrojadiza+",
        prerrequisitos: null,
        descripcion: "Tus tiradas de daño con armas Arrojadizas infligen un d8 extra. Tras el ataque vuelve a tu mano.",
        opciones: null,
        usos: null
    },
    versatil: {
        nombre: "Versátil+",
        prerrequisitos: null,
        descripcion: "Tus tiradas de daño con armas Versátil infligen un tipo de dado de daño más alto (d4->d6->d8->d10->d12)",
        opciones: null,
        usos: null
    },
    matagigantes: {
        nombre: "Matagigantes",
        prerrequisitos: null,
        descripcion: "Si el objetivo es de talla Gigante obtiene 2d8 de daño extra realizado por esta arma",
        opciones: null,
        usos: null
    },
    // Arcano
    resistencia_magia: {
        nombre: "Resistencia Mágica+",
        prerrequisitos: null,
        descripcion: "Resistencia en las Tiradas de Salvación de Hechizo y otros efectos mágicos. Además de que la Tirada de Ataque de Hechizos contra ti son con Desventaja",
        opciones: null,
        usos: null
    },
    armadura_mago: {
        nombre: "Armadura de Mago",
        prerrequisitos: null,
        descripcion: "Tu CA al usar este objeto es 13 + Modificador de Destreza",
        opciones: null,
        usos: null
    },  
    // REVISAR CUAL ES CONOCIMIENTO ARCANO
    conocimiento_arcano: {
        nombre: "Conocimiento Arcano",
        prerrequisitos: null,
        descripcion: "Tu CA al usar este objeto es 13 + Modificador de Destreza",
        opciones: null,
        usos: null
    },
    aprendizaje_heredado: {
        nombre: "Aprendizaje heredado",
        prerrequisitos: null,
        descripcion: "Aprendes un truco y obtienes una lista de conjuros ampliados que siempre están preparados. Los modificadores que usa son los de la ranura de hechizo que gastas",
        opciones: [
            {
                id: "fuego",
                nombre: "Fuego\n \nTruco: Descarga de Fuego\nConjuros: Manos Ardientes",
                costo: null,
                activo: false
            },
            {
                id: "relampago",
                nombre: "Relámpago\n \nTruco: Señuelo relámpago\nConjuros: Rayo de Bruja",
                costo: null,
                activo: false
            },
            {
                id: "trueno",
                nombre: "Trueno\n \nTruco: Tronido\nConjuros: Onda Atronadora",
                costo: null,
                activo: false
            },
            {
                id: "frio",
                nombre: "Frío\n \nTruco: Congelación\nConjuros: Cuchillo de Hielo",
                costo: null,
                activo: false
            },
            {
                id: "veneno",
                nombre: "Veneno\n \nTruco: Spray venenoso\nConjuros: Rayo de Enfermedad",
                costo: null,
                activo: false
            },
            {
                id: "acido",
                nombre: "Acido\n \nTruco: Salpicadura de Ácido\nConjuros: Mezcla Cáustica de Tasha",
                costo: null,
                activo: false
            },
            {
                id: "radiante",
                nombre: "Radiante\n \nTruco: Llama Sagrada\nConjuros: Rayo Guía",
                costo: null,
                activo: false
            },
            {
                id: "necrotico",
                nombre: "Necrótico\n \nTruco: Toque de la muerte\nConjuros: Inflingir Herida",
                costo: null,
                activo: false
            }
        ],
        usos: "1 carga/Amanecer"
    },
    conjuro_almacenado: {
        nombre: "Conjuro Almacenado",
        prerrequisitos: null,
        descripcion: "Un objeto con un Conjuro innato, en caso de tener CD es 10+Competencia y su Tirada de Ataque de Hechizo es  2+Competencia.\n \nSi el conjuro requiere Concentración normalmente, ahora dura su máxima duración o su límite condicional",
        opciones: [
            {
                id: "vinculo_tierra",
                nombre: "Vinculo Tierra (100p)",
                costo: null,
                activo: false
            },
            {
                id: "forma_gaseosa",
                nombre: "Forma Gaseosa (Propio)",
                costo: null,
                activo: false
            },
            {
                id: "paso_brumoso",
                nombre: "Paso Brumoso (Propio)",
                costo: null,
                activo: false
            },
            {
                id: "circulo_teletrasportacion",
                nombre: "Circulo de teletrasporatación (Centrado sobre ti mismo)",
                costo: null,
                activo: false
            },
            {
                id: "rafaga_de_viento",
                nombre: "Ráfaga de Viento (Propio)",
                costo: null,
                activo: false
            },
            {
                id: "reencarnar",
                nombre: "Reencarnar (Propio Automático)",
                costo: null,
                activo: false
            },
            {
                id: "revivificar",
                nombre: "Revivificar (Toque)",
                costo: null,
                activo: false
            },
            {
                id: "aura_vida",
                nombre: "Aura de Vida (Propio)",
                costo: null,
                activo: false
            },
            {
                id: "aura_pureza",
                nombre: "Aura de Pureza (Propio)",
                costo: null,
                activo: false
            }

        ],
        usos: "1 Carga cada Conjuro/Amanecer"
    },
    lenguaje_prestado: {
        nombre: "Lenguaje Prestado",
        prerrequisitos: null,
        descripcion: "Obtienes competencia a un tipo de lenguaje otorgado por el objeto",
        opciones: [
            {
                id: "primordial",
                nombre: "Primordial",
                costo: null,
                activo: false
            },
            {
                id: "silvano",
                nombre: "Silvano",
                costo: null,
                activo: false
            },
            {
                id: "draconido",
                nombre: "Dracónido",
                costo: null,
                activo: false
            },
            {
                id: "abisal",
                nombre: "Abisal",
                costo: null,
                activo: false
            },
            {
                id: "celestial",
                nombre: "Celestial",
                costo: null,
                activo: false
            }
        ],
        usos: null
    },
    // Orbes
    evocacion_imprudente: {
        nombre: "Evocación Imprudente",
        prerrequisitos: null,
        descripcion: "Si se lanza un Conjuro de Evocación, puedes cubrir una cantidad de Criaturas igual a tu Competencia para que no pueda recibir ningún tipo de daño del conjuro lanzado",
        opciones: null,
        usos: "2 cargas/Amanecer"
    },
    onda_de_abjuracion: {
        nombre: "Onda de Adjuración",
        prerrequisitos: null,
        descripcion: "Si se lanza un Conjuro de Abjuración, la criatura afectada emite una onda de choque, cualquier criatura a elección al rededor del objetivo recibe un d4 de Fuerza",
        opciones: null,
        usos: null
    },
    alma_curativa: {
        nombre: "Alma Curativa",
        prerrequisitos: null,
        descripcion: "Si restauras puntos de golpe a una creatura aliada usando un conjuro, la creatura la empezará a seguir un espíritu curativo, que al final del siguiente turno de la creatura restaura la misma cantidad de puntos y desaparece",
        opciones: null,
        usos: "2 cargas/Amanecer"
    },
    combate_en_grupo: {
        nombre: "Combate en Grupo",
        prerrequisitos: null,
        descripcion: "Tus Tiradas de Ataque de Hechizo que requieren al menos un Espacio de Conjuro, y tiene una invocación tuya a 5 pies de la creatura objetivo, son con Ventaja.",
        opciones: null,
        usos: null
    },
    vision_robada: {
        nombre: "Visión Robada",
        prerrequisitos: null,
        descripcion: "Cuando una creatura es golpeada por un Hechizo que requiera al menos un Espacio de Conjuro lanzado por ti, durante el siguiente minuto como reacción, puedes ver a través de sus ojos",
        opciones: null,
        usos: "2 cargas/Amanecer"
    },
    ilusion_superior: {
        nombre: "Ilusión Superior",
        prerrequisitos: null,
        descripcion: "Tus creaciones realizadas por Conjuros de Ilusión son altamente realistas, las tiradas de Percepción para identificarlas se hacen con Desventajas",
        opciones: null,
        usos: null
    },
    canje_trasmutador: {
        nombre: "Canje Trasmutador",
        prerrequisitos: null,
        descripcion: "Cuando lanzas un Conjuro con una Ranura de Hechizo de nivel 2 o Superior, puedes gastar una carga para que cueste un Espacio de Conjuro menor",
        opciones: null,
        usos: "2 cargas/Amanecer"
    },
    control_de_movimiento: {
        nombre: "Control de Movimiento",
        prerrequisitos: null,
        descripcion: "Cuando pierdas la Concentración en un Conjuro, puedes moverte a un Espacio desocupado que puedas ver a 30 pies",
        opciones: null,
        usos: null
    },
    // Dragones
    aguanta_dragones: {
        nombre: "Aguanta Dragones",
        prerrequisitos: null,
        descripcion: "Ventaja en las Tiradas de Salvación contra Presencia Pavorosa y Armas de Aliento de Dragón.",
        opciones: null,
        usos: null
    },
    resistencia_dragon: {
        nombre: "Resistencia Dragón",
        prerrequisitos: null,
        descripcion: "Resistencia a un tipo de daño dependiendo del color del dragón",
        opciones: [
            {
                id: "acido",
                nombre: "Negro o Cobre (Acido)",
                costo: null,
                activo: false
            },
            {
                id: "relampago",
                nombre: "Azul o Bronce (Relámpago)",
                costo: null,
                activo: false
            },
            {
                id: "frio",
                nombre: "Blanco o Plata (Frío)",
                costo: null,
                activo: false
            },
            {
                id: "fuego",
                nombre: "Rojo, Oro o Latón (Fuego) ",
                costo: null,
                activo: false
            },                     
            {
                id: "veneno",
                nombre: "Verde (Veneno)",
                costo: null,
                activo: false
            }
        ],
        usos: null
    },
    instinto_dragon: {
        nombre: "Instinto Dragón",
        prerrequisitos: null,
        descripcion: "Como acción, puedes sentir la presencia y dirección de otro dragón del mismo tipo de armadura en 30 millas",
        opciones: null,
        usos: "1 carga/Amanecer"
    },
    // Druídicos
    venenoso: {
        nombre: "Venenoso",
        prerrequisitos: null,
        descripcion: "Cuando aciertas un Golpe con esta arma, la envenenas, dura hasta el final de su siguiente turno",
        opciones: null,
        usos: "2 carga/Amanecer"
    },
    corrosivo: {
        nombre: "Corrosivo",
        prerrequisitos: "Envenenar 15 criaturas hostiles",
        descripcion: "Tu Daño de Veneno con este objeto es Especial, este especial Veneno supera Resistencias y una creatura Inmune, recibe daño como si fuera Resistente",
        opciones: null,
        usos: null
    },
    marea: {
        nombre: "Marea",
        prerrequisitos: null,
        descripcion: "Si una creatura a 30 pies de ti (Incluyéndote) realiza una Tirada de Salvación, como Reacción puedes gasta una carga para agregarle un bonificador o penalizador igual a un d4.",
        opciones: null,
        usos: "2 carga/Amanecer"
    },
    dominio_acuatico: {
        nombre: "Dominio Acuático",
        prerrequisitos: "Agregar el penalizador de Marea 10 veces",
        descripcion: "Puedes usar Dominar bestia (CD 15) para bestias con natación innata",
        opciones: null,
        usos: null
    },
    respiracion_adaptativa: {
        nombre: "Respiración adaptativa",
        prerrequisitos: "Agregar el bonificador de Marea 10 veces",
        descripcion: "Puedes respirar en cualquier entorno y tienes Ventaja en las Tiradas de Salvación contra gases, venenos inhalados y armas de aliento de algunos Dragones",
        opciones: null,
        usos: null
    },
    elevacion_mar: {
        nombre: "Elevación del mar",
        prerrequisitos: "realizar 15 Tiradas de Salvación exitosos",
        descripcion: "Marea incrementa su dado a un d6. Además, puedes añadirlo a Pruebas de Habilidad, Tiradas de Ataque y Daño.",
        opciones: null,
        usos: null
    },
    quemadura: {
        nombre: "Quemadura",
        prerrequisitos: null,
        descripcion: "Tras acertar tu primera Tirada de Ataque cuerpo a cuerpo contra una criatura, esta queda marcada hasta el inicio de su siguiente ronda, donde todo el daño por Fuego recibido por esta ronda se repite",
        opciones: null,
        usos: "2 carga/Amanecer"
    },
    estallido: {
        nombre: "Estallido",
        prerrequisitos: "Realizar 20 de daño por Fuego con este objeto",
        descripcion: "Cuando infliges daño por Fuego con este objeto, las brasas queman el mismo daño por fuego a toda creatura de tu elección a 5p del objetivo",
        opciones: null,
        usos: null
    },
    autocuracion: {
        nombre: "Autocuración",
        prerrequisitos: "Realiza 15 Tiradas de Salvación exitosa",
        descripcion: "Como acción, puedes recuperar magicamente 2d8+2 puntos de golpe",
        opciones: null,
        usos: null
    },
    conjuro_mutado: {
        nombre: "Conjuro Mutado",
        prerrequisitos: "Usa este Foco Arcano para lanzar 15 Conjuros",
        descripcion: "Al realizar un Conjuro de daño por Fuego, Frío, Relámpago, Trueno o Ácido. Puedes opcionalmente volverlo más fuerte de lo normal para superar resistencias",
        opciones: null,
        usos: "3 cargas/d3 Amanecer"
    },
    invocacion_elemental: {
        nombre: "Invocación Elemental",
        prerrequisitos: null,
        descripcion: "Como acción, puedes gastar cargas para invocar Mefits (1 carga) o Elemental (3 cargas) del tipo determinado por el Objeto, esta invocación dura por 1 minuto.",
        opciones: [
            {
                id: "agua",
                nombre: "Agua: Mephit de Hielo y Elemental de Agua",
                costo: null,
                activo: false
            },
            {
                id: "fuego",
                nombre: "Fuego: Mephit de Fuego y Elemental de Fuego",
                costo: null,
                activo: false
            },
            {
                id: "tierra",
                nombre: "Tierra: Mephit de Polvo y Elemental de Tierra",
                costo: null,
                activo: false
            }
        ],
        usos: null
    },
    descanso_rapido: {
        nombre: "Descanso Relajante",
        prerrequisitos: null,
        descripcion: "Requieres solo de la mitad de tiempo para recuperar los beneficios de un Descanso Largo. Y no pueden tomarte por sorpresa mientras descansas",
        opciones: null,
        usos: "1 carga/en d3 Amanecer(es)"
    },
    dulce_sueño: {
        nombre: "Descanso Relajante",
        prerrequisitos: "Obten 100 puntos de Descansos. Los Descansos cortos dan 1 punto, los largos dan 10 puntos",
        descripcion: "Si tomas un día de no sobre esfuerzo (Lo establece el GM), Tras el Descanso Largo obtienes Inspiración [No acumulable]",
        opciones: null,
        usos: "1 carga/en d3 Amanecer(es)"
    },
    drenaje: {
        nombre: "Drenaje",
        prerrequisitos: "Usa el Conjuro Absorber elemento 15 veces",
        descripcion: "Cuando realizas el daño del Conjuro Absorber Elemento, puedes recuperar puntos de golpe igual al daño infligido",
        opciones: null,
        usos: null
    },
    paz_iluminada: {
        nombre: "Paz iluminada",
        prerrequisitos: null,
        descripcion: "Como acción, restableces una condición sobre ti mismo",
        opciones: null,
        usos: null
    },
    pureza: {
        nombre: "Pureza",
        prerrequisitos: "Purificar 15 condiciones sobre ti mismo",
        descripcion: "Puedes usar Paz iluminada como Reacción",
        opciones: null,
        usos: null
    },
    // Bendito
    luz_juicio: {
        nombre: "Luz de Juicio",
        prerrequisitos: null,
        descripcion: "Como acción adicional en tu turno mientras empuñas el arma, marcas a una creatura que puedas ver a 60 pies, el primer golpe que recibe de ti en cada turno con el Arma provoca d6 de daño extra Radiante. Este efecto dura hasta que tu o la creatura marcada quede a 0 puntos de golpe, o que pase 1 hora",
        opciones: null,
        usos: "2 carga/Amanecer"
    },
    castigo_cielo: {
        nombre: "Castigo del Cielo",
        prerrequisitos: null,
        descripcion: "Como Acción, con esta arma puedes realizar un castigo sobre toda creatura a 15 pies (Hasta un máximo igual a tu Competencia). Toda creatura que recibe el castigo debe realizar una Tirada de Salvación de Destreza que usa tu Modificador de Sabiduría para establecer el CD de Salvación. Si fallan, las creaturas reciben d8 Radiante.\n \nEn niveles superiores: El daño de los látigos de luz aumenta en 1d8 al alcanzar nivel 5(2d8), el nivel 11(3d8) y el nivel 17(4d8) ",
        opciones: null,
        usos: "2 carga/Amanecer"
    },
    estoque_radiante: {
        nombre: "Estoque Radiante",
        prerrequisitos: null,
        descripcion: "Tras realizar la Acción Atacar, puedes como Acción adicional realizar un ataque especial que usa tu Modificador de Carisma para la Tirada de Ataque. Si Acierta, la creatura y tu se mueven 5 pies en dirección al ataque y realiza d4 Radiante. \n \nEn niveles superiores: El daño de la estocada aumenta en 1d4 al alcanzar el nivel 5(2d4), el nivel 11(3d4) y el nivel 17(4d6) ",
        opciones: null,
        usos: null
    },
    lluvia_flechas: {
        nombre: "Lluvia de Flechas",
        prerrequisitos: null,
        descripcion: "Como acción, en un turno mientras empuñas el arma, cuando realizas una Tirada de Ataque con esta arma, la Tirada de Ataque también enfrenta el CA de los enemigos adyacente a 5 pies del objetivo y si lo supera, igual reciben el daño del arma",
        opciones: null,
        usos: "2 carga/Amanecer"
    },
    vinculo_flecha: {
        nombre: "Vinculo de Flecha",
        prerrequisitos: null,
        descripcion: "Puedes vincular 20 flechas. Luego en una acción, puedes atraer todas las flechas vinculadas a ti sin importar lo lejos que estén (en 1000 pies)",
        opciones: null,
        usos: null
    },
    // Maldito
    vinculo: {
        nombre: "Vínculo",
        prerrequisitos: null,
        descripcion: "Tras realizar un Descanso Corto, puedes vincular un arma a este objeto. Puedes guardar en un espacio mágico el arma vinculada e invocarla en tu mano como Acción adicional",
        opciones: null,
        usos: null
    },
    precision_maldita: {
        nombre: "Presición Maldita",
        prerrequisitos: null,
        descripcion: "Tus Tiradas de daño tienen un bonificador +2 al daño. Si en la Tirada de ataque sacas 1, el ataque se dirige instantáneamente a ti.",
        opciones: null,
        usos: null
    },
    cicatriz_sombra: {
        nombre: "Cicatriz Sombra",
        prerrequisitos: null,
        descripcion: "Al realizar un crítico en la Tirada de Ataque Cuerpo a cuerpo, el daño obtiene 2d6 Necrótico extra y Tumba a la creatura",
        opciones: null,
        usos: null
    },
    invocacion_infernal: {
        nombre: "Invocación Infernal",
        prerrequisitos: null,
        descripcion: "Envuelto en una energía oscura, dependiendo de la función especificado en el objeto gatilla una invocación infernal",
        opciones: [
            {
                id: "Ataque",
                nombre: "Tras acertar una Tirada de Ataque con esta arma se consumen una carga y a 5 pies del objetivo aparece un Sangrón (Otorgado por el GM)",
                costo: "1 Carga",
                activo: false
            },
            {
                id: "Defensa",
                nombre: "Tras bloquear una Tirada de Ataque con esta armadura se consumen 3 cargas y a 5 pies de ti aparece un Cóstragon (Otorgado por el GM)",
                costo: "3 Cargas",
                activo: false
            }
        ],
        usos: null
    },
    // Arácnido bajo de Velo de Sigilo
    regeneracion: {
        nombre: "Regeneración",
        prerrequisitos: null,
        descripcion: "Mientras tengas 1 punto de golpe. Cada 10 minutos recuperas d6 de vida. Si has perdido una parte del cuerpo, se regenera en 1d6+1 días",
        opciones: null,
        usos: null
    }
};
