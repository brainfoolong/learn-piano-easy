/** The guide of *Süßer die Glocken nie klingen* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Süßer die Glocken nie klingen significa en alemán «Nunca suenan más dulces las campanas». " +
    "El teólogo y maestro Friedrich Wilhelm Kritzinger escribió la letra. " +
    "Bernhard Brähmig publicó la canción por primera vez en 1860, en su colección Liederstrauß, con el título Die Weihnachtsglocken. " +
    "La melodía es la canción popular Seht, wie die Sonne dort sinket, conocida en Turingia.",
  funFact: "Antes de sonar en Navidad, la melodía le cantaba a la tarde: el título de la canción popular de la que viene significa «Miren cómo se pone allá el sol».",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahí la mano salta hasta el do agudo.",
        "Ahora la mano izquierda sola. Mantiene una o dos posiciones en cada compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cada pareja con puntillo es una nota larga y una rápida, como una campana que se balancea y suena.",
        "Después de que el pulgar toque el do, toda la mano salta una octava hacia arriba, y el dedo 5 llega al do agudo.",
        "Los compases 11 y 12 repiten los compases 9 y 10. Tócalos un poco más suave, como un eco.",
      ],
      tricky: {
        6: "El pulgar suelta temprano el do, y el dedo 5 llega al do agudo. Luego el dedo 4 toca el la.",
        8: "El pulgar baja del re al do y lo mantiene. Cuenta la nota larga hasta el final.",
        16: "El mismo movimiento que en el compás 8: el pulgar baja del re al do, y la canción termina.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola, y presiona juntas las tres notas de cada acorde.",
        "Toca los compases 9 a 16 con la mano izquierda sola, con un acorde en cada mitad del compás.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Mantén cada acorde suave, para que la melodía que repica se oiga clara por encima.",
        "Ahora la mano izquierda toca un acorde en cada mitad del compás. Cuenta uno, dos, y presiona en cada número.",
        "El pulgar izquierdo sube hasta el la para el acorde de fa, mientras la mano derecha salta hasta el do agudo.",
      ],
      tricky: {
        8: "El pulgar derecho baja del re al do, mientras la mano izquierda vuelve al acorde de do.",
        14: "El dedo 5 salta hasta el do agudo, y el pulgar izquierdo sube hasta el la para el acorde de fa.",
        16: "El pulgar baja hasta el do, y las dos manos mantienen el último acorde de do hasta el final.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca con la mano izquierda sola los acordes arpegiados de la segunda vuelta, y levanta la mano en cada silencio.",
        "Junta las manos en la primera vuelta, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía suene por encima como una campana.",
        "Las dos manos se levantan en el silencio. La mano derecha salta una octava hacia arriba, y la izquierda baja a un do grave.",
        "Cambia el pedal en cada medio compás, cuando la mano izquierda empieza un acorde nuevo.",
      ],
      tricky: {
        17: "La melodía empieza otra vez una octava más arriba, mientras la mano izquierda empieza sus acordes arpegiados en el do grave.",
        24: "Mantén el do largo mientras el acorde arpegiado sigue rodando. Levanta la mano izquierda en el silencio del final.",
        32: "El pulgar suelta temprano el re. Luego la mano baja al último acorde, con el dedo 5 en el do.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta abajo a la octava grave, y vuelve arriba al acorde.",
        "Toca los compases 1 a 8 con la mano derecha sola, y mantén ligero el pasaje rápido.",
        "Toca los arpegios de la segunda vuelta con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "El pasaje rápido después del mi largo es un pequeño repique de campanas. Tócalo más suave que la melodía.",
        "Mantén el pulgar y el meñique a una octava de distancia, y deja que la muñeca rebote.",
      ],
      tricky: {
        6: "La mano derecha salta hasta el do agudo, mientras el bajo stride salta hacia abajo hasta un fa grave.",
        7: "El la rápido está entre los dos sol. Mantén ligero el dedo 4, mientras el bajo stride cambia a sol.",
        14: "El mismo salto que en el compás 6. Suelta el do a tiempo, para que la mano llegue tranquila al do agudo.",
      },
    },
  },
};
