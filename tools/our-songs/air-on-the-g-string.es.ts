/** The guide of *Air on the G String* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Bach escribió esta aria como movimiento lento de su tercera Suite orquestal. " +
    "En 1871, el violinista August Wilhelmj la arregló para que un violín tocara toda la melodía en su cuerda más grave, la cuerda de sol. " +
    "La película Se7en (1995) la usa mientras dos detectives revisan fotos de un crimen.",
  funFact:
    "Wilhelmj escribió «auf der G-Saite», que significa «en la cuerda de sol», sobre la parte del violín, y de ahí viene el apodo de la pieza.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 4 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. La melodía salta hacia abajo y vuelve a subir.",
        "Ahora la mano izquierda sola. Mantiene una nota del bajo o una quinta abierta a la vez.",
        "Junta las dos manos, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Mantén el primer mi durante un compás entero y escucha. Un violín canta esta nota con un solo arco largo.",
        "Levanta el pulgar del do por un momento. Así el dedo 2 cae en el si, y la mano se queda ahí.",
        "Cada nota larga llena un compás entero. Cuenta ocho tiempos lentos y espera uno más antes de la nota siguiente.",
      ],
      tricky: {
        3: "Levanta el pulgar del do por un momento y luego toca el si con el dedo 2.",
        8: "Después del silencio, el dedo 4 toca el re. Luego el pulgar baja hasta el sol.",
        9: "La mano izquierda se estira hacia abajo hasta el fa con el dedo 5, mientras el dedo 2 se queda en el do.",
      },
    },
    rare: {
      practice: [
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la mano izquierda sola. Primero suena la nota del bajo, y el acorde de dos notas le responde.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito. La melodía aparece dos veces.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "El bajo desciende paso a paso bajo el mi largo. Tócalo suave y ligado.",
        "Levanta el pulgar del do por un momento, para que el dedo 2 pueda caer en el si.",
        "Los últimos tres compases son nuestros. Llevan la melodía de vuelta a casa, a do mayor.",
      ],
      tricky: {
        6: "Después del silencio, el dedo 5 toma el mi. Luego los dedos 2 y 1 tocan el si bemol y el la.",
        14: "El mismo movimiento que en el compás 6: el dedo 5 en el mi, y luego si bemol con el dedo 2.",
        19: "La mano derecha toca do y mi a la vez. La mano izquierda se abre sobre do, mi y sol con los dedos 5, 3 y 1.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solas las terceras y sextas de la mano derecha, y presiona las dos notas de cada par como si fueran una.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén el bajo de Alberti suave y parejo, para que las notas largas floten encima.",
        "El sol del bajo choca con el fa sostenido de arriba. Bach escribió ese roce, así que déjalo sonar.",
        "La melodía es la nota de arriba de cada par, así que deja que el dedo de arriba guíe.",
      ],
      tricky: {
        5: "Aprovecha el silencio al final del compás 4 para subir la mano izquierda hasta el fa sostenido.",
        13: "La mano izquierda vuelve a subir después de su silencio. Luego la mano derecha se abre a una sexta, el do y el la.",
        14: "Toca cada par como una sola nota, y deja que el dedo de arriba cante la melodía. El pulgar toma casi todas las notas de abajo.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola. Salta de cada nota del bajo a su octava y vuelve.",
        "Toca solos los acordes de la mano derecha en los compases 9 y 10, y deja que el dedo de arriba cante.",
        "Toca la segunda mitad con las dos manos juntas, despacio. Ahí la melodía está una octava más arriba.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Mantén el dedo 5 en la nota grave del bajo y el pulgar en su octava. El dedo 2 toca la nota de en medio.",
        "El sol del bajo choca con el fa sostenido de arriba. Bach escribió ese roce, así que déjalo sonar.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
      ],
      tricky: {
        9: "Aprovecha el silencio del principio para subir la mano una octava. Luego toma cuatro notas con los dedos 1, 2, 3 y 5.",
        16: "Después del silencio, los dedos 3 y 5 toman do sostenido y mi. Luego el pulgar baja hasta el sol y vuelve a subir.",
        17: "El dedo 5 sube hasta el si agudo. La mano izquierda aprovecha su silencio para saltar abajo, al sol grave.",
      },
    },
  },
};
