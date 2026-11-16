/* ==========================================================================
   MÓDULO 1: BASE DE DATOS ESTRUCTURADA DE LOS 6 EJERCICIOS COAR (90s C/U)
   ========================================================================== */
const TIEMPO_POR_PREGUNTA = 90; // 90 segundos exactos para cada pregunta

const BANCO_PREGUNTAS = [
  {
    id: 1,
    titulo: "Ejercicio 01: Sucesión Numérica",
    categoria: "Razonamiento Numérico",
    imagen: "IMAGENES/Ejercicio_01.jpg",
    tiempoSugerido: TIEMPO_POR_PREGUNTA,
    alternativas: [
      { letra: "a", texto: "a) 4" },
      { letra: "b", texto: "b) 6" },
      { letra: "c", texto: "c) 8" },
      { letra: "d", texto: "d) 10" },
      { letra: "e", texto: "e) 12" }
    ],
    correcta: "b",
    pista: "Calcula cuánto se le suma a cada término negativo para llegar al siguiente: de -21 a -14, luego de -14 a -8...",
    pasosSolucion: [
      "Analizamos la diferencia entre términos consecutivos de la secuencia: -21, -14, -8, -3, 1, 4.",
      "Observamos la ley de formación: de -21 a -14 se suma +7; de -14 a -8 se suma +6; de -8 a -3 se suma +5; de -3 a 1 se suma +4; y de 1 a 4 se suma +3.",
      "Siguiendo el patrón decreciente de las sumas (+7, +6, +5, +4, +3), corresponde sumar +2 al último término.",
      "Operación final: 4 + 2 = 6. Por lo tanto, la respuesta correcta es la alternativa b) 6."
    ],
    youtubeId: "Rcbeq-UaiXs",
    tiempoInicioSegundos: 3819,
    etiquetaTiempo: "1h 03m 39s",
    urlDirecta: "https://www.youtube.com/watch?v=Rcbeq-UaiXs&t=3819s"
  },
  {
    id: 2,
    titulo: "Ejercicio 02: Sucesión de Letras",
    categoria: "Razonamiento Alfanumérico",
    imagen: "IMAGENES/Ejercicio_02.jpg",
    tiempoSugerido: TIEMPO_POR_PREGUNTA,
    alternativas: [
      { letra: "a", texto: "a) U" },
      { letra: "b", texto: "b) C" },
      { letra: "c", texto: "c) B" },
      { letra: "d", texto: "d) S" },
      { letra: "e", texto: "e) A" }
    ],
    correcta: "b",
    pista: "No cuentes posiciones en el abecedario. Piensa en palabras conocidas (números pares en orden descendente) que empiezan con esas iniciales: D, D, O, S, C, D...",
    pasosSolucion: [
      "En las sucesiones literales especiales, las letras suelen ser las iniciales de una secuencia de palabras lógicas.",
      "Asociamos cada letra con los números pares en forma descendente: D (Doce), D (Diez), O (Ocho), S (Seis), C (Cuatro), D (Dos).",
      "El número par que continúa descendiendo después del Dos (2) es el Cero (0).",
      "La letra inicial de la palabra 'Cero' es la C. Por lo tanto, la alternativa correcta es la b) C."
    ],
    youtubeId: "3uS5tOpBBQc",
    tiempoInicioSegundos: 3373,
    etiquetaTiempo: "56m 13s",
    urlDirecta: "https://www.youtube.com/watch?v=3uS5tOpBBQc&t=3373s"
  },
  {
    id: 3,
    titulo: "Ejercicio 03: ¡Logra el resultado!",
    categoria: "Operadores y Jerarquía",
    imagen: "IMAGENES/Ejercicio_03.jpg",
    tiempoSugerido: TIEMPO_POR_PREGUNTA,
    alternativas: [
      { letra: "a", texto: "a) 4/10" },
      { letra: "b", texto: "b) 10" },
      { letra: "c", texto: "c) 2/10" },
      { letra: "d", texto: "d) 1" },
      { letra: "e", texto: "e) 2" }
    ],
    correcta: "b",
    pista: "Agrupa la resta de los dos números menores usando los paréntesis y luego divide el número mayor entre ese resultado.",
    pasosSolucion: [
      "Contamos con los números 40, 8 y 4, además de los signos de resta (-), división (÷) y paréntesis ( ).",
      "Agrupamos con los paréntesis la sustracción entre 8 y 4 para darle prioridad jerárquica: (8 - 4) = 4.",
      "Dividimos el número 40 entre el resultado del paréntesis: 40 ÷ (8 - 4) = 40 ÷ 4 = 10.",
      "El valor obtenido coincide exactamente con la alternativa b) 10."
    ],
    youtubeId: "Rcbeq-UaiXs",
    tiempoInicioSegundos: 2936,
    etiquetaTiempo: "48m 56s",
    urlDirecta: "https://www.youtube.com/watch?v=Rcbeq-UaiXs&t=2936s"
  },
  {
    id: 4,
    titulo: "Ejercicio 04: Composición de Figuras",
    categoria: "Razonamiento Espacial",
    imagen: "IMAGENES/Ejercicio_04.jpg",
    tiempoSugerido: TIEMPO_POR_PREGUNTA,
    alternativas: [
      { letra: "a", texto: "a) Figura A" },
      { letra: "b", texto: "b) Figura B" },
      { letra: "c", texto: "c) Figura C" },
      { letra: "d", texto: "d) Figura D" }
    ],
    correcta: "a",
    pista: "Observa el semicírculo, el rombo y el pentágono alargado. Imagina rotarlos y ensamblarlos para formar una silueta continua con borde derecho curvo.",
    pasosSolucion: [
      "Identificamos las 3 piezas base: un cuadrado rotado (rombo), un semicírculo y una barra con punta triangular.",
      "Para ensamblar la figura compuesta, colocamos el semicírculo en el extremo derecho formando la curva lateral.",
      "Acoplamos el cuerpo rectangular en el bloque central e integramos el vértice sobresaliente en la esquina superior izquierda.",
      "La única silueta geométrica donde encajan exactamente las 3 piezas sin sobrantes es la alternativa a)."
    ],
    youtubeId: "uig0JI9R_o0",
    tiempoInicioSegundos: 1235,
    etiquetaTiempo: "20m 35s",
    urlDirecta: "https://www.youtube.com/watch?v=uig0JI9R_o0&t=1235s"
  },
  {
    id: 5,
    titulo: "Ejercicio 05: Secuencia de Figuras en L",
    categoria: "Secuencias Abstractas",
    imagen: "IMAGENES/Ejercicio_05.jpg",
    tiempoSugerido: TIEMPO_POR_PREGUNTA,
    alternativas: [
      { letra: "a", texto: "a) Opción A" },
      { letra: "b", texto: "b) Opción B" },
      { letra: "c", texto: "c) Opción C" },
      { letra: "d", texto: "d) Opción D" },
      { letra: "e", texto: "e) Opción E" }
    ],
    correcta: "c",
    pista: "Analiza dos patrones por separado: 1) Hacia dónde crece un cuadradito nuevo en cada paso (arriba vs. derecha), y 2) Cómo se alternan los bloques pintados de negro.",
    pasosSolucion: [
      "Patrón 1 (Crecimiento de cuadrados): De la 1.ª a la 2.ª figura aumenta un cuadradito hacia arriba. De la 2.ª a la 3.ª aumenta un cuadradito hacia la derecha.",
      "Por alternancia, de la 3.ª a la 4.ª figura debe aumentar un cuadradito hacia arriba (columna vertical de 4 bloques y base de 3). Esto descarta 'a' y 'e', dejando solo b, c y d.",
      "Patrón 2 (Sombreado negro): En la 1.ª figura está pintado el bloque de la esquina inferior izquierda; en la 2.ª pasan a pintarse los dos extremos (superior y derecho); en la 3.ª regresa a pintarse solo la esquina.",
      "Por lo tanto, en la 4.ª figura toca pintar los dos extremos (el bloque más alto de la columna y el bloque más a la derecha de la base), correspondiendo a la alternativa c)."
    ],
    youtubeId: null,
    tiempoInicioSegundos: 0,
    etiquetaTiempo: null,
    urlDirecta: null
  },
  {
    id: 6,
    titulo: "Ejercicio 06: Matriz de Figuras",
    categoria: "Analogías y Matrices Gráficas",
    imagen: "IMAGENES/Ejercicio_06.jpg",
    tiempoSugerido: TIEMPO_POR_PREGUNTA,
    alternativas: [
      { letra: "a", texto: "a) Figura A" },
      { letra: "b", texto: "b) Figura B" },
      { letra: "c", texto: "c) Figura C" },
      { letra: "d", texto: "d) Figura D" },
      { letra: "e", texto: "e) Figura E" }
    ],
    correcta: "d",
    pista: "Cada figura está compuesta por una parte superior y una base inferior. Observa en las filas 1 y 2 qué aporta la primera columna y qué aporta la segunda columna para formar la tercera.",
    pasosSolucion: [
      "Analizamos las filas 1 y 2 dividiendo cada figura en dos componentes: cabeza (arriba) y base (abajo).",
      "En la Fila 1 y Fila 2 se cumple la regla: la 3.ª columna hereda la figura de ARRIBA de la columna 1, y la figura de ABAJO de la columna 2.",
      "Aplicamos la misma ley en la Fila 3: tomamos la parte superior de la 1.ª columna (el círculo pequeño) y la parte inferior de la 2.ª columna (el rombo grande).",
      "Al fusionar el círculo superior con la base en forma de rombo, obtenemos exactamente la figura de la alternativa d)."
    ],
    youtubeId: null,
    tiempoInicioSegundos: 0,
    etiquetaTiempo: null,
    urlDirecta: null
  }
];

// Datos semilla para que el Ranking de estudiantes luzca poblado y competitivo desde la primera exposición
const RANKING_BASE = [
  { id: 101, nombre: "Valeria Mendoza (COAR Tacna)", puntaje: 6, total: 6, porcentaje: 100, segundos: 195, modo: "Simulacro Oficial", esActual: false },
  { id: 102, nombre: "Sebastián Quispe (COAR Lima)", puntaje: 5, total: 6, porcentaje: 83, segundos: 210, modo: "Simulacro Oficial", esActual: false },
  { id: 103, nombre: "Camila Flores (COAR Arequipa)", puntaje: 5, total: 6, porcentaje: 83, segundos: 260, modo: "Entrenamiento", esActual: false },
  { id: 104, nombre: "Mateo Vargas (Postulante)", puntaje: 4, total: 6, porcentaje: 67, segundos: 305, modo: "Entrenamiento", esActual: false }
];

/* ==========================================================================
   MÓDULO 2: SELECTORES DEL DOM Y ESTADO DE LA APLICACIÓN
   ========================================================================== */
const CLAVE_HISTORIAL_COAR = "ultimoIntentoSimuladorCOAR";
const CLAVE_RANKING_COAR = "rankingEstudiantesSimuladorCOAR";

let estadoApp = {
  nombreEstudiante: "",
  modo: "entrenamiento",
  usarPizarra: false,
  indiceActual: 0,
  opcionSeleccionada: null,
  respondida: false,
  puntaje: 0,
  tiempoRestante: TIEMPO_POR_PREGUNTA,
  tiempoEmpleadoPregunta: 0,
  intervaloReloj: null,
  auditoria: []
};

// Vistas principales
const vistaInicio = document.getElementById("vistaInicio");
const vistaQuiz = document.getElementById("vistaQuiz");
const vistaResultados = document.getElementById("vistaResultados");

// Controles de Inicio
const formInicio = document.getElementById("formInicio");
const inputNombrePostulante = document.getElementById("nombrePostulante");
const errorNombreInicio = document.getElementById("errorNombreInicio");
const selectModoEvaluacion = document.getElementById("modoEvaluacion");
const checkPizarra = document.getElementById("checkPizarra");
const ultimoIntentoTexto = document.getElementById("ultimoIntentoTexto");

// Controles del HUD y Pregunta
const hudPostulante = document.getElementById("hudPostulante");
const hudProgresoTexto = document.getElementById("hudProgresoTexto");
const hudCategoria = document.getElementById("hudCategoria");
const barraProgreso = document.getElementById("barraProgreso");
const cajaCronometro = document.getElementById("cajaCronometro");
const textoCronometro = document.getElementById("textoCronometro");

const layoutTrabajo = document.getElementById("layoutTrabajo");
const panelPizarra = document.getElementById("panelPizarra");
const tituloPregunta = document.getElementById("tituloPregunta");
const cajaPista = document.getElementById("cajaPista");
const imagenEjercicio = document.getElementById("imagenEjercicio");
const listaAlternativas = document.getElementById("listaAlternativas");

// Botones de acción
const btnPista = document.getElementById("btnPista");
const btnAmpliar = document.getElementById("btnAmpliar");
const contenedorImagenClick = document.getElementById("contenedorImagenClick");
const btnEnviarRespuesta = document.getElementById("btnEnviarRespuesta");
const btnSiguientePregunta = document.getElementById("btnSiguientePregunta");

// Retroalimentación y YouTube
const panelRetroalimentacion = document.getElementById("panelRetroalimentacion");
const bannerResultado = document.getElementById("bannerResultado");
const tituloFeedback = document.getElementById("tituloFeedback");
const resumenFeedback = document.getElementById("resumenFeedback");
const listaPasosSolucion = document.getElementById("listaPasosSolucion");
const seccionVideoYoutube = document.getElementById("seccionVideoYoutube");
const infoTiempoVideo = document.getElementById("infoTiempoVideo");
const btnToggleVideo = document.getElementById("btnToggleVideo");
const enlaceExternoYoutube = document.getElementById("enlaceExternoYoutube");
const contenedorIframeYoutube = document.getElementById("contenedorIframeYoutube");
const iframeYoutube = document.getElementById("iframeYoutube");
const avisoSinVideo = document.getElementById("avisoSinVideo");

// Lightbox Modal
const modalLightbox = document.getElementById("modalLightbox");
const imagenLightbox = document.getElementById("imagenLightbox");
const lightboxTitulo = document.getElementById("lightboxTitulo");
const btnCerrarLightbox = document.getElementById("btnCerrarLightbox");

/* ==========================================================================
   MÓDULO 3: MOTOR DEL CRONÓMETRO (REINICIO A 90 SEGUNDOS POR PREGUNTA)
   ========================================================================== */
function formatearTiempo(segundosTotales) {
  const minutos = Math.floor(segundosTotales / 60);
  const segundos = segundosTotales % 60;
  return `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

function iniciarCronometro() {
  detenerCronometro();
  // Siempre se reinicia exactamente en 90 segundos (01:30) para cada pregunta
  estadoApp.tiempoRestante = TIEMPO_POR_PREGUNTA;
  estadoApp.tiempoEmpleadoPregunta = 0;
  actualizarVistaCronometro();

  estadoApp.intervaloReloj = setInterval(() => {
    estadoApp.tiempoEmpleadoPregunta++;

    if (estadoApp.tiempoRestante > 0) {
      estadoApp.tiempoRestante--;
      actualizarVistaCronometro();
    } else {
      // Al llegar a 00:00
      if (estadoApp.modo === "simulacro" && !estadoApp.respondida) {
        procesarRespuesta(true);
      }
    }
  }, 1000);
}

function detenerCronometro() {
  if (estadoApp.intervaloReloj) {
    clearInterval(estadoApp.intervaloReloj);
    estadoApp.intervaloReloj = null;
  }
}

function actualizarVistaCronometro() {
  textoCronometro.textContent = formatearTiempo(estadoApp.tiempoRestante);
  cajaCronometro.classList.remove("alerta-media", "alerta-critica");

  if (estadoApp.tiempoRestante <= 15) {
    cajaCronometro.classList.add("alerta-critica");
  } else if (estadoApp.tiempoRestante <= 35) {
    cajaCronometro.classList.add("alerta-media");
  }
}

/* ==========================================================================
   MÓDULO 4: RENDERIZADO DINÁMICO DE PREGUNTAS, ALTERNATIVAS Y TACHADO
   ========================================================================== */
function cargarPreguntaActual() {
  const pregunta = BANCO_PREGUNTAS[estadoApp.indiceActual];
  estadoApp.opcionSeleccionada = null;
  estadoApp.respondida = false;

  // Actualizar HUD
  hudProgresoTexto.textContent = `Pregunta ${estadoApp.indiceActual + 1} de ${BANCO_PREGUNTAS.length}`;
  hudCategoria.textContent = pregunta.categoria;
  const porcentajeBarra = ((estadoApp.indiceActual + 1) / BANCO_PREGUNTAS.length) * 100;
  barraProgreso.style.width = `${porcentajeBarra}%`;

  // Cargar datos visuales
  tituloPregunta.textContent = pregunta.titulo;
  imagenEjercicio.src = pregunta.imagen;
  imagenEjercicio.alt = pregunta.titulo;

  // Resetear paneles ocultos
  cajaPista.classList.add("oculto");
  cajaPista.textContent = "";
  panelRetroalimentacion.classList.add("oculto");
  contenedorIframeYoutube.classList.add("oculto");
  iframeYoutube.src = "";
  btnToggleVideo.textContent = "▶️ Reproducir aquí mismo";

  btnEnviarRespuesta.disabled = true;
  btnEnviarRespuesta.classList.remove("oculto");
  btnSiguientePregunta.classList.add("oculto");

  if (estadoApp.usarPizarra) {
    limpiarLienzoPizarra();
  }

  // Generar botones de alternativas
  listaAlternativas.innerHTML = "";
  pregunta.alternativas.forEach(alt => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-alternativa";
    tarjeta.dataset.letra = alt.letra;

    const botonElegir = document.createElement("button");
    botonElegir.type = "button";
    botonElegir.className = "btn-elegir-opcion";
    botonElegir.innerHTML = `
      <span class="circulo-inciso">${alt.letra}</span>
      <span>Alternativa ${alt.letra.toUpperCase()}</span>
    `;
    botonElegir.addEventListener("click", () => seleccionarAlternativa(alt.letra, tarjeta));

    const botonTachar = document.createElement("button");
    botonTachar.type = "button";
    botonTachar.className = "btn-tachar";
    botonTachar.textContent = "👁️ Tachar";
    botonTachar.title = "Descartar o tachar esta opción";
    botonTachar.addEventListener("click", (e) => {
      e.stopPropagation();
      if (estadoApp.respondida) return;
      tarjeta.classList.toggle("tachada");
    });

    tarjeta.appendChild(botonElegir);
    tarjeta.appendChild(botonTachar);
    listaAlternativas.appendChild(tarjeta);
  });

  // Reiniciar el cronómetro a 90 segundos para la pregunta actual
  iniciarCronometro();
}

function seleccionarAlternativa(letra, tarjetaDOM) {
  if (estadoApp.respondida) return;

  tarjetaDOM.classList.remove("tachada");

  document.querySelectorAll(".tarjeta-alternativa").forEach(el => {
    el.classList.remove("seleccionada");
  });

  tarjetaDOM.classList.add("seleccionada");
  estadoApp.opcionSeleccionada = letra;
  btnEnviarRespuesta.disabled = false;
}

/* ==========================================================================
   MÓDULO 5: EVALUACIÓN, SOLUCIONARIO PASO A PASO E INTEGRACIÓN YOUTUBE
   ========================================================================== */
function procesarRespuesta(porTiempoAgotado = false) {
  if (estadoApp.respondida) return;
  estadoApp.respondida = true;
  detenerCronometro();

  const pregunta = BANCO_PREGUNTAS[estadoApp.indiceActual];
  const eleccion = estadoApp.opcionSeleccionada;
  const esCorrecta = !porTiempoAgotado && eleccion === pregunta.correcta;

  if (esCorrecta) {
    estadoApp.puntaje++;
  }

  estadoApp.auditoria.push({
    numero: pregunta.id,
    categoria: pregunta.categoria,
    elegida: porTiempoAgotado ? "Tiempo agotado" : eleccion.toUpperCase(),
    correcta: pregunta.correcta.toUpperCase(),
    tiempoSegundos: estadoApp.tiempoEmpleadoPregunta,
    tiempo: `${estadoApp.tiempoEmpleadoPregunta}s`,
    esCorrecta: esCorrecta,
    urlVideo: pregunta.urlDirecta
  });

  document.querySelectorAll(".tarjeta-alternativa").forEach(tarjeta => {
    const letraTarjeta = tarjeta.dataset.letra;
    if (letraTarjeta === pregunta.correcta) {
      tarjeta.classList.add("correcta-final");
    } else if (letraTarjeta === eleccion && !esCorrecta) {
      tarjeta.classList.add("incorrecta-final");
    }
  });

  bannerResultado.className = "banner-resultado " + (esCorrecta ? "exito" : "error");
  if (esCorrecta) {
    tituloFeedback.textContent = `🎉 ¡Excelente razonamiento, ${estadoApp.nombreEstudiante}!`;
    resumenFeedback.textContent = `Marcaste la alternativa correcta (${pregunta.correcta.toUpperCase()}) en ${estadoApp.tiempoEmpleadoPregunta} segundos (de los 90s sugeridos). Revisa debajo el desglose formal del método.`;
  } else if (porTiempoAgotado) {
    tituloFeedback.textContent = "⏰ ¡Se agotaron los 90 segundos de esta pregunta!";
    resumenFeedback.textContent = `La alternativa correcta era la ${pregunta.correcta.toUpperCase()}. Analicemos el procedimiento paso a paso.`;
  } else {
    tituloFeedback.textContent = `💡 Observación y Apoyo Didáctico`;
    resumenFeedback.textContent = `Seleccionaste la opción ${eleccion.toUpperCase()}, pero la respuesta correcta es la ${pregunta.correcta.toUpperCase()}. Veamos juntos cómo se resuelve paso a paso:`;
  }

  listaPasosSolucion.innerHTML = "";
  pregunta.pasosSolucion.forEach(paso => {
    const item = document.createElement("li");
    item.textContent = paso;
    listaPasosSolucion.appendChild(item);
  });

  if (pregunta.youtubeId) {
    seccionVideoYoutube.classList.remove("oculto");
    avisoSinVideo.classList.add("oculto");
    infoTiempoVideo.textContent = `Explicación grabada en clase (Inicia en: ${pregunta.etiquetaTiempo}).`;
    enlaceExternoYoutube.href = pregunta.urlDirecta;
  } else {
    seccionVideoYoutube.classList.add("oculto");
    avisoSinVideo.classList.remove("oculto");
  }

  btnEnviarRespuesta.classList.add("oculto");
  btnSiguientePregunta.classList.remove("oculto");
  btnSiguientePregunta.textContent =
    estadoApp.indiceActual === BANCO_PREGUNTAS.length - 1
      ? "📊 Finalizar y Ver Ranking / PDF"
      : "Siguiente Ejercicio (Reiniciar 90s) ➔";

  panelRetroalimentacion.classList.remove("oculto");
  panelRetroalimentacion.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

btnToggleVideo.addEventListener("click", () => {
  const pregunta = BANCO_PREGUNTAS[estadoApp.indiceActual];
  if (!pregunta.youtubeId) return;

  const estaOculto = contenedorIframeYoutube.classList.contains("oculto");
  if (estaOculto) {
    iframeYoutube.src = `https://www.youtube.com/embed/${pregunta.youtubeId}?start=${pregunta.tiempoInicioSegundos}&autoplay=1&rel=0`;
    contenedorIframeYoutube.classList.remove("oculto");
    btnToggleVideo.textContent = "⏹️ Ocultar reproductor de video";
  } else {
    iframeYoutube.src = "";
    contenedorIframeYoutube.classList.add("oculto");
    btnToggleVideo.textContent = "▶️ Reproducir aquí mismo";
  }
});

/* ==========================================================================
   MÓDULO 6: RANKING DE ESTUDIANTES, EXPORTACIÓN A PDF, LIGHTBOX Y PIZARRA
   ========================================================================== */
function obtenerRankingGuardado() {
  try {
    const guardado = JSON.parse(localStorage.getItem(CLAVE_RANKING_COAR));
    if (Array.isArray(guardado) && guardado.length > 0) {
      return guardado;
    }
  } catch (e) {
    // Usar ranking base si hay error
  }
  return [...RANKING_BASE];
}

function guardarYRenderizarRanking(nuevoIntento) {
  let listaRanking = obtenerRankingGuardado().map(item => ({ ...item, esActual: false }));
  listaRanking.push(nuevoIntento);

  // Ordenar por mayor puntaje primero y menor tiempo en segundos como desempate
  listaRanking.sort((a, b) => {
    if (b.puntaje !== a.puntaje) return b.puntaje - a.puntaje;
    return a.segundos - b.segundos;
  });

  localStorage.setItem(CLAVE_RANKING_COAR, JSON.stringify(listaRanking));
  dibujarTablaRanking(listaRanking);
}

function dibujarTablaRanking(listaRanking) {
  const cuerpoRanking = document.getElementById("cuerpoTablaRanking");
  cuerpoRanking.innerHTML = "";

  listaRanking.forEach((registro, idx) => {
    const puesto = idx + 1;
    let medalla = `#${puesto}`;
    if (puesto === 1) medalla = "🥇 1.°";
    if (puesto === 2) medalla = "🥈 2.°";
    if (puesto === 3) medalla = "🥉 3.°";

    const fila = document.createElement("tr");
    if (registro.esActual) {
      fila.className = "fila-usuario-actual";
    }

    fila.innerHTML = `
      <td><strong>${medalla}</strong></td>
      <td>${registro.nombre} ${registro.esActual ? "<span>(Tú)</span>" : ""}</td>
      <td><strong>${registro.puntaje} / ${registro.total}</strong></td>
      <td>${registro.porcentaje}%</td>
      <td>${registro.segundos} seg</td>
      <td>${registro.modo}</td>
    `;
    cuerpoRanking.appendChild(fila);
  });
}

document.getElementById("btnLimpiarRanking").addEventListener("click", () => {
  localStorage.setItem(CLAVE_RANKING_COAR, JSON.stringify(RANKING_BASE));
  dibujarTablaRanking(RANKING_BASE);
});

// Generador de Solucionario Oficial en PDF (Listo para guardar o imprimir)
function descargarSolucionarioPDF() {
  const ventanaPDF = window.open("", "_blank");
  if (!ventanaPDF) {
    alert("Por favor permite las ventanas emergentes en tu navegador para generar el PDF.");
    return;
  }

  const bloquesPreguntasHTML = BANCO_PREGUNTAS.map((preg, idx) => {
    const registroAuditoria = estadoApp.auditoria[idx] || {};
    const pasosHTML = preg.pasosSolucion.map(p => `<li>${p}</li>`).join("");
    const linkVideoHTML = preg.urlDirecta
      ? `<p class="video-ref">🎬 <strong>Video clase en YouTube (${preg.etiquetaTiempo}):</strong> <a href="${preg.urlDirecta}">${preg.urlDirecta}</a></p>`
      : "";

    return `
      <div class="bloque-pregunta-pdf">
        <div class="cabecera-preg-pdf">
          <h3>${preg.titulo} (${preg.categoria})</h3>
          <span>Clave Oficial: <strong>Alternativa ${preg.correcta.toUpperCase()}</strong> | Tu respuesta: <strong>${registroAuditoria.elegida || "-"}</strong> (${registroAuditoria.tiempo || "0s"})</span>
        </div>
        <div class="caja-img-pdf">
          <img src="${preg.imagen}" alt="${preg.titulo}">
        </div>
        <div class="pasos-pdf">
          <h4>Resolución Paso a Paso:</h4>
          <ol>${pasosHTML}</ol>
          ${linkVideoHTML}
        </div>
      </div>
    `;
  }).join("");

  ventanaPDF.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Solucionario_Oficial_COAR_${estadoApp.nombreEstudiante}</title>
      <style>
        body { font-family: Arial, sans-serif; color: #0f172a; margin: 28px; line-height: 1.5; }
        .encabezado-pdf { border-bottom: 3px solid #1e3a8a; padding-bottom: 12px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
        .encabezado-pdf h1 { margin: 0; font-size: 22px; color: #1e3a8a; }
        .resumen-alumno { background: #f1f5f9; padding: 12px 16px; border-radius: 8px; margin-bottom: 20px; font-size: 14px; }
        .bloque-pregunta-pdf { border: 1px solid #cbd5e1; border-radius: 10px; padding: 16px; margin-bottom: 22px; page-break-inside: avoid; }
        .cabecera-preg-pdf { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 12px; }
        .cabecera-preg-pdf h3 { margin: 0; color: #1e40af; font-size: 16px; }
        .caja-img-pdf { text-align: center; margin-bottom: 12px; }
        .caja-img-pdf img { max-height: 220px; max-width: 100%; border: 1px solid #cbd5e1; border-radius: 6px; }
        .pasos-pdf h4 { margin: 0 0 6px; font-size: 14px; color: #0f766e; }
        .pasos-pdf ol { margin: 0; padding-left: 20px; font-size: 13.5px; }
        .pasos-pdf li { margin-bottom: 4px; }
        .video-ref { margin: 8px 0 0; font-size: 12.5px; color: #9f1239; }
        @media print { .no-print { display: none; } }
      </style>
    </head>
    <body>
      <div class="encabezado-pdf">
        <div>
          <h1>SOLUCIONARIO OFICIAL - SIMULADOR DE ENTRENAMIENTO COAR</h1>
          <small>Documento generado automáticamente con JavaScript</small>
        </div>
        <button class="no-print" onclick="window.print()" style="padding:10px 16px; background:#2563eb; color:#fff; border:0; border-radius:6px; font-weight:bold; cursor:pointer;">🖨️ Guardar como PDF</button>
      </div>
      <div class="resumen-alumno">
        <strong>Estudiante:</strong> ${estadoApp.nombreEstudiante} &nbsp;|&nbsp;
        <strong>Puntaje obtenido:</strong> ${estadoApp.puntaje} de ${BANCO_PREGUNTAS.length} &nbsp;|&nbsp;
        <strong>Fecha:</strong> ${new Date().toLocaleDateString("es-PE")}
      </div>
      ${bloquesPreguntasHTML}
      <script>
        window.onload = function() {
          setTimeout(function() { window.print(); }, 400);
        };
      <\/script>
    </body>
    </html>
  `);
  ventanaPDF.document.close();
}

document.getElementById("btnDescargarPDF").addEventListener("click", descargarSolucionarioPDF);

// Lightbox
function abrirLightbox() {
  const pregunta = BANCO_PREGUNTAS[estadoApp.indiceActual];
  imagenLightbox.src = pregunta.imagen;
  lightboxTitulo.textContent = pregunta.titulo;
  modalLightbox.classList.remove("oculto");
}

function cerrarLightbox() {
  modalLightbox.classList.add("oculto");
}

btnAmpliar.addEventListener("click", abrirLightbox);
contenedorImagenClick.addEventListener("click", abrirLightbox);
btnCerrarLightbox.addEventListener("click", cerrarLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalLightbox.classList.contains("oculto")) {
    cerrarLightbox();
  }
});

btnPista.addEventListener("click", () => {
  const pregunta = BANCO_PREGUNTAS[estadoApp.indiceActual];
  cajaPista.textContent = `💡 Pista Didáctica: ${pregunta.pista}`;
  cajaPista.classList.remove("oculto");
});

formInicio.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = inputNombrePostulante.value.trim();
  if (nombre.length < 3) {
    errorNombreInicio.textContent = "Ingresa tu nombre (mínimo 3 caracteres).";
    return;
  }
  errorNombreInicio.textContent = "";

  estadoApp.nombreEstudiante = nombre;
  estadoApp.modo = selectModoEvaluacion.value;
  estadoApp.usarPizarra = checkPizarra.checked;
  estadoApp.indiceActual = 0;
  estadoApp.puntaje = 0;
  estadoApp.auditoria = [];

  hudPostulante.textContent = `Estudiante: ${estadoApp.nombreEstudiante}`;

  if (estadoApp.usarPizarra) {
    layoutTrabajo.classList.add("con-pizarra");
    panelPizarra.classList.remove("oculto");
  } else {
    layoutTrabajo.classList.remove("con-pizarra");
    panelPizarra.classList.add("oculto");
  }

  vistaInicio.classList.add("oculto");
  vistaResultados.classList.add("oculto");
  vistaQuiz.classList.remove("oculto");

  cargarPreguntaActual();
});

btnEnviarRespuesta.addEventListener("click", () => procesarRespuesta(false));

btnSiguientePregunta.addEventListener("click", () => {
  if (estadoApp.indiceActual < BANCO_PREGUNTAS.length - 1) {
    estadoApp.indiceActual++;
    cargarPreguntaActual();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    mostrarReporteFinal();
  }
});

function mostrarReporteFinal() {
  detenerCronometro();
  vistaQuiz.classList.add("oculto");
  vistaResultados.classList.remove("oculto");

  const total = BANCO_PREGUNTAS.length;
  const porcentaje = Math.round((estadoApp.puntaje / total) * 100);
  const segundosTotales = estadoApp.auditoria.reduce((acc, item) => acc + item.tiempoSegundos, 0);

  document.getElementById("tituloReporteFinal").textContent = `¡Buen trabajo, ${estadoApp.nombreEstudiante}!`;
  document.getElementById("subtituloReporteFinal").textContent = `Has finalizado el Simulacro N.° 01 de Entrenamiento COAR.`;
  document.getElementById("kpiPuntajeFinal").textContent = `${estadoApp.puntaje} / ${total}`;
  document.getElementById("kpiPorcentaje").textContent = `${porcentaje}%`;
  document.getElementById("kpiTiempoTotal").textContent = `${segundosTotales} seg`;

  const cuerpoAuditoria = document.getElementById("cuerpoTablaAuditoria");
  cuerpoAuditoria.innerHTML = "";

  estadoApp.auditoria.forEach(item => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td><strong>#${item.numero}</strong></td>
      <td>${item.categoria}</td>
      <td>${item.elegida}</td>
      <td><strong>${item.correcta}</strong></td>
      <td>${item.tiempo} / 90s</td>
      <td>${item.esCorrecta ? "✅ Correcto" : "❌ Por reforzar"}</td>
      <td>${item.urlVideo ? `<a href="${item.urlVideo}" target="_blank" rel="noopener">🎬 Ver clase</a>` : "📘 Solución en texto"}</td>
    `;
    cuerpoAuditoria.appendChild(fila);
  });

  // Registrar al usuario en el Ranking y renderizar tabla
  guardarYRenderizarRanking({
    id: Date.now(),
    nombre: estadoApp.nombreEstudiante,
    puntaje: estadoApp.puntaje,
    total: total,
    porcentaje: porcentaje,
    segundos: segundosTotales,
    modo: estadoApp.modo === "simulacro" ? "Simulacro Oficial" : "Entrenamiento",
    esActual: true
  });

  const resumenGuardado = `${estadoApp.nombreEstudiante} logró ${estadoApp.puntaje}/${total} (${porcentaje}%) en ${segundosTotales}s.`;
  localStorage.setItem(CLAVE_HISTORIAL_COAR, resumenGuardado);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("btnReiniciarQuiz").addEventListener("click", () => {
  cargarHistorialPrevio();
  vistaResultados.classList.add("oculto");
  vistaInicio.classList.remove("oculto");
});

function cargarHistorialPrevio() {
  const guardado = localStorage.getItem(CLAVE_HISTORIAL_COAR);
  if (guardado) {
    ultimoIntentoTexto.textContent = guardado;
  }
}

// Lógica de la Pizarra Digital (Canvas HTML5)
const canvas = document.getElementById("lienzoPizarra");
const ctx = canvas.getContext("2d");
let dibujando = false;
let colorActual = "#1e293b";
let grosorActual = 3;

function obtenerCoordenadas(evento) {
  const rect = canvas.getBoundingClientRect();
  const clienteX = evento.touches ? evento.touches[0].clientX : evento.clientX;
  const clienteY = evento.touches ? evento.touches[0].clientY : evento.clientY;
  return {
    x: (clienteX - rect.left) * (canvas.width / rect.width),
    y: (clienteY - rect.top) * (canvas.height / rect.height)
  };
}

function iniciarTrazo(evento) {
  dibujando = true;
  const pos = obtenerCoordenadas(evento);
  ctx.beginPath();
  ctx.moveTo(pos.x, pos.y);
}

function dibujarTrazo(evento) {
  if (!dibujando) return;
  evento.preventDefault();
  const pos = obtenerCoordenadas(evento);
  ctx.lineTo(pos.x, pos.y);
  ctx.strokeStyle = colorActual;
  ctx.lineWidth = grosorActual;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();
}

function finalizarTrazo() {
  dibujando = false;
}

function limpiarLienzoPizarra() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

canvas.addEventListener("mousedown", iniciarTrazo);
canvas.addEventListener("mousemove", dibujarTrazo);
window.addEventListener("mouseup", finalizarTrazo);

canvas.addEventListener("touchstart", iniciarTrazo, { passive: false });
canvas.addEventListener("touchmove", dibujarTrazo, { passive: false });
window.addEventListener("touchend", finalizarTrazo);

document.querySelectorAll(".color-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".color-btn").forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");
    colorActual = btn.dataset.color;
    grosorActual = 3;
  });
});

document.getElementById("btnBorrador").addEventListener("click", () => {
  colorActual = "#ffffff";
  grosorActual = 18;
});

document.getElementById("btnLimpiarPizarra").addEventListener("click", limpiarLienzoPizarra);

cargarHistorialPrevio();