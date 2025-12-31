// --- DATOS DE PRODUCTOS ---
const products = [
    {
        id: 1,
        title: "BOY MEETS MARIA",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 20.00,
        desc: "Taiga, que desde chico siempre sintió fascinación por los héroes, encuentra a la chica de su vida al empezar la secundaria: la estrella del club de teatro, a quien todo el mundo llama Maria. Su brillante actuación le roba el corazón de tal manera que decide pedirle que se convierta en su heroína ese mismo día, pero al ir a buscarla para declararle su amor, descubre que la belleza en cuestión en realidad es un chico.",
        image: "images/bl/boy_meets_maria.jpg"
    },
    {
        id: 2,
        title: "ABRAZANDO TU NOCHE",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 20.00,
        desc: "Chinatsu es un asesino que se reencuentra con su destino. El nombre de su destino es Kasumi, el chico que le tendió la mano cuando su hermano murió delante de sus ojos. Unos años más tarde, Chinatsu ayuda a Kasumi por casualidad al sufrir un robo en plena calle. Chinatsu no quiere dejar solo a Kasumi, que es ciego y, aunque sabe que no debe acercarse a él, empieza a acortar la distancia que hay entre ellos... Una historia de redención en la que dos personas atrapadas en la oscuridad van dejando atrás su soledad.",
        image: "images/bl/abrazando_tu_noche.jpg"
    },
    {
        id: 3,
        title: "LA CANCIÓN DEL AMANECER",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "En emisión › 3 tomos",
        language: "ESP",
        price: 19.00,
        desc: "Cada vez que sale a combatir las criaturas que salen del Mar negro, el sacerdote guerrero Elva nota cómo su vida se desgasta. \nEl joven Altoh se da cuenta de esto, y jura quedarse a su lado mientras busca una forma para rescatarlo de su función. \nOcho años después, Altoh ya es un joven bien formado. Desde que se enamoró de Elva, su amor por él crece cada día, pero lo mantiene oculto en su corazón…",
        image: "images/bl/cancion_amanecer_1.jpg",
        gallery: [
            "images/bl/cancion_amanecer_1.jpg",
            "images/bl/cancion_amanecer_2.jpg",
            "images/bl/cancion_amanecer_3.jpg"
        ]
    },
    {
        id: 4,
        title: "EL SISTEMA DE AUTOSALVACIÓN DEL VILLANO ESCORIA (NOVELA) [TAPA DURA]",
        category: "danmei",
        et_filt: "bl",
        genre: "Danmei",
        type: "Finalizada › 4 tomos",
        language: "ESP",
        price: 35.00,
        desc: "Después de una infancia humilde, y tras superar un pasado tortuoso, el mediodemonio Luo Binghe se ha convertido en el parangón de la fuerza y la belleza. Con su dominio sobre los dos reinos, el humano y el demoníaco, y con un harén de cientos de mujeres a sus pies, es el protagonista más poderoso… ¡de una serie de novelas baratas! \nAl menos, eso es lo que opina Shen Yuan nada más acabar el último capítulo de La senda del orgulloso demonio inmortal. Pero cuando muere en pleno ataque de rabia, Shen Yuan renace en el mundo de la novela, en el cuerpo de Shen Quingqiu, el hermoso pero cruel profesor de un, por entonces, joven Luo Binghe. Aunque Shen Quingqiu tiene un poder increíble como cultivador, su destino es ser castigado de la forma más terrible por crímenes cometidos contra el protagonista. \nAhora, la única posibilidad que tiene el nuevo Shen Quingqiu es intentar ganarse el aprecio de Luo Binghe antes de que el joven llegue al poder o sufrirá el fatal destino de la mayor escoria entre los villanos.",
        image: "images/danmei/save_td_1.jpeg",
        gallery: [
            "images/danmei/save_td_1.jpeg",
            "images/danmei/save_td_2.jpeg",
            "images/danmei/save_td_3.jpeg",
            "images/danmei/save_td_4.jpeg"
        ]
    },
    {
        id: 5,
        title: "EL SISTEMA DE AUTOSALVACIÓN DEL VILLANO ESCORIA (NOVELA) [TAPA BLANDA]",
        category: "danmei",
        et_filt: "bl",
        genre: "Danmei",
        type: "Finalizada › 4 tomos",
        language: "ESP",
        price: 26.00,
        desc: "Después de una infancia humilde, y tras superar un pasado tortuoso, el mediodemonio Luo Binghe se ha convertido en el parangón de la fuerza y la belleza. Con su dominio sobre los dos reinos, el humano y el demoníaco, y con un harén de cientos de mujeres a sus pies, es el protagonista más poderoso… ¡de una serie de novelas baratas! \nAl menos, eso es lo que opina Shen Yuan nada más acabar el último capítulo de La senda del orgulloso demonio inmortal. Pero cuando muere en pleno ataque de rabia, Shen Yuan renace en el mundo de la novela, en el cuerpo de Shen Quingqiu, el hermoso pero cruel profesor de un, por entonces, joven Luo Binghe. Aunque Shen Quingqiu tiene un poder increíble como cultivador, su destino es ser castigado de la forma más terrible por crímenes cometidos contra el protagonista. \nAhora, la única posibilidad que tiene el nuevo Shen Quingqiu es intentar ganarse el aprecio de Luo Binghe antes de que el joven llegue al poder o sufrirá el fatal destino de la mayor escoria entre los villanos.",
        image: "images/danmei/save_1.jpeg",
        gallery: [
            "images/danmei/save_1.jpeg",
            "images/danmei/save_2.jpeg",
            "images/danmei/save_3.jpeg",
            "images/danmei/save_4.jpeg"
        ]
    },
    {
        id: 6,
        title: "LA NOVIA DEL DRAGÓN",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "En emisión › 1 tomo",
        language: "ESP",
        price: 20.00,
        desc: "Rita, un joven solitario, es elegido como “novia del dragón” según las tradiciones de su aldea. La existencia de dragones en las montañas nevadas no es más que una leyenda, pero Rita, incapaz de encontrar su lugar, decide aceptar su destino y sacrificar su vida. \nEn medio de una tormenta de nieve y a punto de morir congelado, Rita es salvado por un bello dragón con forma humana: Ignat. A Rita se le llena el corazón de esperanza al descubrir que los dragones existen de verdad y que podrá cumplir con su “rol” de novia, pero entonces Ignat lo rechaza, alegando que él no necesita ninguna novia…",
        image: "images/bl/novia_dragon.jpg",
        gallery: [
            "images/bl/novia_dragon.jpg"
        ]
    },
    {
        id: 7,
        title: "EL PALACIO DEL OMEGA",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Finalizada › 2 tomos",
        language: "ESP",
        price: 18.00,
        desc: "“Odiaba mi cuerpo, que permitía que pudiera convertirme fácilmente en la propiedad de otro.” \nIlya, el 13er príncipe de un pequeño reino, nació como omega y ha vivido todos estos años resignado a ello. Tras contraer matrimonio concertado con Khalid, el rey de una nación aliada, conoce a un extraño muchacho en su primer día en el palacio interior. ¡¿Quién es ese chico en realidad?!",
        image: "images/bl/palacio_omega_1.jpg",
        gallery: [
            "images/bl/palacio_omega_1.jpg",
            "images/bl/palacio_omega_2.jpg"
        ]
    },
    {
        id: 8,
        title: "LA HISTORIA DE LOS PADRES DE SHIMA",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Finalizada › 2 tomos",
        language: "ESP",
        price: 20.00,
        desc: "Shima tiene dos padres, uno es Akane (un alfa) quien es muy despreocupado y hace las cosas a su manera y Aoi (un omega), quien es más racional y amable. Ambos han sido bendecidos con su hija, Shima, y tienen una relación amorosa, pero… ¿quizás en su juventud las cosas eran un poco diferentes entre ellos…? \nUna historia omegaverso que trata sobre dos macarras: desde su desastroso primer encuentro hasta que acaban casándose.",
        image: "images/bl/padres_shima_1.jpg",
        gallery: [
            "images/bl/padres_shima_1.jpg",
            "images/bl/padres_shima_2.jpg"
        ]
    },
    {
        id: 9,
        title: "HEAVEN OFFICIAL'S BLESSING: TIAN GUAN CI FU (NOVEL)",
        category: "danmei",
        et_filt: "bl",
        genre: "Danmei",
        type: "Finalizada › 8 tomos",
        language: "EN",
        price: 30.00,
        desc: "Born the crown prince of a prosperous kingdom, Xie Lian was renowned for his beauty, strength, and purity. His years of dedication and noble deeds allowed him to ascend to godhood. But those who rise, can also fall…and fall he does, cast from the Heavens again and again and banished to the mortal realm. \nEight hundred years after his mortal life, Xie Lian has ascended to godhood for the third time. Now only a lowly scrap collector, he is dispatched to wander the earthly realm to take on tasks appointed by the heavens to pay back debts and maintain his divinity. Aided by old friends and foes alike, and graced with the company of a mysterious young man with whom he feels an instant connection, Xie Lian must confront the horrors of his past in order to dispel the curse of his present.",
        image: "images/danmei/tgcf_en_1.jpeg",
        gallery: [
            "images/danmei/tgcf_en_1.jpeg",
            "images/danmei/tgcf_en_2.jpeg",
            "images/danmei/tgcf_en_3.jpeg",
            "images/danmei/tgcf_en_4.jpeg",
            "images/danmei/tgcf_en_5.jpeg",
            "images/danmei/tgcf_en_6.jpeg",
            "images/danmei/tgcf_en_7.jpeg",
            "images/danmei/tgcf_en_8.jpeg"
        ]
    },
    {
        id: 10,
        title: "BLUE LOCK: EPISODE NAGI",
        category: "manga",
        et_filt: "spokon",
        genre: "Manga",
        type: "Finalizada › 8 tomos",
        language: "ESP",
        price: 13.00,
        desc: "Tras el arrollador éxito de la serie principal, llega a Argentina el esperado spin-off centrado en uno de los personajes más carismáticos y crípticos de Blue Lock. Esta serie nos cuenta la historia de Seishiro Nagi, un chico de segundo año de secundaria totalmente apático que no muestra interés por nada. Pero todo cambia el día en que su excéntrico compañero, Reo Mikage, pone sus ojos en él y decide que es el socio que necesita para cumplir su sueño de volverse un jugador de fútbol profesional y ganar la Copa del Mundo. Así, ambos darán inicio a una dupla que parece infalible y que los llevará a unirse al ambicioso programa Blue Lock, mientras conocemos los acontecimientos ocurridos en el manga principal desde la óptica de este peculiar delantero.",
        image: "images/spokon/epinagi_1.jpg",
        gallery: [
            "images/spokon/epinagi_1.jpg",
            "images/spokon/epinagi_2.jpg",
            "images/spokon/epinagi_3.jpg",
            "images/spokon/epinagi_4.jpg",
            "images/spokon/epinagi_5.jpg",
            "images/spokon/epinagi_6.jpg",
            "images/spokon/epinagi_7.jpg",
            "images/spokon/epinagi_8.jpg"
        ]
    },
    {
        id: 11,
        title: "HUA CHENG & XIE LIAN",
        category: "merch",
        et_filt: "",
        genre: "Merch",
        type: "Pines",
        language: "",
        price: 1.50,
        desc: "Pines con gancho metálico. \nTamaño: 37mm. \nSerie: Heaven Official's Blessing. \nPersonajes: Hua Cheng & Xie Lian. \nSe venden por par.",
        image: "images/merch/pines_tgcf_37mm_1.png"
    },
    {
        id: 12,
        title: "CARTMAN & KYLE",
        category: "merch",
        et_filt: "",
        genre: "Merch",
        type: "Pines",
        language: "",
        price: 1.50,
        desc: "Pines con gancho metálico. \nTamaño: 37mm. \nSerie: South Park. \nPersonajes: Cartman & Kyle. \nSe venden por par.",
        image: "images/merch/pines_sp_kyman_1.png",
        gallery: [
            "images/merch/pines_sp_kyman_1.png",
            "images/merch/pines_sp_kyman_2.png",
            "images/merch/pines_sp_kyman_3.png",
        ]
    },
    {
        id: 13,
        title: "MADK",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Finalizada › 3 tomos",
        language: "ESP",
        price: 19.00,
        desc: "Por culpa de sus peculiares fetiches sexuales, Makoto lleva mucho tiempo considerado como un paria. Un día encuentra un libro sobre invocación de demonios y, aunque al principio no tiene mucha fe en que funcione, consigue invocar al Archiduque J, un aristócrata del mundo demoníaco de gran belleza y muy parlanchín. A cambio de la vida de Makoto, el demonio se ofrece a concederle su deseo más oscuro. Tras cumplir su parte del trato, J toma la vida de Makoto, pero entonces el chico despierta y descubre que ha renacido como un demonio más en el mundo de J.",
        image: "images/bl/madk_1.jpg",
        gallery: [
            "images/bl/madk_1.jpg",
            "images/bl/madk_2.jpg",
            "images/bl/madk_3.jpg"
        ]
    },
    {
        id: 14,
        title: "UZUMAKI",
        category: "manga",
        et_filt: "gore",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 30.00,
        desc: "“Bienvenidos a Kurouzu, un pueblito costero donde raramente pasa algo interesante…” \nUzumaki, compuesta por varias historias cortas y autoconclusivas que a su vez se interconectan para narrar una mucho más grande y perturbadora, transcurre en la pequeña ciudad japonesa de Kurouzu y se centra en la insana obsesión con las espirales, remolinos y todas sus variedades que va chupando a sus habitantes, y cómo se sumergen gradualmente en la locura y la autodestrucción concéntrica. El tremendo talento de su autor radica en sumergirnos en el más absoluto terror utilizando algo tan mundano y poco inquietante como puede ser una simple espiral. \nLa historia está narrada desde el punto de vista de Kirie Goshima, una adolescente que ha vivido toda su vida en este –aparente- tranquilo pueblo y es testigo del temor hacia los espirales que va consumiendo a sus vecinos, sus compañeros y hasta a su propia mente. Uzumaki te absorbe desde la primera página por la combinación de una premisa original, una excelente construcción de personajes, una compleja narrativa que inspira terror (pero también tiene sus grotescas dosis de humor) y un despliegue visual para mearse encima que lo envuelve todo. Gracias a su dominio absoluto de las atmósferas y a la maestría con la que ejecuta las escenas más perturbadoras, Ito asegura, mínimo, una pesadilla por capítulo.",
        image: "images/gore/uzumaki.jpg"
    },
    {
        id: 15,
        title: "EL DOLOROSO AMOR DE LOS MUERTOS",
        category: "manga",
        et_filt: "gore",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 30.00,
        desc: "Junji Ito, el maestro del horror, regresa con un nuevo compendio en el que su retorcido estilo artístico acompaña a seis historias cortas de su autoría. \nEn El Doloroso Amor De Los Muertos, el relato más extenso y que da nombre al tomo, se nos relata la historia de un chico llamado Ryusuke, que vuelve a su pueblo natal, la neblinosa ciudad de Nazumi, cuando su padre es trasladado por motivos laborales. Allí se reencontrará con la “adivinación callejera” una extraña tradición donde las personas esperan en una esquina a que algún desconocido pase y le piden que decidan su destino. Pese a que en un primer momento Ryusuke parece no estar interesado en esta costumbre, pronto descubriremos que la misma está fuertemente ligada con el pasado del joven y un oscuro suceso que no dejará de atormentarlo a él y a todos a su alrededor. Esta truculenta historia y otras ubicadas en el mismo pueblo le dan forma a un tomo imperdible lleno de imágenes impactantes.",
        image: "images/gore/doloroso_amor_muerto.jpg"
    },
    {
        id: 16,
        title: "JUNJI ITO EXHIBITION: ENCHANTMENT ILLUSTRATIONS",
        category: "manga",
        et_filt: "gore",
        genre: "Artbook",
        type: "Artbook",
        language: "ESP",
        price: 42.00,
        desc: "Sumergite en la perturbadora y fascinante mente del maestro del terror con el artbook que conmemora sus 37 años de carrera. Un recorrido visual por el universo inquietante que lo convirtió en una leyenda. Este libro XXL reúne 123 ilustraciones, tanto a color como en blanco y negro, de sus obras más icónicas, ofreciendo una mirada completa al estilo inconfundible y la evolución artística de Ito a lo largo de las décadas. Además, incluye contenido exclusivo de esta recopilación: nuevas ilustraciones, el storyboard completo de su debut con “Tomie” y el relato inédito “Tomie: Possession”. Como complemento, el libro presenta una entrevista especial con Junji Ito y Hideo Kojima —quienes iban a colaborar en el cancelado reboot de la saga Silent Hill para PlayStation—, donde estos dos genios del terror y la narrativa hablan sobre inspiración, creatividad y miedo. \nEste maravilloso artbook fue publicado en Japón a mediados de 2024 por la editorial Asahi Shimbun. Nuestra edición es idéntica a la original japonesa: libro de 180 páginas, 19 x 26 cm (sí, enorme), con sobrecubierta e íntegramente a color.",
        image: "images/artbook/junji_ito_artbook.jpg"
    },
    {
        id: 17,
        title: "OTRA NOCHE SIN VOS",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 20.00,
        desc: "Década de 1950, Japón. \nSeishirou vive atrapado en días grises, sin poder dormir solo por las noches, atormentado por los traumas de la guerra. Hasta que un día, conoce a Jim, un soldado estadounidense amable que se enamora de él a primera vista. ¿Será esta la oportunidad de cambiar su vida para siempre? \nLo que comenzó como una relación de conveniencia, poco a poco se convierte en algo más: noches en las que Seishirou se queda dormido en un abrazo cálido que empieza a derretir el hielo de su corazón. Sin embargo, se pregunta si alguna vez podrán imaginar un futuro juntos...",
        image: "images/bl/otra_noche_sin_vos.jpg"
    },
    {
        id: 18,
        title: "THE TITAN'S BRIDE",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "En emisión › 7 tomos",
        language: "EN",
        price: 25.00,
        desc: "Senior Kouichi Mizuki is about to take his final exams and graduate from high school, when he suddenly finds himself in a world of titans. Not only is he no longer anywhere near home, but one of these giants, Prince Caius, has claimed Kouichi as his bride! Thanks to a disturbing, world-ending prophecy, the prince’s upcoming nuptials cannot be with anyone of his world. Since Caius has no plans to send Kouichi back to earth, he is wholeheartedly set on taking Kouichi as his “wife”!",
        image: "images/bl/titans_bride_1.jpg",
        gallery: [
            "images/bl/titans_bride_1.jpg",
            "images/bl/titans_bride_2.jpg",
            "images/bl/titans_bride_3.jpg",
            "images/bl/titans_bride_4.jpg",
            "images/bl/titans_bride_5.jpg",
            "images/bl/titans_bride_6.jpg",
            "images/bl/titans_bride_7.jpg",
        ]
    },
    {
        id: 19,
        title: "I SHIP MY RIVAL X ME",
        category: "manhua",
        et_filt: "bl",
        genre: "Manhua",
        type: "En emisión › 3 tomos",
        language: "EN",
        price: 30.00,
        desc: "Wei Yanzi and Gu Yiliang burst onto the acting scene together, igniting a rivalry fueled by their shared debut. But while Gu Yiliang dazzles with his acting prowess and idol-worthy looks, Wei Yanzi finds himself in the shadow with only his striking appearance to boast. Amid the barrage of online hate from Gu Yiliang’s fervent admirers, Wei Yanzi’s patience wears thin. \nWhen Wei Yanzi stumbles upon an online community totally convinced there’s a romantic entanglement between the two actors, he is initially shocked but soon finds solace in their speculation as he immerses himself in their discussions. \nThough their relationship is purely professional, Wei Yanzi can’t shake the growing sense that maybe the shippers are onto something. As he spends more time with Gu Yiliang, lines blur, and Wei Yanzi begins to wonder if there might, after all, be truth behind the fan-fueled fantasies!",
        image: "images/bl/ship_rival_me_1.jpg",
        gallery: [
            "images/bl/ship_rival_me_1.jpg",
            "images/bl/ship_rival_me_2.jpg",
            "images/bl/ship_rival_me_3.jpg"
        ]
    },
    {
        id: 20,
        title: "LORD OF MYSTERIES: THE CLOWN",
        category: "danmei",
        et_filt: "fantasy",
        genre: "Novel",
        type: "En emisión › 2 tomos",
        language: "EN",
        price: 42.00,
        desc: "In the storm of steam and machinery, who can achieve the extraordinary? In the fog of history and darkness, who whispers? When Zhou Mingrui wakes up bloody and dazed, he finds himself in a world of guns, factories, airships, and difference engines. But underneath the surface of all this industry, there exists a secret society revolving around potions, divination, sealed artifacts, and much more. As Zhou Mingrui tries to find out what brought him to this place, he quickly learns that mystery is lurking around every corner—and danger is never far behind! This is the legend of the Fool…",
        image: "images/danmei/lord_mysteries_1.jpg",
        gallery: [
            "images/danmei/lord_mysteries_1.jpg",
            "images/danmei/lord_mysteries_2.jpg",
        ]
    },
    {
        id: 21,
        title: "HYPERVENTILATION",
        category: "manhwa",
        et_filt: "bl",
        genre: "Manhwa",
        type: "Tomo único",
        language: "ESP",
        price: 30.00,
        desc: "En una reunión de antiguos compañeros de instituto, el pasado y el presente se entremezclan para narrarnos la relación entre Myeong y Seonho, cuya atracción se remonta a cuando compartían clases pero que no evoluciona hasta que, ya adultos, se vuelven a encontrar. ¿Pero es una atracción efímera o algo más profundo?",
        image: "images/bl/hyperventilation.jpg"
    },
    {
        id: 22,
        title: "DEMASIADO CERCA PARA ENAMORARSE",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 20.00,
        desc: "Tengo un hermano menor desde que mi papá volvió a casarse. Es un chico demasiado lindo y es REEE de mi tipo, y eso me tiene preocupado. Quise tomar distancia para no enamorarme mucho más de lo que ya estoy. Pero un día, Motoya me arrinconó y me dijo “¿YO TE GUSTO?”. \nDespués de eso comenzamos a tener una relación demasiado “íntima”, pero no es lo que quiero… \n¿Hasta cuándo voy a poder resistirme a los acercamientos tan sexys y directos de parte de mi nuevo hermano menor?",
        image: "images/bl/demasiado_cerca_enamorarse.jpg"
    },
    {
        id: 23,
        title: "NO ESTAMOS HECHOS PARA SER NOVIOS",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "En emisión › 1 tomo",
        language: "ESP",
        price: 20.00,
        desc: "Han pasado seis meses desde que Kumazawa, el mecánico de autos melancólico, se mudó al lado de Koichi, un youtuber que dice ser un experto en el amor. Tras demasiadas grabaciones a todo volumen, Kumazawa finalmente pierde la paciencia y se presenta en la puerta de Koichi... ¡solo para callarlo con un beso apasionado!",
        image: "images/bl/no_hechos_novios_1.jpg",
        gallery: [
            "images/bl/no_hechos_novios_1.jpg",
        ]
    },
    {
        id: 24,
        title: "AMOR ENMASCARADO",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 20.00,
        desc: "¿Quién estará detrás de esa máscara? \nGô Zôkiya es un fan acérrimo de los héroes y por eso intenta hacer entrar en razón a aquellos que hacen maldades, pero sin comerlo ni beberlo, a quien le cuelgan la etiqueta de gamberro es a él. Un día, por casualidad, conoce en el show de héroes de un parque de atracciones a Wolf, el actor de acción perfecto. Gô se esfuerza por ser su amigo, pero por lo visto para Wolf no es más que un macarra que solo está allí para pasar el rato. ¡Una historia de amor a ambos lados de una máscara!",
        image: "images/bl/amor_enmascarado.jpg"
    },
    {
        id: 25,
        title: "FULANO Y MENGANO TAMBIÉN QUIEREN SER PROTAGONISTAS",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 20.00,
        desc: "Tras entrar en bachillerato, Fulano y Mengano coincidieron no solo en ser vecinos de pupitre, sino que ambos se dieron cuenta de que compartían acera... \n¡La acera de los secundarios que viven a la sombra de los personajes estrella! \nY el plan maestro de Mengano para no terminar sus días como un par de mindundis, unos PNJ del montón es... ¡¿imitar a los protagonistas de los manga BL de su hermana?! \nEn este tomo, además de la impactante historia cabeza de cartel, encontraréis otras que narran un amor entre hermanastros marcados por los desencuentros o la relación prohibida de una pareja víctima de la pasión carnal.",
        image: "images/bl/fulano_mengano.jpg"
    },
    {
        id: 26,
        title: "MI AMOR SECRETO",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 26.00,
        desc: "La posada Gato Calicó, donde trabaja el joven dragón Kokufu, es famosa entre los yokai por su fantástico menú. Ryoya, un zorro codicioso que vive en la posada desde hace mucho tiempo, se pasa los días importunándolo. Un día, Ryoya encuentra en un mercado de antigüedades un viejo retrato japonés que llevaba años buscando, pero, justo cuando decide hablar con el vendedor, resulta que alguien se le adelanta: un general demonio. \nCuando Kokufu se entera de que Ryoya lleva cien años deseando reencontrarse con el pintor del cuadro, decide dejar a un lado sus diferencias y echarle una mano. Juntos, se dirigen a la mansión del demonio, pero ¿quién sabe qué les depara el destino?",
        image: "images/bl/mi_amor_secreto.jpg"
    },
    {
        id: 27,
        title: "HOME FAR AWAY",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 20.00,
        desc: "Años 90. Estados Unidos. \nAlain Saverio es un joven que vive muerto por dentro junto a sus padres religiosos ultraconservadores. Un día conoce a Hayden, un joven por quien al instante siente una fuerte atracción; pero se entera de que lleva una vida errante y no suele quedarse mucho tiempo en un mismo lugar. \nPara estar juntos, no le queda otra opción que huir de su casa. Pero eso convierte a Hayden en un secuestrador. Aun así, éste decide llevarse a Alain lo más lejos posible para sacarlo del infierno en el que vive. \nPara muchos, las huellas de su coche marcan una ruta de escape. Pero para ellos no es más que el camino de regreso hacia “un hogar sólo para ellos dos”.",
        image: "images/bl/home_far_away.jpg"
    },
    {
        id: 28,
        title: "10 COSAS QUE QUIERO HACER ANTES DE LOS 40",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 20.00,
        desc: "Suzume prácticamente ha tirado la toalla en el amor después de pasar más de diez años sin pareja... Ya solo le quedan tres meses para cumplir los 40. Entonces, escribe una lista secreta: “10 cosas que quiero hacer antes de los 40”, que incluye deseos como: “hacer una fiesta de takoyaki”, “comerme un parfait”, “celebrar mi cumpleaños con mi pareja”... Pero todo se complica cuando un subordinado del trabajo que es diez años más joven que él descubre la lista... ¡y se empeña en cumplir todos los objetivos con él!",
        image: "images/bl/10_cosas_antes_40_1.jpg"
    },
    {
        id: 29,
        title: "10 COSAS QUE QUIERO HACER ANTES DE LOS 40 — 2 [PREVENTA]",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 20.00,
        desc: "Tras una década sin pareja, Suzume Tôjô (40 años) por fin vuelve a tener novio. Por si fuera poco, se trata de un guaperas diez años más joven llamado Keishi Tanaka. Ahora mismo, el principal desafío de Suzume es mantener su vida pública separada de la privada. Conscientes de que en cuanto bajan la guardia los dos se dejan llevar por el amor, Keishi y Suzume acuerdan unas cuantas reglas que tendrán que cumplir... El romance entre el jefe y su subordinado continúa... Cada vez más auténtico, cada vez más maduro.",
        image: "images/bl/10_cosas_antes_40_2.jpg"
    },
    {
        id: 30,
        title: "BLUE MOMENT",
        category: "manga",
        et_filt: "bl",
        genre: "Manga",
        type: "Tomo único",
        language: "ESP",
        price: 18.00,
        desc: "Una primavera golpeada por una pandemia. A Hibiki, que regenta el bar Blue Moment, cada vez le cae mejor Naoto, un cliente habitual. Sin embargo, cuanto más se estrecha su relación, más culpable se siente Hibiki por su novio, Seiji. \n¡Michi Ichiho e ymz nos traen este emocionante triángulo amoroso a merced de un contexto sin precedentes!",
        image: "images/bl/blue_moment.jpg"
    },
];

/*
id: ,
title: "",
category: "",
et_filt: "",
genre: "",
type: "",
language: "",
price: ,
desc: "",
image: "",
gallery: [
]
*/
