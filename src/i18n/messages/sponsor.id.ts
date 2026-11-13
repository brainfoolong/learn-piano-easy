/** The sponsor page in Indonesian. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { sponsorPage as en } from "./sponsor.en";

export const sponsorPage: Translation<typeof en> = {
  lead: "Learn Piano Easy gratis, dan akan tetap gratis. Kalau aplikasi ini membawa sedikit musik ke harimu, kamu bisa membantunya tumbuh.",
  action: "Dukung di GitHub",
  note: "Berapa pun jumlahnya membantu, sekali atau setiap bulan.",
  promises: ["Tanpa iklan", "Tanpa akun", "Bisa tanpa internet", "Sumber terbuka, Lisensi MIT"],
  picture: "Hati besar dengan dua not musik yang melayang di sekitarnya",
  who: {
    heading: "Siapa pembuatnya",
    text: [
      "Learn Piano Easy dibuat oleh satu orang di waktu luangnya, di sela pekerjaan, kehidupan, dan latihan tangga nada.",
      "Pengendali mutunya seekor kucing yang sesekali berjalan di atas tuts.",
    ],
  },
  spend: {
    heading: "Untuk apa dukunganmu dipakai",
    items: [
      { title: "Waktu", text: "Malam-malam untuk pelajaran baru, lagu baru, dan lebih sedikit bug." },
      { title: "Domain", text: "Agar situs tetap punya alamatnya, dan kamu selalu bisa menemukannya." },
      { title: "Kopi", text: "Kopi berubah menjadi kode dengan tempo stabil sekitar 120 ketukan per menit." },
    ],
  },
  help: {
    heading: "Cara lain untuk membantu",
    lead: "Uang hanyalah satu cara untuk membantu. Hal-hal ini sama berartinya:",
    star: { text: "Beri bintang proyek ini di GitHub, agar pelajar lain menemukannya.", action: "Beri bintang di GitHub" },
    bug: { text: "Laporkan bug kalau ada yang terdengar salah.", action: "Laporkan bug" },
    friend: "Ceritakan situs ini kepada teman yang sejak dulu ingin belajar piano.",
  },
  thanks: "Terima kasih sudah bermain. Kamulah alasan semua ini ada.",
};
