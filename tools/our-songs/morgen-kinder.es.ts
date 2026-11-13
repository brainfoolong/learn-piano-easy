/** The guide of *Morgen, Kinder, wird's was geben* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "El título alemán Morgen, Kinder, wird's was geben significa «Mañana, niños, habrá algo». " +
    "La letra de Karl Friedrich Splittegarb se imprimió por primera vez en 1795. " +
    "Carl Gottlieb Hering le puso esta melodía en 1809, en una escuela de canto para niños. " +
    "La canción habla de niños que esperan con ilusión sus regalos, y nunca menciona el nacimiento de Jesús.",
  funFact:
    "En 1927, Erich Kästner escribió una parodia sobre niños pobres, que empieza Morgen, Kinder, wird's nichts geben: no habrá nada.",
  versions: {
    common: {
      practice: [
        "Toca los cuatro primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los cuatro últimos compases con la mano derecha sola, donde la melodía sube hasta el la agudo.",
        "Ahora la mano izquierda sola. Mantiene una quinta, o un fa solo.",
        "Toca toda la canción con las dos manos juntas, despacio.",
        "Toca toda la canción con las dos manos a velocidad completa.",
      ],
      tips: [
        "Las cuatro notas rápidas del compás 2 son las más cortas de la canción. Cuéntalas parejas: uno, dos, tres, cuatro.",
        "El compás 2 termina con un sol corto y un silencio. Usa el silencio para abrir la mano hasta el mi.",
        "El pulgar toca el primer do y el dedo 2 el segundo, así que el dedo 5 llega al fa.",
      ],
      tricky: {
        3: "Después del silencio, el dedo 3 toca mi dos veces. Los dedos 4 y 5 suben a fa y sol, y el dedo 4 vuelve al mi.",
        7: "Igual que el compás 3: el dedo 3 en mi, y luego los dedos 4 y 5 suben a fa y sol.",
        8: "Los dedos 5 y 4 tocan fa y mi, y el dedo 2 toma el re. Así el dedo 3 queda listo para el fa del compás 9.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola, y presiona juntas las notas de cada acorde.",
        "Toca la mano derecha sola en los ocho primeros compases, la frase inicial.",
        "Junta las manos en los ocho primeros compases, despacio.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Mantén cada acorde suave durante todo el compás, para que la melodía quede encima.",
        "El compás 4 termina en un sol grave, y el compás 5 empieza arriba, en mi. Mira el mi antes de tocar el sol.",
        "El pulgar toca el primer do y el dedo 2 el segundo, así que el dedo 5 llega al fa.",
      ],
      tricky: {
        5: "Después del sol del pulgar, el dedo 3 salta arriba al mi sin silencio. Mantén ligero el pulgar, para que la mano se abra.",
        6: "El dedo 5 toca el sol agudo, y el dedo 4 vuelve al mi sobre el acorde de do.",
        14: "Igual que el compás 6: el dedo 5 en el sol agudo, y luego el dedo 4 en mi.",
      },
    },
    epic: {
      practice: [
        "Toca solo el bajo de Alberti hasta que ruede por sí mismo: grave, aguda, media, aguda.",
        "Toca solos los acordes arpegiados de la segunda vuelta, de subida y de bajada.",
        "Junta las manos en la primera vuelta, despacio.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "La mano derecha descansa una negra al final del compás 12, y luego salta una octava arriba.",
        "Cambia el pedal en cada mitad de compás, cuando la mano izquierda empieza un acorde nuevo.",
      ],
      tricky: {
        13: "La melodía empieza otra vez una octava más arriba. El dedo 2 toma el do agudo, y el pulgar baja a sol.",
        23: "El pulgar toca el primer do y el dedo 2 el segundo, así que el dedo 5 llega al fa agudo.",
        24: "Los dedos 4, 3, 2 y 1 bajan hasta si, y el dedo 2 termina en do sobre el último acorde.",
      },
    },
    legendary: {
      practice: [
        "Toca solo el bajo stride: salta abajo a la octava y vuelve arriba al acorde.",
        "Toca solas las octavas de la mano derecha, y levanta la mano en cada silencio corto.",
        "Toca los arpegios de la segunda vuelta con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "Mantén el pulgar y el meñique a una octava de distancia. Los silencios cortos le dan tiempo a la mano para saltar.",
        "Abre la mano sobre do, mi, sol y do para el último acorde, y déjalo sonar.",
      ],
      tricky: {
        4: "El dedo 3 mantiene el re largo, mientras la mano izquierda salta del sol grave a su acorde y vuelve.",
        8: "Esta vez el dedo 2 toma el re largo, así que el dedo 3 queda listo para el fa del compás 9.",
        9: "El dedo 3 toca el fa dos veces y el dedo 5 toca el la dos veces, mientras el bajo stride baja a un fa grave.",
      },
    },
  },
};
