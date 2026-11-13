/** The guide of *Für Elise* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven escribió esta breve pieza para piano en 1810, y su manuscrito la dedica a Elise. " +
    "Nadie sabe con certeza quién era Elise. " +
    "Ludwig Nohl encontró la pieza y la publicó en 1867, cuarenta años después de la muerte de Beethoven.",
  funFact: "Una teoría dice que Nohl leyó mal el nombre, y que la pieza en realidad era para Therese Malfatti, con quien Beethoven esperaba casarse.",
  versions: {
    common: {
      practice: [
        "Toca los cuatro primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la mano derecha sola desde el compás 5, donde la mano baja al do central.",
        "Ahora la mano izquierda sola. Mantiene dos formas, una por compás.",
        "Junta las dos manos en los ocho primeros compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Balancea la mano entre los dedos 5 y 4 para el mi y el re sostenido, como un columpio suave.",
        "Aquí la mano izquierda espera. Toca la melodía suave, como si contaras un secreto.",
        "Levanta la mano en el silencio después del la, y apoya el pulgar en el do central.",
      ],
      tricky: {
        5: "Después del silencio, tu pulgar cae en el do central. Mira hacia abajo antes de tocarlo.",
        7: "Tu pulgar toma la tecla negra sol sostenido, para que la mano pueda subir hasta el do.",
        13: "La mano vuelve a bajar al do central. Aprovecha el silencio del compás 12 para llegar.",
      },
    },
    rare: {
      practice: [
        "Toca la mano derecha sola, despacio, en los ocho primeros compases.",
        "Toca la mano izquierda sola. Cada acorde sube desde el bajo, una nota por tiempo.",
        "Junta las manos en los compases 4 a 8, donde se turnan.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda sube, y luego la mano derecha sigue subiendo. Debe sonar como una sola mano.",
        "El pulgar en el mi, el meñique en el mi agudo. Abre la mano sobre toda la octava.",
        "El sol sostenido del bajo hace que el acorde suene brillante. Esa nota lleva el oído de vuelta a casa, al la.",
      ],
      tricky: {
        5: "Aprovecha el silencio después del la para bajar el pulgar derecho al do central.",
        6: "La mano izquierda se abre mucho: el dedo 2 toca el si, y el pulgar sube hasta el sol sostenido.",
        14: "La misma extensión que en el compás 6: el dedo 2 toca el si, y el pulgar izquierdo sube hasta el sol sostenido.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solas las dobles notas en terceras de la mano derecha, y presiona las dos notas de cada par como una sola.",
        "Junta las manos en los compases 4 a 8, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "Cambia el pedal en cada línea divisoria. Levántalo justo cuando suena la nueva nota del bajo.",
        "La melodía es la nota de arriba de cada tercera, así que deja que el dedo de arriba guíe.",
      ],
      tricky: {
        20: "Levanta la mano después de las terceras, y luego apoya el pulgar en el do central y el meñique en el la.",
        28: "El mismo salto que en el compás 20: el pulgar en el do central y el meñique en el la, a la vez.",
        32: "Abre la mano para el último acorde: el pulgar en el do, el dedo 2 en el mi y el dedo 4 en el la.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta hacia abajo para la octava, y vuelve arriba para el acorde.",
        "Toca los acordes de la mano derecha solos, y deja que el dedo de arriba cante la melodía.",
        "Junta las manos en la segunda mitad, donde la melodía sube una octava.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la nota del bajo y deja que la mano encuentre el acorde al tacto.",
        "Allá arriba, el mi y el re sostenido deben brillar. Tócalos ligeros y parejos.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
      ],
      tricky: {
        15: "El acorde de la mano izquierda en el segundo tiempo tiene solo el mi y el sol sostenido. Agrega el si en el tercer tiempo.",
        20: "Levanta la mano del do agudo, y luego toma las notas la, do, mi y la con los dedos 1, 2, 3 y 5.",
        28: "Vuelve el acorde de cuatro notas. Primero suelta el do agudo, y luego apoya la mano sobre toda la octava.",
      },
    },
  },
};
