/** The guide of *Carol of the Bells* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Shchedryk adalah lagu Tahun Baru dari Ukraina, dan namanya berasal dari “Malam yang Melimpah”. " +
    "Mykola Leontovych, seorang komponis, dirigen, dan guru asal Ukraina, menyusunnya dari sebuah pola empat not dalam birama 3/4. " +
    "Lagu ini pertama kali dinyanyikan pada Desember 1916 di Kyiv. " +
    "Kemudian Peter J. Wilhousky menjadikannya lagu berbahasa Inggris Carol of the Bells.",
  funFact: "Wilhousky memberinya lirik tentang lonceng karena melodinya mengingatkannya pada lonceng tangan.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja: C, B, C, A, berulang-ulang.",
        "Mainkan birama 12 sampai 16 dengan tangan kanan saja, naik sampai A tinggi lalu turun kembali.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Keempat not itu berdenting seperti lonceng kecil. Mainkan dengan ringan dan rata.",
        "Ibu jari memainkan C terakhir, agar kelingking bisa menjangkau naik ke A tinggi.",
        "Pada E ketiga, ganti jari 2 dengan jari 3. Tangan tetap di tempatnya.",
      ],
      tricky: {
        12: "Mainkan C terakhir dengan ibu jari, dan pakai tanda istirahat pendek untuk membuka tangan ke A tinggi.",
        18: "Jari 4 dan 5 berayun di antara D dan E, lalu jari 3 mendarat di C.",
        20: "Sama seperti birama 18. Tahan C sepanjang nilai not setengahnya sebelum lonceng kembali berbunyi.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Tekan ketiga not setiap akor bersamaan.",
        "Mainkan birama 17 sampai 20 dengan tangan kanan saja, dan angkat tangan setelah G kres.",
        "Gabungkan kedua tangan pada 12 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Tangan kiri tidak memainkan C, agar tidak pernah bergesekan dengan B pada melodi.",
        "Pindahkan A terakhir ke jari 3. Dengan begitu ibu jari bebas untuk E rendah.",
        "Mainkan G kres dengan pendek, angkat tangan, lalu daratkan ibu jari di A.",
      ],
      tricky: {
        12: "Ibu jari memainkan C terakhir, agar kelingking bisa menjangkau A tinggi di birama berikutnya.",
        17: "Mainkan G kres dengan pendek, lalu angkat tangan dan daratkan ibu jari di A.",
        19: "Gerakan naik yang sama seperti birama 17. Angkat tangan setelah G kres, dan jaga ketukan tetap stabil.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja sampai berayun dengan sendirinya: rendah, naik, naik, puncak, turun, turun.",
        "Mainkan sekst dan terts tangan kanan saja, dan jaga kedua not setiap pasangan tetap bersamaan.",
        "Mainkan bagian naik di birama 17 sampai 20 dengan tangan kanan saja. Ibu jari menyusup di A.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Bas turun ke not di bawahnya setiap birama, dari A sampai E, sementara lonceng terus berdenting di atasnya.",
        "Melodinya adalah not teratas setiap sekst, jadi biarkan jari atas memimpin.",
        "Setelah G kres, susupkan ibu jari ke A, dan tangan terus naik.",
      ],
      tricky: {
        9: "Tangan melompat naik dari sekst rendah ke G dan E. Angkat tangan saat tanda istirahat pendek di akhir birama 8.",
        10: "Ibu jari memainkan G, F, G, dan E, sementara jari 5 dan 4 mendentingkan melodi di atasnya.",
        19: "Susupkan ibu jari setelah G kres, tanpa sentakan pada bunyinya.",
      },
    },
    legendary: {
      practice: [
        "Mainkan oktaf tangan kiri saja. Oktaf itu mendentingkan pola empat not yang sama, dua oktaf lebih rendah.",
        "Mainkan bas stride saja: lompat turun untuk oktaf, lalu naik kembali untuk akor.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Kedua tangan mendentingkan pola yang sama, berjarak dua oktaf, seperti lonceng besar dan lonceng kecil.",
        "Tangan kiri terus memainkan pola empat not di bawah melodi, agar lonceng tidak pernah berhenti.",
        "Kedua tangan naik bersama. Ibu jari kanan menyusup, dan jari 3 kiri menyeberang.",
      ],
      tricky: {
        6: "Tangan kanan mendentingkan E rendahnya di antara not melodi, sementara tangan kiri melompat untuk bas stride.",
        15: "Mainkan akor G dengan ringan, lalu mainkan E dan D dengan jari 5 dan 4, dan angkat tangan untuk akor berikutnya.",
        16: "Tangan kanan mengulang satu akor sementara tangan kiri melompat. Biarkan A di atas terus berbunyi.",
      },
    },
  },
};
