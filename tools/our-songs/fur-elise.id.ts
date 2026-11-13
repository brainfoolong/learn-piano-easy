/** The guide of *Für Elise* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven menulis karya piano pendek ini pada tahun 1810, dan di naskah tulisan tangannya, karya ini dipersembahkan untuk Elise. " +
    "Tak ada yang tahu pasti siapa Elise. " +
    "Ludwig Nohl menemukan karya ini dan menerbitkannya pada tahun 1867, empat puluh tahun setelah Beethoven wafat.",
  funFact: "Ada teori yang mengatakan bahwa Nohl salah membaca nama itu, dan karya ini sebenarnya ditulis untuk Therese Malfatti, perempuan yang ingin dinikahi Beethoven.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja mulai birama 5, tempat tangan turun ke C tengah.",
        "Sekarang tangan kiri saja. Tangan kiri menahan dua posisi, satu di setiap birama.",
        "Gabungkan kedua tangan pada 8 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ayunkan tangan di antara jari 5 dan 4 untuk E dan D kres, seperti ayunan yang lembut.",
        "Di sini tangan kiri menunggu. Mainkan melodinya dengan lembut, seperti sedang membisikkan rahasia.",
        "Angkat tangan saat tanda istirahat setelah A, lalu daratkan ibu jari di C tengah.",
      ],
      tricky: {
        5: "Setelah tanda istirahat, ibu jarimu mendarat di C tengah. Lihat ke bawah sebelum memainkannya.",
        7: "Ibu jarimu memainkan tuts hitam G kres, agar tangan bisa meraih C di atasnya.",
        13: "Tangan turun lagi ke C tengah. Pakai tanda istirahat di birama 12 untuk sampai ke sana.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 8 birama pertama, pelan-pelan.",
        "Mainkan tangan kiri saja. Setiap akor naik dari bas, satu not di setiap ketukan.",
        "Gabungkan kedua tangan pada birama 4 sampai 8, tempat kedua tangan bergantian.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri naik, lalu tangan kanan meneruskan naik. Bunyinya harus seperti satu tangan saja.",
        "Ibu jari di E, kelingking di E tinggi. Bentangkan tangan selebar satu oktaf penuh.",
        "G kres di bas membuat akornya cerah. Nada itu menarik telinga pulang ke A.",
      ],
      tricky: {
        5: "Pakai tanda istirahat setelah A untuk memindahkan ibu jari kanan turun ke C tengah.",
        6: "Tangan kiri terbuka lebar: jari 2 memainkan B, dan ibu jari meraih ke atas sampai G kres.",
        14: "Rentangan yang sama dengan birama 6: jari 2 memainkan B, dan ibu jari kiri meraih ke atas sampai G kres.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts tangan kanan saja, dan tekan kedua not setiap pasangan not seperti satu not.",
        "Gabungkan kedua tangan pada birama 4 sampai 8, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Ganti pedal di setiap garis birama. Lepaskan pedal tepat saat not bas baru berbunyi.",
        "Melodinya adalah not teratas setiap terts, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        20: "Angkat tangan setelah terts, lalu daratkan ibu jari di C tengah dan kelingking di A.",
        28: "Lompatan yang sama dengan birama 20: ibu jari di C tengah dan kelingking di A, bersamaan.",
        32: "Bentangkan tangan untuk akor terakhir: ibu jari di C, jari 2 di E, dan jari 4 di A.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke oktaf, lalu kembali naik ke akor.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodinya.",
        "Gabungkan kedua tangan pada paruh kedua, tempat melodi naik satu oktaf.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Dalam bas stride, lihat not basnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Di nada tinggi, E dan D kres harus berkilau. Mainkan dengan ringan dan rata.",
        "Mainkan not teratas setiap akor sedikit lebih keras daripada not lainnya.",
      ],
      tricky: {
        15: "Akor tangan kiri pada ketukan 2 hanya berisi E dan G kres. Tambahkan B pada ketukan 3.",
        20: "Angkat tangan dari C tinggi, lalu tekan A, C, E, dan A dengan jari 1, 2, 3, dan 5.",
        28: "Akor empat not itu kembali. Angkat dulu tangan dari C tinggi, lalu daratkan di seluruh oktaf.",
      },
    },
  },
};
