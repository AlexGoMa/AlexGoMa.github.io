const preguntasPartida = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "a", answer: "alambique", status: 0, question:"CON LA A. Aparato utilizado para la destilación de líquidos mediante un proceso de evaporación por calentamiento y posterior condensación por enfriamiento" },
    { letter: "a", answer: "alfil", status: 0, question:"CON LA A. Pieza menor del ajedrez que sólo puede moverse en diagonal," },
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "b", answer: "barman", status: 0, question:"CON LA B. Anglicismo que define la persona que atiende a los clientes en la barra de un bar, cervecería o local de ocio." },
    { letter: "b", answer: "brooklyn", status: 0, question:"CON LA B. Uno de los cinco distritos que conforman la ciudad de Nueva York. Ubicado en el extremo oeste de la isla Long Island" },
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "c", answer: "chanel", status: 0, question:"CON LA C. Nombre artístico de la representante española para la próxima edición de Eurovisión" },
    { letter: "c", answer: "castlevania", status: 0, question:"CON LA C. Saga de videojuegos en la que el protagonista debe eliminar a Drácula, recorriendo un castillo" },
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "d", answer: "diptongo", status: 0, question:"CON LA D. Fonológicamente dos vocales una a continuación de la otra que forman parte de la misma sílaba." },
    { letter: "d", answer: "dinamarca", status: 0, question:"CON LA D. Es el más meridional de los países nórdicos y también el de menor extensión" },
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "e", answer: "eclipse", status: 0, question:"CON LA E. Fenómeno astrológico por el cual la luz procedente de un cuerpo celeste es bloqueada por otro cuerpo eclipsante" },
    { letter: "e", answer: "elefante", status: 0, question:"CON LA E. Mamífero cuadrúpedo que actualmente es el animal terrestre más grande." },
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "f", answer: "falafel", status: 0, question:"CON LA F. Croqueta de garbanzos o habas con origen en Oriente Medio. Tradicionalmente se sirve con salsa de yogur o de tahini, en pan de pita o bien como entrada " },
    { letter: "f", answer: "filantropo", status: 0, question:"CON LA F. Persona que se distingue por el amor a sus semejantes y por sus obras en bien de la comunidad" },
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "g", answer: "genoma", status: 0, question:"CON LA G. Es la secuencia total del material genético (ADN) que posee un organismo o una especie en particular" },
    { letter: "g", answer: "gaijin", status: 0, question:"CON LA G. Término dado por los japoneses que se refiere a los extranjeros" },
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "h", answer: "hitchcock", status: 0, question:"CON LA H. Director de cine británico conocido por las películas, psicosis, los pájaros o la muerte en los talones" },
    { letter: "h", answer: "hipertension", status: 0, question:"CON LA H. enfermedad caracterizada por un incremento continuo de las cifras de la presión sanguínea" },
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "i", answer: "ibiza", status: 0, question:"CON LA I. Isla que pertenece al archipiélago de las Baleares y que es conocida por sus playas y discotecas" },
    { letter: "i", answer: "incauto", status: 0, question:"CON LA I. Que tiene falta de cautela, malícia" },
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "j", answer: "jedi", status: 0, question:"CON LA J. En Star Wars, son defensores de la paz y personajes de gran poder y sabiduría, seguidores del lado luminoso de la Fuerza" },
    { letter: "j", answer: "jota", status: 0, question:"CON LA J. Es una danza y canto tradicional extendida por gran parte de España. Varía su estilo según las regiones" },
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "k", answer: "king", status: 0, question:"CON LA K. Apellido de escritor estadounidense de novelas de terror, misterio y ficción"},
    { letter: "k", answer: "kinsasa", status: 0, question:"CON LA K. Capital de la República democrática del Congo" },
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "l", answer: "lima", status: 0, question:"CON LA L. Nombre de la capital del Perú" },
    { letter: "l", answer: "libia", status: 0, question:"CON LA L. País del norte de Africa, del cual la capital es Trípoli" },
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "m", answer: "moe", status: 0, question:"CON LA M. Amigo de Homer Simpson que regenta una taberna" },
    { letter: "m", answer: "maraton", status: 0, question:"CON LA M. Carrera de larga distancia que consiste en recorrer una distancia de 42Km " },
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "n", answer: "neperiano", status: 0, question:"CON LA N. En matemáticas, el logaritmo que fue definido por primera vez por John Napier" },
    { letter: "n", answer: "nepal", status: 0, question:"CON LA N. País que se encuentra ubicado en el Himalaya, rodeado en el norte por la República Popular China y en el sur por la India" },
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "ñ", answer: "ñoño", status: 0, question:"CON LA Ñ. Adjetivo: Soso, de poca sustancia." },
    { letter: "ñ", answer: "retoño", status: 0, question:"CONTIENE LA Ñ. Hijo de una persona, y especialmente el de corta edad" },
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "o", answer: "okinawa", status: 0, question:"CON LA O. Prefactura más lejanda de Japón y situada más al sur, formada por 160 pequeñas islas" },
    { letter: "o", answer: "oligarquia", status: 0, question:"CON LA O. forma de gobierno en la que el poder político está en manos de unas pocas personas, generalmente de la misma clase social. " },
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "p", answer: "peru", status: 0, question:"CON LA P. País sudamericano del cual la capital es Lima" },
    { letter: "p", answer: "palindromo", status: 0, question:"CON LA P. Palabra o frase que se lee igual en un sentido que en otro" },
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "q", answer: "quito", status: 0, question:"CON LA Q. Capital de la república de Ecuador" },
    { letter: "q", answer: "queen", status: 0, question:"CON LA Q. Grupo de músico británico liderado por Freddie Mercury" },
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor común de pequeño tamaño"},
    { letter: "r", answer: "raclette", status: 0, question:"CON LA R. Plato típico suizo que se basa en calentar queso sobre una plancha y luego retirarlo una vez se ha derretido" },
    { letter: "r", answer: "ristretto", status: 0, question:"CON LA R. Café espresso corto hecho con una cantidad normal de café molido, pero extraído con la mitad de agua" },
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "s", answer: "spiderman", status: 0, question:"CON LA S. Superheroe de cómic al que le vienen los poderes de una araña radioactiva" },
    { letter: "s", answer: "superman", status: 0, question:"CON LA S. Superheroe de cómic proviniente del plante Kripton" },
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "t", answer: "titanic", status: 0, question:"CON LA T. transatlántico británico, que se hundió la madrugada del 15 de abril de 1912 durante su viaje inaugural" },
    { letter: "t", answer: "tesla", status: 0, question:"CON LA T. Empresa estadounidense liderada por Elon Musk. Diseña, fabrica y vende automóviles eléctricos" },
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "u", answer: "urano", status: 0, question:"CON LA U. séptimo planeta del sistema solar y el tercero de mayor tamaño. Se llama así en honor de la divinidad griega del cielo" },
    { letter: "u", answer: "unicornio", status: 0, question:"CON LA U.  Animal mitológico representado habitualmente como un caballo blanco con un cuerno en la frente" },
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "v", answer: "valencia", status: 0, question:"CON LA V. Ciudad de España y capital de la provincia homómina, famosa por las fallas " },
    { letter: "v", answer: "venus", status: 0, question:"CON LA V. Segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente" },
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "w", answer: "wasabi", status: 0, question:"CON LA W. Especia o condimento picante de color verde de la cocina japonesa, que se usa a menudo en sushi y otros platos con pescado" },
    { letter: "w", answer: "waterloo", status: 0, question:"CON LA W. Famosa canción del grupo de música sueco ABBA y que se refiere al lugar dónde Napoleón fue derrotado" },
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "x", answer: "oximoron", status: 0, question:"CONTIENE LA X. Dentro de las figuras literarias en retórica, es una figura lógica que consiste en usar dos conceptos de significado opuesto en una sola expresión" },
    { letter: "x", answer: "taxi", status: 0, question:"CONTIENE LA X. Medio de transporte puerta a puerta que consiste en un vehículo con conductor que ofrece servicios de transporte de una persona o un grupo pequeño de pasajeros" },
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "y", answer: "yemen", status: 0, question:"CON LA Y. País situado al sur de la península de Arabia y del cual la capital es Saná " },
    { letter: "y", answer: "yate", status: 0, question:"CON LA Y. Buque o embarcación de recreo marítima" },
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, 
    { letter: "z", answer: "zoo", status: 0, question:"CON LA Z. Parque que contiene animales vivos, principalmente exóticos i salvajes los cuales están expuestos al público" },
    { letter: "z", answer: "zambomba", status: 0, question:"CON LA Z. Instrumento musical de fricción. Acompaña con frecuencia al canto de villancicos" },
];

const ranking = [
    { nombre: "Bill Murray", aciertos: 25 },
    { nombre: "Scarlett Johansson", aciertos: 23 },
    { nombre: "Anna Faris", aciertos:20},
    { nombre: "Giovanni Ribisi", aciertos: 18},
    { nombre: "Akiko Takeshita", aciertos: 15},
    { nombre: "Catherine Lambert", aciertos: 12},
    { nombre: "Akira Yamaguchi", aciertos: 8}
];

let contadorPreguntaActual = 0;
let contadorPasapalabra = 0;
let respuestasAcertadas = 0;
let respuestasFalladas = 0;
let tiempoDeJuego = 150;
let reloj;
let nombreJugador = "";
let questions;

///////////////// VARIABLES CÁMARA
let streaming = false;
let video = null;
let width = 640;     
let height = 0; 
/////////////// FINAL VARIABLES CÁMARA

const htmlAciertos = document.querySelector("#aciertos");
const htmlFallos = document.querySelector("#fallos");
const htmlSolucion = document.querySelector("#solucion");

//parte sonora
const letsgo = document.querySelector("#letsgo");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const timeout = document.querySelector("#timeout");
const ended = document.querySelector("#ended");
const next = document.querySelector("#next");

const playAudio = (sound) => {
    sound.play();
}


const escogePreguntas = () =>{
    questions = [];
    let preguntasPorLetra = 3;
    let letraAbecedario = 27;

    for (let i = 0; i < (preguntasPorLetra*letraAbecedario); i= i+preguntasPorLetra) {
        let  j = Math.floor(Math.random() * ((i+3) - i)) + i;
        questions.push(preguntasPartida[j]);
    }
}

const reseteaVariables = () =>{
    contadorPreguntaActual = 0;
    contadorPasapalabra = 0;
    respuestasAcertadas = 0;
    respuestasFalladas = 0;
    tiempoDeJuego = 150;
    escogePreguntas();
    document.querySelector("#textoRespuesta").value = "";
    document.querySelector("#solucion").innerHTML = ".";
    document.querySelector("#fallos").innerHTML = "0";
    document.querySelector("#aciertos").innerHTML = "0";

    //Vuelve a pintar las letras del tablero de color azul
    for (let i=0; i<questions.length; i++){
        let tmpLetra = questions[i].letter;
        tmpLetra = tmpLetra.toUpperCase();
        tmpLetra = '#'+tmpLetra;
        document.querySelector(tmpLetra).style.backgroundColor = "rgb(81, 170, 221)";
    }
}

const creaHighScore = () =>{
    destruyeHighScore();
    for (let i=0; i<ranking.length; i++){
        const rankingJugadores = document.querySelector("#rankingJugadores");
        const nuevoJugador = document.createElement("li");
        
        if(i === 0){
            nuevoJugador.textContent = `🥇 ${ranking[i].nombre} ─ ${ranking[i].aciertos} `;
        }else if (i === 1){
            nuevoJugador.textContent = `🥈 ${ranking[i].nombre} ─ ${ranking[i].aciertos} `;
        }else if (i === 2){
            nuevoJugador.textContent = `🥉 ${ranking[i].nombre} ─ ${ranking[i].aciertos} `;
        }else{
            nuevoJugador.textContent = `■ ${ranking[i].nombre} ─ ${ranking[i].aciertos} `;
        }
        nuevoJugador.className = "jugadores";
        nuevoJugador.id = "jugadores";
        rankingJugadores.appendChild(nuevoJugador);
    }
    muestraHighScore();
}

const muestraHighScore = ()=>{
    document.querySelector("#inicio").style.display = "none";
    document.querySelector("#juego").style.display = "none";
    document.querySelector("#botoneraFinPartida").style.display = "none";
    document.querySelector("#highScore").style.display = "block";
}

const destruyeHighScore = () => {
    const listadoRanking = document.querySelector("#rankingJugadores");
    while (listadoRanking.hasChildNodes()) {
        listadoRanking.removeChild(listadoRanking.firstChild);
    }
}

const ActualizaHighScore = () =>{
    let i = 0;
    while((ranking.length > i)&&(ranking[i].aciertos > respuestasAcertadas)){
        i++;
    }
    ranking.splice(i,0,{nombre:nombreJugador, aciertos: respuestasAcertadas,});
}

const volverInicio = () =>{
    document.querySelector("#inicio").style.display = "block";
    document.querySelector("#juego").style.display = "none";
    document.querySelector("#highScore").style.display = "none";
}

const jugar = ()=>{
    const textoNombre = document.querySelector("#textoNombre");
    nombreJugador = textoNombre.value.trim();
    if ((nombreJugador === null)|| (nombreJugador === "")){
        nombreJugador = "Invitad@";
    }
    console.log (nombreJugador);
    game();
}

const iniciaCuentaAtras = () =>{
    const element = document.querySelector("#contador");
    reloj = setInterval(time, 1000);

    function time(){
        if (tiempoDeJuego > 0){
            tiempoDeJuego--;
            element.innerHTML = tiempoDeJuego;
        }else{
            finalPartida();            
        }
    }
};

paraCuentaAtras = () => {
    clearInterval(reloj);
};

finalPartida = () =>{
    paraCuentaAtras();
    document.querySelector("#textoRespuesta").disabled = true;
    document.querySelector("#botonRespuesta").disabled = true;
    document.querySelector("#botonPasapalabra").disabled = true;
    document.querySelector("#botoneraFinPartida").style.display = "block";
    ActualizaHighScore();
    playAudio(ended);
    console.log(`Juego finalizado. con ${respuestasAcertadas} aciertos y ${respuestasFalladas} fallos`);
};

const preguntasRestantes = () => {
    return (27 - respuestasAcertadas - respuestasFalladas);
};

const muestraPreguntaHtml = () => {
    const pregunta = questions[contadorPreguntaActual].question
    const nuevaPregunta = document.querySelector("#pregunta");
    nuevaPregunta.innerHTML = pregunta;
}

const enviaRespuestaSiEnterApretado = (e) =>{
    if (e.key === "Enter"){
        enviaRespuesta();
    }else if (e.key === "Escape"){
        pasapalabra();
    }
}

const enviaRespuesta = () => {
    const textoRespuesta = document.querySelector("#textoRespuesta");
    const nuevaRespuesta = textoRespuesta.value.toLowerCase();

    let tmpLetra = questions[contadorPreguntaActual].letter;
    tmpLetra = tmpLetra.toUpperCase();
    tmpLetra = '#'+tmpLetra;

    if(questions[contadorPreguntaActual].answer === nuevaRespuesta){
        document.querySelector(tmpLetra).style.backgroundColor = "green";
        playAudio(yes);
        htmlSolucion.innerHTML = "Has acertado";
        respuestasAcertadas++;
    }else{
        document.querySelector(tmpLetra).style.backgroundColor = "red";
        playAudio(no);
        htmlSolucion.innerHTML = `Has fallado, la respuesta es: ${questions[contadorPreguntaActual].answer}`;
        respuestasFalladas++;
    }
    questions.splice(contadorPreguntaActual, 1);
    textoRespuesta.value = "";
    htmlAciertos.innerHTML = ` ${respuestasAcertadas}`;
    htmlFallos.innerHTML = ` ${respuestasFalladas}`;
    if ((preguntasRestantes() > 0) && (tiempoDeJuego > 0)){ // contadorPreguntaActual >= 25
        muestraPreguntaHtml();
    }else{
        finalPartida();
    }
};

const pasapalabra = () => {
    textoRespuesta.value = "";
    playAudio(next);
    questions.push(questions[contadorPreguntaActual]);
    questions.splice(contadorPreguntaActual, 1);
    muestraPreguntaHtml();
}

const addEventListeners = () => {

    const botonJugar = document.querySelector("#botonJugar");
    botonJugar.addEventListener("click", jugar);

    const botonHighScoreInicio = document.querySelector("#botonHighScoreInicio");
    botonHighScoreInicio.addEventListener("click", creaHighScore);

    const botonHighScoreJuego = document.querySelector("#botonHighScoreJuego");
    botonHighScoreJuego.addEventListener("click", creaHighScore);

    const botonRespuesta = document.querySelector("#botonRespuesta");
    botonRespuesta.addEventListener("click", enviaRespuesta);

    let enterApretado = document.querySelector("#textoRespuesta");
    enterApretado.addEventListener("keydown", enviaRespuestaSiEnterApretado);

    const botonPasapalabra = document.querySelector("#botonPasapalabra");
    botonPasapalabra.addEventListener("click", pasapalabra);

    const botonVolverInicio = document.querySelector("#botonVolverInicio");
    botonVolverInicio.addEventListener("click", volverInicio);

    const botonJugarDeNuevo = document.querySelector("#botonJugarDeNuevo");
    botonJugarDeNuevo.addEventListener("click", game);

    const botonVolverInicioHighScore = document.querySelector("#botonVolverInicioHighScore");
    botonVolverInicioHighScore.addEventListener("click", volverInicio);
};
    
const game = () => {
    console.log("Empieza el juego!") 
    document.querySelector("#inicio").style.display = "none";
    document.querySelector("#juego").style.display = "block";
    
    window.addEventListener('load', startup, false);

    document.querySelector("#textoRespuesta").disabled = false;
    document.querySelector("#botonRespuesta").disabled = false;
    document.querySelector("#botonPasapalabra").disabled = false;
    document.querySelector("#botoneraFinPartida").style.display = "none";
    document.querySelector("#highScore").style.display = "none";

    reseteaVariables();
    playAudio(letsgo);
    iniciaCuentaAtras();
    muestraPreguntaHtml();
};

///////////////////////////////// INICIO FUNCION CÁMARA - NO FUNCIONA !!////////////////

function startup() {
    video = document.querySelector("#video");
    console.log(video);

    navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(function(stream) {
      video.srcObject = stream;
      video.play();
    })
    .catch(function(err) {
      console.log("An error occurred: " + err);
    });

    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth/width);
      
        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.
      
        if (isNaN(height)) {
          height = width / (4/3);
        }
      
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        streaming = true;
      }
    }, false);
  }

////////////////////////////// FINAL FUNCIÓN CÁMARA ///////////////////////

const start = () => {
    //muestra(pantallaInicio);
    document.querySelector("#inicio").style.display = "block";
    //esconde(pantallaJuego);
    document.querySelector("#juego").style.display = "none";
    //esconde(pantallaHighscore);
    document.querySelector("#highScore").style.display = "none";
    
    addEventListeners();
    // NO FUNCIONA LA INTEGRACIÓN DE LA CÁMARA
};
start();


