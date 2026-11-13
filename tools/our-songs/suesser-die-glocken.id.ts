/** The guide of *Süßer die Glocken nie klingen* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Dalam bahasa Jerman, Süßer die Glocken nie klingen berarti “Tak pernah lonceng berbunyi lebih merdu”. " +
    "Teolog dan guru Friedrich Wilhelm Kritzinger menulis liriknya. " +
    "Bernhard Brähmig pertama kali mencetak lagu ini pada 1860, dalam kumpulan lagunya Liederstrauß, dengan judul Die Weihnachtsglocken. " +
    "Melodinya berasal dari lagu rakyat Seht, wie die Sonne dort sinket, yang dikenal di Thüringen.",
  funFact: "Sebelum berdentang untuk Natal, melodi ini bercerita tentang senja: judul lagu rakyatnya berarti “Lihatlah matahari terbenam di sana”.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja, tempat tangan melompat naik ke C tinggi.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu atau dua posisi di setiap birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap pasangan not bertitik terdiri dari satu not panjang dan satu not cepat, seperti lonceng yang berayun dan berdentang.",
        "Setelah ibu jari memainkan C, seluruh tangan melompat naik satu oktaf, dan jari 5 mendarat di C tinggi.",
        "Birama 11 dan 12 mengulang birama 9 dan 10. Mainkan sedikit lebih lembut, seperti gema.",
      ],
      tricky: {
        6: "Ibu jari melepas C lebih awal, dan jari 5 mendarat di C tinggi. Lalu jari 4 memainkan A.",
        8: "Ibu jari pindah dari D turun ke C dan menahannya. Hitung not panjang itu sampai habis.",
        16: "Gerakan yang sama dengan birama 8: ibu jari berjalan dari D turun ke C, dan lagu pun selesai.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan ketiga not setiap akor bersamaan.",
        "Mainkan birama 9 sampai 16 dengan tangan kiri saja, satu akor di setiap setengah birama.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan setiap akor dengan lembut, agar melodi yang berdentang tetap jelas di atasnya.",
        "Sekarang tangan kiri memainkan satu akor di setiap setengah birama. Hitung “1, 2”, dan tekan di setiap ketukan.",
        "Ibu jari kiri naik ke A untuk akor F, sementara tangan kanan melompat ke C tinggi.",
      ],
      tricky: {
        8: "Ibu jari kanan berjalan dari D turun ke C, sementara tangan kiri kembali ke akor C.",
        14: "Jari 5 melompat naik ke C tinggi, dan ibu jari kiri naik ke A untuk akor F.",
        16: "Ibu jari berjalan turun ke C, dan kedua tangan menahan akor C terakhir sampai akhir.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan akor terurai saja, pada putaran kedua, dan angkat tangan di setiap tanda istirahat.",
        "Gabungkan kedua tangan pada putaran pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi berdentang di atasnya seperti lonceng.",
        "Kedua tangan terangkat saat tanda istirahat. Tangan kanan melompat naik satu oktaf, dan tangan kiri turun ke C rendah.",
        "Ganti pedal setiap setengah birama, saat tangan kiri memulai akor baru.",
      ],
      tricky: {
        17: "Melodi mulai lagi satu oktaf lebih tinggi, sementara tangan kiri memulai akor terurainya di C rendah.",
        24: "Tahan C yang panjang sementara akor terurai terus mengalir. Angkat tangan kiri saat tanda istirahat di akhir.",
        32: "Ibu jari melepas D lebih awal. Lalu tangan turun ke akor terakhir, dengan jari 5 di C.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke oktaf rendah, lalu naik kembali ke akor.",
        "Mainkan birama 1 sampai 8 dengan tangan kanan saja, dan mainkan rentetan not cepat dengan ringan.",
        "Mainkan arpeggio tangan kiri saja, pada putaran kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Saat bermain stride, lihat oktaf rendahnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Rentetan not cepat setelah E yang panjang adalah dentang lonceng kecil. Mainkan lebih lembut daripada melodi.",
        "Jaga ibu jari dan kelingking tetap berjarak satu oktaf, dan biarkan pergelangan tangan memantul.",
      ],
      tricky: {
        6: "Tangan kanan melompat naik ke C tinggi, sementara bas stride melompat turun ke F rendah.",
        7: "A yang cepat terselip di antara kedua G. Jaga jari 4 tetap ringan, sementara bas stride berganti ke G.",
        14: "Lompatan yang sama dengan birama 6. Lepaskan C tepat waktu, agar tangan mendarat dengan tenang di C tinggi.",
      },
    },
  },
};
