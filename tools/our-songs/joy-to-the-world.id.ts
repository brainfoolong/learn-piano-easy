/** The guide of *Joy to the World* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Lowell Mason menerbitkan melodi ini di Boston, dengan nama Antioch. " +
    "Liriknya ditulis oleh Isaac Watts pada tahun 1719. " +
    "Empat not pertamanya sama dengan awal bagian paduan suara Lift up your heads, dari Messiah karya Handel.",
  funFact: "Isaac Watts menulis liriknya sebagai gubahan ulang Mazmur 98, dan ia tak pernah bermaksud menjadikannya lagu Natal.",
  versions: {
    common: {
      practice: [
        "Mainkan 2 birama pertama dengan tangan kanan saja, satu jari untuk setiap tuts, turun dari C ke F.",
        "Mainkan birama 1 sampai 5 dengan kedua tangan. Tangan kiri menyelesaikan tangga nada turun di birama 3 dan 4.",
        "Mainkan birama 13 sampai 16 dengan tangan kanan saja. Di sana not yang berulang naik lalu turun.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap jari turun satu tuts: 5, 4, 3, 2, lalu ibu jari.",
        "Melodi pindah ke tangan kiri selama dua not. Biarkan tangan kiri menyanyikannya dengan jelas.",
        "Hitung not yang berulang dengan rata, seperti lonceng yang berbunyi satu demi satu.",
      ],
      tricky: {
        3: "Ibu jari bergeser turun dari F ke E, lalu tangan kiri memainkan D dan C.",
        17: "Angkat tangan setelah E, lalu daratkan kelingking di C tinggi.",
        20: "Ibu jari bergeser turun dari D ke C terakhir. Tahan sampai akhir.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Tangan kiri menahan satu akor di setiap setengah birama.",
        "Gabungkan kedua tangan pada birama 13 sampai 16, bagian dengan not yang berulang.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Panjang, panjang, pendek: A dimainkan cepat, lalu membawa ke G yang panjang.",
        "Mainkan F dengan pendek, lalu angkat tangan. Jari 3 mendarat di E, siap turun ke C.",
        "Melodi naik setahap demi setahap, dari A ke B lalu ke C. Mainkan sedikit lebih keras setiap kali.",
      ],
      tricky: {
        3: "Tangan sudah pindah ke bawah: jari 3 memainkan E, jari 2 memainkan D, dan ibu jari menunggu C.",
        19: "Ibu jari memainkan E, lalu bergeser turun ke D.",
        20: "Ibu jari bergeser turun sekali lagi ke C terakhir. Tahan sampai akhir.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan 4 birama pertama dengan tangan kanan saja. Di birama 3, jari 3 menyeberang di atas ibu jari.",
        "Mainkan terts di birama 13 sampai 16 dengan tangan kanan saja, dan tekan kedua not seperti satu not.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar tangga nada yang turun terdengar jelas di atasnya.",
        "Melodinya adalah not atas setiap terts, jadi biarkan jari atas memimpin.",
        "Ganti pedal di awal dan di tengah setiap birama, saat tangan kiri memulai lagi polanya.",
      ],
      tricky: {
        17: "Ibu jari menyusup di bawah jari 3 ke E. Lalu kelingking meraih ke atas sampai C tinggi.",
        18: "Setelah ibu jari memainkan F, jari 3 menyeberang di atasnya ke E.",
        20: "Angkat kedua tangan setelah B dan D, lalu daratkan di akor terakhir dengan tangan kiri dalam oktaf.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke oktaf, lalu kembali naik ke akor.",
        "Mainkan akor tangan kanan saja, dan biarkan kelingking menyanyikan melodi.",
        "Mainkan oktaf di birama 13 sampai 19 dengan tangan kanan saja. Biarkan tangan tetap terbuka dan ringan.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Saat bermain stride, lihat not bas, dan biarkan tangan menemukan akor dengan rabaan.",
        "Rentetan not cepat dari C naik ke G adalah hiasan. Biarkan berkilau, lalu mendarat di G.",
        "Dalam oktaf, mainkan kelingking sedikit lebih keras, agar melodi bersinar di atas.",
      ],
      tricky: {
        5: "Dari G tinggi, tangan turun ke C, F, dan A. Kelingking naik satu tuts ke A.",
        6: "Seluruh akor naik satu tuts, dari C, F, dan A ke D, G, dan B. Pertahankan posisi tangan.",
        9: "Ibu jari turun dari E ke C, sementara jari atas turun dari C tinggi ke G.",
      },
    },
  },
};
