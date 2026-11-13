/** The guide of *Piano Concerto No. 21: Andante* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart terminó este concierto el 9 de marzo de 1785, cuatro semanas después del anterior. " +
    "Su movimiento lento, el Andante, canta una melodía larga sobre acordes suaves y repetidos. " +
    "La película Elvira Madigan (1967) lo usa, y hoy el concierto es muy conocido por ese nombre.",
  funFact: "Mozart terminó el concierto solo cuatro semanas después de su Concierto para piano n.º 20.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 3 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 4 a 8 con la mano derecha sola.",
        "Ahora la mano izquierda sola. Mantiene una nota o una quinta abierta durante mucho tiempo.",
        "Junta las dos manos, despacio.",
        "Toca toda la pieza con las dos manos a velocidad completa.",
      ],
      tips: [
        "Mantén el primer fa durante siete tiempos. El do corto llega justo antes de la siguiente nota larga.",
        "El dedo 4 mantiene el do agudo. Luego los dedos 5, 4, 3 y 2 tocan cuatro notas rápidas.",
        "Toca suave y ligado, como si tararearas una canción de cuna.",
      ],
      tricky: {
        1: "Suelta el do corto un poco antes. Luego estira el dedo 5 hasta el la.",
        4: "El pulgar derecho llega al do después del silencio. A mitad del compás, la mano izquierda baja a sol.",
        5: "El dedo 3 sube de sol a si bemol. Luego los dedos 5, 4 y 3 tocan re, do y si bemol.",
      },
    },
    rare: {
      practice: [
        "Toca la mano derecha sola en los seis primeros compases, y deja que la canción espere cada nota.",
        "Toca la mano izquierda sola. Primero llega una nota grave, y luego el acorde responde tres veces.",
        "Junta las manos en los compases 1 a 6, despacio.",
        "Toca el final desde el compás 13, donde la mano izquierda encuentra dos acordes nuevos.",
        "Toca toda la pieza con las dos manos a velocidad completa.",
      ],
      tips: [
        "Mantén suaves los acordes, para que la melodía cante por encima como una voz.",
        "El fa sostenido se inclina hacia arriba, hacia el sol. Dale cuatro tiempos a cada uno, y luego descansa.",
        "Levanta la mano izquierda un momento antes de cada acorde nuevo. Así llega a su nuevo lugar.",
      ],
      tricky: {
        5: "El dedo 3 sube de sol a si bemol. Luego los dedos 5, 4 y 3 tocan re, do y si bemol.",
        14: "La mano izquierda pasa a si bemol con el dedo 5. Re y fa quedan encima.",
        15: "La mano izquierda vuelve a do con el dedo 2. Usa el silencio corto de antes.",
      },
    },
    epic: {
      practice: [
        "Toca la mano izquierda sola. Cada acorde sube rodando de tres en tres: grave, media, aguda.",
        "Toca la mano derecha sola en los compases 7 a 12, donde sextas y terceras se suman a la melodía.",
        "Junta las manos en los seis primeros compases, despacio.",
        "Toca toda la pieza con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cuenta tres notas parejas en la mano izquierda por cada tiempo. Deben ondular con suavidad.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
        "Cambia el pedal en cada línea divisoria, cuando suena la nueva nota del bajo.",
      ],
      tricky: {
        5: "El dedo 3 sube de sol a si bemol. Debajo, la mano izquierda sigue rodando do, mi y si bemol.",
        7: "El pulgar en el la, debajo del fa. Luego el pulgar sube a do, y los dedos 2 y 5 toman el fa y el la.",
        9: "Después del fa sostenido, el pulgar se desliza abajo hasta mi, y el dedo 2 toca sol con él.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola en los compases 1 a 6. Salta abajo a la octava grave y vuelve arriba a los acordes.",
        "Toca solos los arpegios largos de la mano izquierda en los compases 7 a 12.",
        "Toca la mano derecha sola desde el compás 7, donde la melodía sube una octava.",
        "Toca toda la pieza con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Levanta la mano izquierda después de cada octava grave. El silencio corto te da tiempo para llegar al acorde.",
        "En cada arpegio, el pulgar pasa por debajo al bajar, y el dedo 3 cruza por encima al subir.",
        "Abre la mano derecha sobre el último acorde, y déjalo sonar con el pedal.",
      ],
      tricky: {
        2: "El dedo 4 mantiene el do agudo sobre el bajo en staccato. Luego los dedos 5, 4, 3 y 2 tocan cuatro notas rápidas.",
        5: "El dedo 3 sube de sol a si bemol, mientras la mano izquierda sigue tocando su do grave en staccato.",
        6: "Toca sol sostenido con el dedo 2 y el la con el dedo 4. La mano izquierda salta abajo a la octava de fa grave.",
      },
    },
  },
};
