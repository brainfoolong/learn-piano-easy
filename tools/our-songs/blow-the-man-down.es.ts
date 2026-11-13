/** The guide of *Blow the Man Down* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Blow the Man Down es una canción marinera de driza, que la tripulación cantaba mientras subía una vela pesada por el mástil. " +
    "Nuestra melodía sigue la edición impresa de R. R. Terry de 1921.",
  funFact: "Un periódico de Syracuse, Nueva York, citó un verso de la canción en 1867. Unos marineros la habían cantado en un barco de vapor de Nueva York a Glasgow.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 7 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 8 a 17 con la mano derecha sola. La mano se mueve dos veces, siempre después de una nota larga.",
        "Ahora la mano izquierda sola. Mantiene una o dos notas durante todo un compás.",
        "Junta las dos manos en los primeros siete compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Empieza con el pulgar en el sol. El dedo 2 toma el si, el dedo 4 toma el re y el dedo 5 toma el mi.",
        "Mantén el primer re durante tres tiempos, y luego toca el mi durante un tiempo. El mi corto tira como una cuerda.",
        "Los marineros cantaban esto mientras subían una vela. Apóyate un poco en la primera nota de cada compás, como en un tirón.",
      ],
      tricky: {
        8: "Después del mi largo, la mano baja. El dedo 4 cae en el do, y el pulgar espera sobre el fa sostenido.",
        13: "El dedo 4 se estira desde el la hasta el mi, y el dedo 5 toca el sol agudo.",
        14: "Después del sol agudo, el dedo 5 baja hasta el re. Toca el re tres veces: corto, largo y luego mediano.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola: una nota grave larga, y luego un acorde corto.",
        "Toca la mano derecha sola en los primeros siete compases, y deja que la canción espere cada nota.",
        "Junta las manos en los compases 8 a 17, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda toca larga, corta, larga, corta en cada compás. Deja que la melodía navegue encima, como un bote sobre las olas.",
        "Presiona las dos notas de cada acorde como si fueran una. La nota de arriba es la melodía, así que déjala sonar un poco más fuerte.",
        "Dos corcheas rápidas llenan un tiempo. Di «ti-ra» en cada par.",
      ],
      tricky: {
        8: "Después del acorde de do y mi, la mano baja. El dedo 4 cae en el do. La mano izquierda toca el re, y luego el la y el re a la vez.",
        13: "El dedo 4 se estira desde el la hasta el mi, y el dedo 5 toca el sol agudo. La mano izquierda toca el do, y luego el sol y el do a la vez.",
        14: "El dedo 5 baja del sol agudo hasta el re y lo toca tres veces. Mantén la muñeca suelta.",
      },
    },
    epic: {
      practice: [
        "Toca la mano izquierda sola hasta que los acordes arpegiados rueden por sí mismos.",
        "Toca los compases 18 a 24 con la mano derecha sola. Pasa el pulgar por debajo al subir.",
        "Junta las manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nota nueva del bajo, dos veces en cada compás.",
        "Después del sol con el dedo 3, pasa el pulgar por debajo hasta el la bemol. Luego los dedos 2 y 3 llegan al si bemol y al do.",
        "Al bajar, el dedo 3 cruza por encima del pulgar hasta el fa.",
      ],
      tricky: {
        14: "Después del mi bemol agudo, el dedo 5 baja hasta el si bemol y lo toca tres veces.",
        18: "Pasa el pulgar por debajo hasta el la bemol, y mantén fluido el pasaje. La mano izquierda sigue rodando sin pausa.",
        21: "La mano se abre sobre una octava, de mi bemol a mi bemol. Luego los dedos 4 y 3 bajan al re y al do.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola: una octava en el pulso, y luego un acorde dos veces, cada uno con un silencio corto para saltar.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca los arpegios de la mano izquierda sola. El dedo 3 cruza por encima del pulgar al subir.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Usa el silencio corto después de cada octava y cada acorde para saltar al siguiente.",
        "Toca la nota de arriba de cada acorde grande un poco más fuerte. Esa nota lleva la melodía.",
        "Deja que los arpegios rueden suaves, como olas bajo el barco.",
      ],
      tricky: {
        19: "La mano izquierda empieza en el la bemol grave, y el dedo 3 cruza por encima del pulgar hasta el do.",
        22: "El pulgar derecho se queda cerca del la bemol, y al final el dedo 5 se estira hacia arriba hasta el mi bemol.",
        24: "Usa el silencio para saltar hacia abajo hasta el si bemol grave. La mano derecha sube de fa a re y vuelve caminando hasta el la bemol.",
      },
    },
  },
};
