/** The guide of *O Holy Night* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Komponis Prancis Adolphe Adam menggubah puisi Minuit, chrétiens karya Placide Cappeau menjadi lagu, dengan judul Cantique de Noël. " +
    "Lagu ini pertama kali dinyanyikan pada Misa Tengah Malam di Roquemaure, di selatan Prancis, pada 1847. " +
    "Versi bahasa Inggris yang paling terkenal, O Holy Night, ditulis pada 1855 oleh John Sullivan Dwight, kritikus sekaligus pendeta dari Amerika.",
  funFact: "Kini Adolphe Adam paling dikenal lewat baletnya, Giselle.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 7 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan bagian yang menanjak, dari birama 8 sampai akhir, dengan tangan kanan saja.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi, lalu berganti di tengah setiap birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Tahan not panjang di setiap pasangan not bertitik. Lalu not pendeknya langsung mengantar ke not berikutnya.",
        "Pakai tanda istirahat di akhir birama 7 untuk pindah naik. Jari 3 mendarat di C tinggi.",
        "Inilah bagian menanjak yang membuat lagu ini terkenal. Biarkan bunyinya makin keras sampai E tinggi.",
      ],
      tricky: {
        2: "Kelingking memainkan C tinggi, dan tangan berjalan turun ke C tengah dengan jari 3, 2, dan 1.",
        4: "Ibu jari menjangkau turun ke F setelah A, lalu kelingking merentang naik ke C tinggi.",
        8: "Tangan pindah naik setelah tanda istirahat, dengan jari 3 di C tinggi. Lalu ibu jari memainkan A.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 7 birama pertama, dan beri setiap not pendek tempatnya.",
        "Mainkan tangan kiri saja. Tahan setiap akor sampai akor berikutnya datang.",
        "Gabungkan kedua tangan pada bagian menanjak di birama 8 sampai 10.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan G kedua dengan jari 5. Lalu jari 3, 2, dan 1 berjalan turun ke C.",
        "F kres membuat melodi terdengar sedih sejenak. Mainkan dengan lembut.",
        "Enam birama terakhir datang sekali lagi. Mainkan sedikit lebih lembut, seperti gema.",
      ],
      tricky: {
        2: "Ganti dari jari 3 ke jari 5 pada G yang berulang, agar tangan bisa berjalan turun ke C.",
        4: "Jari 2 memainkan kedua F kres, dan ibu jari memainkan E tepat sesudahnya.",
        8: "Tangan pindah naik setelah tanda istirahat, dengan jari 3 di C tinggi. Lalu ibu jari memainkan A.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan refrein satu oktaf lebih tinggi dengan tangan kanan saja.",
        "Gabungkan kedua tangan pada 7 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut dan rata, agar melodi bernyanyi di atasnya.",
        "Ganti pedal di setiap akor baru, agar bas tidak pernah terdengar kabur.",
        "Setelah C terakhir, lompatkan tangan kanan naik satu oktaf untuk refrein.",
      ],
      tricky: {
        4: "Tangan kanan memainkan F kres, sementara tangan kiri terus bergulir di E. Jaga kedua tangan tetap ringan.",
        13: "Melodi pulang ke C, sementara tangan kiri berpindah dari C ke G dan kembali lagi.",
        19: "Penutupnya sama seperti di birama 13, satu oktaf lebih tinggi. Tahan C terakhir sampai selesai.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk oktaf, lalu ke atas untuk akornya.",
        "Mainkan bagian menanjak dalam oktaf dengan tangan kanan saja. Jaga tangan dalam posisi oktaf.",
        "Mainkan oktaf terurai pada refrein dengan tangan kiri saja.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktaf rendahnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Mainkan setiap oktaf dengan ibu jari dan kelingking, dan jaga tangan dalam posisi itu.",
        "Di atas oktaf terurai, biarkan tangan kanan bernyanyi lantang. Tangan kiri tetap lembut.",
      ],
      tricky: {
        6: "Oktaf berayun di antara G dan A, lalu turun ke D. Jaga tangan dalam posisi oktafnya.",
        7: "Ayunan yang sama seperti di birama 6, lalu naik ke C tinggi. Biarkan bas stride menjaga ketukannya.",
        12: "Oktaf melompat dari G naik ke E tinggi. Pakai jeda singkat sebelumnya untuk melompat.",
      },
    },
  },
};
