/** *Sharps* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { SharpsTexts } from "./sharps.en";

export const sharpsEs: Translation<SharpsTexts> = {
  title: "Sostenidos",
  steps: {
    "raised-by-a-half-step": {
      text: "Escucha: do, y luego la tecla negra justo a su derecha. Después fa, y la tecla negra justo a la derecha de fa.",
    },
    "the-sharp-sign": {
      text: "Este signo ♯ es un sostenido. Sube una nota un semitono, hasta la tecla justo a su derecha. Así, do♯ es la tecla negra a la derecha de do.",
    },
    "find-c-sharp": {
      text: "Busca do♯. Empieza en cualquier do y sube un semitono.",
    },
    "find-f-sharp": {
      text: "Ahora busca fa♯. Es la primera tecla negra del grupo de tres.",
    },
    "where-is-g-sharp": {
      text: "¿Dónde está sol♯?",
      answers: ["La tecla negra justo a la izquierda de sol", "La tecla negra justo a la derecha de sol", "El la, una tecla blanca"],
    },
    "e-sharp": {
      text: "A la derecha de mi no hay ninguna tecla negra. Un semitono por encima de mi cae en fa. Así que mi♯ es fa, y si♯ es do.",
    },
    "e-sharp-is": {
      text: "¿Qué tecla presionas para mi♯?",
      answers: ["Fa", "Mi", "Fa♯"],
    },
    "sharp-on-the-staff": {
      text: "En el pentagrama, el ♯ va justo a la izquierda de la nota, en la misma línea o el mismo espacio. Lees la nota y luego subes un semitono.",
    },
    "play-sharps": {
      text: "Lee cada nota con su sostenido y tócala. Busca primero la tecla blanca y luego sube un semitono.",
    },
    "through-f-sharp": {
      text: "Pon el pulgar derecho en el re que está encima del do central y el dedo medio en fa♯. Toca re, mi, fa♯ y sol, y luego baja otra vez a re.",
    },
    recap: {
      text: "¡Bien hecho! Ya sabes leer y tocar sostenidos.",
      points: [
        "Un sostenido ♯ sube una nota un semitono, hasta la tecla justo a su derecha.",
        "Casi todos los sostenidos son teclas negras, como do♯ y fa♯.",
        "Mi♯ es fa, y si♯ es do, porque en medio no hay ninguna tecla negra.",
        "En el pentagrama, el ♯ va justo a la izquierda de su nota.",
      ],
    },
  },
};
