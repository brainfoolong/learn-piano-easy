/** The guide of *Aquarium* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Aquarium es el séptimo movimiento de El carnaval de los animales, una broma musical que Saint-Saëns escribió en 1886. " +
    "La suite se publicó en 1922, un año después de su muerte. " +
    "La película de 1978 de Terrence Malick, Days of Heaven, la usa en sus créditos iniciales.",
  funFact:
    "Mientras vivió, Saint-Saëns prohibió tocar la suite en público, por miedo a que sus bromas dañaran su fama de compositor serio.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahora el pulgar empieza en el si.",
        "Ahora la mano izquierda sola. Mantiene cada forma durante un compás entero.",
        "Junta las dos manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Los dedos 5 y 4 se mecen entre el mi y el re sostenido, como agua que golpea suavemente un vidrio.",
        "Toca suave y ligado, como peces que se deslizan por agua tranquila.",
        "Aquí la mano sube una tecla. Ahora el dedo 4 toca el mi, y el pulgar espera sobre el si.",
      ],
      tricky: {
        1: "Alterna entre el mi y el re sostenido con los dedos 5 y 4. Luego el dedo 4 se desliza al re de la tecla blanca.",
        3: "El compás 3 es otra vez el compás 1. Mantén el dedo 4 cerca de la tecla negra, para que el re sostenido salga fácil.",
        9: "Durante el si largo, vuelve a bajar la mano. El pulgar regresa al la, y el dedo 5 toma el mi.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Pasa de una nota grave a una más aguda, en cada tiempo.",
        "Toca la mano derecha sola en los primeros ocho compases, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Las dos manos tocan en cada tiempo. Mantén los tiempos tan parejos como olas lentas.",
        "Mantén suave la mano izquierda, para que la melodía flote encima.",
        "Termina con el la y el do a la vez. Los dedos 1 y 3 los presionan como si fueran una sola nota.",
      ],
      tricky: {
        1: "Alterna entre el mi y el re sostenido con los dedos 5 y 4, mientras la mano izquierda pasa del la al do.",
        3: "Como en el compás 1, los dedos 5 y 4 se mecen entre el mi y el re sostenido. Luego el dedo 4 toma el re de la tecla blanca.",
        9: "Durante el si largo, vuelve a bajar la mano derecha, para que el pulgar quede otra vez en el la.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solos los pares de la mano derecha desde el compás 17, y presiona las dos notas de cada par como si fueran una.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada compás nuevo, para que el agua siga clara.",
        "La mano izquierda mantiene el dedo de la nota grave cerca del la. Solo se mueve al sol sostenido para el acorde de mi.",
        "La melodía es la nota de arriba de cada par, así que deja que el dedo de arriba guíe.",
      ],
      tricky: {
        9: "Durante el si largo, vuelve a bajar la mano derecha. Luego baja corriendo del mi al la con los dedos 5 a 1.",
        15: "La mano izquierda se estira hacia abajo hasta el sol sostenido. La mano derecha toca el si, el re, el do y el si con los dedos 2, 4, 3 y 2.",
        24: "Mantén el sol sostenido y el si con los dedos 1 y 3. Luego abre la mano sobre el la, el do y el mi para el último acorde.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola: una octava en el pulso y luego un acorde, cada uno con un silencio corto para saltar.",
        "Toca solos los arpegios de la mano izquierda. El pulgar pasa por debajo, y el dedo 3 cruza por encima.",
        "Toca solos los acordes de la mano derecha, y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Aprovecha el silencio corto después de cada octava y cada acorde para saltar al siguiente.",
        "Deja que los arpegios ondulen suaves, como luz que se mueve en el agua.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
      ],
      tricky: {
        8: "La mano izquierda salta de la octava de mi grave hasta el sol sostenido, el si y el mi. Aprovecha cada silencio corto para llegar.",
        18: "Después del acorde agudo, la mano derecha baja al do, el mi y el la. Mantén la mano en la forma del acorde.",
        24: "Levanta la mano derecha en el silencio corto después del mi, el sol sostenido y el si. La mano llega al la, al do, al mi y al la.",
      },
    },
  },
};
