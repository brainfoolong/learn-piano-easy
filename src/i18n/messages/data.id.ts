/** The data page in Indonesian. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { dataPage as en } from "./data.en";

export const dataPage: Translation<typeof en> = {
  lead: "Pengaturanmu, kemajuanmu di kursus, lagumu, dan skormu semuanya tersimpan di browser ini. Simpan semuanya ke satu file agar aman, atau untuk memindahkannya ke perangkat lain.",
  save: {
    heading: "Simpan cadangan",
    text: "Satu file memuat semuanya. Simpan di tempat yang aman, misalnya folder cloud.",
    action: "Simpan cadangan",
    never: "Browser ini belum pernah menyimpan cadangan.",
    today: "Cadangan terakhir disimpan hari ini.",
    on: (date: string) => `Cadangan terakhir disimpan pada ${date}.`,
    done: "File cadangan sudah disimpan.",
  },
  restore: {
    heading: "Pulihkan cadangan",
    text: "Buka file cadangan Learn Piano Easy. File pengaturan atau cadangan kemajuan dari versi lama juga bisa.",
    action: "Pulihkan cadangan",
  },
  folder: {
    heading: "Selaraskan dengan folder",
    text: "Pilih folder, misalnya folder yang diselaraskan oleh penyimpanan cloudmu. Setiap perubahan lalu masuk ke sana dengan sendirinya, beserta salinan bertanggal untuk setiap hari dari tujuh hari terakhir.",
    connect: "Hubungkan folder",
    starting: "Mencari foldermu…",
    synced: (name: string) => `Datamu disimpan di folder “${name}”.`,
    waiting: "Setiap perubahan masuk ke sana sesaat kemudian.",
    written: (time: string) => `Folder terakhir ditulis pukul ${time}.`,
    reconnect: (name: string) => `Browsermu akan bertanya lagi sebelum menulis ke folder “${name}”.`,
    reconnectAction: "Hubungkan folder lagi",
    asking: (name: string) =>
      `Folder “${name}” berisi data yang tidak ditulis oleh browser ini. Tidak ada yang ditulis ke sana sampai kamu memilih.`,
    askingFrom: (date: string) => `Data itu disimpan pada ${date}.`,
    restoreAction: "Pulihkan dari folder",
    replaceAction: "Ganti dengan data browser ini",
    replaced: "Folder kini berisi data browser ini. File lamanya disimpan di folder cadangannya.",
    failed: "Tidak dapat menulis ke folder. Hubungkan lagi, atau pilih folder itu sekali lagi.",
    disconnect: "Putuskan",
    gone: "Tidak dapat membaca file di folder. Tidak ada yang berubah.",
  },
  ask: {
    title: "Pulihkan cadangan ini?",
    merge: "Kemajuan, lagu, dan skormu digabung dengan yang sudah ada di sini, jadi data yang lebih baru tidak hilang.",
    replace: "Pengaturanmu dan pengaturan lagumu mengambil nilai dari file. Lalu halaman dimuat ulang.",
    confirm: "Pulihkan",
    cancel: "Biarkan seperti semula",
    close: "Tutup",
  },
  reading: "Membaca file…",
  restored: "Cadangan sudah dipulihkan.",
  notOurs: "File itu bukan cadangan Learn Piano Easy. Tidak ada yang berubah.",
  failed: "Tidak dapat menyimpan di browser. File cadanganmu masih memuat semuanya.",
};
