/** The guide of *Hark! The Herald Angels Sing* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Felix Mendelssohn escribió esta melodía en 1840 para una fiesta en Leipzig. " +
    "La fiesta celebraba cuatrocientos años de la imprenta de tipos móviles. " +
    "En 1855, William H. Cummings adaptó la melodía a una letra navideña que Charles Wesley escribió en 1739.",
  funFact:
    "La melodía se cantó por primera vez el 24 de junio de 1840 en la plaza del mercado de Leipzig, con un coro de hombres y dos orquestas de metales.",
  versions: {
    common: {
      practice: [
        "Toca los dos primeros compases con la mano derecha sola. El pulgar empieza en el sol.",
        "Toca los compases 1 a 8 con la mano derecha sola. La mano nunca necesita moverse.",
        "Toca los compases 13 a 20 con la mano derecha sola. Ahí la melodía sube hasta el la agudo.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Largo, corto: el segundo do dura el triple que el si que lo sigue.",
        "Toca el si del compás 7 con el dedo 2 y el si del compás 8 con el dedo 3. Luego los dedos 2 y 1 tocan el la y el sol.",
        "Los compases 11 y 12 repiten los compases 9 y 10. Tócalos un poco más fuerte la segunda vez.",
      ],
      tricky: {
        3: "El dedo 3 toca el re y luego el meñique se estira hacia arriba hasta el sol. Mantén la mano quieta y abierta.",
        7: "El meñique toca el sol. Luego el dedo 3 baja al re y el dedo 2 al si.",
        13: "El dedo 2 toca el re y luego el meñique se estira hacia arriba hasta el la agudo.",
      },
    },
    rare: {
      practice: [
        "Toca los cuatro primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la mano izquierda sola. Mantiene un acorde en cada mitad del compás.",
        "Junta las manos en los compases 13 a 20. Ahí la mano derecha toca dos notas a la vez.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Toca suaves los acordes de la mano izquierda, para que la melodía suene por encima.",
        "Presiona juntos el re y el fa con el pulgar y el dedo 3. El fa es la melodía, así que déjalo cantar.",
        "Largo, corto y luego parejo: el primer la dura el triple que el segundo.",
      ],
      tricky: {
        3: "El dedo 3 toca el re y luego el meñique se estira hacia arriba hasta el sol. Mantén la mano quieta y abierta.",
        7: "El meñique toca el sol. Luego el dedo 3 baja al re y el dedo 2 al si.",
        13: "El dedo 2 toca el re y luego el meñique se estira hacia arriba hasta el la agudo.",
      },
    },
    epic: {
      practice: [
        "Toca solo el bajo de Alberti hasta que ruede por sí solo: grave, agudo, medio, agudo.",
        "Toca los compases 8 y 9 con la mano derecha sola. El pulgar pasa por debajo del dedo 3 hasta el do.",
        "Toca las terceras de los compases 9 a 12 con la mano derecha sola, y presiona las dos notas como una sola.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Toca suave el bajo de Alberti, para que la melodía cante por encima.",
        "La melodía es la nota de arriba de cada tercera, así que deja que guíe el dedo de arriba.",
        "Cambia el pedal al comienzo y a la mitad de cada compás, cuando la mano izquierda vuelve a empezar su patrón.",
      ],
      tricky: {
        8: "Después del sol grave, los dedos 2 y 3 suben por el la y el si. Luego el pulgar pasa por debajo hasta el do.",
        18: "Las terceras bajan y vuelven a subir: los dedos 2 y 4, luego el pulgar y el 3, y otra vez el 2 y el 4.",
        20: "El dedo 2 toca el do y el dedo 3 toca el re. Luego el pulgar baja hasta el mi, por debajo del último do.",
      },
    },
    legendary: {
      practice: [
        "Toca solo el bajo stride: salta hacia abajo a la octava grave y luego vuelve arriba al acorde.",
        "Toca solos los acordes de la mano derecha. Levanta la mano después de cada uno y deja que el dedo de arriba cante.",
        "Toca las octavas de los compases 9 a 20 con la mano derecha sola. Mantén la mano abierta y ligera.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa y deja que el último acorde resuene.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde por tacto.",
        "Cada acorde es corto, y el pedal los une. Cámbialo al comienzo y a la mitad de cada compás.",
        "En las octavas, toca el meñique un poco más fuerte, para que la melodía brille arriba.",
      ],
      tricky: {
        2: "Desde el gran acorde de do, la mano salta hacia arriba al sol, el do y el mi. Antes, levántala en el silencio corto.",
        6: "El compás 6 repite el compás 2. Levanta la mano en el silencio y luego salta hacia arriba al sol, el do y el mi.",
        7: "La mano baja del acorde de sol agudo al sol, el si y el re. El pulgar va del si hacia abajo hasta el sol.",
      },
    },
  },
};
