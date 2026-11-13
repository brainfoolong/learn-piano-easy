/** *Welcome to the piano* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { WelcomeTexts } from "./welcome.en";

export const welcomeId: Translation<WelcomeTexts> = {
  title: "Selamat datang di piano",
  steps: {
    hello: {
      text: "Selamat datang! Di sini kamu belajar piano selangkah demi selangkah. Setiap pelajaran mengajarkan satu ide, dan kamu langsung mencobanya.",
    },
    "sound-check": {
      text: "Pertama, cek suara. Piano memainkan empat not. Kalau kamu tidak mendengar apa pun, naikkan volume, lalu pilih “Dengarkan lagi”.",
    },
    "ways-to-play": {
      text: "Kamu bisa memainkan setiap pelajaran dengan tuts di layar, keyboard komputer, atau keyboard MIDI. Untuk memakai keyboard MIDI, sambungkan keyboard itu. Lalu pilih “Hubungkan perangkat MIDI” sekali, di pengaturan pemutar.",
    },
    "ways-quiz": {
      text: "Kamu bisa memainkan pelajaran dengan apa?",
      answers: [
        "Hanya dengan keyboard MIDI",
        "Hanya dengan tuts di layar",
        "Semuanya bisa: layar, keyboard komputer, atau keyboard MIDI",
      ],
    },
    "first-key": {
      text: "Not pertamamu! Tekan tuts yang ditandai.",
    },
    "three-keys": {
      text: "Sekarang tiga tuts berurutan. Mainkan setiap tuts yang ditandai, dari kiri ke kanan.",
    },
    recap: {
      text: "Bagus sekali. Kamu sudah memainkan not pertamamu.",
      points: [
        "Cek suara menunjukkan bahwa kamu bisa mendengar piano.",
        "Kamu bisa bermain di layar, keyboard komputer, atau keyboard MIDI.",
        "Tuts yang ditandai selalu tuts yang harus kamu mainkan berikutnya.",
      ],
    },
  },
};
