/** *Steps* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { StepsTexts } from "./steps.en";

export const stepsEs: Translation<StepsTexts> = {
  title: "Pasos",
  steps: {
    "steps-demo": {
      text: "Mira una pequeña melodía. Cada nota va a la tecla que está justo al lado de la anterior.",
    },
    "what-a-step-is": {
      text: "Moverse a la tecla blanca de al lado se llama paso. Un paso puede subir o bajar. En la posición de do, lo toca el dedo de al lado.",
    },
    "which-is-a-step": {
      text: "¿Cuál de estos movimientos es un paso?",
      answers: ["De do a re", "De do a mi", "De do a sol"],
    },
    "hear-steps": {
      text: "Un paso hacia arriba suena un poco más agudo, y uno hacia abajo, un poco más grave. Escucha dos notas. ¿La segunda es más aguda, más grave o igual?",
    },
    "step-up": {
      text: "Pon la mano derecha en la posición de do. Sube paso a paso desde el pulgar hasta el meñique.",
    },
    "step-down": {
      text: "Ahora baja paso a paso, desde el meñique hasta el pulgar.",
    },
    "next-finger-quiz": {
      text: "El dedo 3 está en mi. ¿Qué dedo toca un paso hacia arriba desde ahí?",
      answers: ["Dedo 2", "Dedo 4", "Dedo 5"],
    },
    "step-up-and-down": {
      text: "Sube paso a paso hasta arriba y vuelve a bajar hasta abajo. Sigue la tecla marcada.",
    },
    "stepping-tune": {
      text: "Pon la mano derecha en la posición de do. Esta melodía solo tiene pasos: do re mi re mi fa mi re do.",
    },
    recap: {
      text: "¡Bien hecho! Ya puedes tocar una melodía hecha de pasos.",
      points: [
        "Un paso va a la tecla blanca de al lado.",
        "Un paso sube o baja.",
        "En la posición de do, el dedo de al lado toca el paso.",
      ],
    },
  },
};
