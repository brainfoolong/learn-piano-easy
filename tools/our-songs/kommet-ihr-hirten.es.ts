/** The guide of *Kommet, ihr Hirten* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "El título alemán Kommet, ihr Hirten significa «Vengan, pastores». " +
    "La canción viene de Bohemia, donde su título checo es Nesem vám noviny. " +
    "La melodía se imprimió por primera vez en 1847, en un himnario católico de Olomouc. " +
    "El director de orquesta Carl Riedel, de Leipzig, escribió la letra alemana libremente a partir del original, y la publicó por primera vez en 1870.",
  funFact: "El musicólogo Konrad Ameln fechó la melodía hacia 1700 solo por su estilo.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 9 a 12 con la mano derecha sola. El pulgar baja hasta el sol grave.",
        "Ahora la mano izquierda sola. Mantiene una sola forma en cada compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cada compás empieza con un sol largo de dos tiempos, y luego vienen cuatro notas cortas de un tiempo cada una.",
        "La mano izquierda mantiene do y sol como el bordón de una gaita. Deja que suene debajo de la melodía.",
        "Aquí el dedo 2 toca el do, así que el pulgar queda libre para el sol grave del compás 10.",
      ],
      tricky: {
        9: "El dedo 2 toma el do que tocaba el pulgar. Luego los dedos 4 y 5 tocan mi y sol.",
        11: "Igual que el compás 9: el dedo 2 en el do, el dedo 4 en el mi y el dedo 5 en el sol.",
        13: "El dedo 5 llega al sol agudo. Luego los dedos 2 y 4 tocan mi y sol, y el pulgar toca el re.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola: un do grave, y luego dos acordes en cada compás.",
        "Toca los compases 9 a 14 con la mano izquierda sola. Ahí los acordes cambian más seguido.",
        "Junta las manos en la primera vuelta, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "En la mayoría de los compases, la mano izquierda toca el do en el primer tiempo, y luego un acorde en cada uno de los otros dos.",
        "Toca el do grave un poco más fuerte que los acordes, como el bordón de una gaita.",
        "La melodía salta del sol grave al sol agudo. El dedo 4 abarca toda la octava.",
      ],
      tricky: {
        13: "El pulgar deja el sol grave, y el dedo 4 sube una octava hasta el sol agudo.",
        27: "El mismo estiramiento de octava que en el compás 13. Mantén la muñeca suelta mientras la mano se abre.",
        28: "Para el último acorde, el pulgar baja al sol y el dedo 2 toca el do, a la vez.",
      },
    },
    epic: {
      practice: [
        "Toca los acordes arpegiados solos hasta que rueden por sí mismos: grave, medio, agudo, medio.",
        "Toca la melodía con la mano izquierda sola, desde el compás 15.",
        "Junta las manos en la primera vuelta, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suaves los acordes arpegiados, para que la melodía cante por encima.",
        "Ahora la mano izquierda tiene la melodía. Tócala con claridad, y mantén suaves los acordes de la mano derecha.",
        "Cambia el pedal en cada tiempo.",
      ],
      tricky: {
        9: "La mano izquierda salta al la para el acorde de la menor, mientras el dedo 2 de la mano derecha toma el do.",
        11: "Dos tiempos del acorde de la menor, y luego la mano izquierda se levanta y vuelve a caer en el do grave.",
        15: "Las manos cambian de tarea. La mano izquierda empieza la melodía en el sol, y la mano derecha toca acordes.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta abajo a la octava grave, y vuelve arriba al acorde.",
        "Toca los compases 1 a 9 con la mano derecha sola, y mantén ligeros los pasajes rápidos.",
        "Toca los arpegios de la segunda vuelta con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "El pasaje sube por re, mi y fa, y luego la mano se levanta y pone el dedo 4 en el sol.",
        "Mantén el pulgar y el meñique a una octava de distancia. Los silencios cortos le dan tiempo a la mano para saltar.",
      ],
      tricky: {
        19: "Las octavas saltan arriba al la y vuelven a bajar al fa. Levanta la mano en cada silencio corto.",
        24: "Las octavas avanzan por do, mi, do y re, y luego bajan al sol grave. Deja que la muñeca rebote.",
        26: "Igual que el compás 24. Luego la mano salta una octava entera hasta el sol agudo.",
      },
    },
  },
};
