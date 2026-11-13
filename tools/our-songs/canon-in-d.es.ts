/** The guide of *Canon in D* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Johann Pachelbel escribió este canon hacia 1700, para tres violines sobre una línea de bajo. " +
    "El bajo toca las mismas ocho notas una y otra vez, mientras cada violín entra con la misma melodía. " +
    "La pieza quedó olvidada hasta que Gustav Beckmann la imprimió por primera vez en 1919. " +
    "La película Ordinary People la hizo famosa en 1980.",
  funFact: "El canon era casi desconocido hasta finales de la década de 1960, y hoy es una de las piezas más tocadas en las bodas.",
  versions: {
    common: {
      practice: [
        "Toca la mano derecha sola, despacio, y deja que la canción espere cada nota.",
        "Ahora la mano izquierda sola. Las mismas ocho notas vuelven tres veces.",
        "Junta las dos manos en los primeros cuatro compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "La melodía baja tecla por tecla, del dedo 5 al pulgar.",
        "Cada nota del bajo dura dos tiempos. Deja que suene bajo la melodía.",
        "Ahora la melodía va en negras, el doble de rápido que antes. Cuenta hasta cuatro en cada compás.",
      ],
      tricky: {
        5: "El dedo 5 vuelve al do de arriba, y la melodía baja otra vez.",
        7: "Mueve la mano una tecla más abajo: el dedo 2 va del sol al fa, y el pulgar toma el mi.",
        8: "El dedo 3 toca el fa y el dedo 2 toca el re, así que el pulgar queda listo para el do.",
      },
    },
    rare: {
      practice: [
        "Toca la mano derecha sola a lo largo de la línea que baja, despacio.",
        "Toca la mano izquierda sola: una nota grave con el dedo 5, y luego una más aguda con el pulgar.",
        "Toca solas las terceras de los compases 13 y 14, y presiona las dos notas de cada doble nota como una sola.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "El bajo recorre las mismas ocho notas durante toda la pieza. Mantenlo suave y parejo.",
        "Ahora la melodía se mueve en cada tiempo, mientras el bajo mantiene su paso tranquilo.",
        "En el canon, los violines tocan la misma melodía en momentos distintos. Aquí suenan dos de ellos juntos, a una tercera de distancia.",
      ],
      tricky: {
        6: "El dedo 4 baja del do sostenido al si, y la mano se desliza una tecla más abajo.",
        8: "El dedo 3 toma el sol y el dedo 2 toma el mi, así que el pulgar queda listo para el re.",
        12: "Termina el compás con el pulgar en el sol. Luego el dedo 5 se estira hacia arriba hasta el fa sostenido.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solas las sextas de la mano derecha. Mantén la mano en una sola forma y muévela como un bloque.",
        "Toca solo el pasaje rápido de los compases 13 a 16, despacio, con los dedos escritos.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que las notas largas de la melodía canten por encima.",
        "El pulgar y el dedo 4 tocan cada sexta. La melodía es la nota de arriba.",
        "Levanta el pedal en el pasaje rápido, para que cada nota ligera se oiga clara.",
      ],
      tricky: {
        6: "Desliza la sexta hacia abajo, tecla por tecla. El pulgar y el dedo 4 mantienen su forma.",
        16: "Los dedos 3 y 2 cruzan por encima del pulgar mientras el pasaje baja. Mantén quieta la muñeca.",
        17: "Desde el último mi, abre la mano hacia el re, el fa sostenido y el re agudo en un solo movimiento.",
      },
    },
    legendary: {
      practice: [
        "Toca solo el bajo en octavas: mantén cada octava, y luego levanta la mano para la siguiente.",
        "Toca solos los acordes de la mano derecha, y deja que el dedo de arriba cante la melodía.",
        "Toca solas las semicorcheas de la mano izquierda hasta que fluyan.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja que el último acorde resuene.",
      ],
      tips: [
        "En la mano izquierda, mantén el pulgar y el meñique a una octava de distancia, y mueve la mano como una sola forma.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
        "Mantén las semicorcheas de la mano izquierda suaves, ligeras y parejas bajo la melodía.",
      ],
      tricky: {
        2: "El pulgar se queda en el fa sostenido durante los dos acordes. Mueve solo los dedos 3 y 5.",
        5: "La mano izquierda salta hacia arriba a la octava de re, mientras el pulgar derecho pasa del mi al fa sostenido.",
        9: "Aquí la mano izquierda empieza sus semicorcheas. Empieza despacio, y deja que la melodía camine por encima.",
      },
    },
  },
};
