/** *Moving the hand* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { MovingTheHandTexts } from "./moving-the-hand.en";

export const movingTheHandEs: Translation<MovingTheHandTexts> = {
  title: "Mover la mano",
  steps: {
    "phrase-then-move": {
      text: "Mira la mano derecha. Toca cinco notas en la posición de do, sube durante el silencio y toca la misma forma más arriba.",
    },
    "new-position": {
      text: "Una posición de cinco dedos también puede empezar en otras teclas. En la posición de sol, el pulgar derecho va en el sol encima del do central. Tus dedos cubren sol, la, si, do, re.",
    },
    "new-thumb": {
      text: "Busca la tecla del pulgar derecho en la posición de sol: el sol justo encima del do central.",
    },
    "little-finger-quiz": {
      text: "Tu mano derecha está en la posición de sol. ¿Qué tecla toca el meñique?",
      answers: ["Re", "Do", "Sol", "Mi"],
    },
    "middle-finger-quiz": {
      text: "Sigues en la posición de sol. ¿Qué tecla toca el dedo medio?",
      answers: ["Mi", "Si", "La"],
    },
    "read-g-position": {
      text: "Estas son las notas de la posición de sol en el pentagrama de clave de sol. Nombra cada una.",
    },
    "c-position-phrase": {
      text: "Empieza en la posición de do. Toca desde el pulgar hasta el dedo 4 y baja de nuevo hasta el do central.",
    },
    "g-position-phrase": {
      text: "Ahora lleva la mano a la posición de sol y toca la misma forma. Pon el pulgar en sol, sube hasta do y vuelve a bajar.",
    },
    "move-in-a-rest": {
      text: "Mueve la mano durante un silencio o al final de una nota larga. Levanta toda la mano, mantén su forma y aterriza con el pulgar en la tecla nueva.",
    },
    "move-and-play": {
      text: "Toca dos frases de una vez con la mano derecha. Empieza en el do central y toca do, re, mi, fa, mi, re, do. Luego lleva el pulgar al sol encima del do central y toca sol, la, si, do, si, la, sol.",
    },
    recap: {
      text: "¡Bien hecho! Ahora tu mano puede cambiar de lugar.",
      points: [
        "En la posición de sol, el pulgar derecho va en el sol encima del do central.",
        "Entonces tus dedos tocan sol, la, si, do, re.",
        "Mueve toda la mano durante un silencio o una nota larga, y mantén su forma.",
      ],
    },
  },
};
