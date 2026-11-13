/** *Welcome to the piano* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { WelcomeTexts } from "./welcome.en";

export const welcomePt: Translation<WelcomeTexts> = {
  title: "Boas-vindas ao piano",
  steps: {
    hello: {
      text: "Boas-vindas! Aqui você aprende piano um pequeno passo de cada vez. Cada lição ensina uma ideia, e você já experimenta na hora.",
    },
    "sound-check": {
      text: "Primeiro, um teste de som. O piano toca quatro notas. Se não ouvir nada, aumente o volume e selecione “Ouvir de novo”.",
    },
    "ways-to-play": {
      text: "Você pode tocar cada lição nas teclas da tela, no teclado do computador ou em um teclado MIDI. Para usar um teclado MIDI, conecte-o e selecione uma vez “Conectar dispositivos MIDI”, nas configurações do player.",
    },
    "ways-quiz": {
      text: "Onde você pode tocar uma lição?",
      answers: ["Só em um teclado MIDI", "Só nas teclas da tela", "Em qualquer um deles: na tela, no teclado do computador ou em um teclado MIDI"],
    },
    "first-key": {
      text: "Sua primeira nota! Toque a tecla marcada.",
    },
    "three-keys": {
      text: "Agora, três teclas seguidas. Toque cada tecla marcada, da esquerda para a direita.",
    },
    recap: {
      text: "Muito bem. Você tocou suas primeiras notas.",
      points: [
        "O teste de som mostra que você consegue ouvir o piano.",
        "Você pode tocar na tela, no teclado do computador ou em um teclado MIDI.",
        "A tecla marcada é sempre a próxima que você toca.",
      ],
    },
  },
};
