/** The guide of *Row Row Row Your Boat* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Es una de las canciones infantiles más conocidas en los países de habla inglesa. " +
    "Eliphalet Oram Lyte publicó la melodía que cantamos hoy en 1881, en The Franklin Square Song Collection. " +
    "La melodía sube por las primeras cinco notas de la escala, y luego baja rodando una octava entera.",
  funFact: "La canción es un canon: una segunda voz empieza la misma melodía dos compases después, y las dos partes encajan.",
  versions: {
    common: {
      practice: [
        "Toca con la mano derecha sola, despacio, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 8 con la mano derecha sola. Ahí la melodía baja corriendo.",
        "Junta las dos manos. La mano izquierda solo mantiene una nota grave y larga.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Aquí cada dedo tiene su propia tecla: el pulgar en el do, el meñique en el sol.",
        "El sol dura todo el compás, así que cuenta los seis tiempos antes de moverte.",
        "Aquí cada nota dura tres tiempos, así que cuenta hasta tres en cada tecla.",
      ],
      tricky: {
        5: "Sube la mano durante el sol largo, para que el meñique llegue al do agudo.",
        6: "Mantén el mi con el dedo 2, y luego el do con el pulgar, tres tiempos cada uno. Deja quieta la mano.",
        7: "El meñique vuelve a encontrar el sol, y la melodía baja: 5, 4, 3, 2.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola, y presiona juntas las tres notas de cada acorde.",
        "Toca con la mano izquierda sola la segunda mitad, donde una nota del bajo llega antes de cada acorde.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El acorde pasa a sol. El pulgar se queda en el sol, y los otros dos dedos bajan una tecla cada uno.",
        "La nota del bajo va en el primer tiempo, y las notas de arriba en el cuarto tiempo.",
        "Deja que las notas que bajan suenen un poco más suaves, como un bote que se aleja.",
      ],
      tricky: {
        5: "Sube la mano derecha durante el sol largo, para que el meñique llegue al do agudo.",
        7: "En la mano izquierda, el meñique se desliza del do al si, y el dedo 3 del mi al re.",
        13: "Vuelve el do agudo. Sube la mano derecha durante el sol largo del compás 12.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca la melodía con la mano izquierda sola, desde el compás 9.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "Levanta el pedal y písalo otra vez en el primer y el cuarto tiempo.",
        "La melodía pasa a la mano izquierda. Tócala más fuerte que los acordes arpegiados de la mano derecha.",
      ],
      tricky: {
        5: "Sube la mano derecha durante el sol largo, para que el meñique quede listo en el do agudo.",
        9: "Aquí las dos manos cambian de papel: la mano izquierda toma la melodía, y la mano derecha los acordes.",
        13: "El pulgar izquierdo sube hasta el do central, y luego la mano baja con 2, 3 y 5.",
      },
    },
    legendary: {
      practice: [
        "Toca los acordes de la mano derecha sola, y deja que el meñique cante la melodía.",
        "Toca con la mano izquierda sola desde el compás 9, donde empieza el canon.",
        "Junta las manos en el canon, despacio, y escucha las dos voces.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
        "La mano izquierda empieza el canon sola. La mano derecha espera dos compases.",
        "Cada mano toca la melodía entera. Deja que se oigan las dos voces.",
      ],
      tricky: {
        5: "Levanta la mano del acorde del compás 4, y apoya el meñique en el do agudo.",
        17: "La mano derecha termina la melodía sobre un sol grave. Levántala después del re, lista para el último acorde.",
        18: "Abre la mano derecha sobre una octava entera para el último acorde: do, mi, sol y do.",
      },
    },
  },
};
