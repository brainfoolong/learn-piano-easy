/** The guide of *The First Noel* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The First Noel es un villancico inglés, y nadie sabe quién escribió su melodía. " +
    "Se cree que viene de Cornualles, en el extremo suroeste de Inglaterra. " +
    "Davies Gilbert la publicó en 1823, y William Sandys la publicó en 1833. " +
    "John Stainer la arregló para coro en 1871, y su versión es la que se canta hoy.",
  funFact: "Noel viene de la palabra francesa Noël, que a su vez viene de la palabra latina para «nacimiento».",
  versions: {
    common: {
      practice: [
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca el estribillo, los compases 17 a 24, con la mano derecha sola.",
        "Ahora la mano izquierda sola. Mantiene una forma durante cada compás entero.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El primer do es largo. Cuenta tres, y luego deja que el re, el mi y el fa suban parejos.",
        "Los compases 9 a 16 repiten los primeros ocho compases, así que tu mano ya los conoce.",
        "Ve un poco más despacio en el último mi, y déjalo sonar con el do grave.",
      ],
      tricky: {
        2: "El dedo 5 mantiene el sol largo. Levanta la mano en el silencio corto, y apoya el dedo 3 en el la.",
        10: "El mismo movimiento que en el compás 2: levanta la mano después del sol largo, y apoya el dedo 3 en el la.",
        18: "El dedo 5 mantiene el sol largo. Levanta la mano, y deja que el mismo dedo llegue al do agudo.",
      },
    },
    rare: {
      practice: [
        "Toca el bajo de vals con la mano izquierda sola: nota grave, acorde, acorde.",
        "Toca con la mano derecha sola desde la anacrusa, y deja que la canción espere cada nota.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La canción empieza en el último tiempo. Cuenta uno, dos, y luego toca el mi y el re.",
        "En el bajo de vals, toca la nota grave un poco más fuerte que los acordes que la siguen.",
        "Los compases 22 a 24 repiten los compases 6 a 8, así que tu mano ya los conoce.",
      ],
      tricky: {
        3: "El dedo 5 mantiene el sol largo. Levanta la mano en el silencio corto, y apoya el dedo 3 en el la.",
        11: "El mismo movimiento que en el compás 3: levanta la mano después del sol largo, y apoya el dedo 3 en el la.",
        19: "El dedo 5 mantiene el sol largo. Levanta la mano, y deja que el mismo dedo llegue al do agudo.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca la subida de los compases 2 y 3 con la mano derecha sola, y pasa el pulgar por debajo en el fa.",
        "Toca las terceras de la mano derecha sola, y mantén juntas las dos notas de cada doble nota.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
        "Cambia el pedal en el tercer tiempo, donde el acorde pasa de do a sol.",
      ],
      tricky: {
        2: "Los dedos 1, 2 y 3 tocan el do, el re y el mi. Luego el pulgar pasa por debajo del dedo 3 hasta el fa.",
        16: "Una sexta, y luego dos terceras. El dedo 2 se queda en el mi para las dos primeras, y el pulgar baja al re.",
        24: "Las mismas dobles notas que en el compás 16: una sexta, dos terceras, y el pulgar baja al re.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride con la mano izquierda sola: salta abajo a la octava, y vuelve arriba al acorde.",
        "Toca las octavas de la mano derecha sola en la primera estrofa, con la muñeca suelta.",
        "Toca los acordes de la mano derecha sola, y deja que el meñique cante la melodía.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava y deja que la mano encuentre el acorde al tacto.",
        "Cada octava se toca con el pulgar y el meñique. Mantén la mano en esa forma.",
        "Toca más suaves las notas graves de cada acorde, para que la nota de arriba lleve la melodía.",
      ],
      tricky: {
        5: "Después del sol largo, las octavas avanzan rápido al la y al si. Mueve toda la mano, con la muñeca suelta.",
        7: "Las octavas suben por el sol, el la y el si. Deja que la mano se deslice sobre las teclas sin levantarla mucho.",
        10: "Abre la mano para el acorde completo de do, y luego ciérrala a una octava para el re, el mi y el fa.",
      },
    },
  },
};
