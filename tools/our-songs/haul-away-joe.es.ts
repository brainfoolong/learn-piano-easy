/** The guide of *Haul Away Joe* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Haul Away Joe es una canción marinera corta para tirar de un cabo. " +
    "R. R. Terry la publicó en 1921 como canción marinera para cobrar la escota de trinquete.",
  funFact: "Una estrofa de la edición de Terry habla del rey Luis de Francia, que perdió la cabeza en la Revolución.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 4 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahí el estribillo baja hasta el re grave.",
        "Ahora la mano izquierda sola. Mantiene dos teclas y las cambia como mucho dos veces por compás.",
        "Junta las dos manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El dedo 5 toma el re y el do de arriba. El pulgar solo toca el fa sostenido del compás 3.",
        "Cuenta seis tiempos en cada compás: largo, corto, largo, corto. Así se tira del cabo.",
        "El re grave del compás 8 es el pulgar. Desde ahí, la mano se queda sobre las teclas del re al la hasta el final.",
      ],
      tricky: {
        2: "El dedo 5 toca el do tres veces. Luego el dedo 3 toma el la, y el dedo 2 espera sobre el sol.",
        11: "Los dedos bajan del sol al re, tecla por tecla. La mano izquierda mantiene el re y el sol.",
        14: "Los dedos 4 y 5 se mecen entre el sol y el la. Luego el dedo 3 baja al fa.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola: una nota grave larga y luego un acorde corto.",
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Cada medio compás de la mano izquierda tiene una nota larga y un acorde corto. Siente el tirón: largo, corto.",
        "Los dedos 1 y 5 presionan las sextas como una sola nota. Luego el dedo 5 se queda en la nota de arriba.",
        "Termina con el re y el fa juntos. Los dedos 1 y 3 los presionan como una sola nota.",
      ],
      tricky: {
        4: "Los dedos 3, 4 y 5 suben por el la, el si y el do. Este si es la tecla blanca, no el si bemol.",
        5: "Abre los dedos 1 y 5 sobre el fa y el re para la sexta. Luego el dedo 5 vuelve a tocar el re solo.",
        9: "La melodía sube por el re, el fa y el la. El sol y el fa son corcheas rápidas, así que cuéntalas con la misma duración.",
      },
    },
    epic: {
      practice: [
        "Toca la mano izquierda sola hasta que los acordes arpegiados fluyan por sí solos.",
        "Toca los compases 9 a 16 con la mano derecha sola, y pasa el pulgar por debajo al subir.",
        "Toca solas las terceras y sextas de la mano derecha, y presiona las dos notas de cada doble nota como una sola.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nueva nota del bajo, dos veces en cada compás.",
        "Después del fa, pasa el pulgar por debajo hasta el sol. Luego los dedos 2, 3 y 4 llegan al la, el si y el do.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        13: "Baja desde el re con los dedos 5 a 1. Luego el dedo 3 cruza por encima del pulgar hasta el fa.",
        16: "Sube por el acorde de re menor con los dedos 1, 2, 3 y 5. La mano se abre mucho para el re agudo.",
        20: "Los dedos 1 y 5 mantienen cada sexta y se deslizan hacia arriba tecla por tecla. Conserva la misma forma de la mano.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola: una octava en el pulso y luego un acorde dos veces, cada uno con un silencio corto para saltar.",
        "Toca solos los arpegios de la mano izquierda. El pulgar pasa por debajo y el dedo 3 cruza por encima.",
        "Toca solos los acordes de la mano derecha y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa y deja que el último acorde resuene.",
      ],
      tips: [
        "Usa el silencio corto después de cada octava y cada acorde para saltar al siguiente.",
        "Deja que los arpegios rueden como olas debajo de la melodía.",
        "Toca la nota de arriba de cada acorde un poco más fuerte, para que la melodía suene clara.",
      ],
      tricky: {
        4: "La mano izquierda salta de la octava grave del la a un acorde con las notas la, mi y la. La mano derecha sube por el la, el si y el do.",
        20: "Cada acorde mueve toda la mano una tecla hacia arriba o hacia abajo. Conserva su forma y deja que guíe el dedo de arriba.",
        23: "La mano pasa del acorde de sol mayor al acorde de la mayor en un solo paso. El pulgar cae en el do sostenido, una tecla negra.",
      },
    },
  },
};
