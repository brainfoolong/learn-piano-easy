/** The guide of *Neon Chase* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Neon Chase adalah melodi buatan kami sendiri, yang ditulis untuk aplikasi ini dengan gaya musik film synthesizer tahun 1980-an. " +
    "Bas yang menghentak berdenyut di bawahnya, seperti kejar-kejaran mobil di malam hari.",
  funFact: "Banyak musik film tahun 1980-an dimainkan dengan synthesizer, bukan orkestra, sering kali oleh komponisnya sendiri di sebuah studio kecil.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 4 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Di birama 6, tangan turun satu tuts.",
        "Sekarang tangan kiri saja. Tangan kiri menekan satu posisi dua kali di setiap birama, dan tidak pernah berpindah.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mulai dengan ibu jari di A. Dengan begitu, jari 1 sampai 5 berada di A, B, C, D, dan E.",
        "Lepaskan E yang panjang sedikit lebih awal. Di jeda singkat itu, geser tangan turun satu tuts, agar ibu jari mendarat di G.",
        "Tangan kiri berbunyi pada ketukan 1 dan 3, seperti mesin yang berputar pelan. Jaga ketukannya tetap mantap.",
      ],
      tricky: {
        5: "Jari 5, 4, 3, dan 4 berayun di antara E, D, dan C. Biarkan tangan diam, dan biarkan jari-jari yang bekerja.",
        10: "Jari 4 memainkan C, dan jari 2 memainkan A di sela-selanya. Jari 3 diam di atas B dan menunggu.",
        13: "Jari 2, 4, dan 5 naik dari A melewati C ke D, lalu turun kembali ke C. Ibu jari diam di atas G.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Tangan kiri berbunyi di setiap ketukan, seperti mesin mobil.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 9 sampai 16, tempat not seperdelapan mulai masuk.",
        "Gabungkan kedua tangan pada seluruh lagu, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri memainkan empat ketukan yang rata di setiap birama. Biarkan melodi melaju di atasnya.",
        "Tekan C dan E bersamaan dengan jari 3 dan 5, lalu tahan selama tiga ketukan.",
        "Akhiri dengan A dan C bersamaan, dan biarkan keduanya berbunyi sepanjang birama.",
      ],
      tricky: {
        7: "Jari 2 memainkan A, jari 4 C, jari 3 B, dan ibu jari G. Tangan tetap di posisi yang sama seperti di birama 6.",
        10: "Jari 4 dan 2 bergantian di antara C dan A, lalu jari 5 menjangkau naik ke D. Jaga not seperdelapan tetap rata.",
        14: "Jari 2, 4, dan 5 naik ke D dengan not seperdelapan, lalu berjalan turun kembali ke A.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja sampai denyut not seperdelapan mengalir dengan sendirinya.",
        "Mainkan tangan kanan saja pada birama 9 sampai 16, dan hitung hentakan akornya: tiga, tiga, dua.",
        "Mainkan terts dan sekst tangan kanan saja, dan tekan kedua not setiap pasangan seperti satu not.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan jaga denyutnya tetap bertenaga.",
      ],
      tips: [
        "Tangan kiri tidak pernah berhenti: delapan not seperdelapan yang rata di setiap birama, seperti lampu mobil yang melintas cepat.",
        "Akor jatuh pada 1, pada “dan” setelah 2, dan pada 4. Hitung delapan not seperdelapan, lalu hentakkan akor pada 1, 4, dan 7.",
        "Setelah B, susupkan ibu jari ke C. Lalu jari 2 dan 3 menjangkau D dan E.",
      ],
      tricky: {
        17: "Jaga rentangan sekst antara jari 1 dan 5, dan geser seluruh tangan naik untuk setiap pasangan baru.",
        18: "Pasangan not berjalan turun dari D ke B. Pertahankan posisi tangan, dan geser satu tuts setiap kali.",
        19: "Pasangan not naik seperti di birama 17. Pasangan terakhir adalah kuint, G dan D, jadi rapatkan tangan sedikit.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja. Berayun di antara jari 5 dan ibu jari, yang berjarak satu oktaf.",
        "Mainkan rentetan not cepat tangan kanan saja, pelan-pelan, dan biarkan ibu jari menyusup saat naik.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodinya.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Biarkan pergelangan tangan kiri lemas dan berayun. Dengan begitu, oktafnya berdenyut dengan sendirinya.",
        "Mainkan rentetan not cepat dengan ringan, dan hentakan akornya pendek dan cerah, seperti synthesizer.",
        "Melodinya adalah not teratas setiap akor. Mainkan not itu sedikit lebih keras daripada not lainnya.",
      ],
      tricky: {
        17: "Hentakkan setiap akor dengan pendek, dan pakai tanda istirahat sesudahnya untuk pindah ke akor berikutnya.",
        22: "Hentakkan akor empat not itu dua kali dengan jari 1, 2, 3, dan 5. Lalu turunkan tangan ke B, D, dan G.",
        23: "Empat akor pendek membawa A, C, B, dan G di atasnya. Lepaskan setelah setiap akor, dan daratkan akor berikutnya di tanda istirahat.",
      },
    },
  },
};
