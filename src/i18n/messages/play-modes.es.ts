/** The play modes in Spanish. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playModes as en } from "./play-modes.en";

export const playModes: Translation<typeof en> = {
  eyebrow: "Uno, dos, tres, ¡a tocar!",
  lead: "Elige un modo, y el reproductor se prepara solo con la canción, la ayuda y el aspecto justos. Luego tocas tú.",
  note: "Un modo cambia algunas opciones del reproductor. Cuando empieza, puedes deshacerlo con un clic y cambiar cualquier opción después.",
  traits: "Qué configura",
  song: (title: string) => `Canción: ${title}`,
  noSong: "No necesita canción",
  start: "Empezar",
  keyNames: ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"],
  groups: {
    fun: {
      heading: "Tocar por diversión",
      lead: "Puntos, chispas y espectáculo. Elige uno y deja que el piano te entretenga.",
    },
    learn: {
      heading: "Aprender una canción",
      lead: "Cada uno te ayuda a aprender una canción a su manera, desde una mano a la vez hasta leer la partitura.",
    },
    skills: {
      heading: "Entrenar una habilidad",
      lead: "Encuentra notas rápido, toca libremente o escucha cómo funcionan los acordes. Algunos no necesitan ninguna canción.",
    },
  },
  modes: {
    game: {
      tag: "Para divertirse",
      name: "Modo juego",
      text: "Cada nota que aciertas suma puntos, y el piano te responde con destellos. Encadena un combo y supera tu mejor puntuación.",
      traits: ["Puntos y combos en nivel fácil", "Chispas, destellos y un piano que brilla", "Una canción corta y pegadiza"],
      song: "In the Hall of the Mountain King, Principiante",
    },
    challenge: {
      tag: "Nivel experto",
      name: "Desafío",
      text: "El modo juego en su nivel más difícil, sin nombres ni ayudas. Solo una partida impecable consigue la puntuación máxima.",
      traits: ["Puntos y combos en nivel difícil", "Sin nombres ni ayudas en las teclas", "Una versión más difícil de la canción"],
      song: "In the Hall of the Mountain King, Intermedio",
    },
    concert: {
      tag: "Relájate",
      name: "Concierto",
      text: "El piano toca una canción para ti, con llamas, estrellas y una cámara en movimiento. Disfruta del espectáculo, o súmate si te animas.",
      traits: ["Una cámara de cine", "Llamas, estrellas y chispas", "Un piano que brilla y una ola de luz"],
      song: "Carol of the Bells, Difícil",
    },
    playAlong: {
      tag: "Paso a paso",
      name: "Tocar a la par",
      text: "La canción te espera en cada nota. Cada nota muestra su nombre y su dedo, y cada tecla, su nombre.",
      traits: ["Las notas te esperan", "Nombres de notas y dedos sobre las notas", "Nombres en las teclas blancas y negras"],
      song: "Ode to Joy, Principiante",
    },
    oneHand: {
      tag: "Poco a poco",
      name: "Una mano a la vez",
      text: "Aprende primero la mano derecha mientras la aplicación toca la izquierda. La canción espera cada una de tus notas.",
      traits: ["Solo toca tu mano derecha", "La aplicación toca la mano izquierda", "Cambia de mano en la configuración, en «Tus manos»"],
      song: "Jingle Bells, Principiante",
    },
    readMusic: {
      tag: "Partitura",
      name: "Leer la partitura",
      text: "La partitura aparece sobre el piano, y la canción te espera. Las notas no llevan nombre, así que las lees en el pentagrama.",
      traits: ["Partitura sobre el piano", "Las notas te esperan", "Una luz suave detrás de cada nota que suena"],
      song: "Mary Had a Little Lamb, Principiante",
    },
    slowSteady: {
      tag: "Práctica",
      name: "Sin prisa, sin pausa",
      text: "Los primeros cuatro compases se repiten en bucle, primero a media velocidad. Cada vuelta va un poco más rápido, hasta que tocas a velocidad completa.",
      traits: ["Los primeros cuatro compases en bucle", "Primero a media velocidad, más rápido en cada vuelta", "Un conteo previo antes de cada vuelta"],
      song: "Für Elise, Fácil",
    },
    rhythm: {
      tag: "Ritmo",
      name: "Al compás",
      text: "Un metrónomo marca el pulso, y cada nota que tocas se puntúa por su precisión rítmica. Sin nombres y sin esperas, solo el pulso.",
      traits: ["Un metrónomo en cada tiempo", "Cada nota puntuada por su precisión rítmica", "La canción nunca espera"],
      song: "Twinkle Twinkle Little Star, Fácil",
    },
    colourByFinger: {
      tag: "Dedos",
      name: "Colores por dedo",
      text: "Cada dedo tiene su propio color, en las notas y en las teclas. La canción espera mientras encuentras el correcto.",
      traits: ["Notas coloreadas por dedo", "Las teclas se iluminan con el color del dedo", "Las notas te esperan"],
      song: "Twinkle Twinkle Little Star, Principiante",
    },
    noteTrainer: {
      tag: "Notas",
      name: "Entrenador de notas",
      text: "La aplicación nombra una nota, y tú la encuentras en las teclas. Al final ves qué notas confundiste.",
      traits: ["Notas de do mayor, desde el do central hacia arriba", "Diez notas por ronda", "Una lista de confusiones al final"],
    },
    freeJam: {
      tag: "Solo tú",
      name: "Improvisación libre",
      text: "Sin canción y sin reglas. Toca lo que quieras, y el piano te responde con chispas y luz. Grábalo y guárdalo como archivo MIDI.",
      traits: ["Tocar libremente, sin canción", "Chispas, estrellas y un piano que brilla", "Graba y guarda lo que tocas"],
    },
    chordExplorer: {
      tag: "Armonía",
      name: "Explorador de acordes",
      text: "Cada acorde de la canción se nombra mientras suena, con su grado en la tonalidad. Unos bloques sobre las notas muestran el lugar de cada nota en la escala.",
      traits: ["Nombres de acordes mientras suena la canción", "Un número romano para cada acorde", "Grados de la escala, con cada fundamental marcada"],
      song: "Canon in D, Fácil",
    },
  },
  toast: {
    started: (name: string) => `Modo activo: ${name}.`,
    undo: "Deshacer",
    undone: "Se restauró tu configuración.",
  },
};
