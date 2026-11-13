/** The guide of *Kling, Glöckchen, klingelingeling* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Kling, Glöckchen, klingelingeling quer dizer “Toca, sininho, blim-blim-blim”. " +
    "Karl Enslin escreveu a letra, que foi impressa pela primeira vez em 1854. " +
    "Nela, o Menino Jesus pede às crianças que abram a porta, porque o inverno está muito frio. " +
    "Ninguém sabe quem escreveu a melodia que se canta hoje.",
  funFact: "Em muitas casas alemãs, um sininho toca na véspera de Natal para avisar as crianças de que os presentes estão prontos.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 4 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 12 só com a mão direita. Ali a mão muda de lugar duas vezes.",
        "Agora só a mão esquerda. Ela mantém uma posição por meio compasso ou por um compasso inteiro.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Sol, Lá, Sol, Lá: é o sininho tocando. Toque leve e por igual.",
        "Enquanto você segura o Mi longo, deslize o polegar do Ré para o Dó central.",
        "Durante o último Mi, leve o polegar de volta ao Ré, para o dedo 3 alcançar a tecla preta Fá sustenido.",
      ],
      tricky: {
        2: "Os dedos 4 e 5 balançam entre Sol e Lá, como um sino que vai e vem.",
        5: "Seu polegar agora está no Dó central, então o dedo 2 toca os dois Rés.",
        14: "O sininho toca de novo. Os dedos 4 e 5 balançam entre Sol e Lá, como no compasso 2.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as notas de cada acorde.",
        "Toque os compassos 9 a 12 só com a mão esquerda. Ali ela desce até o Sol.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Toque o Dó grave um pouco mais forte que o acorde que vem depois.",
        "Aqui as duas mãos mudam de lugar. Use as últimas notas longas do compasso 8 para chegar ao novo lugar.",
        "A mão esquerda desliza de volta até o Dó quando a frase do sininho volta.",
      ],
      tricky: {
        5: "O polegar direito desce até o Dó central, enquanto a mão esquerda toca o Dó e depois o seu acorde.",
        9: "As duas mãos mudam de lugar: o polegar direito sobe até o Ré, e a mão esquerda desce para Lá, Dó e Ré.",
        13: "A mão esquerda desliza de volta até o Dó, e a mão direita começa de novo a frase do sininho.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças da mão direita, e mantenha juntas as duas notas de cada par.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia do sininho soar por cima.",
        "Troque o pedal no início e no meio de cada compasso.",
        "Levante a mão do último Mi, e caia uma oitava acima com os dedos 2 e 4.",
      ],
      tricky: {
        17: "A mão direita cai numa terça, uma oitava acima. A mão esquerda começa o baixo e os acordes.",
        27: "O dedo 2 toca o Mi, e o mínimo se estica até o Lá. Mantenha o polegar perto do Ré.",
        29: "A frase do sininho volta em terças. Os dedos 2 e 4 pegam Mi e Sol juntos.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque só os arpejos da mão esquerda, na segunda estrofe.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava e deixe a mão achar o acorde pelo tato.",
        "Em oitavas, a figura do sininho deve soar como sinos de verdade. Mantenha o pulso solto.",
        "O polegar e o mínimo tocam todas as oitavas. Mantenha a mão aberta, numa só posição.",
      ],
      tricky: {
        3: "Pressione Si, Ré e Fá juntos. Depois os dedos 2 e 4 tocam Ré e Sol, enquanto a mão esquerda salta.",
        7: "Os dedos 2 e 4 tocam a terça. Depois o dedo 4 repete o Fá, e o mínimo pega o Sol.",
        15: "O mesmo acorde do compasso 3. Fique de olho no salto da mão esquerda até a oitava de Sol grave.",
      },
    },
  },
};
