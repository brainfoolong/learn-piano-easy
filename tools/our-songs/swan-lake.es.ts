/** The guide of *Swan Lake* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Tchaikovsky escribió la música del ballet El lago de los cisnes en 1875 y 1876, y el Ballet Bolshói lo estrenó en 1877. " +
    "Este tema es la melodía del oboe del segundo acto. " +
    "La película Black Swan (2010) incluye escenas de El lago de los cisnes.",
  funFact: "Vladimir Begichev encargó la partitura en mayo de 1875, y Tchaikovsky recibió 800 rublos por ella.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 9 a 16 con la mano derecha sola. La mano se queda en un solo lugar.",
        "Ahora la mano izquierda sola. Mantiene una misma forma durante un compás entero o medio compás.",
        "Junta las dos manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Mantén el primer mi mientras cuentas hasta cuatro. Luego cuatro notas cortas suben del la al re.",
        "Es una melodía triste y orgullosa. Deja cantar cada nota aguda larga.",
        "En este compás, el dedo 2 toca el la, para que el pulgar llegue abajo hasta el fa.",
      ],
      tricky: {
        1: "Después del mi largo, apoya el pulgar en el la. Luego los dedos 2, 3 y 4 suben hasta el re.",
        3: "Aquí toca el la con el dedo 2. Luego el pulgar baja hasta el fa, y el dedo 3 toma el do.",
        7: "Como en el compás 3, el dedo 2 toca el la, y el pulgar baja hasta el fa.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola. Una nota grave llega en el pulso, y un acorde de dos notas le responde.",
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda toca en cada tiempo: una nota grave, y luego un acorde. Cuenta uno, dos.",
        "Mantén suave la mano izquierda, para que la melodía cante por encima.",
        "Termina con el la y el do a la vez. Los dedos 1 y 3 los presionan a la vez, como una sola.",
      ],
      tricky: {
        3: "En este compás, el dedo 2 toca el la, para que el pulgar llegue abajo hasta el fa.",
        7: "Como en el compás 3, el dedo 2 toca el la, y el pulgar baja hasta el fa.",
        12: "La mano izquierda toca el mi con el dedo 1, y luego agrega el si que queda debajo con el dedo 4.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca las terceras de la mano derecha sola, y presiona las dos notas de cada doble nota como una sola.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nueva nota del bajo, dos veces en cada compás.",
        "El sol grave roza contra el fa sostenido que sigue sonando. Ese sonido áspero y triste es a propósito.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        8: "La mano izquierda toca un la sostenido en la primera mitad. Luego vuelve a si menor para el final.",
        21: "Los dedos 3 y 5 mantienen el re y el fa sostenido. Luego el pulgar empieza la subida del si al mi.",
        24: "Usa el silencio corto para abrir la mano derecha sobre el re, el fa sostenido y el si.",
      },
    },
    legendary: {
      practice: [
        "Toca con la mano izquierda sola: una octava en el pulso, y luego un acorde, cada uno con un silencio corto para saltar.",
        "Toca los arpegios de la mano izquierda sola. El pulgar pasa por debajo, y el dedo 3 cruza por encima.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Usa el silencio corto después de cada octava y cada acorde para saltar al siguiente.",
        "Deja que los arpegios fluyan suaves debajo de la melodía, y cambia el pedal en cada acorde nuevo.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
      ],
      tricky: {
        12: "La mano izquierda sube dos octavas desde el fa sostenido, dos veces. El dedo 3 cruza sobre el pulgar hasta el la sostenido.",
        19: "El dedo 2 toma el si después del acorde. Luego el pulgar baja hasta el sol, y el dedo 5 toma el re.",
        23: "Como en el compás 19, el pulgar baja hasta el sol, y el dedo 5 toma el re.",
      },
    },
  },
};
