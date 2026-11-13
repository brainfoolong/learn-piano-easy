/** The guide of *God Rest Ye Merry, Gentlemen* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "God Rest Ye Merry, Gentlemen adalah salah satu lagu Natal Inggris tertua yang masih dinyanyikan sampai sekarang. " +
    "Sejak sekitar tahun 1760, liriknya dijual di London pada lembaran cetak yang murah. " +
    "William Sandys mencetak melodinya dalam buku lagu Natal miliknya pada tahun 1833. " +
    "Baris pertamanya dulu berarti: semoga Tuhan memberimu damai dan kebahagiaan.",
  funFact: "Dalam A Christmas Carol karya Charles Dickens, seorang anak menyanyikan lagu Natal ini di depan lubang kunci pintu Scrooge. Scrooge mengusirnya dengan sebatang penggaris.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 5 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 10 sampai 14, tempat melodi naik ke A tinggi.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not rendah atau satu kuint kosong setiap kali.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ibu jarimu mulai di A di bawah C tengah, dan kelingking berada di E.",
        "Angkat tangan sejenak setelah A, lalu biarkan ibu jari jatuh ke G tepat di bawahnya.",
        "Ini refreinnya. Biarkan bagian ini berbunyi sedikit lebih keras daripada baitnya.",
      ],
      tricky: {
        3: "Jari 3, 2, dan 1 berjalan turun ke A. Angkat tangan, lalu ibu jari jatuh ke G.",
        11: "Jari 4 dan 5 naik ke A tinggi. Angkat tangan, lalu kelingking mendarat di E di bawahnya.",
        19: "Jari 3, 2, dan 1 berjalan turun ke C. Angkat tangan, lalu jari 2 mendarat di B.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja: satu not rendah, lalu not-not di atasnya, dua kali dalam setiap birama.",
        "Mainkan tangan kanan saja pada birama 2 sampai 5. Di tengah jalan, tangan berpindah dua kali.",
        "Mainkan tangan kanan saja pada birama 7 dan 8, tempat sebuah not yang diulang membantu tangan berpindah.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Jari 4 bergeser turun dari D ke C. Di birama berikutnya, ibu jari bergeser naik dari G ke A.",
        "Ganti jari pada not kedua dari dua A cepat dan dua D cepat. Dengan begitu tangan berpindah tanpa melompat.",
        "C dan B berbagi satu ketukan. Hitung “satu-dan”, lalu mainkan keduanya sebagai dua geser yang cepat dan rata.",
      ],
      tricky: {
        11: "Jari 4 dan 5 naik ke A tinggi. Lalu kelingking melompat turun ke E, dan jari 4 memainkan D.",
        18: "Jari 2 bergeser naik dari D ke E. Lalu setiap jari memainkan tuts berikutnya, sampai A tinggi.",
        19: "Kelingking melompat dari A tinggi turun ke E. Lalu tangan berjalan turun ke B.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja sampai akor terurai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan tangan kanan saja pada birama 3 dan 4, tempat jari-jari menyeberang ke dua arah.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan akor terurai dengan lembut, agar melodi bernyanyi di atasnya.",
        "Saat turun, jari 3 menyeberang di atas ibu jari ke B. Saat naik, ibu jari menyusup ke C.",
        "Ibu jari menyusup untuk memainkan E, lalu tangan naik ke A tinggi.",
      ],
      tricky: {
        12: "Jari 2 menyeberang di atas ibu jari ke C. Di akhir birama, ibu jari menyusup untuk memainkan C.",
        18: "Ibu jari menyusup ke E. Jari 2 dan 3 naik, lalu kelingking meraih A tinggi.",
        19: "Jari 3 turun ke E dan berjalan turun ke C. Lalu jari 2 menyeberang di atas ibu jari ke B.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke oktaf rendah, lalu kembali naik ke akor.",
        "Mainkan tangan kanan saja pada birama 4 sampai 6, dan mainkan hiasan turn dengan ringan.",
        "Gabungkan kedua tangan pada 9 birama pertama, dengan setengah kecepatan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Dalam bas stride, lihat oktaf rendahnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Hiasan turn di sekitar E hanya pemanis. Mainkan lebih lembut daripada melodinya.",
        "Angkat tangan setelah B, lalu daratkan kedua tangan bersamaan di akor terakhir.",
      ],
      tricky: {
        9: "Rentetan not cepat dimulai di G tinggi. Jari 5, 4, 3, dan ibu jari berlari turun, lalu jari 2 memainkan E.",
        15: "Ganti ke kelingking pada E yang diulang, lalu berjalan turun, satu jari untuk setiap tuts. Tangan kiri melompat ke E rendah.",
        19: "Jari 2 menyeberang di atas ibu jari untuk memainkan B. Mainkan dengan pendek, lalu pindahkan tangan turun ke akor terakhir.",
      },
    },
  },
};
