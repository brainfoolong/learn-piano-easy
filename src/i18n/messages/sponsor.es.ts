/** The sponsor page in Spanish. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { sponsorPage as en } from "./sponsor.en";

export const sponsorPage: Translation<typeof en> = {
  lead: "Learn Piano Easy es gratis, y seguirá siéndolo. Si trajo un poco de música a tu día, puedes ayudar a que crezca.",
  action: "Apoyar en GitHub",
  note: "Cualquier monto ayuda, una sola vez o cada mes.",
  promises: ["Sin anuncios", "Sin cuenta", "Funciona sin conexión", "Código abierto, licencia MIT"],
  picture: "Un gran corazón con dos notas musicales flotando a su alrededor",
  who: {
    heading: "Quién lo hace",
    text: [
      "Una sola persona construye Learn Piano Easy en su tiempo libre, entre el trabajo, la vida y practicar escalas.",
      "El control de calidad está a cargo de un gato que de vez en cuando camina sobre las teclas.",
    ],
  },
  spend: {
    heading: "A dónde va tu apoyo",
    items: [
      { title: "Tiempo", text: "Tardes para nuevas lecciones, nuevas canciones y menos errores." },
      { title: "El dominio", text: "Para que el sitio conserve su dirección, y tú lo sigas encontrando." },
      { title: "Café", text: "Se convierte en código a un tempo constante de unos 120 pulsos por minuto." },
    ],
  },
  help: {
    heading: "Otras formas de ayudar",
    lead: "El dinero es una forma de ayudar. Estas cuentan igual:",
    star: { text: "Dale una estrella al proyecto en GitHub, para que otras personas que aprenden lo encuentren.", action: "Estrella en GitHub" },
    bug: { text: "Reporta un error cuando algo suene mal.", action: "Reportar un error" },
    friend: "Cuéntaselo a alguien que siempre quiso aprender piano.",
  },
  thanks: "Gracias por tocar. Esto existe gracias a ti.",
};
