/** The guide of *The Sailor's Hornpipe* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The Sailor's Hornpipe es una melodía de baile animada, muy ligada a la Marina Real británica. " +
    "Las primeras colecciones la imprimieron como The College Hornpipe.",
  funFact: "Los dibujos animados de Popeye de Max Fleischer empezaban con este hornpipe, así que mucha gente lo conoce como la melodía de Popeye.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 5 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 9 con la mano derecha sola. La melodía salta del la agudo hasta el la grave.",
        "Ahora la mano izquierda sola. Mantiene una misma posición durante todo un compás, y nunca se mueve.",
        "Junta las dos manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Empieza con el dedo 5 en el sol agudo y el dedo 4 en el fa sostenido. Luego el pulgar se estira hacia abajo hasta el sol grave.",
        "Suelta el sol agudo un poco antes. En ese hueco corto, estira el pulgar una octava hacia abajo.",
        "Cuenta cuatro tiempos parejos en cada compás. El hornpipe es un baile, así que mantenlo saltarín.",
      ],
      tricky: {
        4: "Después del do, el pulgar pasa por debajo hasta el si. Luego los dedos 2 y 4 suben al re y al sol.",
        6: "Suelta temprano el la agudo. Luego el pulgar baja una octava hasta el la grave.",
        8: "El pulgar toca el fa sostenido, y el dedo 2 toca el la. Luego el dedo 4 sube hasta el re.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola: una nota grave, y luego una doble nota o una segunda nota.",
        "Toca los primeros nueve compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 10 a 16 con la mano derecha sola, donde llegan las corcheas y las dobles notas.",
        "Junta las manos en toda la canción, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "El dedo 5 toca el sol agudo, y el pulgar baja al sol grave. Mantén la mano abierta del ancho de una octava.",
        "Dos corcheas llenan un tiempo. Cuéntalas como «uno-y», y tócalas por igual.",
        "Termina con si y sol juntos. El pulgar y el dedo 5 los presionan como una sola nota.",
      ],
      tricky: {
        4: "Después del do, el pulgar pasa por debajo hasta el si. Luego los dedos 2 y 4 suben al re y al sol.",
        12: "Los dedos 3, 2 y 3 tocan rápido el re, el si y el re. Luego el dedo 5 sube hasta el sol.",
        15: "Los dedos 2, 3, 4 y 5 suben del re al la. Luego el dedo 4 vuelve a bajar al fa sostenido.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola hasta que los acordes arpegiados fluyan solos.",
        "Toca los compases 10 a 16 con la mano derecha sola, y pasa el pulgar por debajo al subir.",
        "Toca los primeros nueve compases con las dos manos, y cambia el pedal con cada acorde nuevo.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal cuando el bajo pasa a un acorde nuevo. Levántalo, y písalo otra vez justo después de la nota del bajo.",
        "Después del si, pasa el pulgar por debajo hasta el do. Luego el dedo 2 toma el re.",
        "Deja que los pasajes canten suave sobre los acordes arpegiados, como un violín en un baile.",
      ],
      tricky: {
        10: "Los dedos 5, 3, 2 y 1 bajan por el acorde de sol. Luego vuelven a subir por el mismo camino.",
        14: "El pulgar salta hacia abajo hasta el si. Luego los dedos 2, 3 y 5 suben por el acorde de sol hasta el si agudo.",
        17: "Toca el último acorde con las dos manos a la vez. Deja que el pedal lo sostenga hasta el final.",
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
        "Deja que los arpegios rueden suave debajo de los pasajes de la mano derecha.",
        "Cada acorde se suelta un poco antes. Usa ese hueco para llevar toda la mano al acorde siguiente.",
      ],
      tricky: {
        17: "Abre la mano sobre sol, si, re y sol. Luego bájala una octava hasta si, re y sol.",
        18: "La mano sube desde un acorde de sol grave hasta el re de arriba. Luego los dedos 1 y 4 toman el sol y el do.",
        19: "Tres acordes suben hasta el sol agudo. Mantén suelta la muñeca, y guía con el dedo 5.",
      },
    },
  },
};
