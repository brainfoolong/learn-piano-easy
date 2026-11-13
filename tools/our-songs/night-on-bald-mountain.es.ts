/** The guide of *Night on Bald Mountain* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mussorgsky terminó su retrato musical de un aquelarre de brujas en el Monte Pelado la noche de San Juan, el 23 de junio de 1867. " +
    "Cinco años después de su muerte, en 1886, Rimsky-Korsakov publicó su propio arreglo de la obra. " +
    "La película Fantasia (1940), de Walt Disney, la hizo famosa, con el arreglo de Leopold Stokowski basado en la versión de Rimsky-Korsakov.",
  funFact: "Junto con Sadko de Rimsky-Korsakov, también de 1867, es uno de los primeros poemas sinfónicos de un compositor ruso.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. La mano empieza un paso más abajo, en el sol.",
        "Ahora la mano izquierda sola. Mantiene una nota durante todo un compás.",
        "Junta las dos manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Toca la melodía fuerte y pesada, como metales que llaman en la noche.",
        "Usa el silencio largo para subir la mano derecha hasta el sol.",
        "Mientras suena el la, prepárate para bajar la mano. Así el dedo 3 llega al fa.",
      ],
      tricky: {
        5: "La mano subió. El dedo 2 toca el la, y el dedo 3 toca el si bemol.",
        13: "Baja la mano derecha para que el pulgar quede en el re. El dedo 3 empieza en el fa.",
        23: "Baja la mano derecha en el silencio. El dedo 3 toca el fa, y el pulgar termina en el re.",
      },
    },
    rare: {
      practice: [
        "Toca los primeros ocho compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca con la mano izquierda sola. Toca en los tiempos 1, 3 y 4 de cada compás.",
        "Junta las manos en los compases 9 a 16, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Toca la melodía fuerte y pesada, como metales que llaman en la noche.",
        "Cuenta cuatro tiempos en cada compás. El bajo toca en los tiempos 1, 3 y 4.",
        "La mano izquierda nunca se mueve. Cada dedo se queda en su propia tecla.",
      ],
      tricky: {
        5: "La mano subió durante el silencio. El dedo 2 toca el la, y el dedo 3 toca el si bemol.",
        15: "Baja la mano derecha para que el dedo 2 toque el mi. Luego el dedo 4 toca el sol.",
        31: "Baja la mano derecha para que el pulgar llegue al re al final del compás.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola. Debajo de la melodía, la mano salta entre dos notas a una octava de distancia.",
        "Toca el pasaje rápido del compás 4 con la mano derecha sola. Pasa el pulgar por debajo hasta el sol.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "No pises el pedal debajo de la melodía, para que cada octava del bajo suene nítida.",
        "En el pasaje rápido, pasa el pulgar por debajo hasta el sol, y luego sube con los dedos 2 a 5.",
        "Cambia el pedal en cada nueva nota del bajo, dos veces en cada compás.",
      ],
      tricky: {
        4: "Pasa el pulgar por debajo hasta el sol, y luego deja que los dedos 2, 3, 4 y 5 suban hasta el re.",
        17: "La melodía salta una octava hacia arriba. Usa el silencio de antes para mover la mano.",
        25: "Baja la mano una octava en el silencio. Los dedos 3 y 5 toman la primera tercera.",
      },
    },
    legendary: {
      practice: [
        "Toca el pasaje rápido de los compases 4 y 5 con la mano derecha sola, muy despacio.",
        "Toca con la mano izquierda sola: la octava, y luego dos notas más rápidas.",
        "Toca las octavas de la mano derecha sola. Mantén la mano abierta, con el pulgar y el meñique listos.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "El pasaje rápido gira hacia arriba y hacia abajo como el viento. Tócalo ligero y parejo.",
        "Deja que el meñique cante un poco más fuerte la nota de arriba de cada octava.",
        "Toca el último acorde fuerte, y mantenlo hasta que el sonido se apague.",
      ],
      tricky: {
        13: "La mano izquierda salta del re grave hasta el la y el fa. Usa el silencio corto para volver a bajar.",
        14: "La mano izquierda se abre mucho, del sol grave hasta el si bemol. Mantén suelta la muñeca.",
        17: "Empiezan las octavas. Abre la mano con el pulgar en el la y el meñique en el la de arriba.",
      },
    },
  },
};
