/** *The sustain pedal* in Indonesian. */
import type { Translation } from "../../../i18n/translation";
import type { TheSustainPedalTexts } from "./the-sustain-pedal.en";

export const theSustainPedalId: Translation<TheSustainPedalTexts> = {
  title: "Pedal sustain",
  steps: {
    "pedal-demo": {
      text: "Dengarkan C, E, G, dan C dimainkan dua kali. Pada putaran pertama, setiap not berhenti saat tutsnya naik. Pada putaran kedua, semuanya terus berbunyi bersama.",
    },
    "what-the-pedal-does": {
      text: "Pedal kanan adalah pedal sustain. Selama pedal diinjak, setiap not tetap berbunyi walau tutsnya sudah kamu lepas.",
    },
    "pedal-keeps": {
      text: "Apa fungsi pedal kanan?",
      answers: [
        "Membuat setiap not lebih keras",
        "Membuat not lebih pendek",
        "Membuat not tetap berbunyi setelah tutsnya kamu lepas",
        "Memindahkan tuts satu oktaf lebih tinggi",
      ],
    },
    "foot-on-pedal": {
      text: "Pakai kaki kananmu. Biarkan tumitmu tetap di lantai, dan injak pedal dengan bagian depan kakimu. Lepaskan pedal dengan cara yang sama, perlahan.",
    },
    "which-foot": {
      text: "Bagaimana posisi kakimu di pedal sustain?",
      answers: [
        "Kaki kiri, tumit terangkat",
        "Kaki kanan, jari kaki di luar pedal",
        "Kaki kiri, tumit di lantai",
        "Kaki kanan, tumit di lantai",
      ],
    },
    "pedal-down-c": {
      text: "Injak pedal kanan dan tahan. Dengan tangan kirimu, mainkan C di bawah C tengah, lalu E, lalu G. Lepaskan setiap tuts.",
    },
    "hear-pedal-hold": {
      text: "Dengarkan C, E, dan G dimainkan berurutan dengan pedal diinjak. Setiap not tetap berbunyi saat not berikutnya mulai.",
    },
    "what-pedal-did": {
      text: "Dalam contoh tadi, setiap not tetap berbunyi setelah not berikutnya mulai. Apa yang menahannya?",
      answers: [
        "Pedal sustain",
        "Menekan tuts lebih kuat",
        "Memainkan not lebih cepat",
        "Tangan kanan",
      ],
    },
    "pedal-marks": {
      text: "Di bawah paranada, Ped. berarti injak pedal, dan bintang berarti lepaskan pedal. Ada partitur yang memakai garis kurung sebagai gantinya, dari injak sampai lepas.",
    },
    "star-means": {
      text: "Di bawah paranada kamu melihat bintang. Apa yang diminta bintang itu dari kakimu?",
      answers: [
        "Injak pedal",
        "Lepaskan pedal",
        "Ketuk pedal dua kali",
        "Injak pedal terus sampai akhir",
      ],
    },
    "chords-without-pedal": {
      text: "Pelajari dulu empat akor terurai dengan tangan kirimu, tanpa pedal. Mulai dari C di bawah C tengah: C-E-G, lalu C-F-A, lalu B-D-G, lalu C-E-G lagi.",
    },
    "chords-blur": {
      text: "Jika pedal tetap diinjak dari satu akor ke akor berikutnya, kedua akor berbunyi bersamaan dan menjadi kabur. Jadi, ganti pedal di setiap akor baru.",
    },
    "change-the-pedal": {
      text: "Mainkan akor yang sama. Sebelum setiap akor, lepaskan pedal dan mainkan not pertamanya. Lalu injak pedal dan mainkan dua not lainnya.",
    },
    "hear-pedal-change": {
      text: "Dengarkan keempat akor dengan pedal diganti di setiap akor. Setiap akor terus berbunyi, lalu berhenti dengan bersih saat akor berikutnya mulai.",
    },
    "why-change": {
      text: "Mengapa kamu mengganti pedal di setiap akor baru?",
      answers: [
        "Agar bermain lebih keras",
        "Agar kakimu beristirahat",
        "Agar akornya tidak bercampur dan kabur",
        "Agar not berbunyi lebih pendek",
      ],
    },
    recap: {
      text: "Bagus sekali. Sekarang kaki kananmu ikut bermain.",
      points: [
        "Pedal kanan membuat not tetap berbunyi setelah kamu melepas tutsnya.",
        "Injak pedal dengan kaki kananmu, tumit di lantai.",
        "Ped. berarti injak pedal, dan bintang berarti lepaskan pedal.",
        "Ganti pedal di setiap akor baru, agar akornya tidak kabur.",
      ],
    },
  },
};
