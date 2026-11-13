/** The guide of *The Sorcerer's Apprentice* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Paul Dukas terminó este poema sinfónico en 1897, y se publicó ese mismo año. " +
    "Sigue el poema de Goethe El aprendiz de brujo, de 1797. " +
    "En la película de Walt Disney Fantasia (1940), Mickey Mouse hace de aprendiz.",
  funFact: "Dukas lo subtituló «scherzo sobre una balada de Goethe». Es, de lejos, la obra suya más tocada y grabada.",
  versions: {
    common: {
      practice: [
        "Toca los primeros tres compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 4 a 10 con la mano derecha sola. La mano se queda en un solo lugar.",
        "Ahora la mano izquierda sola. Mantiene una o dos notas graves en cada compás.",
        "Junta las dos manos en los primeros diez compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Toca cada nota corta y ligera, como una escoba que va dando saltitos. Los silencios son parte de la melodía.",
        "Cuenta uno, dos, tres. El silencio va en el dos, y la nota aguda en el tres.",
        "La mano se queda donde está. Los dedos 2 a 5 se apoyan en las notas la, si, do y re.",
      ],
      tricky: {
        5: "El dedo 5 acaba de tocar el do. Baja otra vez el dedo 4 al la, y luego sube de nuevo al do.",
        7: "Después del sol sostenido con el dedo 2, el dedo 4 toma el la. La mano izquierda pasa del mi de vuelta al la y al mi.",
        10: "Como en el compás 7, el dedo 4 toma el la después del sol sostenido. Luego el dedo 5 sube al do.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola. Primero llega una nota grave, y un acorde de dos notas le responde dos veces.",
        "Toca los primeros diez compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros seis compases, despacio.",
        "Toca con las dos manos nuestro propio final, donde entran las corcheas.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Mantén la melodía corta y saltarina. Suelta cada nota antes de la siguiente.",
        "Toca la nota grave un poco más fuerte que los acordes que la siguen. Esa nota marca el pulso.",
        "Dos corcheas rápidas caben en el segundo tiempo. Cuéntalas como «uno y dos».",
      ],
      tricky: {
        7: "El dedo 4 toma el la después del sol sostenido. La mano izquierda baja de su acorde de mi de vuelta al la.",
        10: "Aquí termina la melodía. El dedo 4 toma el la, y la mano izquierda vuelve al la.",
        11: "Aquí empiezan las corcheas. Mantén los dedos 4, 3 y 2 cerca de sus teclas.",
      },
    },
    epic: {
      practice: [
        "Toca los acordes arpegiados de la mano izquierda sola, hasta que rueden por sí mismos.",
        "Toca los primeros diez compases con la mano derecha sola. Mantén cada nota corta.",
        "Toca las terceras de la mano derecha sola, y presiona las dos notas de cada doble nota como una sola.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Mantén los acordes arpegiados suaves y parejos, para que la melodía saltarina se destaque por encima.",
        "El pulgar llega al la grave después del silencio. Luego suben los dedos 2 y 3.",
        "Baja del dedo 5 al pulgar, una tecla por dedo, y luego el dedo 3 salta de vuelta al re.",
      ],
      tricky: {
        7: "La mano izquierda salta del mi arriba al re para su acorde arpegiado. En la mano derecha, el dedo 4 toma el re.",
        10: "Como en el compás 7, la mano izquierda salta arriba al re, mientras la mano derecha toca el re y el fa.",
        16: "Abre la mano derecha sobre el fa, el la y el re, y baja la mano izquierda al re grave.",
      },
    },
    legendary: {
      practice: [
        "Toca con la mano izquierda sola. Primero llega una octava grave, y luego dos acordes cortos.",
        "Toca los primeros diez compases con la mano derecha sola. Suelta cada nota enseguida.",
        "Toca los pasajes rápidos de la mano derecha sola, cuatro semicorcheas en cada tiempo.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Las dos manos tocan corto y seco. La escoba anda de puntillas antes de echar a correr.",
        "Deja que la muñeca izquierda rebote de la octava grave arriba a los acordes.",
        "Cada pasaje cabe bajo los cinco dedos. Mantén la mano quieta y deja que los dedos rueden.",
      ],
      tricky: {
        6: "Los dedos de la mano derecha bajan por el sol, el fa y el mi, cada nota corta. La mano izquierda salta arriba a sus acordes.",
        12: "Vuelve con el pulgar al si bemol, y luego sube corriendo hasta el mi en semicorcheas parejas.",
        16: "Apoya las cuatro notas del último acorde a la vez, y baja la mano izquierda al fa grave.",
      },
    },
  },
};
