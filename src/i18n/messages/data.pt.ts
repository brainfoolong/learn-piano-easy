/** The Data page in Brazilian Portuguese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { dataPage as en } from "./data.en";

export const dataPage: Translation<typeof en> = {
  lead: "Suas configurações, seu progresso no curso, suas músicas e suas pontuações ficam neste navegador. Salve tudo em um só arquivo para manter em segurança, ou para levar a outro dispositivo.",
  save: {
    heading: "Salvar um backup",
    text: "Um só arquivo contém tudo. Mantenha o arquivo em um lugar seguro, como uma pasta na nuvem.",
    action: "Salvar um backup",
    never: "Este navegador ainda não salvou nenhum backup.",
    today: "O último backup foi salvo hoje.",
    on: (date: string) => `O último backup foi salvo em ${date}.`,
    done: "O arquivo de backup está salvo.",
  },
  restore: {
    heading: "Restaurar um backup",
    text: "Abra um arquivo de backup do Learn Piano Easy. Um arquivo de configurações ou um backup do progresso de uma versão anterior também serve.",
    action: "Restaurar um backup",
  },
  folder: {
    heading: "Manter uma pasta sincronizada",
    text: "Escolha uma pasta, como uma que a sua nuvem sincroniza. Depois disso, cada mudança chega a ela sozinha, com uma cópia datada de cada um dos últimos sete dias.",
    connect: "Conectar uma pasta",
    starting: "Procurando sua pasta…",
    synced: (name: string) => `Seus dados ficam na pasta “${name}”.`,
    waiting: "Cada mudança chega a ela um momento depois.",
    written: (time: string) => `A pasta foi atualizada pela última vez às ${time}.`,
    reconnect: (name: string) => `O navegador pede permissão de novo antes de gravar na pasta “${name}”.`,
    reconnectAction: "Reconectar a pasta",
    asking: (name: string) =>
      `A pasta “${name}” contém dados que este navegador não gravou. Nada é gravado nela até você escolher.`,
    askingFrom: (date: string) => `Esses dados foram salvos em ${date}.`,
    restoreAction: "Restaurar da pasta",
    replaceAction: "Substituir pelos dados deste navegador",
    replaced: "A pasta agora contém os dados deste navegador. O arquivo antigo fica na pasta de backups dela.",
    failed: "Não foi possível gravar na pasta. Reconecte a pasta, ou escolha a pasta de novo.",
    disconnect: "Desconectar",
    gone: "Não foi possível ler o arquivo da pasta. Nada mudou.",
  },
  ask: {
    title: "Restaurar este backup?",
    merge: "Seu progresso, suas músicas e suas pontuações se somam ao que já está aqui, então nada mais recente se perde.",
    replace: "Suas configurações e as configurações das suas músicas recebem os valores do arquivo. Depois, a página é recarregada.",
    confirm: "Restaurar",
    cancel: "Deixar tudo como está",
    close: "Fechar",
  },
  reading: "Lendo o arquivo…",
  restored: "O backup foi restaurado.",
  notOurs: "Esse arquivo não é um backup do Learn Piano Easy. Nada mudou.",
  failed: "Não foi possível salvar no navegador. Seu arquivo de backup ainda contém tudo.",
};
