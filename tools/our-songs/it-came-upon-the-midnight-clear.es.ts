/** The guide of *It Came Upon the Midnight Clear* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Edmund Sears escribió el poema en 1849. " +
    "Se publicó por primera vez en The Christian Register, en Boston, el 29 de diciembre de 1849. " +
    "Richard Storrs Willis publicó la melodía un año después, como estudio para coros. " +
    "Los himnarios de Estados Unidos pusieron el poema con esta melodía bajo el nombre Carol, y se volvió un villancico muy querido.",
  funFact:
    "En Gran Bretaña, la misma letra se suele cantar con otra melodía, Noel, que Arthur Sullivan arregló a partir de una canción popular inglesa.",
  versions: {
    common: {
      practice: [
        "Toca los tres primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 9 a 13 con la mano derecha sola. Ahí la melodía baja y vuelve a subir.",
        "Ahora la mano izquierda sola. Mantiene una quinta o una nota a la vez, y se queda en un solo lugar.",
        "Junta las dos manos en los cinco primeros compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Levanta el pulgar del sol un momento antes. Así el meñique tiene tiempo de llegar al mi agudo.",
        "Aquí la melodía baja una octava entera. Levanta la mano del mi agudo y apoya el pulgar en el mi grave.",
        "Cuenta seis tiempos en cada compás: largo, corto, largo, corto. La melodía se mece como una canción de cuna.",
      ],
      tricky: {
        6: "Después del silencio corto, el dedo 5 cae en el mi agudo. Luego los dedos 4, 3 y 2 bajan hasta el la.",
        8: "El dedo 2 toca el la dos veces, y el dedo 3 sube al si. Luego los dedos 2 y 1 bajan hasta el sol.",
        14: "La misma forma del compás 6: el dedo 5 en el mi agudo, y luego el 4, el 3 y el 2 bajan hasta el la.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Primero viene una nota del bajo y luego el resto de su acorde.",
        "Toca los cinco primeros compases con la mano derecha sola, despacio.",
        "Toca los compases 9 a 13 con la mano derecha sola. Ahí la melodía baja y vuelve a subir.",
        "Junta las manos en los compases 1 a 5.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "En el segundo do, cambia el dedo 4 por el pulgar. Así los dedos 2 y 3 llegan al re y al mi.",
        "Usa el acorde largo del compás 5 para preparar la mano para el mi agudo.",
        "La melodía sube por el fa sostenido y el sol sostenido. Deja que suene un poco más fuerte hasta el mi agudo.",
      ],
      tricky: {
        10: "La melodía baja del mi agudo al mi grave. Luego el pulgar se desliza hacia arriba hasta el fa sostenido, y el dedo 2 toma el sol sostenido.",
        11: "Los dedos 3, 4 y 5 suben al la, el si y el do. Luego el dedo 5 sigue subiendo hasta el mi agudo.",
        12: "Los dedos 4, 3, 2 y 1 bajan del re al la. Luego el dedo 3 toma el si, y así el dedo 2 cae en el la.",
      },
    },
    epic: {
      practice: [
        "Toca solo el bajo de Alberti hasta que ruede por sí solo: grave, agudo, medio, agudo.",
        "Toca los compases 9 a 13 con la mano derecha sola, y pasa el pulgar por debajo al subir.",
        "Toca solas las terceras y sextas de la mano derecha, y presiona las dos notas de cada doble nota como una sola.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Toca suave el bajo de Alberti, para que la melodía flote por encima.",
        "Sube por el mi, el fa sostenido y el sol sostenido con los dedos 1, 2 y 3, y luego pasa el pulgar por debajo hasta el la.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        4: "El pulgar sube del sol al la. Luego los dedos 2 a 5 suben hasta el mi, con el dedo 3 en los dos do.",
        15: "Las dobles notas cambian de forma: 1 y 3 para una tercera, 1 y 5 para una sexta. El pulgar baja al si y luego sube al re.",
        16: "Terceras en el fa y el la, y luego los dedos 2 y 4 suben al sol y al si, y vuelven. Al final, el pulgar se estira hacia abajo hasta el si.",
      },
    },
    legendary: {
      practice: [
        "Toca solo el bajo stride: salta hacia abajo a la octava y luego vuelve arriba al acorde.",
        "Toca solos los acordes de la mano derecha y deja que el dedo de arriba cante la melodía.",
        "Junta las manos en la tercera frase, los compases 9 a 13, donde la melodía baja y vuelve a subir.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa y deja que el último acorde resuene.",
      ],
      tips: [
        "En el bajo stride, mira la nota del bajo y deja que la mano encuentre el acorde por tacto.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
        "Antes de cada anacrusa viene un silencio corto. Úsalo para llevar la mano al acorde siguiente.",
      ],
      tricky: {
        3: "El dedo 3 canta el la después del mi y el sol. Luego el pulgar baja al si, debajo del fa y el sol, y el dedo 3 mantiene el sol de la melodía.",
        5: "Abre la mano sobre cuatro notas: re, sol, si y re. Luego levántala y apoya el pulgar en el sol.",
        13: "Otro acorde de cuatro notas, sol, si, re y sol, con el meñique arriba. Levanta la mano en el silencio antes de la anacrusa.",
      },
    },
  },
};
