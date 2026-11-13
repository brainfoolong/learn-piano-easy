/** The guide of *O du fröhliche* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O du fröhliche significa «Oh, tú, alegre», y es una de las canciones navideñas alemanas más conocidas. " +
    "Johannes Daniel Falk, de Weimar, escribió su primera estrofa para los niños desamparados que recibía en su casa. " +
    "Falk la puso sobre O sanctissima, un canto a la Virgen María impreso por primera vez en Londres en 1792.",
  funFact: "Falk la escribió al principio para las tres grandes fiestas cristianas, con una estrofa para Navidad, otra para Pascua y otra para Pentecostés.",
  versions: {
    common: {
      practice: [
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 9 a 16 con la mano derecha sola. Ahí la melodía sube paso a paso.",
        "Ahora la mano izquierda sola. Mantiene una quinta, o un fa solo.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Larga, corta: mantén el sol, y luego deja que el fa rápido te lleve al mi.",
        "Toca el segundo sol con el dedo 2 en lugar del 3. Así la mano queda lista para subir hasta el do.",
        "Levanta el pulgar del fa un poco antes, y apoya el dedo 3 en el mi de abajo.",
      ],
      tricky: {
        7: "Los dedos 4 y 3 vuelven a bajar del si al la. Mantén la mano quieta sobre sus cinco teclas.",
        12: "El dedo 4 toca el sol, el dedo 5 el la rápido, y luego el dedo 2 toma el sol, listo para el do agudo.",
        15: "Después del fa corto, el dedo 3 llega al mi y el dedo 2 al re.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola, y presiona a la vez las notas de cada acorde.",
        "Toca toda la canción con la mano derecha sola.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda casi no se mueve. El dedo 5 en el do y el dedo 4 en el re se turnan, y el pulgar se queda en el sol.",
        "Aquí la frase descansa en el sol. Deja sonar las dos notas todo el compás.",
        "La melodía baja dos veces desde el do. Toca la segunda vez un poco más fuerte.",
      ],
      tricky: {
        6: "La mano derecha sube por el la, el si y el do con los dedos 3, 4 y 5, mientras la mano izquierda pasa del fa al sol.",
        12: "El dedo 4 toca el sol, el dedo 5 el la rápido, y luego el dedo 2 toma el sol, listo para el do agudo.",
        15: "Después del fa corto, el dedo 3 llega al mi y el dedo 2 al re.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca las terceras y sextas de la mano derecha sola, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "Cambia el pedal en cada medio compás, cuando suena la nueva nota del bajo.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        17: "La mano salta una octava hacia arriba. Apoya los dedos 3 y 5 en el mi y el sol, y luego abre la mano a la sexta del do y el la.",
        22: "Los dedos 2 y 4 toman el fa y el la, la mano se abre a la sexta del re y el si, y el dedo 5 alcanza el do.",
        32: "Levanta la mano en el silencio corto, y luego ábrela sobre el mi, el sol y el do para el último acorde.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride con la mano izquierda sola: salta abajo a la octava, y vuelve arriba al acorde.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca los arpegios de la segunda estrofa con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava y deja que la mano encuentre el acorde al tacto.",
        "Las octavas deben sonar como campanas de iglesia. Mantén suelta la muñeca.",
        "En cada arpegio, el dedo 3 cruza por encima del pulgar al subir.",
      ],
      tricky: {
        6: "El acorde sube de fa a sol, y el meñique sube del si al do agudo.",
        8: "El acorde se asienta en sol. El pulgar baja al si, y el meñique baja del la al sol.",
        14: "Suelta el la un poco antes, para que la mano tenga tiempo de bajar al acorde de sol.",
      },
    },
  },
};
