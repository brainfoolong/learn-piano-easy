/** The guide of *Canon in D* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Johann Pachelbel escreveu este cânone por volta de 1700, para três violinos sobre uma linha de baixo. " +
    "O baixo toca as mesmas oito notas sem parar, enquanto cada violino entra com a mesma melodia. " +
    "A peça ficou esquecida até Gustav Beckmann publicá-la pela primeira vez, em 1919. " +
    "O filme Ordinary People a deixou famosa em 1980.",
  funFact: "O cânone era quase desconhecido até o fim dos anos 1960, e hoje é uma das peças mais tocadas em casamentos.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita, devagar, e deixe a música esperar cada nota.",
        "Agora só a mão esquerda. As mesmas oito notas voltam três vezes.",
        "Junte as mãos nos 4 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "A melodia desce uma tecla de cada vez, do dedo 5 até o polegar.",
        "Cada nota do baixo dura dois tempos. Deixe que ela soe por baixo da melodia.",
        "Agora a melodia anda em semínimas, duas vezes mais rápido que antes. Conte até quatro em cada compasso.",
      ],
      tricky: {
        5: "O dedo 5 volta para o Dó de cima, e a melodia desce de novo.",
        7: "Leve a mão uma tecla mais para baixo: o dedo 2 vai do Sol para o Fá, e o polegar pega o Mi.",
        8: "O dedo 3 toca o Fá e o dedo 2 toca o Ré, para o polegar ficar pronto para o Dó.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita na linha que desce, devagar.",
        "Toque só a mão esquerda: uma nota grave com o dedo 5, depois uma mais aguda com o polegar.",
        "Toque só as terças dos compassos 13 e 14, e pressione as duas notas de cada par como se fossem uma.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "O baixo percorre as mesmas oito notas na peça inteira. Toque o baixo suave e regular.",
        "Agora a melodia se move em cada tempo, enquanto o baixo mantém seu passo tranquilo.",
        "No cânone, os violinos tocam a mesma melodia em momentos diferentes. Aqui, dois deles soam juntos, a uma terça de distância.",
      ],
      tricky: {
        6: "O dedo 4 desce do Dó sustenido para o Si, e a mão escorrega uma tecla para baixo.",
        8: "O dedo 3 pega o Sol e o dedo 2 pega o Mi, para o polegar ficar pronto para o Ré.",
        12: "Termine o compasso com o polegar no Sol. Depois o dedo 5 sobe até o Fá sustenido.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as sextas da mão direita. Mantenha a mão numa só posição, e mova-a em bloco.",
        "Toque só a passagem rápida dos compassos 13 a 16, devagar, com o dedilhado escrito.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para as notas longas da melodia cantarem por cima.",
        "O polegar e o dedo 4 tocam cada sexta. A melodia é a nota de cima.",
        "Solte o pedal na passagem rápida, para cada nota rápida soar limpa.",
      ],
      tricky: {
        6: "Desça a sexta uma tecla de cada vez. O polegar e o dedo 4 mantêm a mesma abertura.",
        16: "Os dedos 3 e 2 cruzam por cima do polegar enquanto a passagem rápida desce. Mantenha o pulso parado.",
        17: "A partir do último Mi, abra a mão num só movimento para Ré, Fá sustenido e o Ré agudo.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo em oitavas: segure cada oitava, depois levante a mão para a próxima.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque só as semicolcheias da mão esquerda, até elas fluírem.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Na mão esquerda, mantenha o polegar e o dedo mínimo a uma oitava de distância, e mova a mão sem desfazer a posição.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
        "Toque as semicolcheias da mão esquerda suaves, leves e regulares, por baixo da melodia.",
      ],
      tricky: {
        2: "O polegar fica no Fá sustenido nos dois acordes. Mova só os dedos 3 e 5.",
        5: "A mão esquerda salta para cima, até a oitava de Ré, enquanto o polegar direito passa do Mi para o Fá sustenido.",
        9: "Aqui a mão esquerda começa as semicolcheias. Comece devagar, e deixe a melodia andar por cima.",
      },
    },
  },
};
