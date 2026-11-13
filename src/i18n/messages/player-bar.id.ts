/** The player's bar in Indonesian. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerBar as en } from "./player-bar.en";

export const playerBar: Translation<typeof en> = {
  actions: {
    play: "Putar atau jeda",
    stop: "Hentikan dan kembali ke awal",
    seekBack: "Mundur 5 detik",
    seekForward: "Maju 5 detik",
    toStart: "Kembali ke awal",
    faster: "Lebih cepat",
    slower: "Lebih lambat",
    transposeUp: "Transposisi naik",
    transposeDown: "Transposisi turun",
    loop: "Ulangi birama yang dipilih, lalu seluruh lagu, lalu matikan",
    loopStart: "Ulangi dari birama ini",
    loopEnd: "Ulangi sampai birama ini",
    zoomIn: "Perbesar",
    zoomOut: "Perkecil",
    fit: "Sesuaikan dengan lagu",
    viewLeft: "Geser tampilan ke kiri",
    viewRight: "Geser tampilan ke kanan",
    fullscreen: "Layar penuh",
  },
  controls: {
    play: "Putar",
    pause: "Jeda",
    stop: "Hentikan",
    speed: "Kecepatan",
    speedPercent: (n: number) => `${formatNumber("id", n)}%`,
    transpose: "Transposisi",
    loop: "Ulangi",
    repeatAll: "Ulangi semua",
    loopTitles: {
      off: "Ulangi birama yang dipilih di pengaturan",
      measures: "Ulangi seluruh lagu sebagai gantinya",
      song: "Berhenti mengulang",
    },
    more: "Alat lainnya",
    fit: "Sesuaikan",
    view: "Tampilan",
    leaveFullScreen: "Keluar dari layar penuh",
    expert: "Lanjutan",
    expertTitles: {
      off: "Tampilkan semua alat",
      on: "Tampilkan alat utama saja",
    },
  },
  hotkeys: {
    none: "Tidak ada",
  },
  hotkeyDialog: {
    pressKey: "Tekan tombol…",
    keyFor: (label: string) => `Tombol untuk ${label}`,
    clear: "Kosongkan",
    clearTitle: (label: string) => `Kosongkan tombol untuk ${label}`,
    resetAll: "Atur ulang semua tombol",
    help: "Pilih sebuah tombol, lalu tekan tombol yang kamu inginkan. Esc menutup dialog ini.",
    off: "Pintasan keyboard dimatikan di pengaturan, jadi tombol ini tidak berfungsi sekarang.",
    open: "Ubah pintasan",
  },
  timeline: {
    position: "Posisi lagu",
  },
};
