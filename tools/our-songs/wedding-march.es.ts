/** The guide of *Wedding March* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mendelssohn escribió esta marcha en 1842 como parte de su música para El sueño de una noche de verano, de Shakespeare. " +
    "Se volvió una de las favoritas en las bodas después de que Victoria, la princesa real, la eligiera para la suya en 1858. " +
    "Las películas todavía la ponen cada vez que una pareja sale del altar.",
  funFact:
    "La primera boda conocida que usó esta marcha fue la de Tiverton, Inglaterra, el 2 de junio de 1847, con el organista Samuel Reay.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 4 a 8 con la mano derecha sola. En el sol largo, la mano baja hasta el do.",
        "Ahora la mano izquierda sola. Mantiene una nota o una quinta abierta durante un compás entero o medio compás.",
        "Junta las dos manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Empieza con el pulgar en el fa sostenido y el dedo 5 en el do agudo. La melodía se queda bajo tu mano.",
        "Levanta la mano justo antes de que termine el sol, y bájala. Luego el dedo 4 llega al fa.",
        "Tócala brillante y orgullosa, como las puertas de una iglesia que se abren de par en par.",
      ],
      tricky: {
        2: "Mantén el si con el dedo 4 durante seis tiempos. Luego el pulgar toca el fa sostenido.",
        4: "La mano ya bajó. El dedo 4 toca el fa, y el dedo 2 toca el re.",
        11: "Cuatro notas parejas: mi, fa, sol, y otra vez mi. Los dedos 3, 4 y 5 suben, y el dedo 3 vuelve.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola. Toca un acorde en cada tiempo, como una banda de música en un desfile.",
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Junta las manos en los compases 9 a 16, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Del acorde de fa al acorde de re, el dedo 5 se queda en el la. Solo se mueven las notas de arriba.",
        "Toca los acordes cortos y parejos, para que la melodía suene clara por encima.",
        "Termina con el do y el mi juntos. Los dedos 1 y 3 los presionan como una sola nota.",
      ],
      tricky: {
        1: "Mantén el do agudo con el dedo 5. La mano izquierda toca el la, el do y el fa en cada tiempo.",
        2: "La mano izquierda toca el la y el re. Mantén el si en la mano derecha mientras el acorde se repite.",
        4: "El dedo 4 toca el fa, y el dedo 2 toca el re. La mano izquierda se queda en el si, el re y el sol.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca el compás 9 con la mano derecha sola. Pasa el pulgar por debajo hasta el fa.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nota nueva del bajo, dos veces en cada compás.",
        "Pasa el pulgar por debajo hasta el fa después de que el dedo 3 toque el mi.",
        "Ahora la melodía va arriba en cada doble nota. Deja que el dedo de arriba la cante.",
      ],
      tricky: {
        4: "Levanta la mano al final del compás 3. Luego el dedo 4 llega al fa, mientras la mano izquierda rueda por el sol, el re y el si.",
        21: "Abre la mano sobre el mi y el do, a una sexta de distancia. Levántala justo antes del compás siguiente.",
        22: "Toca el do y el mi, luego el si y el re, y luego un do y un mi rápidos. El pulgar se mueve una tecla cada vez.",
      },
    },
    legendary: {
      practice: [
        "Toca con la mano izquierda sola: una octava en el pulso, y luego un acorde, cada uno con un silencio corto para saltar.",
        "Toca los arpegios de la mano izquierda sola. El dedo 3 cruza por encima del pulgar al subir.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Toca las octavas como trompetas en una boda real. Deja que el meñique guíe.",
        "En los arpegios, el dedo 3 cruza por encima del pulgar, y el pulgar pasa por debajo al bajar.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
      ],
      tricky: {
        10: "La mano izquierda sube dos octavas desde el sol grave. La mano derecha sube caminando desde el re con los dedos 1 a 4.",
        12: "La mano izquierda vuelve a subir desde el sol. La mano derecha salta del re hasta el sol con el dedo 4.",
        17: "Abre la mano derecha sobre el do, el fa, el la y el do. La mano izquierda salta de la octava grave de fa a su acorde.",
      },
    },
  },
};
