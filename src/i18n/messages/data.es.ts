/** The Data page in Spanish. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { dataPage as en } from "./data.en";

export const dataPage: Translation<typeof en> = {
  lead: "Tu configuración, tu progreso en el curso, tus canciones y tus puntuaciones se quedan en este navegador. Guárdalos en un solo archivo para tenerlos a salvo, o para llevarlos a otro dispositivo.",
  save: {
    heading: "Guardar una copia de seguridad",
    text: "Un solo archivo lo contiene todo. Guárdalo en un lugar seguro, como una carpeta en la nube.",
    action: "Guardar copia",
    never: "Este navegador todavía no guardó ninguna copia de seguridad.",
    today: "La última copia de seguridad se guardó hoy.",
    on: (date: string) => `La última copia de seguridad se guardó el ${date}.`,
    done: "El archivo de la copia de seguridad está guardado.",
  },
  restore: {
    heading: "Restaurar una copia de seguridad",
    text: "Abre un archivo de copia de seguridad de Learn Piano Easy. También sirve un archivo de configuración o una copia del progreso de una versión anterior.",
    action: "Restaurar copia",
  },
  folder: {
    heading: "Mantener una carpeta sincronizada",
    text: "Elige una carpeta, como una que sincronice tu almacenamiento en la nube. Desde entonces, cada cambio llega a ella solo, con una copia fechada de cada uno de los últimos siete días.",
    connect: "Conectar una carpeta",
    starting: "Buscando tu carpeta…",
    synced: (name: string) => `Tus datos se guardan en la carpeta «${name}».`,
    waiting: "Cada cambio llega a ella un momento después.",
    written: (time: string) => `La carpeta se actualizó por última vez a las ${time}.`,
    reconnect: (name: string) => `El navegador vuelve a pedir permiso antes de escribir en la carpeta «${name}».`,
    reconnectAction: "Volver a conectar la carpeta",
    asking: (name: string) =>
      `La carpeta «${name}» contiene datos que este navegador no escribió. No se escribe nada en ella hasta que elijas.`,
    askingFrom: (date: string) => `Esos datos se guardaron el ${date}.`,
    restoreAction: "Restaurar desde la carpeta",
    replaceAction: "Reemplazarlos con los datos de este navegador",
    replaced: "La carpeta ahora contiene los datos de este navegador. Su archivo anterior se conserva en su carpeta de copias de seguridad.",
    failed: "El navegador no permitió escribir en la carpeta. Vuelve a conectarla, o elígela otra vez.",
    disconnect: "Desconectar",
    gone: "No se pudo leer el archivo de la carpeta. No cambió nada.",
  },
  ask: {
    title: "¿Restaurar esta copia de seguridad?",
    merge: "Tu progreso, tus canciones y tus puntuaciones se suman a lo que ya hay aquí, así no se pierde nada más reciente.",
    replace: "Tu configuración y la configuración de tus canciones toman los valores del archivo. Después, la página se vuelve a cargar.",
    confirm: "Restaurar",
    cancel: "Dejar todo como está",
    close: "Cerrar",
  },
  reading: "Leyendo el archivo…",
  restored: "La copia de seguridad está restaurada.",
  notOurs: "Ese archivo no es una copia de seguridad de Learn Piano Easy. No cambió nada.",
  failed: "El navegador no permitió guardar. Tu archivo de copia de seguridad todavía lo contiene todo.",
};
