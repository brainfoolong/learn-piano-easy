/** *The Alberti bass* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { AlbertiBassTexts } from "./alberti-bass.en";

export const albertiBassEs: Translation<AlbertiBassTexts> = {
  title: "El bajo de Alberti",
  steps: {
    "alberti-demo": {
      text: "Escucha la mano izquierda sola. Arpegia cada acorde en un patrón rápido y ondulante. Mozart lo usaba mucho.",
    },
    "what-alberti-is": {
      text: "Este acorde arpegiado se llama bajo de Alberti. Toca las notas del acorde en este orden: grave, aguda, media, aguda, en corcheas.",
    },
    "pattern-order": {
      text: "¿En qué orden toca el bajo de Alberti las notas de un acorde?",
      answers: ["Grave, media, aguda, media", "Aguda, media, grave, media", "Grave, aguda, media, aguda"],
    },
    "five-one-three-one": {
      text: "Tu mano izquierda lo toca con los dedos 5, 1, 3, 1. El dedo 5 toca la nota grave, el pulgar la aguda y el dedo 3 la del medio.",
    },
    "c-alberti": {
      text: "Ahora tú, en do. Pon el dedo 5 en el do debajo del do central. Toca do, sol, mi, sol dos veces, de forma pareja.",
    },
    "g7-shape": {
      text: "Para sol, usa sol7: sol mayor con un fa agregado arriba. Deja fuera su sol y toca si, re y fa. Quedan cerca de do, mi y sol, así que tu mano casi no se mueve.",
    },
    "g7-alberti": {
      text: "Baja el dedo 5 a si. Toca si, fa, re, fa dos veces con los dedos 5, 1, 3, 1.",
    },
    "f-second-inversion": {
      text: "Para fa, toca el acorde en segunda inversión: do, fa y la. El dedo 5 se queda en do. El patrón es do, la, fa, la.",
    },
    "thumb-on-f": {
      text: "En el bajo de Alberti sobre fa, ¿qué tecla toca tu pulgar?",
      answers: ["Do", "La", "Fa"],
    },
    "f-alberti": {
      text: "Deja el dedo 5 en do. Toca do, la, fa, la dos veces con los dedos 5, 1, 3, 1.",
    },
    "change-chords": {
      text: "Toca el patrón una vez sobre cada acorde: do, fa, sol7 y do. Mantén parejas las corcheas al cambiar.",
    },
    "alberti-tune-demo": {
      text: "Aquí tienes una melodía corta sobre el bajo de Alberti. La mano derecha toca blancas mientras la mano izquierda sigue ondulando.",
    },
    "alberti-tune": {
      text: "Pon el pulgar derecho en el do central. Toca cada nota de la melodía junto con la nota grave del bajo que va debajo.",
    },
    "d-major-demo": {
      text: "El jefe final, Canon in D, está en re mayor. Su armadura tiene dos sostenidos, en fa y en do, así que cada fa es fa♯ y cada do es do♯. Escucha la escala de re mayor.",
    },
    "two-sharps": {
      text: "La armadura muestra dos sostenidos, en fa y en do. ¿Qué teclas tocas para fa y do?",
      answers: ["Fa♯ y do♯, las teclas negras", "Fa y do, las teclas blancas", "Solo fa♯, y do sigue en la tecla blanca"],
    },
    "d-major-scale": {
      text: "Ahora tú. Pon el pulgar derecho en el re de arriba del do central y toca la escala subiendo y bajando, con la digitación de do mayor.",
    },
    "canon-bass-demo": {
      text: "Escucha la mano izquierda del jefe final: el dedo 5 toca una nota grave, y el pulgar una más aguda. Luego la mano salta al par siguiente, por ejemplo del la al la una octava más abajo. Termina en un acorde de re mayor.",
    },
    "canon-bass": {
      text: "Ahora tú. Pon el dedo 5 en el re debajo del do central, toca cada par y lleva la mano al siguiente. La nota más grave es el segundo re debajo del do central.",
    },
    "left-d-major": {
      text: "El jefe final termina en re mayor con la mano izquierda. Pon el dedo 5 en el re debajo del do central y toca re, fa♯ y la, una por una, y luego a la vez.",
    },
    "black-key-thirds-demo": {
      text: "Cerca del final, la mano derecha del jefe final toca la melodía en terceras. Tres de estas cuatro terceras tienen una tecla negra: fa♯ o do♯.",
    },
    "black-key-thirds": {
      text: "Ahora tú. Pon el dedo 3 en el segundo re arriba del do central, y el dedo 5 en el fa♯ de encima. Presiona las dos teclas de cada tercera como una sola, y ve bajando.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes tocar el bajo de Alberti.",
      points: [
        "El bajo de Alberti arpegia un acorde así: grave, aguda, media, aguda.",
        "Va en corcheas, con los dedos 5, 1, 3, 1.",
        "Sol7 y fa en segunda inversión mantienen la mano cerca de do.",
        "Re mayor tiene dos sostenidos en su armadura: fa♯ y do♯.",
      ],
    },
  },
};
