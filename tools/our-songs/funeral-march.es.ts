/** The guide of *Funeral March* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Esta marcha fúnebre es el tercer movimiento de la Sonata para piano n.º 2 de Chopin, publicada en 1840. " +
    "Se tocó en el funeral del propio Chopin, y en el funeral de Estado de John F. Kennedy. " +
    "Las películas y los dibujos animados suelen citar su comienzo cuando hay un funeral.",
  funFact: "Muchos especialistas fechan la marcha en 1837, dos años antes de que Chopin terminara el resto de la sonata.",
  versions: {
    common: {
      practice: [
        "Toca los cuatro primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Por fin la melodía se aleja del re.",
        "Ahora la mano izquierda sola. Se balancea entre el re y el si bemol, como una campana lenta.",
        "Junta las dos manos en los ocho primeros compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cuenta hasta cuatro en el primer re. Luego un re largo y un re corto llevan al compás siguiente.",
        "Toca suave y con peso, como pasos lentos detrás de un ataúd.",
        "El pulgar descansa todo el tiempo sobre el do sostenido. Solo toca en los compases 7, 12 y 15.",
      ],
      tricky: {
        7: "Mantén el mi tres tiempos, y luego toca el re durante uno. Mantén el re tres tiempos, y al final el pulgar toca el do sostenido.",
        12: "El dedo 3 mantiene el mi cuatro tiempos. Luego el pulgar toca el do sostenido, y la mano izquierda se queda en el la.",
        15: "Cuatro notas parejas: el mi, el fa, el mi, y luego el do sostenido con el pulgar. Mantén cada dedo en su propia tecla.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Hace sonar un acorde en cada tiempo, como una campana.",
        "Toca la mano derecha sola en los ocho primeros compases, y deja que la canción espere cada nota.",
        "Junta las manos en los compases 9 a 16, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Mantén suaves y parejos los acordes de la mano izquierda, para que la melodía quede por encima.",
        "Entre los dos acordes, solo se mueve la nota grave. Los dedos 2 y 1 se quedan en el re y el fa.",
        "Termina con el re y el fa juntos, y deja que se apaguen despacio.",
      ],
      tricky: {
        10: "Presiona el re y el fa juntos con los dedos 2 y 4. Luego el dedo 5 toca el sol, y el dedo 4 toca el fa.",
        11: "La mano izquierda toca el sol, el si bemol y el re con los dedos 5, 4 y 2. La mano derecha baja desde el sol.",
        12: "El pulgar y el dedo 3 presionan el do sostenido y el mi juntos. La mano izquierda toca solo el la, con el dedo 5.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca el compás 11 con la mano derecha sola. Pasa el pulgar por debajo hasta el fa.",
        "Junta las manos en los ocho primeros compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nota nueva del bajo, dos veces por compás.",
        "Pasa el pulgar por debajo hasta el fa después de que el dedo 3 toque el mi bemol.",
        "Ahora la melodía va arriba de cada par. Deja que el dedo 5 la cante.",
      ],
      tricky: {
        19: "Mantén la mano abierta, con el pulgar en el mi bemol y el dedo 5 en el do. Levanta el pulgar para el do corto.",
        21: "Como en el compás 19, el pulgar y el dedo 5 tocan una sexta. Luego el dedo 5 toca el do solo.",
        22: "El dedo 4 toma el do en la sexta, para que el dedo 5 quede libre y suba al mi bemol.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola: una octava en el pulso y luego un acorde, cada uno con un silencio corto para saltar.",
        "Toca los arpegios de la mano izquierda solos. Al subir, el dedo 3 cruza por encima del pulgar.",
        "Toca los acordes de la mano derecha solos, y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Toca las octavas pesadas y lentas, como una gran campana. Deja que el meñique guíe.",
        "En los arpegios, el dedo 3 cruza por encima del pulgar, y al bajar el pulgar pasa por debajo.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
      ],
      tricky: {
        9: "Empiezan los arpegios. El dedo 3 cruza por encima del pulgar hasta el mi bemol, mientras la mano derecha baja desde el sol.",
        14: "La mano izquierda empieza en el fa grave con el dedo 5. El dedo 3 cruza por encima del pulgar hasta el la bemol.",
        22: "Levanta la mano en el silencio corto, y luego baja la mano al mi bemol, al la bemol, al do y al mi bemol.",
      },
    },
  },
};
