/** The guide of *Hungarian Dance No. 5* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Brahms menulis Tarian Hungaria untuk piano empat tangan, dan kumpulan pertamanya terbit pada 1869. " +
    "Tarian No. 5 menjadi yang paling terkenal dari semuanya. " +
    "Dalam film The Great Dictator (1940), Charlie Chaplin mencukur seorang pelanggan mengikuti irama lagu ini.",
  funFact: "Brahms mendasarkan tarian ini pada sebuah csárdás karya Béla Kéler, tetapi ia mengira itu lagu rakyat.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 5 sampai 8. Di sini bagian akhirnya berbeda.",
        "Sekarang tangan kiri saja. Tangan kiri menahan kuint kosong, dan di birama 3 dan 7 hanya ibu jari yang bermain.",
        "Gabungkan kedua tangan, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap not panjang berlangsung enam ketukan, dan not pendek dua ketukan. Hitunglah, maka tariannya berayun.",
        "Jari 2 menahan G kres, lalu jari 3 dan 4 bergegas naik ke A dan B.",
        "G kres menarik kuat ke A. Biarkan G kres tertahan sebentar sebelum bergerak.",
      ],
      tricky: {
        2: "Jari 5 meraih ke atas ke C, lalu jari 3 kembali ke A.",
        3: "Jari 2 menahan G kres selama enam ketukan. Lalu jari 3 dan 4 memainkan A dan B dengan cepat.",
        6: "Seperti di birama 2, jari 5 memainkan C dan jari 3 memainkan A.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Not rendah datang lebih dulu, lalu akor pada ketukan 2.",
        "Mainkan tangan kanan saja pada 8 birama pertama, tempat tangan kanan naik satu oktaf.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan not rendah sedikit lebih keras daripada akor sesudahnya. Itulah “dum-ta” tarian ini.",
        "Sambil menahan A yang panjang, pindahkan tangan kanan satu oktaf ke atas. Ibu jari mendarat di E.",
        "Tanda istirahat pendek di akhir birama 12 memberimu waktu untuk melompat kembali ke bawah.",
      ],
      tricky: {
        5: "Tangan kanan sekarang bermain satu oktaf lebih tinggi. Ibu jarimu mendarat di E tinggi.",
        9: "Jawabannya dimulai di C tinggi dengan jari 5. Lalu jari 3 memainkan A, dan jari 4 memainkan B.",
        13: "Pakai tanda istirahat di birama 12 untuk melompat turun satu oktaf. Ibu jarimu mendarat di E.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan sekst tangan kanan saja, dan tekan kedua not setiap pasangan seperti satu not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan ringan dan cepat, agar melodi menari di atasnya.",
        "E kres adalah tuts putih F. Jari 2 memainkannya, dan tanganmu tetap di tempatnya.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        5: "Ibu jarimu tetap di A, sementara jari 3 dan 5 memainkan C kres dan F kres di atasnya.",
        7: "Jari 1 dan 4 memainkan G kres dan E kres. Lalu tanganmu naik dua kali, dengan cepat.",
        15: "Sekst yang sama dengan birama 7. Jaga ibu jari tetap dekat dengan A dan B.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: lompat ke bawah untuk oktafnya, lalu kembali ke atas untuk akornya.",
        "Mainkan oktaf tangan kanan saja, dengan ibu jari dan kelingking dalam satu posisi.",
        "Mainkan motif cepat di birama 5 sampai 7 dengan tangan kanan saja, pelan-pelan.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Mainkan oktafnya dengan penuh semangat. Ini tarian yang cepat, dan setiap not panjang harus berbunyi.",
        "Pada motif cepat, ibu jari menyusup agar rentetan not cepatnya tetap mulus.",
        "Mainkan not teratas setiap akor sedikit lebih keras daripada not lainnya.",
      ],
      tricky: {
        4: "Tahan oktaf F kres, dan biarkan tangan kiri melompat di antara oktaf dan akornya.",
        8: "Rentangkan tanganmu di atas F kres, A, C kres, dan F kres dengan jari 1, 2, 3, dan 5.",
        12: "Akor empat not kembali lagi. Angkat dulu jari dari G kres rendah, lalu mendaratlah di seluruh oktaf.",
      },
    },
  },
};
