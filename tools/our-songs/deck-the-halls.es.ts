/** The guide of *Deck the Halls* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Deck the Halls se canta sobre la melodía de Nos Galan, una antigua tonada galesa de Nochevieja. " +
    "La melodía se imprimió por primera vez en 1794, y más tarde Joseph Haydn hizo un arreglo de ella. " +
    "Thomas Oliphant escribió la letra navideña en inglés en 1862, y hoy la melodía se canta con ella.",
  funFact:
    "La letra de Oliphant empezaba con Deck the hall, hall en singular, una sola sala. Cancioneros posteriores lo cambiaron al plural que cantamos hoy.",
  versions: {
    common: {
      practice: [
        "Toca la mano derecha sola, despacio, y deja que la canción espere cada nota.",
        "Toca los compases 9 a 12 con la mano derecha sola. Ahí la melodía sube hasta el do agudo.",
        "Junta las dos manos. La mano izquierda mantiene cada nota grave durante medio compás o más.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Largo, corto: el primer sol es largo, y el fa es corto y llega justo después.",
        "Los compases 13 y 14 repiten el comienzo, así que tu mano ya los conoce.",
        "Ve un poco más despacio en las últimas notas, y deja que el do grave resuene.",
      ],
      tricky: {
        3: "Los dedos 3, 4 y 5 suben por re, mi y fa, y luego el dedo 3 vuelve al re.",
        9: "El dedo 5 toca el fa, y luego el pulgar se estira hacia abajo hasta el re mientras la mano se queda quieta.",
        11: "El pulgar se desliza del re al mi. Luego los dedos 2 a 5 suben por sol, la, si y el do agudo.",
      },
    },
    rare: {
      practice: [
        "Toca la mano derecha sola, despacio, y deja que la canción espere cada nota.",
        "Toca la mano izquierda sola: una nota grave y luego un acorde, en cada compás.",
        "Toca los compases 17 a 24 con la mano derecha sola. Ahí la melodía sube hasta el do agudo.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "El fa sostenido es la tecla negra entre el fa y el sol. Esa nota empuja la melodía hacia el do agudo.",
        "Toca la nota grave de la mano izquierda un poco más fuerte que el acorde que la sigue.",
        "Cuatro la rápidos: mantenlos parejos, como cuatro pasos sobre el mismo escalón.",
      ],
      tricky: {
        21: "El pulgar sube del re al mi, y el dedo 2 toma el fa sostenido, que es una tecla negra.",
        22: "Después del sol, el dedo 3 se desliza una tecla hacia arriba hasta el la, para que los dedos 4 y 5 alcancen el si y el do.",
        32: "El pulgar se desliza del re hacia abajo hasta el último do, mientras la mano izquierda toca su acorde completo.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solas las terceras de la mano derecha, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en los primeros cuatro compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que el dedo de arriba la guíe.",
        "Cambia el pedal a la mitad de cada compás, cuando la mano izquierda empieza un acorde nuevo.",
      ],
      tricky: {
        11: "Después del sol, el pulgar pasa por debajo del dedo 3 hasta el la. Luego los dedos 2 y 3 terminan en el si y el do.",
        12: "Desde el la, el pulgar baja al re, mientras el dedo 4 cae en el sol que está encima.",
        16: "El pulgar se estira hacia abajo hasta el sol para el último acorde, y la mano izquierda baja a una octava grave.",
      },
    },
    legendary: {
      practice: [
        "Toca solo el bajo stride: salta hacia abajo a la octava grave, y luego vuelve arriba al acorde.",
        "Toca los compases 1 a 4 con la mano derecha sola, y mantén ligeras las notas de relleno rápidas.",
        "Toca el pasaje rápido de los compases 11 y 12 con la mano derecha sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja que el último acorde resuene.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "Toca las notas de relleno rápidas más suave que las notas de la melodía, como un pequeño eco.",
        "Levanta la mano después del último re, y luego apoya las dos manos en el gran acorde.",
      ],
      tricky: {
        4: "El dedo 2 se desliza del re hacia abajo hasta el do, y el pulgar se mete por debajo para el si. La mano izquierda salta al sol grave.",
        5: "El relleno del compás 4 corre directo hasta el sol agudo, así que ten listo el dedo 5 para él.",
        8: "El dedo 2 se desliza otra vez hacia abajo hasta el do, mientras la mano izquierda salta a la octava de sol grave.",
      },
    },
  },
};
