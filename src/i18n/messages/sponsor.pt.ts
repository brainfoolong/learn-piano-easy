/** The sponsor page in Brazilian Portuguese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { sponsorPage as en } from "./sponsor.en";

export const sponsorPage: Translation<typeof en> = {
  lead: "O Learn Piano Easy é grátis e vai continuar grátis. Se ele trouxe um pouco de música para o seu dia, você pode ajudar o projeto a crescer.",
  action: "Apoiar no GitHub",
  note: "Qualquer valor ajuda, uma vez só ou todo mês.",
  promises: ["Sem anúncios", "Sem conta", "Funciona sem conexão", "Código aberto, licença MIT"],
  picture: "Um grande coração com duas notas musicais flutuando ao redor",
  who: {
    heading: "Quem faz",
    text: [
      "Uma pessoa só constrói o Learn Piano Easy no tempo livre, entre o trabalho, a vida e o treino de escalas.",
      "O controle de qualidade fica por conta de um gato que, de vez em quando, passeia pelas teclas.",
    ],
  },
  spend: {
    heading: "Para onde vai o seu apoio",
    items: [
      { title: "Tempo", text: "Noites para novas lições, novas músicas e menos bugs." },
      { title: "O domínio", text: "Para o site manter o endereço e você sempre conseguir encontrá-lo." },
      { title: "Café", text: "Ele vira código em um andamento estável de uns 120 tempos por minuto." },
    ],
  },
  help: {
    heading: "Outras formas de ajudar",
    lead: "Dinheiro é uma forma de ajudar. Estas valem o mesmo:",
    star: { text: "Dê uma estrela ao projeto no GitHub, para que outras pessoas que aprendem piano o encontrem.", action: "Estrela no GitHub" },
    bug: { text: "Informe um bug quando algo soar errado.", action: "Informar um bug" },
    friend: "Conte para alguém que sempre quis aprender piano.",
  },
  thanks: "Agradecemos por você tocar. Tudo isto existe por sua causa.",
};
