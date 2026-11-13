/** The guide of *Sarabande in D minor* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Handel escribió esta suite para clave cuando tenía poco más de veinte años, y se publicó por primera vez en 1733. " +
    "Su zarabanda es una danza lenta y solemne de tres tiempos. " +
    "La película Barry Lyndon (1975), de Stanley Kubrick, la usa en un arreglo para orquesta.",
  funFact: "El número de catálogo de la suite, HWV 437, viene del Händel-Werke-Verzeichnis, la lista de todas las obras de Handel.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 4 a 8 con la mano derecha sola. En el compás 4, el pulgar sube al la.",
        "Ahora la mano izquierda sola. Mantiene una nota grave en cada compás.",
        "Junta las dos manos en los primeros ocho compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Cuenta tres tiempos lentos en cada compás. La nota corta llega justo antes del compás siguiente.",
        "Esta es una danza lenta y orgullosa. Toca cada nota larga con calma y plenitud.",
        "Mantén el pulgar cerca del la y del do sostenido. Tus dedos 2 a 4 suben hasta el fa y vuelven.",
      ],
      tricky: {
        4: "Aprovecha el silencio para subir el pulgar derecho al la. Se queda ahí hasta el compás 8.",
        9: "Después del silencio, la mano derecha vuelve a bajar. El dedo 2 cae sobre el fa.",
        12: "Como en el compás 4, aprovecha el silencio para subir el pulgar derecho al la.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Primero llega una nota grave, y le responde un acorde de dos notas.",
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros ocho compases, despacio y con el pedal.",
        "Toca el final, donde la mano izquierda cambia de acorde en cada tiempo.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Mantén el pedal pisado durante cada compás entero, y cámbialo justo en la línea divisoria.",
        "Toca la nota grave un poco más fuerte que el acorde que la sigue. Es la nota que lleva la danza.",
        "En estos dos compases no hay pedal, para que los acordes suenen limpios. Mantén cada uno con los dedos.",
      ],
      tricky: {
        3: "Aprovecha el silencio corto para saltar con la mano izquierda hacia abajo al fa. Lo toma el dedo 5.",
        6: "Aprovecha el silencio para volver a subir la mano izquierda. El dedo 4 toca el re.",
        9: "La mano izquierda sube al re, y la mano derecha vuelve a bajar al fa.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solas las terceras de la mano derecha, y presiona las dos notas de cada doble nota como si fueran una.",
        "Junta las manos en los primeros cuatro compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Toca el bajo de Alberti suave y parejo, para que la melodía lenta cante por encima.",
        "Al final de este compás, el bajo pasa a re mayor. Cambia el pedal ahí.",
        "La melodía es la nota de arriba de cada tercera, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        11: "Toca el fa y el la con los dedos 2 y 4, para que los dedos 3 y 5 queden listos para el sol y el si bemol.",
        15: "Primero toca despacio las notas de este compás. Los dedos cambian en cada nota.",
        16: "Abre la mano derecha sobre el fa, el la y el re con los dedos 1, 2 y 5.",
      },
    },
    legendary: {
      practice: [
        "Toca solos los acordes de la mano derecha, y deja que el dedo de arriba cante la melodía.",
        "Toca los primeros ocho compases con la mano izquierda sola. Levántala antes de cada salto.",
        "Toca solos los arpegios de la mano izquierda. El pulgar pasa por debajo, y el dedo 3 cruza por encima.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
        "El la roza a propósito con el si bemol del bajo. Deja que duela un momento, y luego sigue.",
        "Levanta la mano derecha un poco antes de cada acorde nuevo, para que caiga a tiempo.",
      ],
      tricky: {
        9: "Aquí la melodía salta una octava hacia arriba. Apoya los dedos en las cuatro notas a la vez.",
        14: "Después del acorde grande, el dedo 2 toma el la agudo, y el dedo 5 se estira hacia arriba hasta el re.",
        15: "Los dedos cambian en cada nota de este compás. Practícalo despacio, aparte.",
      },
    },
  },
};
