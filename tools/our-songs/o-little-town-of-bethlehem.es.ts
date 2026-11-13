/** The guide of *O Little Town of Bethlehem* in Spanish. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Phillips Brooks, un sacerdote episcopal de Filadelfia, escribió la letra en 1868 para su iglesia. " +
    "Se inspiró en una visita al pueblo de Belén tres años antes. " +
    "Su organista, Lewis Redner, le escribió esta melodía, llamada St. Louis. " +
    "En Estados Unidos y Canadá el villancico se canta con esta melodía, y en el Reino Unido e Irlanda, con otra.",
  funFact: "Redner contó que se despertó de noche oyendo un canto de ángeles que le susurraba al oído, y anotó la melodía.",
  versions: {
    common: {
      practice: [
        "Toca los primeros cinco compases con la mano derecha sola, y deja que la canción espere cada nota.",
        "Toca los compases 6 a 9 con la mano derecha sola. Ahí la melodía sube hasta el la agudo.",
        "Ahora la mano izquierda sola. Solo cambia de forma al comienzo o a la mitad de un compás.",
        "Junta las dos manos en toda la canción, despacio.",
        "Toca toda la canción con las dos manos juntas a velocidad completa.",
      ],
      tips: [
        "El re sostenido es la tecla negra entre el re y el mi. El dedo 2 baja a esa tecla, y el dedo 3 vuelve al mi.",
        "Levanta la mano un momento antes del la grave, y otra vez después del sol grave. El pulgar toca los dos.",
        "Las dos notas rápidas, si y do, se reparten un solo tiempo.",
      ],
      tricky: {
        6: "El dedo 3 toca el mi dos veces, luego el dedo 5 sube hasta el la, y el dedo 4 toma el sol.",
        10: "El dedo 5 toma el mi, y luego los dedos 5, 4 y 3 bajan hasta el do.",
        15: "Levanta la mano después del fa y apoya el pulgar en el la grave. Luego levántala otra vez, para que el dedo 5 llegue al la agudo.",
      },
    },
    rare: {
      practice: [
        "Toca con la mano izquierda sola, y presiona a la vez las notas de cada acorde.",
        "Toca los primeros cinco compases con la mano derecha sola. Son el comienzo de la canción.",
        "Junta las manos en los primeros nueve compases, despacio.",
        "Toca toda la canción con las dos manos juntas, un poco más lento de lo escrito.",
        "Ahora tócala a velocidad completa.",
      ],
      tips: [
        "Debajo del re sostenido, la mano izquierda toca solo el do y el sol, para que ningún mi suene en contra.",
        "Mantén cada acorde con suavidad durante toda su duración, como un órgano tranquilo.",
        "Levanta la mano derecha después del la, y apoya el dedo 5 en el la una octava más arriba.",
      ],
      tricky: {
        6: "El dedo 3 toca el mi dos veces, y luego el dedo 5 sube hasta el la. A mitad del compás, la mano izquierda pasa del do al fa.",
        10: "El dedo 5 toma el mi, y la melodía baja hasta el do. A mitad del compás, la mano izquierda cambia al acorde de sol séptima.",
        15: "Levanta la mano derecha dos veces: una para el la grave, y otra para el la una octava más arriba.",
      },
    },
    epic: {
      practice: [
        "Toca con la mano izquierda sola el bajo de Alberti, hasta que ruede por sí mismo: grave, agudo, medio, agudo.",
        "Toca solo el bajo de Alberti más rápido de la segunda estrofa.",
        "Junta las manos en la primera estrofa, despacio.",
        "Toca toda la canción con las dos manos juntas a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, con el pedal.",
      ],
      tips: [
        "Mantén suave el bajo de Alberti, para que la melodía cante por encima.",
        "Levanta la mano derecha después del do largo, y apoya el dedo 3 en el mi una octava más arriba.",
        "Cambia el pedal en cada medio compás, cuando la mano izquierda empieza un acorde nuevo.",
      ],
      tricky: {
        17: "Mantén el do largo con el pulgar, y luego levanta la mano y apoya el dedo 3 en el mi una octava más arriba.",
        19: "La melodía baja del fa al la, mientras la mano izquierda toca su bajo de Alberti el doble de rápido.",
        33: "Levanta la mano después del re corto, y luego toca el mi, el sol y el do a la vez con los dedos 1, 2 y 5.",
      },
    },
    legendary: {
      practice: [
        "Toca el bajo stride con la mano izquierda sola: salta abajo a la octava grave, y vuelve arriba al acorde.",
        "Toca las octavas de la mano derecha sola, con el pulgar y el dedo 5 fijos en una misma forma.",
        "Toca los arpegios de la segunda estrofa con la mano izquierda sola.",
        "Junta las manos en toda la canción a tres cuartos de velocidad.",
        "Ahora tócala a velocidad completa, y deja sonar el último acorde.",
      ],
      tips: [
        "En el bajo stride, mira la octava grave y deja que la mano encuentre el acorde al tacto.",
        "Mantén el pulgar y el dedo 5 a una octava de distancia, y levanta la mano antes de cada salto más grande.",
        "Deja que las octavas suenen como campanas, y mantén suaves los arpegios de abajo.",
      ],
      tricky: {
        20: "Las octavas pasan por el do, el si, el do y el re, y luego se levantan y bajan al sol. Mantén el pulgar y el dedo 5 en una misma forma.",
        22: "Después del segundo mi, levanta la octava y apóyala en el la, una cuarta más arriba.",
        31: "Levanta la octava dos veces: abajo hasta el la grave, y luego una octava entera arriba hasta el la agudo.",
      },
    },
  },
};
