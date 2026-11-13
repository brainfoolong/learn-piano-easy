/** *Phrases* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { PhrasesTexts } from "./phrases.en";

export const phrasesEs: Translation<PhrasesTexts> = {
  title: "Frases",
  steps: {
    "phrase-demo": {
      text: "Escucha dos melodías cortas, una después de la otra. La primera parece preguntar algo, y la segunda le responde. Fíjate en la pequeña pausa entre las dos.",
    },
    "musical-sentences": {
      text: "La música habla en oraciones, como tú. Una oración musical se llama frase. Suele durar cuatro compases.",
    },
    "what-is-a-phrase": {
      text: "¿Qué es una frase?",
      answers: ["Una sola nota fuerte", "Una oración musical, que suele durar cuatro compases", "Un acorde arpegiado", "Un signo que pide tocar rápido"],
    },
    "the-long-slur": {
      text: "Una ligadura corta une unas pocas notas en legato. Una ligadura larga sobre varios compases marca una frase entera. Toca sus notas como una sola línea suave.",
    },
    "slur-shows": {
      text: "Una ligadura larga abarca cuatro compases. ¿Qué indica?",
      answers: ["Una frase, tocada como una sola línea suave", "Cuatro notas fuertes", "Levantar la mano después de cada nota", "Mantener pisado el pedal"],
    },
    "play-question": {
      text: "Toca la primera frase con la mano derecha en la posición de do: do-re-mi-fa, sol, mi, fa-mi-re-mi, y termina en re. Mantenla ligada.",
    },
    breathe: {
      text: "Al final de una frase, levanta un poco la mano, como quien canta y toma aire. Luego empieza la frase siguiente.",
    },
    "question-and-answer": {
      text: "Toca la primera frase y levanta la mano después de su último re. Luego toca la segunda: do-re-mi-fa, sol, mi, fa-mi-re-re, y termina en do.",
    },
    "open-and-home": {
      text: "La primera frase termina en re, así que suena abierta, como una pregunta. La segunda termina en do, la nota donde descansa do mayor, como una respuesta.",
    },
    "which-ends-answer": {
      text: "En do mayor, ¿con qué última nota suena terminada una frase, como una respuesta?",
      answers: ["Re", "Fa", "Si", "Do"],
    },
    "rise-and-fall-demo": {
      text: "Escucha una frase. Empieza suave, crece hasta el sol y se apaga de nuevo hacia el final.",
    },
    "where-loudest": {
      text: "¿Dónde suele sonar más fuerte una frase?",
      answers: ["En su primera nota", "En su última nota", "Cerca de su mitad o de su nota más aguda", "En ningún lugar, siempre suena igual"],
    },
    "shape-both-phrases": {
      text: "Toca dos frases con la mano derecha, empezando en el do central, y respira entre ellas. Primero toca do re mi fa sol, mi fa mi re, mi re, y luego do re mi fa sol, mi fa mi re, re do. Solo se revisan las notas, así que deja que tu oído haga cada frase más fuerte hacia su sol y más suave hacia el final.",
    },
    "when-to-breathe": {
      text: "¿Cuándo levantas la mano para respirar?",
      answers: ["Después de cada nota", "Entre dos frases", "En medio de una frase", "Nunca"],
    },
    recap: {
      text: "¡Bien hecho! Ya sabes tocar la música en frases.",
      points: [
        "Una frase es una oración musical, que suele durar cuatro compases.",
        "Una ligadura larga indica una frase. Tócala como una sola línea suave.",
        "Levanta la mano para respirar entre dos frases.",
        "Una frase suele preguntar o responder, y se hace más fuerte y luego más suave.",
      ],
    },
  },
};
