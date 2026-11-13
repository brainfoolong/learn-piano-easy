/** The guide of *Es ist ein Ros entsprungen* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Dalam bahasa Jerman, Es ist ein Ros entsprungen berarti “sekuntum mawar telah tumbuh”. " +
    "Lagu ini adalah lagu Natal gereja dari abad ke-16. " +
    "Melodinya pertama kali dicetak dalam buku himne Speyer, di Köln pada 1599, dan penciptanya tidak diketahui. " +
    "Michael Praetorius menggubahnya untuk empat suara pada 1609, dan gubahannya menyebar luas.",
  funFact: "Johannes Brahms menggubah sebuah prelude koral untuk orgel dari melodi ini, yaitu nomor kedelapan dari Op. 122 karyanya.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 2 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 3 sampai 6 dengan tangan kanan saja. Melodinya turun sejenak ke G di birama 5.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi selama setengah atau satu birama penuh.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap G panjang dimulai dengan jari 5. Ganti ke jari 4 pada G berikutnya, dan tanganmu tetap diam.",
        "Setiap birama berisi tiga birama dari cetakan lama. Hitung enam ketukan pelan, dua not seperempat untuk setiap ketukan.",
        "Setelah G rendah, berhenti sejenak, lalu biarkan jari 5 meraih satu oktaf ke atas ke G tinggi.",
      ],
      tricky: {
        3: "Jari 2 menahan C, lalu jari 5 merentang ke atas ke G. Ganti ke jari 4 pada G berikutnya.",
        5: "Jari 4, 2, 3, dan 2 memainkan D, B, C, dan A, lalu ibu jari mendarat di G rendah. Berhenti sejenak, lalu raih ke atas dengan jari 5.",
        9: "Rentangan yang sama seperti di birama 3: jari 5 meraih ke atas dari C ke G, dan jari 4 mengambil G berikutnya.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan. Ibu jari tetap di G.",
        "Mainkan birama 7 sampai 13 dengan tangan kanan saja. Melodinya naik satu oktaf, lalu kembali.",
        "Gabungkan kedua tangan pada putaran pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Di bawah F pada melodi, akor menyusut menjadi D dan G. Jaga ibu jari di G, dan biarkan F terus berbunyi.",
        "Pakai tanda istirahat setelah C untuk mengangkat tangan kanan satu oktaf lebih tinggi.",
        "Tanda istirahat yang sama membawa tangan kanan turun lagi, untuk putaran terakhir.",
      ],
      tricky: {
        3: "Jari 5 merentang ke atas dari C ke G, sementara tangan kiri menahan akor C.",
        7: "Tahan C, angkat tangan kanan saat tanda istirahat, lalu daratkan jari 5 di G satu oktaf lebih tinggi.",
        13: "Tahan C tinggi, angkat tangan saat tanda istirahat, lalu daratkan jari 5 kembali di G di bawahnya.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan akor terurai saja, pada putaran kedua, dan angkat tanganmu di setiap tanda istirahat.",
        "Gabungkan kedua tangan pada putaran pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal di bagian tengah.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Ganti pedal di setiap ketukan, saat tangan kiri memulai akor baru.",
        "Kedua tangan terangkat saat tanda istirahat. Tangan kanan turun satu oktaf, dan tangan kiri kembali ke bas Alberti.",
      ],
      tricky: {
        7: "Tangan kanan melompat naik satu oktaf saat tanda istirahat. Bas Alberti berakhir dengan tanda istirahat, jadi tangan kiri bisa turun.",
        8: "Tangan kiri memulai akor terurainya di C rendah. Angkat tangan kiri di setiap tanda istirahat, dan ganti pedal di setiap ketukan.",
        13: "Tangan kanan turun kembali saat tanda istirahat, sementara akor terurai berakhir di F.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun untuk oktaf rendah, lalu naik lagi untuk akornya.",
        "Mainkan oktaf tangan kanan saja, dan jaga ibu jari dan jari 5 tetap berjarak satu oktaf.",
        "Mainkan arpeggio tangan kiri saja, pada putaran kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Dalam bas stride, lihat oktaf rendahnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Arpeggio naik dua oktaf di setiap ketukan. Mainkan dengan lembut, agar oktaf di atasnya berbunyi jelas.",
        "Jaga ibu jari dan jari 5 tetap berjarak satu oktaf, dan biarkan pergelangan tanganmu memantul.",
      ],
      tricky: {
        9: "Lepaskan oktaf C satu not seperdelapan lebih awal, agar tanganmu mendarat tepat waktu di oktaf G.",
        11: "Oktafnya turun bertahap ke G rendah, lalu melompat naik satu oktaf setelah tanda istirahat.",
        13: "Tahan oktaf C, lalu daratkan oktaf G saat arpeggio berakhir di F.",
      },
    },
  },
};
