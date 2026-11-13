/** The guide of *William Tell Overture* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Opera Rossini, William Tell, pertama kali dipentaskan pada 1829, dan menjadi yang terakhir dari 39 operanya. " +
    "Overture opera ini ditutup dengan galop yang cepat, yang sering disebut Mars Prajurit Swiss. " +
    "Bagian penutup itu menjadi musik tema The Lone Ranger di radio, televisi, dan film.",
  funFact:
    "Ada penulis yang mendefinisikan seorang intelektual sebagai orang yang bisa mendengarkan William Tell Overture tanpa teringat pada Lone Ranger.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 5 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 6 sampai 9. Birama-birama ini menjawab melodi dengan ritme yang sama.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi selama setengah atau satu birama penuh.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ucapkan “panjang, pendek, pendek” sambil bermain. Ritme itu adalah derap kuda yang berlari.",
        "Angkat jari 5 dari E sedikit lebih awal. Dengan begitu ibu jari mendarat di G rendah tepat waktu.",
        "Setiap jari punya tutsnya sendiri. Ibu jari memainkan setiap G.",
      ],
      tricky: {
        7: "Jari 4 memainkan D tiga kali. Lalu jari 2 dan 1 turun ke B dan G.",
        8: "Jari 3 memainkan C, lalu jari 5 meloncat naik ke E. Di tengah birama, tangan kiri berganti ke D dan G.",
        15: "Jari 5, 4, dan 3 berjalan turun dari E ke C. Tangan kiri berganti ke D dan G untuk dua not terakhir.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 5 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Tangan kiri memainkan satu akor di setiap setengah birama.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh, seperti kuda yang berderap.",
      ],
      tips: [
        "Hitung empat ketukan di setiap birama, dengan dua not seperempat dalam setiap ketukan. Tangan kiri bermain di setiap ketukan.",
        "Akor dua not memakai jari 1 dan 3, 2 dan 4, atau 3 dan 5.",
        "Mainkan not-not yang berulang dengan ringan dan pergelangan tangan yang lemas, seperti derap kaki kuda di jalan.",
      ],
      tricky: {
        7: "Jari 2 dan 4 memainkan F kres dan A bersamaan. Lalu jari 4 mengulang A sendirian.",
        8: "Pasangan not bergeser dari G dan B ke F kres dan A. Biarkan tanganmu di tempatnya, dan ganti jarinya saja.",
        15: "Jari 4 mengulang A, dan jari 5 mengambil B. Di tengah birama, tangan kiri kembali ke G, B, dan D.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja. Setiap setengah birama berayun dari not rendah ke dua not di atasnya.",
        "Mainkan sekst tangan kanan saja, dan tekan kedua not setiap pasangan sebagai satu.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap setengah birama, saat not bas kembali.",
        "Rentetan not cepat naik dari A ke E dengan jari 1 sampai 5. Jaga pergelangan tanganmu tetap datar.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        9: "Jari 2 menahan A setelah ibu jari memainkan G kres. Lalu tanganmu turun ke C kres dan E untuk birama berikutnya.",
        14: "Jari 3 mengulang C kres, lalu jari 4 dan 5 meraih ke atas ke D dan F kres.",
        17: "Pakai tanda istirahat setelah A yang panjang untuk menggeser ibu jari naik ke E tinggi.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: satu oktaf rendah, satu akor, satu oktaf lagi, satu akor.",
        "Mainkan oktaf tangan kanan saja. Jaga tanganmu tetap terbuka, dengan ibu jari dan kelingking siap.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Di tangan kiri, biarkan lenganmu berayun di antara oktaf rendah dan akor.",
        "Biarkan kelingking menyanyikan not teratas setiap oktaf sedikit lebih keras.",
        "Melodinya adalah not teratas setiap akor. Jari 5 selalu memainkannya.",
      ],
      tricky: {
        13: "Oktaf turun dari F kres ke B. Jaga tanganmu tetap terbuka, dan biarkan tangan memantul di setiap oktaf.",
        21: "Akornya bergeser turun. Biarkan jari 5 di not teratas, dan biarkan tanganmu memantul.",
        22: "Ibu jari tetap di A. Jari 2, 3, dan 5 bergeser dari C kres, E, dan A ke B, D kres, dan F kres.",
      },
    },
  },
};
