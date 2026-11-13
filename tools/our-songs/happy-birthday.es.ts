/** The guide of *Happy Birthday to You* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mildred J. Hill escribió esta melodía para Good Morning to All, una canción de saludo para los grupos de preescolar. " +
    "La publicó en 1893 en Song Stories for the Kindergarten, un libro que hizo con su hermana Patty. " +
    "La versión de cumpleaños que se canta hoy agrega dos notas a su tercera línea, con un salto de una octava.",
  funFact:
    "En 2015, un tribunal de Estados Unidos decidió que la empresa que cobraba por la canción de cumpleaños no tenía derechos de autor válidos sobre su letra.",
  versions: {
    common: {
      practice: [
        "Toca la mano derecha sola, despacio, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 9 con la mano derecha sola. Ahí la melodía salta hacia lo agudo.",
        "Junta las dos manos. La mano izquierda solo mantiene una quinta o una nota sola.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "De los dos sol del comienzo, el primero es largo y el segundo, corto. El corto lleva al compás siguiente.",
        "Tu pulgar está en el sol, y cada dedo se queda en su propia tecla hasta el re.",
        "Levanta la mano después del segundo sol y apoya el meñique en el sol agudo.",
      ],
      tricky: {
        2: "El dedo 2 toca el la, el pulgar vuelve al sol y el dedo 4 se estira hasta el do.",
        6: "Apoya el meñique en el sol agudo y luego baja al mi y al do con los dedos 4 y 2.",
        7: "Tu pulgar toca el si y luego se desliza hacia abajo hasta el la. Levanta la mano antes de los dos fa.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola y presiona juntas las tres notas de cada acorde.",
        "Toca solo el bajo de vals de la segunda estrofa: nota grave, acorde, acorde.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "El meñique se estira una octava entera por encima del pulgar. La mano se abre y luego se vuelve a cerrar.",
        "Después del do largo, sube el pulgar hasta el sol. La segunda estrofa empieza una octava más arriba.",
        "En el bajo de vals, toca la nota grave un poco más fuerte que los acordes que la siguen.",
      ],
      tricky: {
        7: "Tu pulgar toca el si y luego se desliza hacia abajo hasta el la, y el dedo 4 se estira hacia arriba hasta el fa.",
        9: "Mantén el do y luego sube el pulgar hasta el siguiente sol para la segunda estrofa.",
        15: "El pulgar vuelve a deslizarse del si hasta el la, ahora una octava más arriba.",
      },
    },
    epic: {
      practice: [
        "Toca solo el bajo de Alberti hasta que ruede por sí solo: grave, agudo, medio, agudo.",
        "Toca solas las terceras y sextas de la mano derecha, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Toca suave el bajo de Alberti, para que la melodía cante por encima.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
        "El bajo de vals suena separado, nota por nota. El pedal las une, así que cámbialo al comienzo de cada compás.",
      ],
      tricky: {
        12: "Las dobles notas bajan por pasos y luego los dedos 3 y 5 saltan hacia arriba hasta el si y el re.",
        15: "Después de las dos dobles notas graves, sube con los dedos 3 y 5 hasta el re y el fa agudos.",
        17: "Baja la mano al último acorde: el pulgar en el mi, el dedo 2 en el sol y el meñique en el do.",
      },
    },
    legendary: {
      practice: [
        "Toca solo el bajo stride: salta hacia abajo a la octava y luego vuelve arriba al acorde.",
        "Toca solos los acordes de la mano derecha y deja que el dedo de arriba cante la melodía.",
        "Toca los arpegios de la segunda estrofa con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa y deja que el último acorde resuene.",
      ],
      tips: [
        "En el bajo stride, mira la octava y deja que la mano encuentre el acorde por tacto.",
        "Toca las octavas un poco separadas, como campanas, y deja que el pedal las una.",
        "En cada arpegio, el dedo 3 cruza por encima del pulgar al subir.",
      ],
      tricky: {
        7: "Levanta la mano después del la, para que pueda abrirse en el acorde con el fa arriba.",
        10: "Las octavas empiezan mientras la mano izquierda toca su primer arpegio. Practica primero cada mano sola.",
        15: "Mantén la forma de octava mientras la mano salta hasta el fa, y deja que el bajo ruede por debajo.",
      },
    },
  },
};
