/** *The waltz bass* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TheWaltzBassTexts } from "./the-waltz-bass.en";

export const theWaltzBassEs: Translation<TheWaltzBassTexts> = {
  title: "El bajo de vals",
  steps: {
    "waltz-demo": {
      text: "Escucha la mano izquierda sola. Se mece de tres en tres, como un baile. Esto es un bajo de vals.",
    },
    "three-beats": {
      text: "Un vals está en compás de tres por cuatro. Cada compás tiene tres tiempos: uno, dos, tres. El tiempo uno es el fuerte.",
    },
    "oom-pah-pah": {
      text: "En el tiempo uno, la mano izquierda toca la fundamental del acorde, grave. En los tiempos dos y tres, toca las dos notas de arriba a la vez. Suena como pum-pa-pa.",
    },
    "root-on-one": {
      text: "En un bajo de vals, ¿en qué tiempo suena la fundamental grave?",
      answers: ["Tiempo 2", "Tiempo 1", "Tiempo 3"],
    },
    "c-waltz": {
      text: "Ahora tú, en do. El dedo 5 toca el do debajo del do central, y luego los dedos 3 y 1 tocan mi y sol a la vez, dos veces. Toca dos compases.",
    },
    "g-and-f-shapes": {
      text: "El mismo patrón sirve para cualquier acorde. Para sol, toca el sol grave y luego si y re. Para fa, toca el fa grave y luego el la y el do.",
    },
    "g-waltz": {
      text: "Baja la mano al sol que está debajo del do que queda debajo del do central. El dedo 5 toca sol, y luego los dedos 3 y 1 tocan si y re a la vez, dos veces.",
    },
    "f-beats-two-and-three": {
      text: "En un compás sobre fa, ¿qué toca la mano izquierda en los tiempos dos y tres?",
      answers: ["Fa solo", "Fa, la y do, una tras otra", "La y do a la vez"],
    },
    "f-waltz": {
      text: "Ahora ve al fa, una tecla blanca debajo de ese sol. El dedo 5 toca fa, y luego los dedos 3 y 1 tocan el la y el do a la vez, dos veces.",
    },
    "chord-walk": {
      text: "Toca un compás de cada acorde: do, fa, sol y do. Mueve la mano en el tiempo uno y sigue contando hasta tres.",
    },
    "waltz-tune-demo": {
      text: "Aquí tienes una melodía corta sobre el bajo de vals. La mano derecha toca notas largas mientras la mano izquierda mantiene el pum-pa-pa.",
    },
    "waltz-tune": {
      text: "Pon el pulgar derecho en el do central. Presiona cada nota de la melodía junto con las teclas de la mano izquierda que van debajo, y sigue con el bajo de vals entre ellas.",
    },
    recap: {
      text: "¡Bien hecho! Tu mano izquierda ya puede tocar un bajo de vals.",
      points: [
        "Un vals está en compás de tres por cuatro, con tres tiempos por compás.",
        "La mano izquierda toca la fundamental grave en el tiempo uno.",
        "En los tiempos dos y tres, toca las notas de arriba a la vez.",
        "El patrón se mueve con el acorde: do, fa y sol.",
      ],
    },
  },
};
