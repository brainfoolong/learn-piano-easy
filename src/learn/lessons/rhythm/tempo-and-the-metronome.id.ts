/** *Tempo and the metronome* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { TempoAndTheMetronomeTexts } from "./tempo-and-the-metronome.en";

export const tempoAndTheMetronomeId: Translation<TempoAndTheMetronomeTexts> = {
  title: "Tempo dan metronom",
  steps: {
    "slow-demo": {
      text: "Perhatikan dan dengarkan. Melodi ini naik dari C tengah ke G, lalu turun lagi, pelan-pelan.",
    },
    "fast-demo": {
      text: "Sekarang dengarkan melodi yang sama lagi. Notnya sama, tetapi ketukannya lebih cepat.",
    },
    "what-tempo-is": {
      text: "Tempo adalah seberapa cepat ketukan berjalan. Tempo diukur dalam ketukan per menit, atau BPM. Pada 60 BPM, ketukan datang sekali setiap detik, dan pada 120 BPM dua kali lebih sering.",
    },
    "faster-tempo-quiz": {
      text: "Tempo mana yang lebih cepat?",
      answers: ["60 ketukan per menit", "120 ketukan per menit"],
    },
    "slow-first": {
      text: "Metronom berbunyi klik pada setiap ketukan, dengan tempo apa pun yang kamu pilih. Latihlah karya baru dengan pelan dulu. Setelah terasa mudah, atur metronom sedikit lebih cepat.",
    },
    "slow-first-quiz": {
      text: "Sebuah karya baru terasa sulit. Bagaimana kamu melatihnya?",
      answers: ["Pelan dulu, lalu sedikit lebih cepat", "Langsung dengan kecepatan penuh"],
    },
    "slow-tap": {
      text: "Metronom berbunyi pada 60 BPM. Tekan Mulai, lalu ketuk tuts mana saja pada setiap klik.",
    },
    "faster-tap": {
      text: "Metronom berbunyi pada 104 BPM. Tekan Mulai, lalu ketuk tuts mana saja sekali pada setiap klik.",
    },
    recap: {
      text: "Bagus sekali. Sekarang kamu bisa menjaga ketukan pada dua tempo. Berikutnya Ode to Joy, pelan-pelan dulu.",
      points: [
        "Tempo adalah seberapa cepat ketukan berjalan, dihitung dalam ketukan per menit.",
        "Metronom berbunyi klik pada setiap ketukan, dengan tempo yang kamu pilih.",
        "Berlatihlah pelan dulu, lalu sedikit lebih cepat.",
      ],
    },
  },
};
