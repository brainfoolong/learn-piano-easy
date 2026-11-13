/** The player's shell in Brazilian Portuguese. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { playerShell as en } from "./player-shell.en";

/** `n` seconds with two decimals and no digit grouping, such as `12,50`. */
const seconds = (n: number) => formatNumber("pt", n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
/** `n` with one decimal and no digit grouping, such as `6,6`. */
const tenths = (n: number) => formatNumber("pt", n, { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
const files = (n: number) => `${formatNumber("pt", n)} ${plural("pt", n, { one: "arquivo", many: "arquivos", other: "arquivos" })}`;

export const playerShell: Translation<typeof en> = {
  dialog: {
    close: "Fechar",
    hotkeys: "Atalhos do teclado",
    keyBindings: "Teclas do teclado do computador",
    pdf: "Salvar como PDF",
    offlineFiles: "Arquivos sem conexão",
    tracks: "Faixas",
    songs: "Músicas",
    guide: (title) => `Guia de ${title}`,
    about: "Sobre o Learn Piano Easy",
  },
  toast: {
    dismiss: "Dispensar",
  },
  topbar: {
    songs: "Músicas",
    tracks: "Faixas",
    guide: "Guia",
    settings: "Configurações",
    about: "Sobre",
    openSong: "Música aberta",
    demoSong: "Música de demonstração",
    songFallback: "Música",
  },
  songs: {
    noneFound: "Nenhum arquivo de música foi encontrado.",
    wrongKind: "Só é possível adicionar arquivos MIDI e MusicXML.",
    added: (n) => {
      const count = formatNumber("pt", n);
      return plural("pt", n, {
        one: `${count} música foi adicionada a “Suas músicas”.`,
        many: `${count} músicas foram adicionadas a “Suas músicas”.`,
        other: `${count} músicas foram adicionadas a “Suas músicas”.`,
      });
    },
    notKept: (reason) => `Não foi possível salvar as músicas: ${reason}`,
    soundsFailed: "Não foi possível carregar os sons do piano, então as músicas são reproduzidas sem som.",
  },
  guide: {
    step: (n, summary) => `Passo ${formatNumber("pt", n)}: ${summary}.`,
    barLoops: (bar) => `O compasso ${formatNumber("pt", bar)} se repete.`,
    topBeaten: (title) => `Você superou ${title}, o último passo desta música. Muito bem tocado!`,
    beaten: (title, next) => `Você superou ${title}! Agora vem ${next}.`,
    playNext: (next) => `Tocar ${next}`,
  },
  lesson: {
    label: "Lição",
    target: (percent) => `Acerte ${formatNumber("pt", percent)}% das notas em uma tentativa com pontuação.`,
    back: "Voltar à lição",
    missing: "A música da lição não está no catálogo.",
  },
  finger: {
    label: "Nota selecionada",
    setByYou: "escolhido por você",
    fromGuide: "do guia",
    suggested: "sugerido",
    none: "sem dedo",
    finger: (finger, source) => `dedo ${finger}, ${source}`,
    line: (note, said) => `${note}: ${said}. Pressione de 1 a 5 para escolher o dedo, 0 para apagar e Esc para terminar.`,
  },
  backgroundTrack: {
    notAudio: (file) => `${file} não é um áudio que este navegador consegue reproduzir.`,
    playsAlong: (file) => `${file} toca junto com a música.`,
  },
  about: {
    license: "Licença",
    notices: "Avisos de terceiros",
    packageLicense: (name) => `Licença de ${name}`,
    offline: "Este texto ainda não está disponível sem conexão.",
    intro:
      "O Learn Piano Easy é um app gratuito e de código aberto para aprender piano, com um curso guiado e seus próprios arquivos MIDI. Ele funciona sem conexão no seu navegador.",
    build: (version) => `Compilação ${version}`,
  },
  cache: {
    groups: {
      app: { label: "App", description: "A página, o código dela e a lista de músicas. O app precisa disso para abrir sem conexão." },
      songs: { label: "Músicas", description: "Todas as músicas que vêm com o app, para que qualquer uma delas abra sem conexão." },
      sounds: { label: "Sons do piano", description: "Todos os conjuntos de sons, para o piano tocar sem conexão com qualquer conjunto escolhido." },
    },
    bytes: (n) => `${formatNumber("pt", n, { useGrouping: false })} B`,
    kilobytes: (n) => `${tenths(n)} KB`,
    megabytes: (n) => `${tenths(n)} MB`,
    groupsFailed: (n, labels) => `Não foi possível salvar ${files(n)} de ${labels} para uso sem conexão.`,
    updated: (labels) => `Atualização concluída. Estes itens estão salvos de novo para uso sem conexão: ${labels}.`,
    unavailable: "Este navegador não guarda arquivos sem conexão para esta página.",
    reading: "Lendo o que está salvo…",
    unreadable: "Não foi possível ler a lista de arquivos sem conexão. Recarregue a página e tente de novo.",
    intro: "Os arquivos salvos continuam funcionando sem conexão. Cada parte pode ser salva ou removida separadamente.",
    allSaved: "tudo salvo",
    noneSaved: "não salvo",
    someSaved: (count, total) => `${formatNumber("pt", count)} de ${files(total)} salvos`,
    status: (size, total, state) => `${size}, ${files(total)}, ${state}.`,
    saving: (done, total) => `Salvando ${formatNumber("pt", done)} de ${files(total)}…`,
    failed: (n) => `Não foi possível salvar ${files(n)}.`,
    save: "Salvar",
    saveAgain: "Salvar de novo",
    remove: "Remover",
    saveGroup: (label) => `Salvar ${label}`,
    removeGroup: (label) => `Remover ${label}`,
    keep: "Manter salvo após cada atualização",
  },
  update: {
    ready: "A nova versão está pronta.",
    reload: "Recarregar",
  },
  scene: {
    piano: "Piano",
    pianoRange: (range) => `Piano, ${range}`,
    startKeys: (keys) => `, teclas iniciais ${keys}`,
    chord: (chord) => `, acorde ${chord}`,
  },
  demo: {
    lyrics: [
      "O|lhe as lu|zes a des|cer",
      "to|que ca|da te|cla ao che|gar",
      "de|va|gar e de|pois ve|loz",
      "lo|go as mãos sa|be|rão o ca|mi|nho",
    ],
    part: (n) => `Parte ${formatNumber("pt", n)}`,
    leftHand: "Mão esquerda",
    rightHand: "Mão direita",
  },
  chords: {
    root: "Fundamental",
    /** A chord tone as a feminine ordinal, since the interval it names is feminine: `♭3.ª` for *terça*. */
    ordinal: (tone) => `${tone}.ª`,
  },
  overlays: {
    fps: "Quadros por segundo",
    tempo: "Andamento",
    bpmValue: (n) => `${formatNumber("pt", n, { useGrouping: false })} BPM`,
    fpsValue: (n) => `${formatNumber("pt", n, { useGrouping: false })} FPS`,
    fpsNone: "– FPS",
    track: (track, channel) => `Faixa ${track}, canal ${channel}`,
    velocity: (velocity) => `Intensidade ${velocity}`,
    timing: (start, length) => `Começa em ${seconds(start)} s, dura ${seconds(length)} s`,
  },
  sheet: {
    label: "Partitura",
    empty: "A partitura não mostra nenhuma faixa. Ative uma em Faixas.",
  },
};
