/** The guide of *Ave Maria* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Schubert menggubah lagu ini pada 1825, dari terjemahan bahasa Jerman puisi The Lady of the Lake karya Walter Scott. " +
    "Lagu ini adalah lagu ketiga Ellen, dan diterbitkan pada 1826 sebagai bagian dari Opus 52-nya. " +
    "Film Fantasia (1940) karya Walt Disney memakainya di bagian terakhir, tepat setelah Night on Bald Mountain.",
  funFact:
    "Dalam Fantasia, lonceng di akhir Night on Bald Mountain seakan berubah menjadi lonceng gereja yang mengantar ke Ave Maria.",
  versions: {
    common: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 7 dengan tangan kanan saja. Tanganmu tetap di tempat yang sama.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not bas selama setengah birama atau lebih.",
        "Gabungkan kedua tangan pada 7 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Nyanyikan not-not panjang di dalam kepalamu. Melodi ini sebuah doa, jadi mainkan dengan lembut.",
        "Ibu jari berada di A dan jari 5 di E. Setiap not tangan kanan ada di bawah satu jari.",
        "Empat not terakhir sama panjang. Hitung keempatnya: satu, dua, tiga, empat.",
      ],
      tricky: {
        2: "Tahan E dengan jari 5 hampir sepanjang birama. Lalu jari 4 memainkan D, pendek dan lembut.",
        4: "Jari 3, 2, 1, dan 2 bergeser turun, lalu naik kembali. Tangan kiri pindah dari F ke G di tengah birama.",
        6: "Tahan D dengan jari 4. Lalu biarkan jari 3 dan 2 jatuh ke C dan B.",
      },
    },
    rare: {
      practice: [
        "Mainkan 4 birama pertama dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Not bas datang lebih dulu, lalu akor dua not menjawabnya.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Hitung delapan ketukan di setiap birama. Tangan kiri bermain pada ketukan 1, 3, 5, dan 7.",
        "Tangan kanan tidak pernah berpindah. Jari 1 dan 3 memainkan terts A dan C bersamaan.",
        "Mainkan tangan kiri lebih lembut daripada melodi, seperti harpa yang pelan di bawah suara penyanyi.",
      ],
      tricky: {
        3: "Tangan kanan beristirahat selama setengah birama. Terus hitung sementara tangan kiri bermain sendirian.",
        6: "Di tangan kiri, jari 2 mengambil B dan ibu jari mengambil F di atasnya.",
        7: "Tangan kiri menjangkau turun dari C ke E rendah dengan jari 5.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja. Setiap setengah birama bergulir naik dari not bas, lalu turun kembali.",
        "Mainkan terts dan sekst tangan kanan saja, dan tekan kedua not setiap pasangan not sebagai satu.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
        "Biarkan tangan kiri yang bergulir itu beriak dengan lembut, seperti harpa di bawah melodi.",
        "Melodinya adalah not teratas setiap pasangan not, jadi biarkan jari atas yang memimpin.",
      ],
      tricky: {
        9: "Setelah tanda istirahat, buka tanganmu ke sekst, D dan B mol. Jari 1 dan 5 menahannya hampir sepanjang birama.",
        12: "Terts itu bergeser turun, lalu naik kembali. Ibu jari mengambil E mol, lalu F, E mol, dan F lagi.",
        15: "Sekst itu berjalan turun satu tuts demi satu tuts, lalu tanganmu melompat naik kembali setelah tanda istirahat pendek.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: oktaf, empat not cepat, lalu tanda istirahat pendek untuk melompat.",
        "Mainkan oktaf tangan kanan saja. Biarkan tanganmu terbuka, dengan ibu jari dan kelingking siap.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pakai tanda istirahat pendek di akhir setiap setengah birama untuk melompat ke oktaf berikutnya.",
        "Melodinya kembali dalam oktaf. Biarkan kelingking menyanyikan not teratas.",
        "Mainkan akor terakhir dengan lembut, dan tahan sampai bunyinya hilang.",
      ],
      tricky: {
        9: "Setelah tanda istirahat, buka tanganmu ke sekst, D dan B mol. Jari 1 dan 5 menahannya hampir sepanjang birama.",
        17: "Oktafnya dimulai. Biarkan tanganmu terbuka dari ibu jari sampai kelingking, dan gerakkan sebagai satu.",
        18: "Pakai tanda istirahat pendek sebelum birama ini untuk melompat naik ke oktaf di D.",
      },
    },
  },
};
