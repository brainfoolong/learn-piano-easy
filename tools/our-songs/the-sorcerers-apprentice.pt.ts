/** The guide of *The Sorcerer's Apprentice* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Paul Dukas terminou este poema sinfônico em 1897, e ele foi publicado no mesmo ano. " +
    "A peça segue o poema O Aprendiz de Feiticeiro (Der Zauberlehrling), que Goethe escreveu em 1797. " +
    "No filme Fantasia (1940), de Walt Disney, o Mickey Mouse faz o papel do aprendiz.",
  funFact: "Dukas deu à peça o subtítulo “scherzo segundo uma balada de Goethe”. É, de longe, a obra dele mais tocada e mais gravada.",
  versions: {
    common: {
      practice: [
        "Toque os 3 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 4 a 10 só com a mão direita. A mão fica num só lugar.",
        "Agora só a mão esquerda. Ela segura uma ou duas notas graves em cada compasso.",
        "Junte as mãos nos 10 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Toque cada nota curta e leve, como uma vassoura saltitando. As pausas fazem parte da melodia.",
        "Conte “um, dois, três”. A pausa cai no “dois”, e a nota aguda no “três”.",
        "A mão fica onde está. Os dedos 2 a 5 ficam em Lá, Si, Dó e Ré.",
      ],
      tricky: {
        5: "O dedo 5 acabou de tocar o Dó. Traga o dedo 4 de volta ao Lá, e depois alcance o Dó de novo.",
        7: "Depois do Sol sustenido com o dedo 2, o dedo 4 pega o Lá. A mão esquerda passa do Mi de volta para Lá e Mi.",
        10: "Como no compasso 7, o dedo 4 pega o Lá depois do Sol sustenido. Depois o dedo 5 alcança o Dó mais acima.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda. Primeiro vem uma nota grave, e um acorde de duas notas responde duas vezes.",
        "Toque só a mão direita nos 10 primeiros compassos, e deixe a música esperar cada nota.",
        "Junte as mãos nos 6 primeiros compassos, devagar.",
        "Toque com as duas mãos o final que escrevemos, onde entram as colcheias.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Toque a melodia curta e saltitante. Solte cada nota antes da próxima.",
        "Toque a nota grave um pouco mais forte que os acordes depois dela. Ela marca a pulsação.",
        "Duas colcheias rápidas cabem no segundo tempo. Conte-as como “um e dois”.",
      ],
      tricky: {
        7: "O dedo 4 pega o Lá depois do Sol sustenido. A mão esquerda desce do acorde de Mi de volta para o Lá.",
        10: "A melodia termina aqui. O dedo 4 pega o Lá, e a mão esquerda volta para o Lá.",
        11: "Aqui começam as colcheias. Mantenha os dedos 4, 3 e 2 perto das teclas.",
      },
    },
    epic: {
      practice: [
        "Toque só os acordes quebrados da mão esquerda até eles rolarem sozinhos.",
        "Toque só a mão direita nos 10 primeiros compassos. Mantenha cada nota curta.",
        "Toque só as terças da mão direita, e pressione juntas as duas notas de cada par, como se fossem uma.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Toque os acordes quebrados suaves e regulares, para a melodia saltitante se destacar por cima.",
        "O polegar cai no Lá grave depois da pausa. Depois os dedos 2 e 3 sobem.",
        "Desça do dedo 5 até o polegar, uma tecla por dedo, e depois o dedo 3 salta de volta para o Ré.",
      ],
      tricky: {
        7: "A mão esquerda salta do Mi para cima até o Ré, para o acorde quebrado. Na mão direita, o dedo 4 pega o Ré.",
        10: "Como no compasso 7, a mão esquerda salta para cima até o Ré, enquanto a mão direita toca Ré e Fá.",
        16: "Abra a mão direita sobre Fá, Lá e Ré, e desça a mão esquerda até o Ré grave.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda. Primeiro vem uma oitava grave, depois dois acordes curtos.",
        "Toque só a mão direita nos 10 primeiros compassos. Solte cada nota na hora.",
        "Toque só as passagens rápidas da mão direita, quatro semicolcheias em cada tempo.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "As duas mãos tocam curto e seco. A vassoura anda na ponta dos pés antes de começar a correr.",
        "Deixe o pulso esquerdo quicar da oitava grave até os acordes.",
        "Cada passagem cabe sob os cinco dedos. Mantenha a mão parada e deixe os dedos rolarem.",
      ],
      tricky: {
        6: "Os dedos da mão direita descem por Sol, Fá e Mi, cada nota curta. A mão esquerda salta para cima até os acordes dela.",
        12: "Salte de volta com o polegar para o Si bemol, e depois suba até o Mi em semicolcheias regulares.",
        16: "Caia nas quatro notas do último acorde ao mesmo tempo, e desça a mão esquerda até o Fá grave.",
      },
    },
  },
};
