/** *Rests* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { RestsTexts } from "./rests.en";

export const restsEs: Translation<RestsTexts> = {
  title: "Silencios",
  steps: {
    "rests-demo": {
      text: "Mira y escucha. En algunos tiempos el piano se queda callado, pero el pulso sigue.",
    },
    "what-a-rest-is": {
      text: "Un silencio es un momento sin sonido en la música. No tocas nada, pero igual lo cuentas. Un silencio de negra dura un tiempo, como una negra.",
    },
    "quarter-rest-quiz": {
      text: "Tocas do, do, un silencio de negra y después do. ¿Cuántos tiempos de silencio hay?",
      answers: ["Un tiempo", "Dos tiempos", "Ningún tiempo"],
    },
    "half-rest": {
      text: "Un silencio de blanca dura dos tiempos, como una blanca. Te quedas sin tocar y cuentas dos tiempos antes de volver a tocar.",
    },
    "half-rest-quiz": {
      text: "¿Cuántos tiempos de silencio dura un silencio de blanca?",
      answers: ["Un tiempo", "Dos tiempos", "Cuatro tiempos"],
    },
    "fill-a-bar-quiz": {
      text: "Tocas una negra, después un silencio de negra y después una blanca. ¿Cuántos tiempos son?",
      answers: ["Dos tiempos", "Tres tiempos", "Cuatro tiempos"],
    },
    "phrase-with-rests": {
      text: "Mira y escucha. El piano toca do, re, mi, hace un silencio de un tiempo y luego toca mi, re. Hace un silencio de dos tiempos y termina en do.",
    },
    "play-with-rests": {
      text: "Ahora tú, después de un compás de conteo previo. Toca do, re, mi con los clics y luego levanta el dedo durante un tiempo en silencio. Toca mi, re, quédate en silencio dos tiempos y termina en do.",
    },
    recap: {
      text: "¡Bien hecho! Ya conoces tus primeros silencios.",
      points: ["Un silencio es un momento sin sonido que igual se cuenta.", "Un silencio de negra dura un tiempo.", "Un silencio de blanca dura dos tiempos."],
    },
  },
};
