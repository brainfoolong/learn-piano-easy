/** *Slowing down* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { SlowingDownTexts } from "./slowing-down.en";

export const slowingDownId: Translation<SlowingDownTexts> = {
  title: "Makin lambat",
  steps: {
    "slowing-demo": {
      text: "Dengarkan frasa ini. Notnya naik dengan langkah yang stabil, dan saat turun kembali, setiap not berlangsung sedikit lebih lama.",
    },
    "what-ritardando-is": {
      text: "Musiknya sengaja dibuat makin lambat. Tanda rit., singkatan dari ritardando, memintamu makin lambat sedikit demi sedikit. Tanda ini sering ada di akhir karya.",
    },
    "rit-means": {
      text: "Kamu melihat rit. di atas beberapa birama. Apa yang kamu lakukan?",
      answers: [
        "Makin lambat sedikit demi sedikit",
        "Bermain lebih keras",
        "Langsung berhenti",
        "Makin cepat",
      ],
    },
    "steady-tap": {
      text: "Bunyi yang makin lambat baru terasa setelah denyut ketukan yang stabil. Ketuk bersama bunyi klik, dan ikuti klik itu dengan tepat.",
    },
    "play-the-ending": {
      text: "Mainkan akhir frasa: G, F, E, D, dan C, dari G di atas C tengah. Beri sedikit lebih banyak waktu pada setiap not, dan berhentilah pada C terakhir.",
    },
    "what-a-fermata-is": {
      text: "Tanda ini mirip mata: lengkungan dengan titik di bawahnya. Itulah fermata, tanda berhenti sejenak. Not di bawahnya ditahan lebih lama daripada yang tertulis.",
    },
    "fermata-demo": {
      text: "Dengarkan fermata di atas G. Ketukannya berhenti selama G berbunyi, lalu musiknya berlanjut.",
    },
    "fermata-means": {
      text: "Ada fermata di atas sebuah not. Apa yang diminta tanda itu?",
      answers: [
        "Mainkan not itu pendek",
        "Mainkan not itu lebih keras",
        "Lewati not itu",
        "Tahan lebih lama daripada yang tertulis",
      ],
    },
    "back-in-tempo": {
      text: "Setelah rit., kata a tempo mengembalikan kecepatanmu yang tadi. Dalam bahasa Italia, artinya “dalam tempo”.",
    },
    "a-tempo-demo": {
      text: "Dengarkan. Frasa ini makin lambat di tengahnya, lalu a tempo mengembalikan kecepatan awalnya.",
    },
    "a-tempo-means": {
      text: "Kamu sudah makin lambat karena rit. Sekarang kamu melihat a tempo. Apa yang kamu lakukan?",
      answers: [
        "Makin lambat lagi",
        "Kembali ke kecepatan awal",
        "Tahan not berikutnya",
        "Bermain dengan lembut",
      ],
    },
    "where-rit-goes": {
      text: "Di mana kamu paling sering menemukan rit.?",
      answers: [
        "Tepat pada not pertama",
        "Di setiap birama",
        "Menjelang akhir karya",
        "Hanya di tangan kiri",
      ],
    },
    "ending-with-fermata": {
      text: "Mainkan E, D, C, D, E, E dari E di atas C tengah, sambil makin lambat. Akhiri dengan akor: C di bawah C tengah dan G di atasnya dengan tangan kirimu, ditambah satu E lagi dengan tangan kananmu. Biarkan akor berbunyi sedikit lebih lama, seperti yang diminta fermata.",
    },
    "rall-means": {
      text: "Beberapa karya menulis rall., singkatan dari rallentando, sebagai gantinya. Tanda mana yang artinya sama?",
      answers: ["Tanda rit.", "Tanda a tempo", "Fermata", "Tanda mf"],
    },
    recap: {
      text: "Bagus sekali. Kamu bisa mengubah tempo dengan sengaja.",
      points: [
        "rit. dan rall. berarti makin lambat sedikit demi sedikit, paling sering di bagian akhir.",
        "Fermata menahan notnya lebih lama daripada yang tertulis.",
        "a tempo mengembalikan kecepatan awal.",
      ],
    },
  },
};
