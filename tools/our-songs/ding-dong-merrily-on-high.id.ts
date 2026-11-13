/** The guide of *Ding Dong Merrily on High* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Lagu Natal ini berawal dari sebuah lagu tari bernama Branle de l'Official. " +
    "Lagu itu dicetak pada 1589 dalam Orchésographie, buku tari karya rohaniwan Prancis Thoinot Arbeau. " +
    "Komponis Inggris George Ratcliffe Woodward menulis liriknya, dan lagu ini diterbitkan pada 1924. " +
    "Charles Wood menyusun harmoninya.",
  funFact: "Thoinot Arbeau adalah nama samaran. Orang di baliknya adalah Jehan Tabourot.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 2 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 7 dengan tangan kanan saja. Di sini melodinya mengalir turun dari G tinggi.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap setengah birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ibu jari mulai di G di bawah melodi, dan jari 4 memainkan C pertama.",
        "Mainkan C terakhir dengan ibu jari. Lalu kelingking meraih ke atas ke G tinggi.",
        "Rentetan not cepat itu turun satu tuts di setiap not panjang. Jari 5, 4, dan 3 mengambil tiga yang pertama, lalu tanganmu turun satu tuts demi satu tuts.",
      ],
      tricky: {
        1: "Jari 4 memainkan C dua kali, lalu jari 5, 4, 3, dan 2 turun dari D ke A. Ibu jari menahan G yang panjang.",
        5: "Rentetan not cepat dimulai di G tinggi dengan kelingking. Setiap not panjang memulai pola yang sama satu tuts lebih rendah.",
        7: "Jari 3, 2, dan 1 memainkan C, B, dan A, lalu B, C, dan A. Setelah itu jari-jarimu berjalan turun di B, A, dan G.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan.",
        "Mainkan birama 5 sampai 7 dengan tangan kanan saja. Di sini melodinya mengalir turun dari G tinggi.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Rentetan not cepat itu bergerak dalam kelompok: satu not panjang dan lima not cepat. Tahan setiap not panjang selama tiga not cepat.",
        "Tahan setiap akor dengan lembut, agar lonceng melodi berdenting di atasnya.",
        "Pada bait kedua, mainkan not rendah sedikit lebih keras dari akor sesudahnya.",
      ],
      tricky: {
        5: "Rentetan not cepat dimulai di G tinggi dengan kelingking. Setiap not panjang memulai pola yang sama satu tuts lebih rendah.",
        7: "Jari 3, 2, dan 1 memainkan C, B, dan A, lalu B, C, dan A. Setelah itu jari-jarimu berjalan turun di B, A, dan G.",
        15: "Not yang sama dengan birama 7, kini di atas not bas dan akor yang bergantian.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan rentetan not cepat di birama 5 sampai 7 dengan tangan kanan saja.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi berdenting di atasnya seperti lonceng.",
        "Setelah C terakhir, tangan kanan melompat naik satu oktaf, dan tangan kiri turun ke C rendah.",
        "Ganti pedal setiap setengah birama, saat tangan kiri memulai akor baru.",
      ],
      tricky: {
        9: "Tangan kanan memainkan bagian pembuka satu oktaf lebih tinggi. Tangan kiri turun ke C rendah untuk akor terurainya.",
        10: "Tangan kiri memainkan F, lalu G dengan tanda istirahat, dan melompat turun ke C rendah.",
        12: "Lompatan turun ke C yang sama seperti di birama 10. Lalu ibu jari kanan mengambil C terakhir, siap untuk G tinggi.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun untuk oktaf rendah, lalu naik lagi untuk akornya.",
        "Mainkan rentetan not cepat di birama 5 sampai 7 dengan tangan kanan saja, dan mainkan ayunan cepatnya dengan ringan.",
        "Mainkan arpeggio tangan kiri saja, pada bait kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Dalam bas stride, lihat oktaf rendahnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Setiap not panjang berayun bolak-balik sekali, seperti lonceng. Mainkan ayunannya lebih ringan dari melodi.",
        "Rentangkan ibu jari dan kelingking sejauh satu oktaf, dan biarkan pergelangan tanganmu memantul.",
      ],
      tricky: {
        9: "Oktaf di C, D, B, dan A datang dengan cepat. Jaga tanganmu dalam posisi oktaf, dan gerakkan dari pergelangan tangan.",
        11: "Bagian pembuka kembali dalam oktaf. Mainkan dengan rata, sementara arpeggio mengalir di bawahnya.",
        14: "Rentetan not cepat berayun turun ke B, sementara tangan kiri naik dalam arpeggio C, lalu arpeggio G, di bawahnya.",
      },
    },
  },
};
