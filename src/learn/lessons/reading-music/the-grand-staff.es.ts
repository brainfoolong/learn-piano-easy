/** *The grand staff* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TheGrandStaffTexts } from "./the-grand-staff.en";

export const theGrandStaffEs: Translation<TheGrandStaffTexts> = {
  title: "Los dos pentagramas",
  steps: {
    "climb-demo": {
      text: "Escucha. El piano sube desde el do grave, pasa por el do central y llega al do agudo. Ese recorrido cruza los dos pentagramas que ya conoces.",
    },
    "two-staves": {
      text: "La música de piano usa dos pentagramas, uno sobre otro, unidos a la izquierda por una llave. Juntos forman el sistema. Arriba va el pentagrama en clave de sol, y abajo, el pentagrama en clave de fa.",
    },
    "which-hand-quiz": {
      text: "¿Qué mano lee normalmente el pentagrama de arriba, en clave de sol?",
      answers: ["La mano derecha", "La mano izquierda"],
    },
    "middle-c-between": {
      text: "El do central está en una línea adicional corta entre los dos pentagramas. Pertenece a los dos. Cualquiera de ellos puede mostrarlo, y es la misma tecla.",
    },
    "middle-c-quiz": {
      text: "¿Dónde está el do central en el sistema?",
      answers: ["En la línea de arriba del pentagrama en clave de sol", "En una línea adicional entre los dos pentagramas", "En la línea de abajo del pentagrama en clave de fa"],
    },
    "treble-names": {
      text: "Este es el pentagrama en clave de sol. Nombra cada nota.",
    },
    "bass-names": {
      text: "Ahora el pentagrama en clave de fa. Nombra cada nota.",
    },
    "low-c-staff-quiz": {
      text: "Tu mano izquierda toca el do grave. ¿En qué pentagrama lo encuentras?",
      answers: ["En el pentagrama en clave de sol", "En el pentagrama en clave de fa"],
    },
    "bass-play": {
      text: "Lee cada nota del pentagrama en clave de fa y tócala con la mano izquierda.",
    },
    "treble-play": {
      text: "Lee cada nota del pentagrama en clave de sol y tócala con la mano derecha.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes leer los dos pentagramas del piano.",
      points: ["El sistema junta con una llave un pentagrama en clave de sol y otro en clave de fa.", "La mano derecha lee sobre todo la clave de sol, y la izquierda la clave de fa.", "El do central está en una línea adicional entre los dos y pertenece a ambos."],
    },
  },
};
