/** The guide of *Clair de lune* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Clair de lune es el tercer movimiento de la Suite bergamasque de Debussy, que empezó hacia 1890 y publicó en 1905. " +
    "Su título significa «Claro de luna» y viene de un poema de Paul Verlaine. " +
    "La película Ocean's Eleven (2001) termina con ella, mientras los ladrones miran las fuentes del Bellagio.",
  funFact: "La partitura empieza con la indicación pianissimo y «con sordina», así que se toca con el pedal izquierdo pisado desde la primera nota.",
  versions: {
    common: {
      practice: [
        "Toca los compases 1 a 4 con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahí la melodía va bajando.",
        "Ahora la mano izquierda sola. En cada compás mantiene una nota larga o una quinta abierta.",
        "Junta las dos manos, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Levanta el pulgar del sol enseguida. El silencio te da tiempo para saltar al sol agudo.",
        "Toca suave y deja que cada nota larga se apague, como la luz de la luna sobre el agua.",
        "Aquí los dedos 2 y 3 hacen casi todo el trabajo. El dedo 5 se estira hacia la nota más alta.",
      ],
      tricky: {
        1: "Toca el sol con el pulgar, y luego salta una octava hacia arriba hasta el sol con el dedo 5.",
        5: "Tu mano baja en el silencio del compás 4. El dedo 3 cae en el la.",
        7: "Toca el primer mi con el dedo 3, no con el pulgar. Así el dedo 5 queda libre para el la.",
      },
    },
    rare: {
      practice: [
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la mano izquierda sola. La nota grave cae en el tiempo 1, y la quinta de arriba en el tiempo 4.",
        "Junta las manos en los primeros ocho compases, despacio, con el pedal.",
        "Toca la segunda mitad, donde la melodía vuelve una octava más arriba.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Mantén el pedal pisado durante cada compás entero, y cámbialo justo en la línea divisoria.",
        "Cuenta este compás en corcheas. El mi empieza a mitad del tiempo 4.",
        "Arriba, toca todavía más suave. La melodía debe flotar como la luz de la luna.",
      ],
      tricky: {
        5: "Tu mano baja en el silencio del compás 4. El dedo 3 cae en el la.",
        9: "Usa el silencio después del si grave para saltar muy arriba. Tu pulgar cae en el sol.",
        13: "Como en el compás 5, baja la mano en el silencio anterior. El dedo 3 cae en el la.",
      },
    },
    epic: {
      practice: [
        "Toca la mano izquierda sola. Cada acorde sube y baja rodando, una nota por corchea.",
        "Toca solas las terceras de la mano derecha, y presiona las dos notas de cada doble nota como una sola.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén los acordes que ruedan suaves y parejos, para que la melodía flote por encima.",
        "Aquí cambia el pedal tres veces, una por cada nota nueva del bajo.",
        "La melodía es la nota de arriba de cada tercera, así que deja que el dedo de arriba la guíe.",
      ],
      tricky: {
        3: "El do y el mi empiezan entre los tiempos. Cuenta este compás en corcheas: el mi empieza a mitad del tiempo 4.",
        11: "El mismo ritmo del compás 3, ahora en terceras. Sube juntos los dedos 3 y 5 hasta el do y el mi.",
        16: "Toca el la y el do con los dedos 1 y 3, y luego el si y el re con los dedos 2 y 4.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola. El pulgar pasa por debajo y el dedo 3 cruza por encima, así que cada arpegio abarca dos octavas.",
        "Toca solos los acordes de cuatro notas de la mano derecha, y levanta la mano entre uno y otro.",
        "Toca el final despacio. La mano izquierda cruza por encima de la derecha para tres notas agudas.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja que el último acorde resuene.",
      ],
      tips: [
        "En cada arpegio, el pulgar pasa por debajo al bajar, y el dedo 3 cruza por encima al subir.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
        "Mientras la mano derecha mantiene su acorde, pasa la mano izquierda por encima con un balanceo, como quien toca una campana.",
      ],
      tricky: {
        13: "Aquí cae un acorde en cada tiempo. Levanta un poco la mano después de cada uno, y deja que el pedal los una.",
        17: "Mantén el acorde de la mano derecha, y cruza la mano izquierda por encima para tocar el si, el re y el sol.",
        18: "Levanta la mano derecha de su acorde, y luego ábrela sobre el do, el mi, el sol y el do.",
      },
    },
  },
};
