/** The guide of *Symphony No. 7: Allegretto* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven escribió su Séptima Sinfonía en 1811 y 1812. " +
    "En su estreno en Viena, en diciembre de 1813, el público exigió escuchar otra vez el Allegretto. " +
    "La película The King's Speech (2010) lo pone de fondo bajo el discurso radial del rey en tiempos de guerra.",
  funFact: "La melodía suena primero en lo grave, en las violas y los violonchelos.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 4 con la mano derecha sola. Tu pulgar toca cada mi.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahí la melodía sube hasta el sol.",
        "Ahora la mano izquierda sola. Mantiene una sola posición en cada compás.",
        "Junta las dos manos, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Di «larga, corta, corta» mientras tocas el primer compás. Ese ritmo es toda la pieza.",
        "Tu mano nunca se mueve. Los dedos 1, 2 y 3 tocan el mi, el fa sostenido y el sol.",
        "Empieza muy suave, y deja que cada compás suene un poco más fuerte.",
      ],
      tricky: {
        10: "Aquí el dedo 4 toca el la. Mantén la mano quieta, y deja que solo el dedo se estire hacia arriba.",
        11: "El dedo 5 toca el si tres veces. Mantenlo curvo, para que el dedo más pequeño siga firme.",
        12: "El dedo 4 vuelve al la para la última nota. Mantenla cuatro tiempos.",
      },
    },
    rare: {
      practice: [
        "Toca la mano derecha sola en los primeros ocho compases, y cuenta «larga, corta, corta».",
        "Toca la mano izquierda sola. Cada compás mantiene un acorde de tres notas.",
        "Junta las manos en los primeros ocho compases, con el pedal.",
        "Toca la segunda mitad, donde la mano izquierda alterna una nota grave y un acorde.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Aquí la mano izquierda baja un poco. El dedo 5 pasa de sol sostenido a sol.",
        "Mantén el pedal pisado durante cada compás entero, y cámbialo justo en la línea divisoria.",
        "Ahora la mano izquierda toca en cada tiempo. Mantenla pareja, como una marcha lenta.",
      ],
      tricky: {
        10: "La mano izquierda toca el sol sostenido con el dedo 5, y luego el si y el mi a la vez. Mantén la mano quieta.",
        15: "La mano izquierda se mece entre el sol y el re con los dedos 5 y 2.",
        16: "Toca el mi y el sol a la vez con los dedos 1 y 3. Luego levanta la mano derecha en el silencio.",
      },
    },
    epic: {
      practice: [
        "Toca la mano izquierda sola hasta que los acordes arpegiados rueden por sí mismos: grave, aguda, media, aguda.",
        "Toca las dobles notas de la mano derecha sola, y presiona las dos notas de cada una como si fueran una.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suaves los acordes arpegiados, para que el mi repetido cante por encima.",
        "Cambia el pedal en el último tiempo, donde el acorde pasa a re mayor.",
        "Cambia el pedal tres veces en este compás, una por cada acorde nuevo.",
      ],
      tricky: {
        17: "Los dedos 1, 2 y 5 toman las notas do, fa y la. Debajo, la mano izquierda arpegia un acorde de fa mayor.",
        19: "El acorde cambia a mitad del compás. Cambia el pedal con él.",
        20: "Abre la mano izquierda sobre la octava: el dedo 5 en el la, el dedo 2 en el mi y el pulgar en el la agudo.",
      },
    },
    legendary: {
      practice: [
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca los arpegios de la mano izquierda sola. El pulgar pasa por debajo, y el dedo 3 cruza por encima.",
        "Junta las manos en los compases 9 a 16, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Toca la nota de arriba de cada octava un poco más fuerte, para que la melodía se destaque.",
        "Abre la mano derecha sobre una octava entera en cada acorde, con el pulgar y el dedo 5 en los extremos.",
        "Para el final, la melodía sube hasta el la. Deja sonar el último acorde con el pedal.",
      ],
      tricky: {
        10: "La mano izquierda empieza en un mi grave. Usa el silencio del final del compás 9 para saltar hacia abajo.",
        15: "El dedo 3 cruza por encima del pulgar hasta el si. Mantén la muñeca nivelada mientras la mano sube.",
        17: "Los dedos 1, 2, 4 y 5 toman las notas la, do, fa y la. Levanta la mano izquierda en cada silencio corto.",
      },
    },
  },
};
