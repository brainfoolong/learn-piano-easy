/** The guide of *Leise rieselt der Schnee* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O título alemão Leise rieselt der Schnee quer dizer “A neve cai de mansinho”. " +
    "É uma das canções de Advento mais conhecidas da língua alemã. " +
    "O pastor Eduard Ebel escreveu a letra em 1895, e o livro dele a publicou sem melodia. " +
    "Muitos livros também atribuem a melodia a Ebel, mas nenhuma fonte comprova isso, e outros dizem que é uma melodia folclórica.",
  funFact:
    "Cada uma das três estrofes da canção começa com uma imagem curta: a neve suave, os corações aquecidos e a noite santa que logo chega.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita nos 2 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque os compassos 1 a 8 só com a mão direita. Essa é a estrofe inteira, uma vez.",
        "Agora só a mão esquerda. Ela mantém uma posição por compasso, ou no máximo duas.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Seu polegar direito começa no Dó central, e o dedo 3 toca o primeiro Mi.",
        "O dedo 4 toca o Dó que o polegar segurava no compasso 2, e a mão desce até o polegar ficar no Sol.",
        "Cada frase termina numa nota longa e numa pausa curta. Deixe a nota soar e depois respire, como a neve que cai.",
      ],
      tricky: {
        7: "O dedo 4 segura o Ré, e depois o polegar desce duas vezes para o Lá. Toque o Lá rápido de leve.",
        9: "A estrofe começa de novo. Tire o dedo 3 do Dó durante a pausa e coloque-o no Mi.",
        15: "O mesmo pulo do compasso 7: um Ré longo, e depois um Lá rápido com o polegar.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão esquerda, e pressione juntas as notas de cada acorde.",
        "Toque só o baixo de valsa da segunda estrofe: nota grave, acorde, acorde.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "O polegar esquerdo fica no Sol durante toda a primeira estrofe. Só os outros dedos se movem.",
        "No baixo de valsa, toque a nota grave um pouco mais forte que os acordes que vêm depois dela.",
        "O Dó sustenido é a única tecla preta da música. Deixe o polegar deslizar para ela e sair de novo.",
      ],
      tricky: {
        7: "O dedo 4 segura o Ré, e depois o polegar desce duas vezes para o Lá, enquanto a mão esquerda troca de acorde no meio do compasso.",
        9: "A estrofe começa de novo, e entra a valsa. Leve o dedo 3 do Dó até o Mi durante a pausa.",
        15: "O Lá rápido volta, agora sobre o baixo de valsa. Antes dele, conte o Ré longo até o fim.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar por conta própria: grave, agudo, meio, agudo.",
        "Toque só as terças e sextas da mão direita, e mantenha juntas as duas notas de cada par.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
        "Troque o pedal a cada meio compasso, quando a mão esquerda recomeça o padrão.",
      ],
      tricky: {
        7: "O Lá rápido cai no polegar enquanto a mão esquerda percorre o acorde de Ré menor. Mantenha o baixo regular sob a melodia.",
        13: "Os pares giram em torno do Dó sustenido. Os dedos 1 e 3 tocam Lá e Dó sustenido, e depois os dedos 2 e 4 voltam para Si e Ré.",
        14: "A mão se abre de uma terça para uma sexta, com o polegar no Mi e o dedo 3 no Dó.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e depois volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque só os arpejos da mão esquerda, na segunda estrofe.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava e deixe a mão encontrar o acorde pelo tato.",
        "No agudo, as oitavas devem soar como sinos. Mantenha o pulso solto.",
        "Solte a oitava de Ré um instante antes, para a mão chegar a tempo ao Lá rápido.",
      ],
      tricky: {
        9: "As duas mãos mudam de padrão. A direita toca oitavas, e a esquerda começa seu primeiro arpejo, que cobre duas oitavas.",
        12: "Segure a oitava de Sol enquanto a mão esquerda sobe até o Mi agudo e desce de volta.",
        14: "A mesma subida do compasso 12, agora sob a oitava de Dó. Deixe o dedo 3 cruzar por cima do polegar com suavidade.",
      },
    },
  },
};
