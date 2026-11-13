/** The guide of *Mary Had a Little Lamb* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Sarah Josepha Hale publicou o poema sobre Mary e o cordeirinho dela em Boston, em 1830. " +
    "A melodia com que ele é cantado hoje é tradicional, e ninguém sabe quem juntou os dois pela primeira vez. " +
    "Ela usa só quatro notas, e é por isso que tantos livros de piano para iniciantes começam com ela.",
  funFact:
    "Em 1877, Thomas Edison recitou os primeiros versos no seu novo fonógrafo. " +
    "Assim, eles foram os primeiros versos gravados e reproduzidos da história.",
  versions: {
    common: {
      practice: [
        "Toque só a mão direita, devagar, e deixe a música esperar cada nota.",
        "Agora só a mão esquerda. Ela segura uma nota em cada compasso inteiro.",
        "Junte as mãos, ainda devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Aqui cada dedo tem sua própria tecla: o polegar no Dó, o dedo 3 no Mi.",
        "O dedo mínimo da mão esquerda toca o Sol grave, e o polegar espera acima dele, no Dó.",
        "O último Dó dura o compasso inteiro, então conte quatro tempos antes de soltar.",
      ],
      tricky: {
        3: "A mão esquerda vai para o Sol grave enquanto a mão direita repete o Ré. Use o dedo mínimo.",
        4: "A melodia pula o Fá, de Mi para Sol. Toque o Sol com o dedo mínimo, e deixe os outros dedos nas mesmas teclas.",
        7: "A mão direita balança entre Ré e Mi com os dedos 2 e 3, enquanto o baixo desce para o Sol.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita na segunda metade, onde entram as colcheias.",
        "Toque só a mão esquerda, e mantenha cada acorde pressionado até o próximo.",
        "Junte as mãos nos 8 primeiros compassos.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "Cada dupla de notas rápidas é um tempo dividido em dois. Conte “um e, dois e”.",
        "Neste acorde, o dedo mínimo da mão esquerda desce até o Fá sustenido.",
        "Pressione Si e Ré juntos no fim do compasso, como se fossem uma tecla só.",
      ],
      tricky: {
        9: "O dedo 4 toca o Dó rápido, e depois o dedo 2 toca o Lá. Mantenha a mão parada.",
        11: "A mão esquerda desce até o Fá sustenido enquanto a mão direita acrescenta um Si rápido.",
        13: "As notas rápidas voltam aqui. Conte “um e, dois e” para mantê-las regulares.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar por conta própria: grave, agudo, meio, agudo.",
        "Toque só as terças da mão direita, e mantenha juntas as duas notas de cada par.",
        "Junte as mãos nos 4 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "O Fá rápido no fim do compasso leva você de volta ao Mi para a próxima frase.",
        "A melodia é a nota de cima de cada terça, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        9: "Aqui começam as terças. Seu polegar alterna entre Dó e Si, por baixo de cada par.",
        13: "Depois do par longo, começa a última frase. Pressione as duas notas de cada par como se fossem uma.",
        15: "Os pares mudam a cada tempo, e o baixo troca de acorde no meio do compasso.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a nota do baixo, e depois volte para cima até o acorde.",
        "Toque só os acordes da mão direita, e deixe o dedo de cima cantar a melodia.",
        "Junte as mãos nos 8 primeiros compassos, a três quartos da velocidade.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a nota do baixo e deixe a mão encontrar o acorde pelo tato.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
        "Segure o último acorde com o pedal até ele sumir.",
      ],
      tricky: {
        3: "O baixo salta para baixo até a oitava de Sol grave. Dê uma olhada na mão esquerda antes de o compasso começar.",
        11: "Mantenha o polegar no Sol e a posição do acorde parada, para só a mão esquerda se deslocar.",
        15: "Levante a mão depois do último Ré, para ela ter tempo de se abrir bem para o acorde final.",
      },
    },
  },
};
