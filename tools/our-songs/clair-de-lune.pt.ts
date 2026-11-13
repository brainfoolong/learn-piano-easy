/** The guide of *Clair de lune* in Brazilian Portuguese. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Clair de lune é o terceiro movimento da Suite bergamasque de Debussy, que ele começou por volta de 1890 e publicou em 1905. " +
    "O título quer dizer “luar” e vem de um poema de Paul Verlaine. " +
    "O filme Ocean's Eleven (2001) termina com essa música, enquanto os ladrões olham as fontes do Bellagio.",
  funFact: "A partitura começa com as indicações pianissimo e “con sordina”, por isso se toca com o pedal esquerdo pisado desde a primeira nota.",
  versions: {
    common: {
      practice: [
        "Toque os compassos 1 a 4 só com a mão direita, e deixe a música esperar cada nota.",
        "Toque os compassos 5 a 8 só com a mão direita. Ali a melodia vai descendo.",
        "Agora só a mão esquerda. Em cada compasso, ela segura uma nota longa ou uma quinta aberta.",
        "Junte as mãos, devagar.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Tire logo o polegar do Sol. A pausa dá tempo para você saltar até o Sol agudo.",
        "Toque suave e deixe cada nota longa sumir aos poucos, como o luar sobre a água.",
        "Aqui os dedos 2 e 3 fazem quase todo o trabalho. O dedo 5 se estica até a nota mais aguda.",
      ],
      tricky: {
        1: "Toque o Sol com o polegar e depois salte uma oitava acima, até o Sol, com o dedo 5.",
        5: "Sua mão desce na pausa do compasso 4. O dedo 3 cai no Lá.",
        7: "Toque o primeiro Mi com o dedo 3, não com o polegar. Assim o dedo 5 fica livre para o Lá.",
      },
    },
    rare: {
      practice: [
        "Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota.",
        "Toque só a mão esquerda. A nota grave cai no tempo 1, e a quinta acima dela no tempo 4.",
        "Junte as mãos nos 8 primeiros compassos, devagar, com o pedal.",
        "Toque a segunda metade. Ali a melodia volta uma oitava acima.",
        "Toque a música inteira com as duas mãos, na velocidade normal.",
      ],
      tips: [
        "Mantenha o pedal pisado durante cada compasso inteiro, e troque-o bem na barra de compasso.",
        "Conte este compasso em colcheias. O Mi começa na metade do tempo 4.",
        "No agudo, toque mais suave ainda. A melodia deve flutuar como o luar.",
      ],
      tricky: {
        5: "Sua mão desce na pausa do compasso 4. O dedo 3 cai no Lá.",
        9: "Use a pausa depois do Si grave para dar um salto grande até o agudo. Seu polegar cai no Sol.",
        13: "Como no compasso 5, desça a mão na pausa antes deste compasso. O dedo 3 cai no Lá.",
      },
    },
    epic: {
      practice: [
        "Toque só a mão esquerda. Cada acorde sobe e desce, uma nota por colcheia.",
        "Toque só as terças da mão direita, e pressione as duas notas de cada par como se fossem uma.",
        "Junte as mãos nos 8 primeiros compassos, devagar.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, com o pedal.",
      ],
      tips: [
        "Toque os acordes que sobem e descem suave e por igual, para a melodia flutuar por cima.",
        "Aqui troque o pedal três vezes, uma para cada nova nota do baixo.",
        "A melodia é a nota de cima de cada terça, então deixe o dedo de cima conduzir.",
      ],
      tricky: {
        3: "O Dó e o Mi começam entre os tempos. Conte este compasso em colcheias: o Mi começa na metade do tempo 4.",
        11: "O mesmo ritmo do compasso 3, agora em terças. Suba os dedos 3 e 5 juntos até o Dó e o Mi.",
        16: "Toque Lá e Dó com os dedos 1 e 3, e depois Si e Ré com os dedos 2 e 4.",
      },
    },
    legendary: {
      practice: [
        "Toque só a mão esquerda. O polegar passa por baixo e o dedo 3 cruza por cima, e assim cada arpejo cobre duas oitavas.",
        "Toque só os acordes de quatro notas da mão direita, e levante a mão entre um e outro.",
        "Toque o final devagar. A mão esquerda cruza por cima da direita para tocar três notas agudas.",
        "Toque a música inteira com as duas mãos, a três quartos da velocidade.",
        "Agora toque na velocidade normal, e deixe o último acorde soar.",
      ],
      tips: [
        "Em cada arpejo, o polegar passa por baixo na descida, e o dedo 3 cruza por cima na subida.",
        "Toque a nota de cima de cada acorde um pouco mais forte que as outras.",
        "Enquanto a mão direita segura o acorde, passe a mão esquerda por cima num balanço, como quem toca um sino.",
      ],
      tricky: {
        13: "Aqui cai um acorde em cada tempo. Levante um pouco a mão depois de cada um, e deixe o pedal ligar os acordes.",
        17: "Segure o acorde da mão direita e cruze a mão esquerda por cima para tocar Si, Ré e Sol.",
        18: "Tire a mão direita do acorde e depois abra a mão sobre Dó, Mi, Sol e Dó.",
      },
    },
  },
};
