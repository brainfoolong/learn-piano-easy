/** The guide of *Neon Chase* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Neon Chase es una melodía nuestra, escrita para esta aplicación al estilo de una banda sonora de sintetizador de los años 80. " +
    "Debajo late un bajo enérgico, como una persecución en auto de noche.",
  funFact: "Muchas bandas sonoras de los años 80 se tocaban con sintetizadores en lugar de una orquesta, a menudo por el compositor solo en un estudio pequeño.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 4 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. En el compás 6, la mano baja una tecla.",
        "Ahora la mano izquierda sola. Golpea una misma forma dos veces en cada compás, y la mano nunca se mueve.",
        "Junta las dos manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Empieza con el pulgar en el la. Así los dedos 1 a 5 quedan sobre el la, el si, el do, el re y el mi.",
        "Suelta el mi largo un poco antes. En ese breve silencio, baja la mano una tecla, para que el pulgar llegue al sol.",
        "La mano izquierda toca en los tiempos 1 y 3, como un motor lento. Mantenla pareja.",
      ],
      tricky: {
        5: "Los dedos 5, 4, 3 y 4 se mecen entre mi, re y do. Mantén la mano quieta, y deja que los dedos trabajen.",
        10: "El dedo 4 toca el do, y el dedo 2 toca el la en medio. El dedo 3 descansa sobre el si y espera.",
        13: "Los dedos 2, 4 y 5 suben del la al re pasando por el do, y luego vuelven al do. El pulgar descansa sobre el sol.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola. Toca en cada tiempo, como el motor de un auto.",
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 9 a 16 con la mano derecha sola. Ahí entran las corcheas.",
        "Junta las manos en toda la canción, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda toca cuatro tiempos parejos en cada compás. Deja que la melodía viaje sobre ellos.",
        "Presiona el do y el mi a la vez con los dedos 3 y 5, y mantenlos tres tiempos.",
        "Termina con el la y el do a la vez, y déjalos sonar todo el compás.",
      ],
      tricky: {
        7: "El dedo 2 toca el la, el dedo 4 el do, el dedo 3 el si y el pulgar el sol. La mano se queda donde la dejó el compás 6.",
        10: "Los dedos 4 y 2 alternan entre el do y el la, y luego el dedo 5 sube hasta el re. Mantén las corcheas parejas.",
        14: "Los dedos 2, 4 y 5 suben al re en corcheas, y luego bajan otra vez hasta el la.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola hasta que el pulso de corcheas corra solo.",
        "Toca los compases 9 a 16 con la mano derecha sola, y cuenta los golpes de acorde: tres, tres, dos.",
        "Toca las terceras y sextas de la mano derecha sola, y presiona las dos notas de cada doble nota como una sola.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y mantén el pulso con fuerza.",
      ],
      tips: [
        "La mano izquierda nunca se detiene: ocho corcheas parejas en cada compás, como faros que pasan de largo.",
        "Los acordes suenan en el 1, en el «y» del 2 y en el 4. Cuenta ocho corcheas y golpea en 1, 4 y 7.",
        "Pasa el pulgar por debajo hasta el do después del si. Luego los dedos 2 y 3 alcanzan el re y el mi.",
      ],
      tricky: {
        17: "Mantén los dedos 1 y 5 a una sexta de distancia, y sube toda la mano para cada nueva doble nota.",
        18: "Las dobles notas bajan del re al si. Mantén la forma de la mano, y muévela una tecla a la vez.",
        19: "Las dobles notas suben como en el compás 17. La última es una quinta, sol y re, así que cierra un poco la mano.",
      },
    },
    legendary: {
      practice: [
        "Toca con la mano izquierda sola. Mécete entre el dedo 5 y el pulgar, a una octava de distancia.",
        "Toca los pasajes rápidos de la mano derecha sola, despacio, y pasa el pulgar por debajo al subir.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Mantén suelta la muñeca izquierda y deja que se meza. Así las octavas laten solas.",
        "Toca los pasajes con ligereza y los golpes de acorde cortos y brillantes, como un sintetizador.",
        "La melodía es la nota de arriba de cada acorde. Tócala un poco más fuerte que las demás.",
      ],
      tricky: {
        17: "Golpea cada acorde corto, y usa el silencio que sigue para ir al siguiente.",
        22: "Golpea dos veces el acorde de cuatro notas con los dedos 1, 2, 3 y 5. Luego baja la mano al si, el re y el sol.",
        23: "Cuatro acordes cortos llevan arriba el la, el do, el si y el sol. Suelta después de cada uno, y apoya el siguiente en el silencio.",
      },
    },
  },
};
