/** The guide of *Symphony No. 5* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "La Quinta Sinfonía de Beethoven empieza con cuatro notas, tres cortas y una larga. " +
    "Su primera edición impresa salió en abril de 1809. " +
    "La película Fantasia 2000 (1999) empieza con esta sinfonía.",
  funFact: "Beethoven dedicó la sinfonía a dos de sus mecenas, el príncipe Joseph Franz von Lobkowitz y el conde Razumovsky.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 5 a 12 con la mano derecha sola. La mano se queda en un solo lugar.",
        "Ahora la mano izquierda sola. Mantiene una nota durante todo un compás.",
        "Junta las dos manos en los primeros cuatro compases, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El primer tiempo es un silencio. Luego toca mi en los tiempos dos, tres y cuatro.",
        "Toca fuerte las tres notas cortas, y deja que la nota larga suene durante todo el compás.",
        "El pulgar se queda en si, y cada dedo mantiene su propia tecla.",
      ],
      tricky: {
        1: "El primer tiempo es un silencio. Luego toca mi tres veces con el dedo 4. Mantén el dedo suelto para cada nota nueva.",
        7: "El dedo 5 toca fa tres veces. Levántalo un poco entre las notas, para que cada una suene.",
        9: "Los dedos 4 y 5 se mecen entre mi y fa. Mantén los dos dedos cerca de las teclas.",
      },
    },
    rare: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola. Las notas cortas son corcheas.",
        "Toca la mano izquierda sola. Primero viene una nota larga en el bajo, y luego dos acordes cortos.",
        "Junta las manos en los compases 5 a 8, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Cada motivo empieza con un silencio corto. Luego tres notas rápidas llevan a la nota larga.",
        "Cada compás vuelve a tocar la idea del comienzo: tres notas cortas y una larga.",
        "Termina con do y mi a la vez. Los dedos 2 y 4 las presionan como si fueran una sola.",
      ],
      tricky: {
        1: "Tres mi rápidos siguen al silencio corto. Tócalos con el dedo 4, ligeros y parejos.",
        5: "Toca tres mi rápidos con el dedo 4. Luego el dedo 2 mantiene do durante medio compás.",
        13: "Después de los tres mi rápidos, los dedos 2 y 4 presionan do y mi a la vez.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de Alberti solo hasta que ruede por sí mismo: grave, aguda, media, aguda.",
        "Toca solas las octavas de los primeros cuatro compases. Mantén la mano abierta del pulgar al meñique.",
        "Toca la escala del compás 12 con la mano derecha sola. Pasa el pulgar por debajo hasta si bemol.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Toca las octavas fuertes y secas, y luego deja sonar cada nota larga.",
        "Cambia el pedal al comienzo de cada compás, cuando cambia el acorde.",
        "Pasa el pulgar por debajo hasta si bemol, y luego sube con los dedos 2 a 5.",
      ],
      tricky: {
        5: "Toca mi bemol tres veces con el dedo 3. Luego abre bien la mano para do y sol.",
        10: "Empieza arriba en do con el dedo 5, y baja caminando hasta el la bemol. Luego el pulgar cae en mi bemol.",
        12: "Después del la bemol, pasa el pulgar por debajo hasta si bemol. Luego los dedos 2 a 5 suben hasta fa.",
      },
    },
    legendary: {
      practice: [
        "Toca la mano izquierda sola: una octava en el pulso, y luego un acorde, cada uno con un silencio corto para saltar.",
        "Toca los acordes de la mano derecha sola, y deja que el dedo de arriba cante la melodía.",
        "Toca el pasaje rápido del compás 12 con la mano derecha sola. El pulgar pasa por debajo dos veces.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Presiona las cuatro notas de cada acorde como si fueran una, con la nota de arriba un poco más fuerte.",
        "La mano izquierda sube dos octavas en cada compás. El dedo 3 cruza por encima del pulgar.",
        "Pasa el pulgar por debajo hasta si bemol, y otra vez hasta fa. Luego el dedo 5 llega a do.",
      ],
      tricky: {
        3: "La mano izquierda salta del sol grave hasta el acorde. Usa el silencio corto después de cada octava para saltar.",
        4: "La mano derecha mantiene su acorde. Deja que la mano izquierda salte entre el sol grave y el acorde de arriba.",
        19: "Toca fa en octavas tres veces, con la mano abierta. La mano izquierda salta desde el sol grave, como antes.",
      },
    },
  },
};
