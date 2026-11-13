/** *The dotted rhythm* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { DottedRhythmTexts } from "./dotted-rhythm.en";

export const dottedRhythmEs: Translation<DottedRhythmTexts> = {
  title: "El ritmo con puntillo",
  steps: {
    "even-and-dotted-demo": {
      text: "Escucha mi y re en dos ritmos. Primero vienen negras iguales: mi, mi, re, re. Luego un mi largo va seguido de un re rápido, y al final viene un re largo.",
    },
    "what-a-dot-does": {
      text: "Esa nota larga tenía un puntillo detrás. El puntillo suma la mitad de lo que dura la nota. Así, una nota con puntillo dura una vez y media lo que dura sin él.",
    },
    "dotted-half-demo": {
      text: "Una blanca dura dos tiempos, y su puntillo suma uno más. Cuenta «1, 2, 3» en cada una de estas blancas con puntillo.",
    },
    "dotted-half-quiz": {
      text: "¿Cuántos tiempos dura una blanca con puntillo?",
      answers: ["Dos tiempos", "Tres tiempos", "Cuatro tiempos"],
    },
    "dotted-quarter": {
      text: "Una negra dura un tiempo, y su puntillo suma medio tiempo. Una negra con puntillo empieza en el «1» y dura hasta el «2 y». Una corchea en el «2 y» completa el resto.",
    },
    "dotted-quarter-quiz": {
      text: "¿Cuántos tiempos dura una negra con puntillo?",
      answers: ["Un tiempo", "Un tiempo y medio", "Dos tiempos"],
    },
    "partner-quiz": {
      text: "Una negra con puntillo y una nota más llenan dos tiempos juntas. ¿Qué nota es?",
      answers: ["Una negra", "Una corchea", "Una blanca"],
    },
    "ode-demo": {
      text: "Este es el comienzo de Ode to Joy. Su último compás tiene el ritmo con puntillo: un mi largo, un re rápido y luego un re largo.",
    },
    "ode-phrase": {
      text: "Pon el pulgar derecho en el do central y toca la melodía. Mantén el último mi un poco más, y luego toca rápido el re que sigue.",
    },
    "fourth-demo": {
      text: "Escucha la mano izquierda del jefe final. Alterna entre do con sol, la quinta que ya conoces, y re con sol. Re con sol es una cuarta: abarca cuatro teclas blancas, contando las dos.",
    },
    "fifth-and-fourth": {
      text: "Ahora tú. Pon el dedo 5 en el do debajo del do central y el pulgar en sol. Toca do y sol juntos, luego re y sol con el dedo 4 en re, y repite ambas.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes tocar el ritmo de una melodía famosa.",
      points: ["El puntillo suma la mitad de lo que dura la nota.", "Una blanca con puntillo dura tres tiempos.", "Una negra con puntillo dura un tiempo y medio.", "Después de una negra con puntillo suele venir una corchea."],
    },
  },
};
