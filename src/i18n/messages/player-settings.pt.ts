/** The player's settings panel in Brazilian Portuguese. A text it leaves out shows in English. */
import { parsePitch } from "../../keyboard/range";
import { pitchClassName } from "../../theory/note-names";
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { playerSettings as en } from "./player-settings.en";
import { playerSettingsLook } from "./player-settings-look.pt";
import { playerSettingsPlay } from "./player-settings-play.pt";

/** A tonic given in letters, such as `B♭`, in Portuguese solfège, such as `Si♭`. Any other name stays as it is. */
function solfege(tonic: string): string {
  const pitch = parsePitch(`${tonic}4`);
  if (pitch === undefined) return tonic;
  return pitchClassName(pitch, { system: "solfege", accidentals: tonic.endsWith("♭") ? "flats" : "sharps", locale: "pt" });
}

export const playerSettings: Translation<typeof en> = {
  panel: {
    title: "Configurações",
    close: "Fechar as configurações",
    search: "Pesquisar nas configurações",
    clearSearch: "Limpar a pesquisa",
    sections: "Seções das configurações",
    found: (count) =>
      count === 0
        ? "Nenhuma opção encontrada"
        : `${formatNumber("pt", count)} ${plural("pt", count, {
            one: "opção encontrada",
            many: "opções encontradas",
            other: "opções encontradas",
          })}`,
    emptyTitle: "Nada encontrado",
    empty: (query) => `Nenhuma opção corresponde a “${query}”. Tente outra palavra.`,
    showAll: "Mostrar todas as opções",
    changed: (count) =>
      `${formatNumber("pt", count)} ${plural("pt", count, { one: "alterada", many: "alteradas", other: "alteradas" })}`,
    changedTotal: (count) =>
      count === 0
        ? "Todas as opções estão no padrão."
        : `${formatNumber("pt", count)} ${plural("pt", count, {
            one: "opção alterada",
            many: "opções alteradas",
            other: "opções alteradas",
          })}`,
    reset: (label) => `Redefinir “${label}” para o padrão`,
    resetAll: "Redefinir tudo",
    confirmResetAll: "Redefinir todas as opções para o padrão? Suas alterações serão perdidas.",
  },
  groups: {
    basics: "O básico",
    audio: "Áudio",
    instrument: "Seu instrumento",
    scene: "A cena",
    reading: "Ajudas de leitura",
    app: "App",
  },
  sections: {
    general: "Geral",
    loop: "Repetição",
    audio: "Som",
    backing: "Faixa de fundo",
    view: "Exibição",
    keyboard: "Seu teclado",
    input: "Entrada",
    piano: "Piano",
    notes: "Notas",
    lanes: "Pistas e linhas",
    particles: "Partículas",
    labels: "Rótulos",
    lyrics: "Letra",
    coding: "Código de cores",
    sheet: "Partitura",
    pdf: "Exportar PDF",
    offline: "Sem conexão",
  },
  about: {
    general: "Como o player começa, como uma música toca e o que a linha do tempo mostra.",
    loop: "Repita um trecho até pegar o jeito.",
    audio: "O volume, o timbre do piano, o metrônomo e o equalizador.",
    backing: "Um arquivo de áudio seu que toca junto com a música.",
    view: "A câmera, o brilho e quanto da música você vê à frente.",
    keyboard: "As teclas do seu próprio teclado, para o piano na tela ficar igual a ele.",
    input: "Como você toca: o modo, seus dispositivos e o que o player confere.",
    piano: "O piano na tela: suas teclas, suas cores e seus efeitos.",
    notes: "A forma e o brilho das notas que caem.",
    lanes: "As pistas atrás das notas, e as linhas e marcas sobre elas.",
    particles: "Chamas, faíscas e suas próprias partículas onde uma nota chega à tecla.",
    labels: "Nomes nas notas e nas teclas, e os acordes da música.",
    lyrics: "A letra da música, linha por linha, sobre a cena.",
    coding: "Uma cor para cada altura ou para cada dedo.",
    sheet: "A música como partitura, ao lado das notas que caem ou no lugar delas.",
    pdf: "Salve as notas que caem como páginas para imprimir.",
    offline: "O que o app deixa salvo para você tocar sem conexão.",
  },
  subheadings: {
    generalApp: "App e dados",
    generalSong: "A música",
    generalReadouts: "Indicadores e linha do tempo",
    audioVolume: "Volume e intensidade",
    audioRoom: "Reverberação e afinação",
    audioEnvelope: "Envelope",
    audioMetronome: "Metrônomo",
    audioEqualizer: "Equalizador",
    audioTiming: "Sincronia",
    inputMode: "Modo",
    inputDevices: "Dispositivos e teclas",
    inputAlong: "Tocar junto",
    inputScore: "Pontuação e jogo",
    pianoPressed: "Teclas que você pressiona",
    pianoLook: "Cores e tamanho",
    pianoFlare: "Clarão",
    pianoWave: "Linha de onda",
    lanesColours: "Cores das pistas",
    lanesLines: "Linhas de compasso e de tempo",
    lanesHeld: "Teclas que você segura",
    lanesMarkers: "Marcadores e pedal",
    particlesEffects: "Efeitos",
    particlesLook: "Suas partículas: aparência",
    particlesLife: "Suas partículas: quantidade e duração",
    particlesMotion: "Suas partículas: movimento",
    particlesWander: "Suas partículas: deriva e balanço",
    particlesStart: "Suas partículas: onde começam",
    labelsNotes: "Nas notas",
    labelsPiano: "No piano",
    labelsChords: "Acordes",
    codingPitch: "Por altura",
    codingFinger: "Por dedo",
    sheetLayout: "Layout",
    sheetNotation: "Notação",
    sheetCursor: "Cursor e cores",
  },
  settings: { ...playerSettingsPlay, ...playerSettingsLook },
  range: {
    label: "Tamanho do teclado",
    keys: (count) => `${formatNumber("pt", count)} ${plural("pt", count, { one: "tecla", many: "teclas", other: "teclas" })}`,
    custom: "Personalizado",
    summary: (keys, first, last) => `${keys}, de ${first} a ${last}`,
    octaveDown: "− Oitava",
    octaveDownName: "Descer uma oitava",
    octaveUp: "Oitava +",
    octaveUpName: "Subir uma oitava",
  },
  key: (tonic, mode) => `${solfege(tonic)} ${{ major: "maior", minor: "menor" }[mode] ?? mode}`,
};
