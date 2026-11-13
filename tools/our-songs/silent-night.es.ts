/** The guide of *Silent Night* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Franz Xaver Gruber escribió esta melodía para la Nochebuena de 1818, en Oberndorf, cerca de Salzburgo. " +
    "El joven sacerdote Joseph Mohr había escrito la letra, y Gruber le puso música. " +
    "Mohr tocó la guitarra en el estreno, y con el tiempo la canción viajó mucho más allá de Austria.",
  funFact: "En 2011, la Comisión Austriaca para la UNESCO agregó Silent Night a la lista austriaca de patrimonio cultural inmaterial.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 17 a 23 con la mano derecha sola. Ahí la melodía sube alto y baja hasta el do central.",
        "Junta las dos manos. La mano izquierda mantiene una nota grave o una quinta en cada compás.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El primer sol es largo y el la es corto. Se mece como una cuna.",
        "Levanta la mano en el silencio corto después del mi, y estira la mano hasta el re agudo.",
        "Toca suave de principio a fin. Es una canción de cuna.",
      ],
      tricky: {
        6: "Después de los dos re, el dedo 4 toma el si. Abajo, la mano izquierda mantiene el sol con el dedo 4.",
        17: "Después del silencio, la mano se estira hacia arriba desde el mi, y el dedo 3 llega al re agudo.",
        21: "El dedo 5 baja del mi al do. Luego la melodía baja hasta el pulgar en el do central.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola: una nota grave, y luego dos acordes suaves, como un vals lento.",
        "Toca los compases 17 a 23 con la mano derecha sola. Ahí la melodía sube alto y baja hasta el do central.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Toca los acordes de la mano izquierda más suaves que su nota grave.",
        "Cambia el pedal en cada línea divisoria. Levántalo cuando suene la nueva nota del bajo.",
        "Los dedos 3 y 5 toman juntos el do y el mi. Deja que el mi cante por encima del do.",
      ],
      tricky: {
        17: "La mano derecha se estira hacia arriba desde el mi, y el dedo 3 llega al re agudo.",
        21: "El dedo 5 baja del mi al do. Luego la melodía baja por sol y mi.",
        22: "Los dedos 4, 3 y 2 bajan por sol, fa y re, mientras la mano izquierda toca su acorde de sol séptima.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca el pasaje del compás 4 con la mano derecha sola, y pasa el pulgar por debajo hasta el la.",
        "Toca las dobles notas y los acordes de los compases 13 a 20 con la mano derecha sola.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "Los dedos 1, 2 y 3 tocan el mi, el fa y el sol. Luego el pulgar pasa por debajo hasta el la.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        4: "El pasaje sube del fa al do. Pasa el pulgar por debajo del dedo 3 para tomar el la.",
        16: "El mismo pasaje que en el compás 4, desde una tercera en do y mi. Pasa el pulgar por debajo hasta el la.",
        21: "La mano baja del acorde al do con el dedo 5, y luego baja por sol y mi.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta abajo a la octava, y vuelve arriba al acorde.",
        "Toca los acordes de la mano derecha sola, y deja que el meñique cante la melodía.",
        "Toca las octavas quebradas de los compases 13 a 16 con la mano izquierda sola.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la nota del bajo y deja que la mano encuentre el acorde al tacto.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
        "Deja que las octavas quebradas rueden suave debajo de la melodía, como una cuna que se mece.",
      ],
      tricky: {
        5: "Después del pasaje, apoya los dedos 1, 3 y 5 en el sol, el si y el re.",
        9: "La mano se abre a do, fa y la, y el meñique canta la melodía.",
        10: "Solo el dedo 4 toma el si entre los acordes. Mantén el pulgar cerca del fa.",
      },
    },
  },
};
