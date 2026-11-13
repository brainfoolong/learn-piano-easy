/** The guide of *Ihr Kinderlein, kommet* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Judul Jerman Ihr Kinderlein, kommet berarti “Datanglah, anak-anak kecil”. " +
    "Pastor Christoph von Schmid menulis liriknya, dan menamai puisinya “Anak-Anak di Palungan”. " +
    "Johann Abraham Peter Schulz menulis melodinya pada 1794 untuk sebuah puisi musim semi karya Wilhelm Gottlieb Becker. " +
    "Kemudian lirik Schmid dinyanyikan dengan melodi musim semi itu, dan bersama-sama keduanya menjadi lagu Natal.",
  funFact: "Christoph von Schmid juga menulis cerita untuk anak-anak, seperti Das Blumenkörbchen, “Keranjang Bunga”.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 5 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada 4 birama terakhir, tempat melodi naik sampai C tinggi.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap birama dimulai dengan satu not panjang dan diakhiri dengan dua not pendek, seperti buaian yang berayun.",
        "Birama 13 punya tanda istirahat setelah A pertama. Angkat jarimu, hitung istirahatnya, lalu mainkan A lagi.",
        "Jari 5 memainkan C tinggi. Lalu tanganmu turun, dan ibu jari berakhir di B.",
      ],
      tricky: {
        2: "Jari 4 memainkan G, dan jari 2 turun ke E. Biarkan tanganmu diam di atas D sampai A.",
        15: "Jari 5 merentang ke atas ke C tinggi, lalu jari 3 dan 2 memainkan G dan E.",
        16: "Jari 3 dan 2 memainkan F dan D, dan ibu jari meraih ke bawah ke B.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan ketiga not setiap akor bersamaan.",
        "Mainkan tangan kiri saja pada birama 10 sampai 17, dua akor di setiap birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan setiap akor dengan lembut, agar melodi yang berayun tetap jelas di atasnya.",
        "Ibu jari kiri naik ke A untuk akor F di birama 13, dan kembali ke G di birama 14.",
        "Sekarang tangan kiri memainkan satu akor di setiap setengah birama. Hitung “1, 2”, dan tekan pada setiap ketukan.",
      ],
      tricky: {
        14: "Jari 3 memainkan G tiga kali, sementara ibu jari kiri bergeser kembali dari A ke G.",
        15: "Jari 5 meraih ke atas ke C tinggi, lalu jari 3 kembali ke G.",
        16: "Jari 3, 2, dan 1 turun ke F, D, dan B di atas akor G7.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan akor terurai saja, pada putaran kedua, dan angkat tanganmu di setiap tanda istirahat.",
        "Gabungkan kedua tangan pada putaran pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Kedua tangan terangkat pada tanda istirahat. Tangan kanan melompat ke atas ke G tinggi, dan tangan kiri turun ke C rendah.",
        "Ganti pedal di setiap setengah birama, saat tangan kiri memulai lagi polanya.",
      ],
      tricky: {
        17: "Tahan C, angkat tanganmu pada tanda istirahat, lalu daratkan jari 4 di G tinggi.",
        18: "Melodi dimulai lagi satu oktaf lebih tinggi, sementara tangan kiri memulai akor terurainya di C rendah.",
        21: "Melodi beristirahat setelah E yang panjang. Hitung istirahatnya, lalu jari 4 memainkan G.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk oktaf rendah, lalu kembali ke atas untuk akornya.",
        "Mainkan tangan kanan saja pada birama 2 sampai 9, dan mainkan kelompok not cepat dengan ringan.",
        "Mainkan arpeggio tangan kiri saja, pada putaran kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktaf rendahnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Kelompok not cepat setelah E yang panjang adalah loncatan kecil yang ringan. Mainkan lebih lembut daripada melodinya.",
        "Jaga ibu jari dan kelingking berjarak satu oktaf, dan biarkan pergelangan tanganmu memantul.",
      ],
      tricky: {
        20: "Oktafnya melangkah ke F, D, dan F di atas arpeggio G. Jaga tanganmu dalam posisi oktaf.",
        24: "Gerakan yang sama dengan birama 20. Biarkan arpeggio terus mengalir di bawah oktafnya.",
        29: "Oktaf A datang setelah tangan terangkat sebentar. Hitung istirahatnya, lalu mainkan A lagi.",
      },
    },
  },
};
