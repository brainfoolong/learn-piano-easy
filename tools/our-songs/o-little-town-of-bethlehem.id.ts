/** The guide of *O Little Town of Bethlehem* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Phillips Brooks, seorang pendeta Episkopal di Philadelphia, menulis liriknya pada 1868 untuk gerejanya. " +
    "Ia terinspirasi oleh kunjungannya ke desa Betlehem tiga tahun sebelumnya. " +
    "Pemain orgelnya, Lewis Redner, menulis melodi ini untuk lirik itu, dan melodinya bernama St. Louis. " +
    "Amerika Serikat dan Kanada menyanyikan lagu Natal ini dengan melodi ini, sedangkan Inggris Raya dan Irlandia memakai melodi lain.",
  funFact: "Redner bercerita bahwa ia terbangun di malam hari karena mendengar alunan malaikat berbisik di telinganya, lalu segera mencatat melodinya.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 5 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 6 sampai 9 dengan tangan kanan saja, tempat melodi naik ke A tinggi.",
        "Sekarang tangan kiri saja. Tangan kiri berganti posisi hanya di awal atau di tengah birama.",
        "Gabungkan kedua tangan pada seluruh lagu, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "D kres adalah tuts hitam di antara D dan E. Jari 2 singgah sebentar di sana, lalu jari 3 kembali ke E.",
        "Angkat tangan sejenak sebelum A rendah, dan sekali lagi setelah G rendah. Ibu jari memainkan keduanya.",
        "Dua not cepat, B dan C, berbagi satu ketukan.",
      ],
      tricky: {
        6: "Jari 3 memainkan E dua kali, lalu jari 5 menjangkau naik ke A, dan jari 4 memainkan G.",
        10: "Jari 5 mengambil alih E, lalu jari 5, 4, dan 3 berjalan turun ke C.",
        15: "Angkat tangan setelah F, dan daratkan ibu jari di A rendah. Lalu angkat lagi, agar jari 5 mendarat di A tinggi.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan.",
        "Mainkan tangan kanan saja pada 5 birama pertama, bagian pembuka lagu.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Di bawah D kres, tangan kiri hanya memainkan C dan G, jadi tak ada E yang bergesekan dengannya.",
        "Tahan setiap akor dengan lembut sepanjang nilainya, seperti orgel yang tenang.",
        "Angkat tangan kanan setelah A, dan daratkan jari 5 di A satu oktaf lebih tinggi.",
      ],
      tricky: {
        6: "Jari 3 memainkan E dua kali, lalu jari 5 menjangkau naik ke A. Di tengah birama, tangan kiri pindah dari C ke F.",
        10: "Jari 5 mengambil alih E, dan melodi berjalan turun ke C. Di tengah birama, tangan kiri berganti ke akor G7.",
        15: "Angkat tangan kanan dua kali: sekali untuk A rendah, dan sekali untuk A satu oktaf di atasnya.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan bas Alberti yang lebih cepat saja, pada bait kedua.",
        "Gabungkan kedua tangan pada bait pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Angkat tangan kanan setelah C yang panjang, dan daratkan jari 3 di E satu oktaf lebih tinggi.",
        "Ganti pedal di setiap setengah birama, saat tangan kiri memulai akor baru.",
      ],
      tricky: {
        17: "Tahan C yang panjang dengan ibu jari, lalu angkat tangan dan daratkan jari 3 di E satu oktaf lebih tinggi.",
        19: "Melodi turun dari F ke A, sementara tangan kiri memainkan bas Alberti dua kali lebih cepat.",
        33: "Angkat tangan setelah D yang pendek, lalu mainkan E, G, dan C bersamaan dengan jari 1, 2, dan 5.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk oktaf rendah, lalu kembali ke atas untuk akornya.",
        "Mainkan oktaf tangan kanan saja, dengan ibu jari dan jari 5 dalam satu posisi.",
        "Mainkan arpeggio tangan kiri saja, pada bait kedua.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktaf rendahnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Jaga ibu jari dan jari 5 tetap berjarak satu oktaf, dan angkat tangan sebelum setiap gerakan yang lebih jauh.",
        "Biarkan oktafnya berdenting seperti lonceng, dan mainkan arpeggio di bawahnya dengan lembut.",
      ],
      tricky: {
        20: "Oktaf bergeser ke C, B, C, dan D, lalu terangkat dan turun ke G. Jaga ibu jari dan jari 5 dalam satu posisi.",
        22: "Setelah E kedua, angkat oktaf dan daratkan di A, satu kuart lebih tinggi.",
        31: "Angkat oktaf dua kali: turun ke A rendah, lalu naik satu oktaf penuh ke A tinggi.",
      },
    },
  },
};
