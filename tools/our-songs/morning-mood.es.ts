/** The guide of *Morning Mood* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Grieg escribió Morning Mood en 1875 para la obra de teatro Peer Gynt, de Ibsen, y la publicó en su primera Suite Peer Gynt en 1888. " +
    "Su melodía usa solo cinco notas de la escala, y va y viene entre la flauta y el oboe. " +
    "La película Soylent Green, de 1973, la usa mientras un hombre que se muere escucha la música que eligió.",
  funFact: "La música pinta un amanecer en el desierto de Marruecos, y no sobre un fiordo noruego, como imagina casi todo el público.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cuatro compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 9 a 16 con la mano derecha sola. La mano se queda en el mismo lugar.",
        "Ahora la mano izquierda sola. Mantiene cada forma durante un compás entero.",
        "Toca los primeros ocho compases con las dos manos juntas, despacio.",
        "Toca toda la canción con las dos manos a velocidad completa.",
      ],
      tips: [
        "Tu pulgar derecho está en el do central, y el dedo 5 empieza en el sol. Los dedos 2 y 3 descansan sobre re y mi.",
        "Después del primer do, cuatro notas cortas se mecen entre re y mi. Cuéntalas parejas.",
        "Toca suave, como un amanecer lento. Cada nota debe fluir hacia la siguiente.",
      ],
      tricky: {
        5: "Aquí el dedo 2 toma el mi, y el dedo 4 el sol. Así el dedo 5 queda libre para el la agudo del compás 6.",
        6: "El dedo 5 toca el la, y el dedo 2 el mi. Mantén la mano abierta entre los dos.",
        7: "El dedo 5 vuelve del la al sol. La mano izquierda pasa a re y sol a mitad del compás.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola: una nota grave y luego una doble nota dos veces. La mano se queda quieta.",
        "Toca con la mano derecha sola en los primeros ocho compases, y deja que la canción espere cada nota.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "La mano izquierda toca en cada tiempo. Cuenta uno, dos, tres, dos veces en cada compás.",
        "Mantén suaves los acordes de la mano izquierda, para que la melodía flote por encima como la luz de la mañana.",
        "Termina con sol y si juntos. Los dedos 1 y 3 los presionan como uno solo.",
      ],
      tricky: {
        5: "Aquí el dedo 2 toma el si, y el dedo 4 el re. Así el dedo 5 queda libre para el mi agudo del compás 6.",
        7: "El dedo 5 vuelve del mi al re. La mano izquierda pasa al la y al re a mitad del compás.",
        9: "La mano izquierda deja el dedo 5 en el sol. Los dedos 4 y 2 pasan al la y al do para el acorde nuevo.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solas las terceras y sextas de la mano derecha, y presiona las dos notas de cada doble nota como una sola.",
        "Junta las manos en los primeros ocho compases, despacio.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Cambia el pedal en cada nota nueva del bajo, dos veces en cada compás.",
        "En estos compases, que son de nuestro arreglo, la mano se mueve. Mira adelante el primer dedo de cada compás.",
        "La melodía es la nota de arriba de cada doble nota, así que deja que guíe el dedo de arriba.",
      ],
      tricky: {
        7: "A mitad del compás, la mano izquierda pasa a un grupo de Alberti sobre el acorde de la mayor, con el dedo 5 en el la grave.",
        11: "Cinco notas bajan de si a re, un dedo para cada una. Luego el dedo 2 vuelve a subir al mi.",
        24: "Usa el silencio corto para abrir la mano derecha sobre el fa sostenido, el la y el re para el último acorde.",
      },
    },
    legendary: {
      practice: [
        "Toca con la mano izquierda sola: una octava en el pulso y luego un acorde dos veces, cada uno con un silencio corto para saltar.",
        "Toca solos los arpegios de la mano izquierda. Suben dos octavas y vuelven a bajar.",
        "Toca solos los acordes de la mano derecha, y deja que el dedo de arriba cante la melodía.",
        "Toca toda la canción con las dos manos a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "Usa el silencio corto después de cada octava y cada acorde para saltar al siguiente.",
        "Deja que los arpegios fluyan suaves debajo de la melodía, y cambia el pedal en cada acorde nuevo.",
        "Toca la nota de arriba de cada acorde un poco más fuerte que las demás.",
      ],
      tricky: {
        6: "La mano izquierda salta al do sostenido durante todo el compás. La mano derecha toca el do sostenido con el dedo 5 y el sol sostenido con el dedo 2.",
        22: "Los dos do sostenido forman una octava, con mi y sol sostenido en medio. Mantén la mano abierta todo el compás.",
        23: "Tres formas se siguen: mi mayor, luego si y sol sostenido, luego si mayor. La mano izquierda pasa al si a mitad del compás.",
      },
    },
  },
};
