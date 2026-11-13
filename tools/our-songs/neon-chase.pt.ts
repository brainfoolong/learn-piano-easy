/** The guide of *Neon Chase* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Neon Chase é uma melodia nossa, escrita para este app no estilo de uma trilha sonora de sintetizador dos anos 1980. " +
    "Um baixo insistente pulsa sob ela, como uma perseguição de carro à noite.",
  funFact: "Muitas trilhas sonoras dos anos 1980 eram tocadas em sintetizadores em vez de uma orquestra, com frequência pelo próprio compositor, sozinho num pequeno estúdio.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 4 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. No compasso 6, a mão desce uma tecla.",
        "Agora só a mão esquerda. Ela toca as mesmas notas duas vezes em cada compasso e nunca se move.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Comece com o polegar no Lá. Assim os dedos 1 a 5 ficam sobre Lá, Si, Dó, Ré e Mi.",
        "Solte o Mi longo um pouco antes. Nesse breve silêncio, desça a mão uma tecla, para o polegar cair no Sol.",
        "A mão esquerda toca nos tempos 1 e 3, como um motor lento. Mantenha a pulsação firme.",
      ],
      tricky: {
        5: "Os dedos 5, 4, 3 e 4 balançam entre Mi, Ré e Dó. Mantenha a mão parada, e deixe os dedos trabalharem.",
        10: "O dedo 4 toca o Dó, e o dedo 2 toca o Lá no meio. O dedo 3 descansa sobre o Si e espera.",
        13: "Os dedos 2, 4 e 5 sobem do Lá, passando pelo Dó, até o Ré, e depois voltam ao Dó. O polegar descansa sobre o Sol.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Ela toca em cada tempo, como o motor de um carro.",
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão direita nos compassos 9 a 16, onde entram as colcheias.",
        "Junte as mãos na música inteira, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A mão esquerda toca quatro tempos regulares em cada compasso. Deixe a melodia correr por cima deles.",
        "Pressione Dó e Mi juntos, com os dedos 3 e 5, e segure por três tempos.",
        "Termine com Lá e Dó juntos, e deixe as notas soarem pelo compasso inteiro.",
      ],
      tricky: {
        7: "O dedo 2 toca o Lá, o dedo 4 o Dó, o dedo 3 o Si e o polegar o Sol. A mão fica onde o compasso 6 a deixou.",
        10: "Os dedos 4 e 2 alternam entre Dó e Lá, e depois o dedo 5 sobe até o Ré. Mantenha as colcheias regulares.",
        14: "Os dedos 2, 4 e 5 sobem até o Ré em colcheias, e depois descem de volta até o Lá.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda até a pulsação de colcheias rolar sozinha.",
        "Toque só a mão direita nos compassos 9 a 16, e conte os acordes curtos: três, três, dois.",
        "Toque só as terças e sextas da mão direita, e pressione as duas notas de cada par como uma só.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e mantenha a pulsação com energia.",
      ],
      tips: [
        "A mão esquerda nunca para: oito colcheias regulares em cada compasso, como faróis que passam correndo.",
        "Os acordes caem no 1, no “e” do 2 e no 4. Conte oito colcheias e ataque no 1, no 4 e no 7.",
        "Depois do Si, passe o polegar por baixo até o Dó. Em seguida, os dedos 2 e 3 alcançam Ré e Mi.",
      ],
      tricky: {
        17: "Mantenha os dedos 1 e 5 numa abertura de sexta, e suba a mão inteira para cada novo par.",
        18: "Os pares descem do Ré até o Si. Mantenha a posição da mão, e mova-a uma tecla de cada vez.",
        19: "Os pares sobem como no compasso 17. O último é uma quinta, Sol e Ré, então feche um pouco a mão.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda. Balance entre o dedo 5 e o polegar, a uma oitava de distância.",
        "Toque só as passagens rápidas da mão direita, devagar, e passe o polegar por baixo na subida.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Mantenha o pulso esquerdo solto e deixe-o balançar. Assim as oitavas pulsam sozinhas.",
        "Toque as passagens com leveza, e os acordes curtos, secos e brilhantes, como um sintetizador.",
        "A melodia é a nota de cima de cada acorde. Toque essa nota um pouco mais forte que as outras.",
      ],
      tricky: {
        17: "Toque cada acorde curto e seco, e use a pausa depois dele para ir ao próximo.",
        22: "Ataque duas vezes o acorde de quatro notas, com os dedos 1, 2, 3 e 5. Depois desça a mão para Si, Ré e Sol.",
        23: "Quatro acordes curtos têm Lá, Dó, Si e Sol em cima. Solte depois de cada um, e caia no próximo durante a pausa.",
      },
    },
  },
};
