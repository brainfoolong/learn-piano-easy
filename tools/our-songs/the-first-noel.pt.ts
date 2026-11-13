/** The guide of *The First Noel* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The First Noel é uma canção de Natal inglesa, e ninguém sabe quem escreveu a melodia. " +
    "Acredita-se que ela venha da Cornualha, no extremo sudoeste da Inglaterra. " +
    "Davies Gilbert a publicou em 1823, e William Sandys a publicou em 1833. " +
    "John Stainer fez um arranjo para coro em 1871, e a versão dele é a que se canta hoje.",
  funFact: "Noel vem da palavra francesa Noël, que por sua vez vem da palavra latina para “nascimento”.",
  versions: {
    common: {
      practice: [
        "Toque os 8 primeiros compassos só com a mão direita, e deixe a música esperar cada nota.",
        "Toque o refrão, compassos 17 a 24, só com a mão direita.",
        "Agora só a mão esquerda. Ela mantém uma posição em cada compasso inteiro.",
        "Junte as mãos na música inteira, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "O primeiro Dó é longo. Conte até três, e depois deixe Ré, Mi e Fá subirem por igual.",
        "Os compassos 9 a 16 repetem os 8 primeiros compassos, então sua mão já os conhece.",
        "Vá um pouco mais devagar no último Mi, e deixe-o soar com o Dó grave.",
      ],
      tricky: {
        2: "O dedo 5 segura o Sol longo. Levante a mão na pausa curta, e pouse o dedo 3 no Lá.",
        10: "O mesmo movimento do compasso 2: levante a mão depois do Sol longo, e pouse o dedo 3 no Lá.",
        18: "O dedo 5 segura o Sol longo. Levante a mão, e deixe o mesmo dedo cair no Dó agudo.",
      },
    },
    rare: {
      practice: [
        "Toque só o baixo de valsa: nota grave, acorde, acorde.",
        "Toque só a mão direita a partir da anacruse, e deixe a música esperar cada nota.",
        "Junte as mãos na primeira estrofe, devagar.",
        "Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito.",
        "Agora toque na velocidade normal.",
      ],
      tips: [
        "A música começa no último tempo. Conte “um, dois”, e depois toque Mi e Ré.",
        "No baixo de valsa, toque a nota grave um pouco mais forte que os acordes depois dela.",
        "Os compassos 22 a 24 repetem os compassos 6 a 8, então sua mão já os conhece.",
      ],
      tricky: {
        3: "O dedo 5 segura o Sol longo. Levante a mão na pausa curta, e pouse o dedo 3 no Lá.",
        11: "O mesmo movimento do compasso 3: levante a mão depois do Sol longo, e pouse o dedo 3 no Lá.",
        19: "O dedo 5 segura o Sol longo. Levante a mão, e deixe o mesmo dedo cair no Dó agudo.",
      },
    },
    epic: {
      practice: [
        "Toque só o baixo Alberti até ele rolar sozinho: grave, agudo, meio, agudo.",
        "Toque a subida dos compassos 2 e 3 só com a mão direita, e passe o polegar por baixo no Fá.",
        "Toque só as terças da mão direita, e mantenha juntas as duas notas de cada par.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque o baixo Alberti suave, para a melodia cantar por cima.",
        "A melodia é a nota de cima de cada par, então deixe o dedo de cima conduzir.",
        "Troque o pedal no terceiro tempo, onde o acorde passa de Dó para Sol.",
      ],
      tricky: {
        2: "Os dedos 1, 2 e 3 tocam Dó, Ré e Mi. Depois o polegar passa por baixo do dedo 3 até o Fá.",
        16: "Uma sexta, depois duas terças. O dedo 2 fica no Mi nas duas primeiras, e o polegar desce até o Ré.",
        24: "Os mesmos pares do compasso 16: uma sexta, duas terças, e o polegar descendo até o Ré.",
      },
    },
    legendary: {
      practice: [
        "Toque só o baixo stride: salte para baixo até a oitava, e depois volte para cima até o acorde.",
        "Toque só as oitavas da mão direita na primeira estrofe, com o pulso solto.",
        "Toque só os acordes da mão direita, e deixe o dedo mínimo cantar a melodia.",
        "Junte as mãos na música inteira, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "No stride, olhe para a oitava e deixe a mão achar o acorde pelo tato.",
        "Toda oitava é tocada pelo polegar e pelo dedo mínimo. Mantenha a mão nessa posição.",
        "Toque mais suave as notas graves de cada acorde, para a nota de cima levar a melodia.",
      ],
      tricky: {
        5: "Depois do Sol longo, as oitavas passam depressa para Lá e Si. Mova a mão inteira, com o pulso solto.",
        7: "As oitavas sobem por Sol, Lá e Si. Deixe a mão deslizar pelas teclas sem levantá-la muito.",
        10: "Abra a mão para o acorde completo de Dó, depois feche-a numa oitava para Ré, Mi e Fá.",
      },
    },
  },
};
