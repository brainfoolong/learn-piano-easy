/** The guide of *Gymnopédie No. 1* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Erik Satie terminó sus tres Gymnopédies en 1888, y la primera se publicó ese mismo verano en una revista. " +
    "Lleva la indicación «Lent et douloureux», que significa lento y doloroso. " +
    "La película The Royal Tenenbaums (2001) la usa.",
  funFact: "Claude Debussy, amigo de Satie, arregló más tarde la primera y la tercera Gymnopédie para orquesta.",
  versions: {
    common: {
      practice: [
        "Toca la mano izquierda sola. Mantiene una quinta abierta en cada compás.",
        "Toca los compases 5 a 8 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las dos manos en los compases 5 a 8, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Toca suaves las quintas y déjalas sonar. Se mecen como un bote lento.",
        "Levanta el pulgar del si un poco antes. Así baja al la a tiempo.",
        "Ve un poco más despacio al final, y deja que el último do se apague.",
      ],
      tricky: {
        7: "Tu pulgar baja del si al la. Luego los dedos 2 y 3 suben al si y al do.",
        11: "Como en el compás 7, el pulgar baja al la después del silencio corto.",
        12: "Mantén el re con el dedo 4 durante dos tiempos. Al mismo tiempo, tu mano izquierda baja al sol grave.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Una nota grave llega en el tiempo 1, y dos notas juntas en el tiempo 2.",
        "Toca los compases 5 a 8 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los compases 5 a 8, despacio y con el pedal.",
        "Toca el final, donde la melodía encuentra el camino de vuelta a casa, al do.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Mantén el pedal pisado durante cada compás entero, y cámbialo justo en la línea divisoria.",
        "El pulgar toca el si y luego baja al la. Mantén sueltos los otros dedos.",
        "Deja que los dos últimos compases suenen suaves, como el final de una canción de cuna.",
      ],
      tricky: {
        7: "Tu pulgar baja del si al la. Mantén la mano cerca de las teclas.",
        11: "El mismo paso que en el compás 7. El pulgar baja del si al la.",
        15: "Tu mano izquierda baja al do grave. Aprovecha el silencio al final del compás 14.",
      },
    },
    epic: {
      practice: [
        "Toca la mano izquierda sola. En el silencio corto, salta de la nota grave hacia arriba al acorde.",
        "Toca los compases 5 a 8 con las dos manos juntas, despacio.",
        "Toca solas las sextas de la mano derecha, y presiona las dos notas de cada doble nota como si fueran una.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "El pedal mantiene la nota grave mientras tu mano salta hacia arriba al acorde.",
        "El do sostenido roza el re de la mano izquierda. Ese roce suave es el color que tanto le gustaba a Satie.",
        "El pulgar toma la nota de abajo de cada sexta. El dedo 4 o el 5 lleva la melodía arriba.",
      ],
      tricky: {
        6: "Tu pulgar se estira hacia abajo hasta el do sostenido mientras el dedo 3 suelta el fa sostenido.",
        10: "Las sextas bajan paso a paso y luego saltan hacia abajo al mi y al do sostenido. Mantén los dedos 1 y 4 en la misma forma.",
        12: "Mantén el fa sostenido y el la durante todo el compás. Luego sube al sol y al mi para el compás siguiente.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola. En el silencio corto, salta de la octava grave hacia arriba al acorde.",
        "Toca los compases 5 a 8 con las dos manos juntas, despacio.",
        "Toca solos los acordes de la mano derecha, y levanta la mano entre uno y otro.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Mira el acorde siguiente mientras el pedal mantiene la octava grave. Tus ojos guían la mano.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
        "Las primeras notas de la melodía vuelven solas. Tócalas suaves, como un recuerdo.",
      ],
      tricky: {
        9: "Levanta la mano después de cada acorde, y mantén su forma mientras sube.",
        11: "Tres acordes suben paso a paso. Mantén los dedos 1, 2 y 4 en la misma forma.",
        15: "La melodía vuelve sola. El dedo 3 toca el fa sostenido, y el dedo 5 toca el la.",
      },
    },
  },
};
