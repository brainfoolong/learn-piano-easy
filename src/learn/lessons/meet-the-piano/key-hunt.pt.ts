/** *The key hunt* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { KeyHuntTexts } from "./key-hunt.en";

export const keyHuntPt: Translation<KeyHuntTexts> = {
  title: "Caça às teclas",
  steps: {
    ready: {
      text: "Hora da caça às teclas! Você tem oito segundos para cada tecla. Use os grupos de teclas pretas para se localizar.",
    },
    "any-c": { text: "Encontre um Dó qualquer." },
    "middle-c": { text: "Agora encontre o Dó central, o Dó no meio do piano." },
    "any-f": { text: "Encontre um Fá qualquer." },
    "any-g": { text: "Encontre um Sol qualquer." },
    "any-d": { text: "Encontre um Ré qualquer." },
    "any-b": { text: "Encontre um Si qualquer." },
    "three-middle": { text: "Encontre a tecla preta do meio de um grupo de três." },
    "any-e": { text: "Encontre um Mi qualquer." },
    "any-a": { text: "Encontre um Lá qualquer." },
    "high-c": { text: "A última! Encontre o Dó uma oitava acima do Dó central." },
    recap: {
      text: "Você terminou a caça às teclas. Agora você se localiza pelo piano inteiro.",
      points: [
        "As teclas pretas guiam você, em grupos de duas e de três.",
        "Sete nomes identificam as teclas brancas, de Dó a Si.",
        "O mesmo nome volta uma oitava acima.",
      ],
    },
  },
};
