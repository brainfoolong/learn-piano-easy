/** *The staff* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { TheStaffTexts } from "./the-staff.en";

export const theStaffEs: Translation<TheStaffTexts> = {
  title: "El pentagrama",
  steps: {
    "five-lines": {
      text: "La música se escribe en un pentagrama. Un pentagrama tiene cinco líneas, una sobre otra. Se cuentan de abajo hacia arriba, así que la línea de abajo es la primera.",
    },
    "lines-quiz": {
      text: "¿Cuántas líneas tiene un pentagrama?",
      answers: ["Cuatro", "Cinco", "Seis"],
    },
    "four-spaces": {
      text: "Entre las cinco líneas hay cuatro espacios. Los espacios también se cuentan de abajo hacia arriba.",
    },
    "spaces-quiz": {
      text: "¿Cuántos espacios hay entre las líneas de un pentagrama?",
      answers: ["Tres", "Cuatro", "Cinco"],
    },
    "line-or-space": {
      text: "Una nota está en una línea o en un espacio. En una línea, la línea pasa por el centro de la nota. En un espacio, la nota llena el hueco entre dos líneas.",
    },
    "line-or-space-quiz": {
      text: "Una línea pasa justo por el centro de una nota. ¿Dónde está esa nota?",
      answers: ["En una línea", "En un espacio"],
    },
    "higher-is-higher": {
      text: "Cuanto más arriba está una nota en el pentagrama, más aguda suena. Un paso hacia arriba, de una línea al espacio siguiente, es la siguiente tecla blanca a la derecha.",
    },
    "climb-demo": {
      text: "Mira y escucha. El piano sube de la línea de abajo a la línea de arriba, una línea o un espacio cada vez. Cada nota suena un poco más aguda.",
    },
    "higher-or-lower-listen": {
      text: "Vas a oír dos notas. ¿La segunda es más aguda, más grave o igual que la primera? Una nota más aguda estaría más arriba en el pentagrama.",
    },
    "top-or-bottom-quiz": {
      text: "Una nota está en la línea de arriba y otra en la línea de abajo. ¿Cuál suena más aguda?",
      answers: ["La nota de la línea de abajo", "La nota de la línea de arriba", "Suenan igual"],
    },
    "first-line-quiz": {
      text: "¿Cuál es la primera línea del pentagrama?",
      answers: ["La línea de abajo", "La línea del medio", "La línea de arriba"],
    },
    recap: {
      text: "¡Bien hecho! Ya conoces el pentagrama.",
      points: ["Un pentagrama tiene cinco líneas y cuatro espacios, contados desde abajo.", "Una nota está en una línea o en un espacio.", "Una nota más arriba en el pentagrama suena más aguda."],
    },
  },
};
