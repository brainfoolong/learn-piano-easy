/** *Key signatures* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { KeySignaturesTexts } from "./key-signatures.en";

export const keySignaturesEs: Translation<KeySignaturesTexts> = {
  title: "Armaduras",
  steps: {
    "signs-at-the-start": {
      text: "En sol mayor, cada fa se toca como fa♯. La partitura no marca cada uno. Pone un sostenido una sola vez, al principio de cada línea.",
    },
    "every-octave": {
      text: "Estos signos se llaman la armadura. Un sostenido en la línea de fa significa que cada fa es fa♯, agudo o grave. Un bemol en la línea de si significa que cada si es si♭.",
    },
    "one-sharp": {
      text: "La armadura muestra un sostenido, en la línea de fa. ¿En qué tonalidad está la música?",
      answers: ["Sol mayor", "Fa mayor", "Do mayor"],
    },
    "one-flat": {
      text: "La armadura muestra un bemol, en la línea de si. ¿En qué tonalidad está la música?",
      answers: ["Do mayor", "Fa mayor", "Sol mayor"],
    },
    "no-signs": {
      text: "La armadura no muestra sostenidos ni bemoles. ¿En qué tonalidad está la música?",
      answers: ["Fa mayor", "Sol mayor", "Do mayor"],
    },
    "letter-stays": {
      text: "Di el nombre de cada nota. La armadura cambia qué tecla presionas, pero la nota conserva su nombre.",
    },
    "f-in-g-major": {
      text: "La armadura tiene un sostenido. El pentagrama muestra un fa. ¿Qué tecla tocas?",
      answers: ["Fa♯, la tecla negra", "Fa, la tecla blanca"],
    },
    "phrase-in-g": {
      text: "Aquí tienes una frase en sol mayor. Tu pulgar derecho empieza en el segundo re por encima del do central. Escucha el fa♯ en la parte más aguda.",
    },
    "play-in-g": {
      text: "Ahora tú. La armadura tiene un sostenido, así que cada fa es fa♯.",
    },
    "b-in-f-major": {
      text: "La armadura tiene un bemol. El pentagrama muestra un si. ¿Qué tecla tocas?",
      answers: ["Si, la tecla blanca", "Si♭, la tecla negra"],
    },
    "play-in-f": {
      text: "Ahora una frase en fa mayor. Pon el pulgar derecho en el fa que está encima del do central. La armadura tiene un bemol, así que cada si es si♭.",
    },
    recap: {
      text: "¡Bien hecho! Ya sabes leer una armadura. Lo siguiente es una canción en do mayor, sin sostenidos ni bemoles.",
      points: [
        "La armadura va al principio de cada línea.",
        "Sus sostenidos o bemoles valen para cada nota con ese nombre, en todas las octavas.",
        "Un sostenido en fa significa sol mayor, y un bemol en si significa fa mayor.",
        "Sin sostenidos ni bemoles, la música está en do mayor.",
      ],
    },
  },
};
