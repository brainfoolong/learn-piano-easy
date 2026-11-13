/** The guide of *Away in a Manger* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "La letra de Away in a Manger es estadounidense, y nadie sabe quién la escribió. " +
    "Se escribieron muchas melodías para ella, y esta es Cradle Song, de William J. Kirkpatrick, de 1895. " +
    "Es la melodía que se canta en Gran Bretaña e Irlanda.",
  funFact: "Durante mucho tiempo la letra se llamó Luther's Cradle Hymn, pero Martín Lutero nunca la escribió.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cinco compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 9 con la mano derecha sola. Ahí la melodía baja caminando hasta el sol grave.",
        "Ahora la mano izquierda sola. Mantiene una sola posición en cada compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El pulgar toca el sol grave, y el dedo 2 toma el do central.",
        "Dos notas largas, y luego dos rápidas que se inclinan hacia el compás siguiente.",
        "El pulgar se estira hacia abajo hasta el la, y la mano lo sigue hasta el sol grave.",
      ],
      tricky: {
        6: "El dedo 3 toca el fa dos veces, y luego el meñique se estira hacia arriba hasta el sol.",
        7: "El dedo 4 toca el mi, el dedo 2 baja hasta el do, y el dedo 4 vuelve al mi.",
        15: "Las mismas notas que en el compás 7: el mi dos veces con el dedo 4, y luego el do con el dedo 2.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola, y presiona juntas las tres notas de cada acorde.",
        "Toca el bajo de vals solo: nota grave, acorde, acorde.",
        "Junta las manos en la primera mitad, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Para el acorde de fa, el pulgar sube del sol al la. Vuelve a bajar para el acorde siguiente.",
        "En el bajo de vals, toca la nota grave un poco más fuerte que los acordes que la siguen.",
        "Mantén cada acorde durante todo el compás, suave, como una canción de cuna.",
      ],
      tricky: {
        6: "El pulgar izquierdo vuelve del la al sol mientras la mano derecha sube hasta el sol.",
        7: "El dedo 4 toca el mi, el dedo 2 baja hasta el do, y el dedo 4 vuelve al mi.",
        15: "Las mismas notas que en el compás 7, ahora sobre un bajo de vals. Mantén el bajo suave.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, aguda, media, aguda.",
        "Toca las terceras y sextas de la mano derecha sola, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "Levanta la mano después del do, y llega al sol una octava más arriba.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        17: "Levanta la mano derecha después del do, y pon el pulgar en el sol una octava más arriba.",
        19: "El pulgar suelta el mi grave, y los dedos 2, 3 y 4 suben caminando hasta el fa.",
        32: "Abre la mano para la sexta, y luego ciérrala para la última tercera, en el sol y el si.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta hacia abajo a la octava, y luego vuelve arriba al acorde.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca los arpegios de la segunda estrofa con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava y deja que la mano encuentre el acorde al tacto.",
        "Arriba, las octavas deben sonar como campanas. Mantén la muñeca suelta.",
        "En cada arpegio, el dedo 3 cruza por encima del pulgar al subir.",
      ],
      tricky: {
        6: "La mano izquierda salta a la octava de sol grave mientras la mano derecha toca el acorde de si, re y fa.",
        22: "Las octavas tocan el fa dos veces, y luego el sol, mientras la mano izquierda sube por un acorde de sol séptima y vuelve a bajar.",
        30: "Igual que el compás 22. Mantén parejas las octavas mientras el arpegio corre por debajo.",
      },
    },
  },
};
