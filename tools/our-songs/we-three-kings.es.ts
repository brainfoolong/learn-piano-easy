/** The guide of *We Three Kings* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "El clérigo estadounidense John Henry Hopkins Jr. escribió este villancico en 1857, para una representación navideña en el seminario donde enseñaba. " +
    "Cuenta la historia de los Reyes Magos y sus regalos, y se publicó en 1863 como Three Kings of Orient. " +
    "Su estrofa está en una tonalidad menor, y el estribillo pasa a una tonalidad mayor.",
  funFact: "Hopkins pensó el villancico para que tres hombres cantaran cada uno una estrofa solo, uno por cada rey.",
  versions: {
    common: {
      practice: [
        "Toca los primeros dos compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahí la melodía sube hasta el sol y baja caminando hasta el la.",
        "Ahora la mano izquierda sola. Cambia de forma solo en el primer y el cuarto tiempo.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cada compás tiene dos grupos de tres tiempos. Cuenta uno, dos, tres dos veces.",
        "En el segundo do, cambia del dedo 3 al pulgar. Así la mano queda lista para subir hasta el sol.",
        "Después del do largo, toda la mano baja una tecla, para que el dedo 2 toque el si.",
      ],
      tricky: {
        1: "El dedo 5 toca el mi, el dedo 4 toca el re, el dedo 3 toca el do, y luego el pulgar se estira hacia abajo hasta el la.",
        3: "Las mismas notas que en el compás 1. Toca llenas las notas largas y ligeras las cortas.",
        7: "Mantén el do largo con el dedo 2, y luego baja la mano para que el dedo 2 toque el si.",
      },
    },
    rare: {
      practice: [
        "Toca los primeros ocho compases con la mano izquierda sola, y presiona juntas las tres notas de cada acorde.",
        "Toca solo el bajo de vals del estribillo: nota grave, acorde, acorde.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La estrofa está en una tonalidad menor. Tócala suave y pareja, y mantén cada acorde presionado todo el compás.",
        "Mantén el do con el dedo 2, y luego baja la mano una tecla para que el dedo 2 toque el si.",
        "El estribillo pasa a una tonalidad mayor. Déjalo sonar más brillante, y mantén ligero el bajo de vals.",
      ],
      tricky: {
        1: "El dedo 5 toca el mi, el dedo 4 toca el re, el dedo 3 toca el do, y luego el pulgar se estira hacia abajo hasta el la.",
        5: "Las mismas notas que en el compás 1, después de un silencio. Apoya el dedo 5 en el mi antes de empezar.",
        14: "Mantén el do con el dedo 2, y luego baja la mano para que el dedo 2 toque el si. La mano izquierda cambia al acorde de mi.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca las terceras y sextas de la mano derecha sola, y mantén juntas las dos notas de cada doble nota.",
        "Junta las manos en la estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "Levanta la mano después del re corto, y apoya el pulgar en el mi de abajo para el estribillo.",
        "El pulgar y el dedo 5 mantienen la sexta, y la mano se desliza de una sola pieza de tecla en tecla.",
      ],
      tricky: {
        17: "Levanta la mano después del re, y apoya el pulgar en el mi y el dedo 5 en el do.",
        27: "Desliza la sexta hacia arriba hasta el la y el fa, y luego de vuelta abajo al sol y el mi. Mantén suelta la muñeca.",
        28: "La sexta se desliza del fa y el re hacia arriba hasta el sol y el mi. El dedo 5 toca la melodía.",
      },
    },
    legendary: {
      practice: [
        "Toca las octavas de la mano derecha sola, con el pulgar y el dedo 5 fijos en una misma forma.",
        "Toca el bajo stride con la mano izquierda sola: salta abajo a la octava, y vuelve arriba al acorde.",
        "Toca los arpegios de los compases 9 a 16 con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En las octavas, mira el dedo 5, que lleva la melodía. El pulgar lo sigue al tacto.",
        "En cada arpegio, el dedo 3 cruza por encima del pulgar al subir.",
        "En los acordes, toca el dedo de arriba un poco más fuerte, para que la melodía cante.",
      ],
      tricky: {
        3: "Las octavas pasan del si al do y vuelven, mientras la mano izquierda salta entre el mi grave y su acorde.",
        7: "Lo mismo que en el compás 3. Mantén parejas las octavas y ligera la mano.",
        9: "La mano izquierda empieza su primer arpegio, dos octavas hacia arriba desde el do y de vuelta, bajo el do repetido.",
      },
    },
  },
};
