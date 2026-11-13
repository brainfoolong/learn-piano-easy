/** The guide of *The Blue Danube* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Johann Strauss II escribió este vals en 1866 y 1867 para un coro de hombres de Viena. " +
    "Su versión solo para orquesta fue un éxito en la Exposición Universal de París de 1867. " +
    "En la película *2001: A Space Odyssey* (1968), las naves espaciales se acoplan al ritmo de su música.",
  funFact: "Por tradición, la Filarmónica de Viena lo toca cada año cerca del final de su Concierto de Año Nuevo.",
  versions: {
    common: {
      practice: [
        "Toca los primeros tres compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Practica los saltos de octava: el pulgar en la nota grave, luego levanta la mano en el silencio corto y apoya el dedo 5 una octava más arriba.",
        "Ahora la mano izquierda sola. Mantiene una quinta abierta o una nota del bajo en cada grupo de tres tiempos.",
        "Junta las dos manos en los primeros ocho compases.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "Empieza con el pulgar en el do central. Para el do, el mi y el sol que suben, usa los dedos 1, 2 y 3.",
        "En el sol repetido, cambia del dedo 3 al pulgar, para que el dedo 5 llegue al sol agudo.",
        "Marca el primer tiempo de cada grupo de tres, y toca los otros dos con ligereza. Eso es el vals.",
      ],
      tricky: {
        6: "Pon el pulgar en el la, luego levanta la mano en el silencio corto y apoya el dedo 5 en el la de arriba.",
        12: "Aquí la melodía llega al do agudo. En la mano izquierda, el dedo 2 mantiene el do solo, para que el dedo 5 pueda tomar el fa grave.",
        13: "Levanta el dedo 4 del la agudo, y apoya el pulgar en el la una octava más abajo. La mano izquierda sube al re y al la.",
      },
    },
    rare: {
      practice: [
        "Toca los primeros ocho compases con la mano derecha sola, despacio.",
        "Toca con la mano izquierda sola: una nota del bajo, y luego el acorde dos veces. Donde la mano derecha descansa, la izquierda sube por las notas graves.",
        "Junta las manos en los primeros cuatro compases, donde la melodía pasa de la mano derecha a la izquierda y vuelve.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Cuenta uno, dos, tres en cada mitad de un compás. El bajo llega en cada «uno».",
        "La mano derecha descansa mientras la izquierda sube. Luego el pulgar llega al re, y el dedo 5 alcanza el re una octava más arriba.",
        "El sol sostenido es una tecla negra. Tómalo con el pulgar, y luego el dedo 2 toca el la.",
      ],
      tricky: {
        12: "La mano derecha abarca la octava del re al re agudo. La mano izquierda baja al si para el acorde de sol.",
        15: "Levanta la mano después del la, y apoya el dedo 5 en el fa sostenido agudo. La mano izquierda salta abajo al la.",
        16: "El pulgar toca el fa sostenido, y luego baja al mi. La mano izquierda salta otra vez abajo al la.",
      },
    },
    epic: {
      practice: [
        "Toca el bajo de vals con la mano izquierda sola: la nota grave, y luego el acorde dos veces, ligero y corto.",
        "Toca las terceras y sextas de la mano derecha sola. Presiona juntas las dos notas de cada doble nota.",
        "Junta las manos en los compases 1 a 9, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén los acordes suaves y cortos, para que la melodía flote por encima.",
        "Cambia el pedal en cada línea divisoria, cuando suena la nueva nota del bajo.",
        "La mano se levanta después del la, y luego el pulgar llega al re de arriba.",
      ],
      tricky: {
        21: "Levanta la doble nota un poco antes, y luego deja caer el pulgar sobre el re grave.",
        26: "Sube por el mi, el sol y el si con los dedos 1, 2 y 4. Luego el pulgar y el dedo 3 mantienen el sol y el si.",
        34: "Abre la mano para el último acorde: el pulgar en el fa sostenido, el dedo 2 en el la y el dedo 5 en el re.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo en octavas con la mano izquierda sola: salta abajo a la octava, y vuelve arriba al acorde.",
        "Toca las octavas de la mano derecha sola. Mantén la mano abierta, con el pulgar y el dedo 5 listos.",
        "Junta las manos en los compases 18 a 25, donde la melodía llega a sus notas más agudas.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo en octavas, mira la nota grave y deja que la mano encuentre el acorde al tacto.",
        "El pulgar y el dedo 5 toman cada octava. Mantén la mano en esa forma mientras se mueve.",
        "Deja cantar la nota de arriba de cada octava, y toca más suave con el pulgar.",
      ],
      tricky: {
        8: "La octava baja del la al sol. Mantén la forma de la mano, y muévela de una sola vez.",
        24: "Levanta la octava de re un poco antes, y luego apoya la mano en la octava de si con la misma forma.",
        29: "La mano se abre del la a la octava de fa sostenido. Levántala, y luego apoya las dos notas a la vez.",
      },
    },
  },
};
