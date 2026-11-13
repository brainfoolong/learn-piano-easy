/** The guide of *Drunken Sailor* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Drunken Sailor es una canción marinera que las tripulaciones cantaban mientras jalaban cuerdas o hacían girar el cabrestante. " +
    "Nadie sabe quién la escribió, y su melodía está en el modo dórico.",
  funFact: "El primer relato escrito de esta canción marinera viene de un viaje ballenero de 1839, que partió de New London, Connecticut.",
  versions: {
    common: {
      practice: [
        "Toca los cuatro primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. La melodía sube hasta el re y vuelve a casa.",
        "Ahora la mano izquierda sola. Mantiene una nota grave en cada compás o medio compás.",
        "Junta las dos manos en los ocho primeros compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cada mitad del compás va larga, corta, corta. Zapatéala como un marinero en la cubierta.",
        "El dedo 5 toca el la, y luego el pulgar baja hasta el re. La mano se queda donde está.",
        "Toca el último la del compás 5 con el dedo 2. Así los dedos 3, 4 y 5 quedan listos para si, do y re.",
      ],
      tricky: {
        3: "El dedo 4 toca sol seis veces: larga, corta, corta, larga, corta, corta. Toca ligeras las notas cortas.",
        5: "El dedo 5 toca el la cinco veces. Luego el dedo 2 toma el último la, para que la mano quede lista para subir.",
        7: "El dedo 5 baja de re a do. Luego los dedos 4, 3 y 2 bajan al la, al sol y al mi.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola: una nota grave, y luego dos notas en el tiempo siguiente.",
        "Toca la mano derecha sola en los ocho primeros compases, y deja que la canción espere cada nota.",
        "Junta las manos en los compases 9 a 16, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda se balancea grave, agudo, grave, agudo, como una tripulación que jala una cuerda al mismo tiempo.",
        "Después del re agudo largo, el dedo 5 se desliza hacia abajo hasta el do. Es el único movimiento de la mano.",
        "Termina con re y fa juntos, y déjalos sonar.",
      ],
      tricky: {
        3: "El dedo 4 toca sol seis veces, mientras la mano izquierda toca do y luego sol. Mantén las dos manos parejas.",
        4: "El pulgar baja hasta el do, y el dedo 2 toca el mi. La mano izquierda se queda en do y sol.",
        7: "Después del re largo, el dedo 5 baja al do. La mano izquierda toca do, luego fa y la, y luego do y sol.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca los compases 9 a 16 con la mano derecha sola, y pasa el pulgar por debajo al subir.",
        "Junta las manos en los ocho primeros compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nota nueva del bajo, dos veces por compás.",
        "Pasa el pulgar por debajo hasta el sol después de que el dedo 3 toque el fa.",
        "Ahora la melodía es la nota de arriba de cada par. Deja que el dedo de arriba la cante.",
      ],
      tricky: {
        7: "El dedo 5 baja de re a do, y los dedos 4, 3 y 2 siguen bajando. La mano izquierda arpegia fa mayor y luego do mayor.",
        17: "Los dedos 2 y 4 presionan fa y la juntos. Luego el dedo 4 toca el la dos veces solo.",
        24: "La mano izquierda toca re, fa y la juntos con los dedos 5, 3 y 1. La mano derecha mantiene fa, la y re.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola: una octava en el pulso y luego un acorde, cada uno con un silencio corto para saltar.",
        "Toca las octavas de la mano derecha solas. Mantén abiertos el pulgar y el dedo 5, como un marco fijo.",
        "Toca los arpegios de la mano izquierda solos, y deja que el pulgar pase por debajo al bajar.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Levanta la mano en cada silencio corto, y luego bájala a la octava siguiente.",
        "Deja que los arpegios rueden suaves, como olas bajo el barco.",
        "Toca los acordes cortos y firmes, como botas sobre la cubierta. La nota de arriba es la melodía.",
      ],
      tricky: {
        9: "El pulgar pasa por debajo hasta el sol después del fa. La mano izquierda empieza su arpegio en el re grave.",
        12: "La mano izquierda baja hasta el la grave con el dedo 5. La mano derecha empieza en mi con el pulgar.",
        15: "La mano izquierda empieza en el fa grave, y luego en do. En la mano derecha, el pulgar toca fa y luego mi.",
      },
    },
  },
};
