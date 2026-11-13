/** The guide of *Good King Wenceslas* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "La melodía es Tempus adest floridum, un villancico de primavera del siglo XIII. " +
    "Se publicó por primera vez en 1582 en Piae Cantiones, un cancionero finlandés. " +
    "En 1853, el autor inglés de himnos John Mason Neale le escribió una letra nueva, junto con su editor musical Thomas Helmore. " +
    "El villancico cuenta la historia de un rey de Bohemia que desafía el frío del invierno para llevarle limosna a un campesino pobre.",
  funFact: "En vida, Wenceslao fue solo un duque. La leyenda posterior lo recuerda como rey.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 8 a 11 con la mano derecha sola, subiendo hasta el sol agudo y bajando de nuevo al la.",
        "Ahora la mano izquierda sola. Cambia de forma solo en el primer y el tercer tiempo.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El pulgar empieza en el sol, y el dedo 4 toca el do repetido.",
        "Toca el segundo do con el pulgar. Luego el meñique se estira hacia arriba hasta el sol agudo.",
        "Levanta la mano después del do, y pon el dedo 2 sobre el la.",
      ],
      tricky: {
        1: "El dedo 4 toca el do tres veces, y luego el dedo 5 toca el re. El pulgar espera sobre el sol.",
        5: "Las mismas notas que en el compás 1. Toca parejos los tres do, y ligero el re.",
        11: "Después de levantar la mano, el dedo 2 cae sobre el la y el pulgar toma el sol. Luego los dedos 2 y 3 suben al la y al si.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola en los primeros ocho compases, y presiona juntas las notas de cada acorde.",
        "Toca la mano izquierda sola desde el compás 9: una nota grave y luego el acorde, uno en cada tiempo.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Mantén cada acorde suave durante sus dos tiempos, para que la melodía suene por encima.",
        "Toca el segundo do con el pulgar. Luego el meñique se estira hacia arriba hasta el sol agudo.",
        "Toca la nota grave un poco más fuerte que el acorde que la sigue.",
      ],
      tricky: {
        1: "El dedo 4 toca el do tres veces, y luego el dedo 5 toca el re. La mano izquierda toca dos veces el acorde de do.",
        5: "Las mismas notas que en el compás 1. Toca parejos los tres do, y ligero el re.",
        11: "Después de levantar la mano, el dedo 2 cae sobre el la. La mano izquierda toca el fa, luego el do, luego el sol y luego su acorde.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca los acordes arpegiados de la segunda estrofa con la mano izquierda sola.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Toca suave el bajo de Alberti, para que la melodía cante por encima.",
        "Después del último do, la mano derecha salta una octava hacia arriba, y la mano izquierda baja a un do grave.",
        "Cambia el pedal cada medio compás, cuando la mano izquierda empieza un acorde nuevo.",
      ],
      tricky: {
        18: "La mano derecha empieza otra vez una octava más arriba, y la mano izquierda baja al do grave.",
        28: "La mano izquierda descansa después del acorde de fa, y luego salta hacia abajo al sol grave.",
        33: "La melodía salta del do al fa, mientras la mano izquierda descansa y baja al fa grave.",
      },
    },
    legendary: {
      practice: [
        "Toca sola las octavas de la mano derecha, con el pulgar y el dedo 5 fijos en una misma forma.",
        "Toca el bajo stride solo: salta abajo a la octava y vuelve arriba al acorde.",
        "Toca los acordes de la segunda estrofa con la mano derecha sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "Mantén el pulgar y el dedo 5 abiertos a una octava, y deja que la muñeca lleve la escala hacia abajo.",
        "Levanta cada acorde un poco antes para mover la mano. El pedal sostiene su sonido.",
      ],
      tricky: {
        3: "Las octavas pasan por las notas la, sol, la y si, mientras la mano izquierda salta del fa grave a su acorde, y luego al sol.",
        7: "Igual que el compás 3. Toca parejas las octavas y mantén suelta la muñeca.",
        11: "Los mismos pasos otra vez, después de la escala hacia abajo. Toca ligero el bajo stride debajo de las octavas.",
      },
    },
  },
};
