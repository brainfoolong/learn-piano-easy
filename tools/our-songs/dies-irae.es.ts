/** The guide of *Dies irae* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Dies irae es un canto medieval en latín sobre el Día del Juicio, cantado durante siglos en la misa de réquiem. " +
    "Desde Berlioz, los compositores lo citan cada vez que su música habla de la muerte. " +
    "Los créditos iniciales de la película The Shining (1980), de Stanley Kubrick, están construidos sobre él.",
  funFact: "Sus primeras palabras significan «día de ira, aquel día», y la primera línea termina con el mundo hecho cenizas.",
  versions: {
    common: {
      practice: [
        "Toca los tres primeros compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca la mano derecha sola desde el compás 8, donde el pulgar baja al la.",
        "Ahora la mano izquierda sola. Se queda en un solo lugar, con el meñique en el re.",
        "Junta las dos manos en los siete primeros compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Toca lento y parejo, como monjes que cantan en una iglesia de piedra.",
        "Tu pulgar derecho está en el do. Cada nota hasta el sol queda bajo un dedo.",
        "Mientras suena el re, desliza el pulgar hacia abajo hasta el la, listo para la última frase.",
      ],
      tricky: {
        1: "Balancea la mano entre los dedos 4 y 3 para el fa, el mi y el fa. Mantén la muñeca quieta.",
        4: "El dedo 4 toca el fa dos veces, y luego el dedo 5 alcanza el sol. No muevas la mano.",
        10: "Balancea la mano entre los dedos 4 y 5 para el mi, el fa y el mi. El meñique toca el fa.",
      },
    },
    rare: {
      practice: [
        "Toca la mano izquierda sola. Se queda en un solo lugar, con el meñique en el re.",
        "Toca la mano derecha sola en la primera vuelta de la melodía.",
        "Junta las manos en la primera frase, y presiona las tres notas de cada acorde como una sola.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "En el segundo tiempo el acorde queda en dos notas, para que el mi de la melodía suene claro.",
        "La segunda vez, la mano izquierda toca el re y luego el la. Siente el vaivén lento de tres tiempos.",
        "Deja sonar el último acorde de re menor hasta que se apague.",
      ],
      tricky: {
        1: "Presiona el re, el fa y el la juntos. Luego levanta el fa en el segundo tiempo y mantén abajo el re y el la.",
        4: "La mano izquierda toca el fa y el la con los dedos 3 y 1. El dedo 5 de la mano derecha alcanza el sol.",
        12: "Aprovecha el re que se mantiene en el compás 11 para llevar el pulgar derecho de vuelta arriba, al do.",
      },
    },
    epic: {
      practice: [
        "Toca los acordes arpegiados solos hasta que rueden por sí mismos: grave, medio, agudo, medio.",
        "Toca las dobles notas de la mano derecha solas, y presiona las dos notas como una sola.",
        "Junta las manos en la primera frase, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada línea divisoria. Levántalo justo cuando suena la nueva nota del bajo.",
        "Las cuartas y quintas abiertas suenan huecas y antiguas. Así armonizaban los cantores el canto llano hace mil años.",
        "Mantén los dedos 1 y 5 en una misma forma, y mueve toda la mano de nota en nota.",
      ],
      tricky: {
        13: "El pulgar se queda en el la durante dos acordes y luego baja al fa. Al principio solo se mueve el meñique.",
        16: "El pulgar baja del si bemol al la, y el meñique desciende por el fa, el mi y el re.",
        17: "La mano sube en cada tiempo: el fa y el do, el la y el mi, y luego el si bemol y el fa.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo de campana solo: golpea la octava grave, luego levanta la mano y apóyala en el acorde.",
        "Toca las octavas de la mano derecha solas, y mantén la mano en una misma forma.",
        "Toca sola la melodía de la mano izquierda en la segunda mitad, bien abajo en el bajo.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar la última octava.",
      ],
      tips: [
        "Golpea cada octava grave como una campana de iglesia, y luego deja que el pedal lleve su sonido.",
        "Ahora la melodía canta en el bajo. Toca suave los acordes agudos, como campanas lejanas.",
        "Levanta la mano después del acorde, y deja caer el pulgar sobre el la grave.",
      ],
      tricky: {
        2: "Suelta pronto la octava de mi, para que la mano tenga tiempo de bajar al do.",
        5: "Las octavas descienden por el fa, el mi y el re. Mantén los dedos 1 y 5 fijos en una misma forma.",
        11: "Aquí las dos manos tocan acordes. Levanta cada mano antes de que la melodía baje al bajo.",
      },
    },
  },
};
