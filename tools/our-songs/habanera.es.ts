/** The guide of *Habanera* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Carmen canta esta aria en su primera aparición en la ópera Carmen de Georges Bizet, estrenada en París en 1875. " +
    "Bizet tomó la melodía de una canción de Sebastián Iradier, creyendo que era una canción popular. " +
    "La película The Bad News Bears (1976) usa la música de Carmen de principio a fin.",
  funFact: "La habanera es un baile de Cuba, y su nombre viene de La Habana, la capital.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 5 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la mano derecha sola del compás 5 al compás 9, abajo en la nueva posición.",
        "Ahora la mano izquierda sola. Mantiene una forma por compás y nunca se mueve.",
        "Junta las dos manos en los primeros diez compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cada dedo toca una tecla, del 5 hasta el pulgar. La melodía se desliza hacia abajo paso a paso.",
        "Levanta la mano un momento después del si bemol, y apoya el dedo 5 en el la.",
        "Toca la bajada despacio y con suavidad, como un gato que se estira.",
      ],
      tricky: {
        5: "Aquí la mano baja. Levántala después del si bemol, y luego apoya el dedo 5 en el la.",
        15: "El mismo movimiento que en el compás 5: levanta la mano después del si bemol, y luego apoya el dedo 5 en el la.",
        20: "Después del silencio, el dedo 5 toca el la y el dedo 3 toca el sol. El dedo 4 espera.",
      },
    },
    rare: {
      practice: [
        "Toca los compases 2 a 6 con la mano derecha sola, despacio, y cuenta tres tiempos en cada compás.",
        "Toca los compases 7 a 9 con la mano derecha sola. Ahí llega el pequeño grupeto.",
        "Toca la mano izquierda sola. Sus cinco dedos se quedan sobre las notas re, mi, fa, sol y la.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Un la largo, y luego dos cortos. Piensa «taa, ti-ti».",
        "El grupeto fa, sol, fa usa los dedos 2, 3 y 2. Mantenlos cerca de las teclas.",
        "Levanta la mano después del si bemol, y apoya el dedo 5 en el la.",
      ],
      tricky: {
        5: "Después del movimiento, el dedo 5 cae sobre el la y lo toca dos veces más, corto y rápido.",
        15: "Igual que en el compás 5: apoya el dedo 5 en el la, y luego toca los dos la cortos.",
        20: "Después del silencio, el dedo 5 toca el la y el dedo 3 toca el sol. El dedo 4 espera.",
      },
    },
    epic: {
      practice: [
        "Toca el ritmo de habanera con la mano izquierda sola: largo, corto, y luego dos notas parejas.",
        "Toca solas las terceras de la mano derecha, y presiona las dos notas de cada doble nota como si fueran una.",
        "Junta las manos en los compases 1 a 6, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La nota corta de la mano izquierda lleva al compás siguiente. Déjala rebotar.",
        "La melodía es la nota de arriba de cada tercera, así que deja que guíe el dedo de arriba.",
        "Toca el bajo suave y ligero, como los pasos de una bailarina bajo la voz.",
      ],
      tricky: {
        5: "La mano derecha baja al la mientras la mano izquierda empieza su re largo. Practícalas juntas, despacio.",
        17: "Aquí las terceras giran rápido. Alterna entre los dedos 1 y 3 y los dedos 2 y 4.",
        20: "Después del silencio, los dedos 2 y 4 toman el fa y el la. Luego las terceras bajan paso a paso.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola: la octava grave, el la corto, y luego dos acordes.",
        "Toca solas las octavas de la mano derecha. Mantén la mano abierta y muévela como una sola pieza.",
        "Junta las manos en la segunda vuelta, donde la melodía sube una octava.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Mira la octava grave, y deja que la mano encuentre los acordes al tacto.",
        "El pulgar y el meñique toman cada octava. Deslízalos juntos hacia abajo, tecla por tecla.",
        "Toca la nota de arriba de cada octava un poco más fuerte, para que la melodía cante.",
      ],
      tricky: {
        12: "La mano derecha salta hacia arriba a la octava de re. Aprovecha el silencio del compás 11 para llegar.",
        17: "Aquí las octavas giran rápido. Mantén suelta la muñeca, y deja que el brazo guíe la mano.",
        21: "El pulgar y el meñique alcanzan las teclas negras para el do sostenido. Mueve la mano un poco hacia adelante.",
      },
    },
  },
};
