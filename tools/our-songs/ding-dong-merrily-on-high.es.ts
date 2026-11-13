/** The guide of *Ding Dong Merrily on High* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Este villancico nació como una melodía de baile llamada Branle de l'Official. " +
    "Se imprimió en 1589 en Orchésographie, un libro de danzas del clérigo francés Thoinot Arbeau. " +
    "El compositor inglés George Ratcliffe Woodward escribió la letra del villancico, que se publicó en 1924. " +
    "Charles Wood lo armonizó.",
  funFact: "Thoinot Arbeau era un seudónimo. Detrás de él estaba Jehan Tabourot.",
  versions: {
    common: {
      practice: [
        "Toca los dos primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 7 con la mano derecha sola, donde la melodía baja corriendo desde el sol agudo.",
        "Ahora la mano izquierda sola. Mantiene una misma forma en cada medio compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El pulgar empieza en el sol que está debajo de la melodía, y el dedo 4 toca el primer do.",
        "Toca el último do con el pulgar. Luego el meñique sube hasta el sol agudo.",
        "El pasaje baja una tecla con cada nota larga. Los dedos 5, 4 y 3 tocan las tres primeras, y luego la mano baja de tecla en tecla.",
      ],
      tricky: {
        1: "El dedo 4 toca do dos veces, y luego los dedos 5, 4, 3 y 2 bajan del re al la. El pulgar mantiene el sol largo.",
        5: "El pasaje empieza en el sol agudo con el meñique. Cada nota larga inicia el mismo patrón una tecla más abajo.",
        7: "Los dedos 3, 2 y 1 tocan do, si y la, y luego si, do y la. Después bajan por si, la y sol.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola, y presiona juntas las notas de cada acorde.",
        "Toca los compases 5 a 7 con la mano derecha sola, donde la melodía baja corriendo desde el sol agudo.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "El pasaje avanza en grupos de una nota larga y cinco rápidas. Mantén cada nota larga tanto como tres rápidas.",
        "Mantén cada acorde suave, para que las campanas de la melodía suenen por encima.",
        "En la segunda estrofa, toca la nota grave un poco más fuerte que el acorde que la sigue.",
      ],
      tricky: {
        5: "El pasaje empieza en el sol agudo con el meñique. Cada nota larga inicia el mismo patrón una tecla más abajo.",
        7: "Los dedos 3, 2 y 1 tocan do, si y la, y luego si, do y la. Después bajan por si, la y sol.",
        15: "Las mismas notas que en el compás 7, ahora sobre una nota del bajo y un acorde que se turnan.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca el pasaje de los compases 5 a 7 con la mano derecha sola.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía suene por encima como una campana.",
        "Después del último do, la mano derecha salta una octava hacia arriba, y la mano izquierda baja a un do grave.",
        "Cambia el pedal en cada medio compás, cuando la mano izquierda empieza un acorde nuevo.",
      ],
      tricky: {
        9: "La mano derecha toca el comienzo una octava más arriba. La mano izquierda baja al do grave para su acorde arpegiado.",
        10: "La mano izquierda toca fa, luego sol con un silencio, y salta hacia abajo al do grave.",
        12: "El mismo salto hacia abajo al do que en el compás 10. Luego el pulgar derecho toma el último do, listo para el sol agudo.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride solo: salta hacia abajo para la octava grave, y vuelve arriba para el acorde.",
        "Toca el pasaje de los compases 5 a 7 con la mano derecha sola, y mantén ligeros los vaivenes rápidos.",
        "Toca los arpegios de la segunda estrofa con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "Cada nota larga se balancea una vez de ida y vuelta, como una campana. Toca el vaivén más ligero que la melodía.",
        "Mantén el pulgar y el meñique abiertos a una octava, y deja que la muñeca rebote.",
      ],
      tricky: {
        9: "Las octavas en do, re, si y la llegan rápido. Mantén la mano en su forma de octava y muévela desde la muñeca.",
        11: "El comienzo vuelve en octavas. Mantenlas parejas mientras los arpegios corren debajo.",
        14: "El pasaje se balancea hacia abajo hasta el si, mientras la mano izquierda sube por debajo con un arpegio de do y luego uno de sol.",
      },
    },
  },
};
