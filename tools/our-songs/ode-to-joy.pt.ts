/** The guide of *Ode to Joy* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven escreveu esta melodia para o último movimento da sua Nona Sinfonia, estreada em Viena em 1824. " +
    "Um coro a canta com o poema de Friedrich Schiller sobre a alegria e a amizade. " +
    "Hoje ela é o hino da União Europeia, tocado sem palavras. " +
    "No filme Die Hard, ela soa enquanto os ladrões abrem o cofre.",
  funFact: "Beethoven estava quase completamente surdo na estreia da Nona, e precisaram virá-lo para que ele visse os aplausos.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita, devagar, e deixe a música esperar cada nota.",
        "Agora só a mão esquerda. Ela apenas alterna entre duas posições.",
        "Junte as mãos nos 8 primeiros compassos.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Aqui cada dedo tem sua própria tecla: o polegar no Dó, o dedo mínimo no Sol.",
        "O último Ré dura o dobro das notas anteriores, então conte dois tempos.",
        "A parte do meio é a mais suave. Toque-a suave, e volte forte no compasso 13.",
      ],
      tricky: {
        2: "Desça a partir do dedo mínimo, um dedo por tecla: 5, 4, 3, 2.",
        12: "Seu polegar se estica para baixo até o Sol grave, enquanto os outros dedos ficam onde estão.",
        13: "Depois da pausa, encontre o Mi com o dedo 3, e a melodia recomeça.",
      },
    },
    rare: {
      practice: [
        "Marque o ritmo pontuado do compasso 4 com palmas ou com batidas dos dedos. Depois toque só a mão direita.",
        "Toque só a mão esquerda, e segure cada acorde até o próximo.",
        "Junte as mãos na parte do meio, onde os acordes mudam a cada dois tempos.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Longa, curta, longa: o Fá sustenido dura um tempo e meio, e o Mi, meio tempo.",
        "As duas notas rápidas são colcheias. Pense nelas como um tempo dividido em dois.",
        "Cada acorde da parte do meio dura dois tempos. Deixe-o soar até o próximo.",
      ],
      tricky: {
        10: "O Fá sustenido e o Sol passam rápido. Mantenha os dedos 3 e 4 perto das teclas deles.",
        12: "Seu polegar desliza do Ré para baixo até o Lá grave, e a mão o acompanha.",
        13: "Do Lá grave, o dedo 3 sobe até o Fá sustenido. Olhe antes de saltar.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque só as terças da mão direita, e mantenha juntas as duas notas de cada par.",
        "Junte as mãos nos 4 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
        "Aqui você troca o pedal no meio de cada compasso. Solte-o quando o novo acorde começar.",
      ],
      tricky: {
        8: "No Ré repetido, troque do dedo 3 para o 1, para a mão ficar pronta para o compasso 9.",
        13: "Aqui as terças voltam. Pressione as duas notas de cada par como se fossem uma só.",
        16: "Seu polegar desce até o Lá grave para o último acorde, abaixo do Ré do dedo 3.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a nota do baixo, e volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Toque só os arpejos da mão esquerda, na parte do meio.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a nota do baixo e deixe a mão achar o acorde pelo tato.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
        "O arpejo sobe com 5, 3, 2, 1, então o polegar chega à nota de cima.",
      ],
      tricky: {
        2: "A melodia desce enquanto o baixo salta. Mantenha os olhos na mão esquerda.",
        6: "Os acordes mudam a cada tempo. Mantenha o polegar no Lá e mova só os dedos de cima.",
        14: "A melodia cai do Lá para o Mi enquanto o polegar fica perto do Dó sustenido. Deixe o dedo de cima conduzi-la.",
      },
    },
  },
};
