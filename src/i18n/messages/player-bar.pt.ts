/** The player's control bar in Brazilian Portuguese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerBar as en } from "./player-bar.en";

export const playerBar: Translation<typeof en> = {
  actions: {
    play: "Reproduzir ou pausar",
    stop: "Parar e voltar ao início",
    seekBack: "Voltar 5 segundos",
    seekForward: "Avançar 5 segundos",
    toStart: "Ir para o início",
    faster: "Mais rápido",
    slower: "Mais devagar",
    transposeUp: "Transpor para cima",
    transposeDown: "Transpor para baixo",
    loop: "Repetir os compassos escolhidos, depois a música inteira, depois desligar",
    loopStart: "Repetir a partir deste compasso",
    loopEnd: "Repetir até este compasso",
    zoomIn: "Aumentar o zoom",
    zoomOut: "Diminuir o zoom",
    fit: "Ajustar à música",
    viewLeft: "Mover a exibição para a esquerda",
    viewRight: "Mover a exibição para a direita",
    fullscreen: "Tela cheia",
  },
  controls: {
    play: "Reproduzir",
    pause: "Pausar",
    stop: "Parar",
    speed: "Velocidade",
    speedPercent: (n: number) => `${formatNumber("pt", n)}%`,
    transpose: "Transpor",
    loop: "Repetir",
    repeatAll: "Repetir tudo",
    loopTitles: {
      off: "Repetir os compassos escolhidos nas configurações",
      measures: "Repetir a música inteira em vez disso",
      song: "Parar de repetir",
    },
    more: "Mais ferramentas",
    zoom: "Zoom",
    fit: "Ajustar",
    view: "Exibição",
    leaveFullScreen: "Sair da tela cheia",
    expert: "Avançado",
    expertTitles: {
      off: "Mostrar todas as ferramentas",
      on: "Mostrar só as ferramentas principais",
    },
  },
  hotkeys: {
    modifiers: { Ctrl: "Ctrl", Alt: "Alt", Shift: "Shift", Meta: "Meta" },
    none: "Nenhuma",
  },
  hotkeyDialog: {
    pressKey: "Pressione uma tecla…",
    keyFor: (label: string) => `Tecla para ${label}`,
    clear: "Limpar",
    clearTitle: (label: string) => `Limpar a tecla de ${label}`,
    resetAll: "Redefinir todas as teclas",
    help: "Selecione uma tecla e depois pressione a tecla que quiser. Esc fecha esta janela.",
    off: "Os atalhos do teclado estão desativados nas configurações, então estas teclas não fazem nada agora.",
    open: "Mudar atalhos do teclado",
  },
  timeline: {
    position: "Posição na música",
  },
};
