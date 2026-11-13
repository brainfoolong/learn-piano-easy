/** *Staccato* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { StaccatoTexts } from "./staccato.en";

export const staccatoEs: Translation<StaccatoTexts> = {
  steps: {
    "staccato-demo": {
      text: "Escucha de do a sol y de vuelta hacia abajo. Cada nota es corta, con un pequeño silencio después.",
    },
    "short-and-detached": {
      text: "Tocar de forma corta y separada se llama staccato. Cada nota queda aparte, como gotas de lluvia que tamborilean en una ventana.",
    },
    "what-staccato-means": {
      text: "¿Qué significa staccato?",
      answers: ["Corto y separado", "Suave y ligado", "Lento y suave", "Cada vez más fuerte"],
    },
    "the-dot": {
      text: "Un puntito encima o debajo de la cabeza de una nota pide staccato. El puntillo de una nota con puntillo va al lado de la cabeza y alarga la nota.",
    },
    "where-the-dot-sits": {
      text: "¿Dónde va el punto de staccato?",
      answers: ["Al lado de la cabeza de la nota, a la derecha", "Al final del compás", "Encima o debajo de la cabeza de la nota", "En la punta de la plica"],
    },
    bounce: {
      text: "Para tocar staccato, rebota en la tecla como una pelota en el suelo. Toca con ligereza desde la muñeca y deja que la tecla suba enseguida.",
    },
    "both-hands-bounce": {
      text: "Toca do, mi, sol, mi, do con las dos manos a la vez, la derecha desde el do central y la izquierda una octava más abajo. Rebota en cada nota.",
    },
    "contrast-demo": {
      text: "Escucha las mismas cinco notas dos veces. Una vez van legato, y la otra, staccato.",
    },
    "which-came-first": {
      text: "¿Cómo sonaron las dos frases?",
      answers: ["Las dos cortas", "Primero ligada, luego corta", "Primero corta, luego ligada", "Las dos ligadas"],
    },
    "mixing-both": {
      text: "La música suele mezclar los dos. Una ligadura une algunas notas, y los puntos acortan otras.",
    },
    "mixed-phrase": {
      text: "Toca do, re, mi, fa y sol legato bajo una ligadura, empezando en el do central. Luego toca tres sol más, cortos, rebotando.",
    },
    "dot-above-quiz": {
      text: "Una nota tiene un puntito encima. ¿Cómo la tocas?",
      answers: ["Ligada a la nota siguiente", "El doble de larga", "Mantenida con el pedal", "Corta, rebotando en la tecla"],
    },
    "bounced-chords": {
      text: "Toca acordes rebotando con la mano derecha desde el do central: do mayor dos veces, luego fa mayor como do-fa-la, sol mayor como si-re-sol y otra vez do mayor.",
    },
    "which-lets-go-early": {
      text: "¿Con qué forma de tocar deja tu dedo la tecla mucho antes de la nota siguiente?",
      answers: ["En staccato", "En legato", "Bajo una ligadura", "En una redonda"],
    },
    recap: {
      text: "¡Bien hecho! Ya sabes tocar de forma corta y separada.",
      points: [
        "Staccato significa corto y separado.",
        "Lo marca un punto encima o debajo de la cabeza de la nota.",
        "Rebota con ligereza en la tecla desde la muñeca.",
        "El legato une las notas, y el staccato las separa.",
      ],
    },
  },
};
