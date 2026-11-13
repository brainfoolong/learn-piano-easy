/** The guide of *In the Hall of the Mountain King* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Grieg menulis musik ini untuk drama Peer Gynt karya Henrik Ibsen, yang pertama kali dipentaskan di Christiania, kini Oslo, pada tahun 1876. " +
    "Dalam adegan ini, para troll mengerumuni Peer di balairung raja mereka. " +
    "Melodi pendek yang sama kembali lagi dan lagi, setiap kali lebih keras dan lebih cepat, sampai berakhir dengan dentuman. " +
    "Film The Social Network memakainya untuk mengiringi lomba dayung.",
  funFact: "Grieg sendiri menulis bahwa karya ini berbau kotoran sapi dan kesombongan para troll, dan ia hampir tak tahan mendengarnya.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not.",
        "Sekarang tangan kanan saja pada birama 9 sampai 16, tempat melodi naik lebih tinggi.",
        "Tangan kiri menahan satu kuint atau satu not di setiap birama. Gabungkan kedua tangan pada 8 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Di sini setiap jari punya tutsnya sendiri: ibu jari di A, kelingking di E.",
        "Mainkan dengan pendek dan lembut, seperti troll yang berjingkat-jingkat di dalam liang batu.",
        "Di sini melodi naik lebih tinggi. Biarkan bunyinya sedikit makin keras, seolah para troll mulai terbangun.",
      ],
      tricky: {
        4: "Di birama 3, jari 4 maju ke dalam untuk D kres, dan di sini jari 2 maju ke dalam untuk B mol.",
        9: "Ibu jari mendarat di E, lalu jari 2, 3, dan 4 naik, setiap jari satu tuts. Tangan kiri turun ke E.",
        17: "Melodi mulai lagi. Saat tanda istirahat, bawa ibu jari kembali turun ke A, dan tangan kiri kembali ke A.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Tangan kiri bergantian di antara dua not pada setiap ketukan, seperti derap langkah troll yang berbaris.",
        "Mainkan tangan kanan saja pada birama 3 dan 4, dan perhatikan tanda kres dan tanda molnya.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Gabungkan kedua tangan pada birama 9 sampai 16, tempat melodi naik.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "D kres dan B mol adalah tuts hitam. Jari 4 dan 2 maju sedikit lebih ke dalam.",
        "Kedua tangan bermain pada setiap ketukan. Ikutlah berbaris, dan jaga ketukannya tetap rata.",
        "Di bagian ini, para troll makin mendekat. Mainkan sedikit lebih keras daripada awalnya.",
      ],
      tricky: {
        4: "Jari 2 maju ke dalam untuk B mol, sementara tangan kiri bergantian di antara G dan D.",
        9: "Pakai tanda istirahat untuk menurunkan tangan kiri ke E rendah. Ibu jari kanan memulai jalan naik di E.",
        17: "Kedua tangan kembali ke A saat tanda istirahat, dan melodi mulai sekali lagi.",
      },
    },
    epic: {
      practice: [
        "Mainkan akor terurai tangan kiri saja sampai mengalir dengan sendirinya: rendah, tengah, tinggi, tengah.",
        "Mainkan tangan kanan saja pada birama 5 sampai 8, tempat ibu jari menyusup.",
        "Mainkan tema dengan tangan kiri saja, mulai birama 17.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan bunyinya makin keras menjelang akhir.",
      ],
      tips: [
        "Bas bergeser turun dari C kres ke C. Geseran yang seram itulah yang membuat para troll terdengar mengendap-endap.",
        "Setelah C kres dengan jari 2, ibu jari menyusup untuk memainkan D, lalu tangan naik.",
        "Sekarang tangan kiri memainkan melodi. Tangan kanan hanya mengetuk akor pendek di antara ketukan.",
      ],
      tricky: {
        9: "Turunkan tangan kiri ke F kres rendah saat tanda istirahat yang pendek. Ibu jari kanan memulai jalan naik.",
        17: "Kedua tangan bertukar tugas. Tangan kiri memainkan melodi tepat pada ketukan, dan tangan kanan mengetuk di antaranya.",
        23: "Tangan kiri naik melalui F kres, A kres, C kres, dan E, lalu melepaskannya untuk mencari B rendah.",
      },
    },
    legendary: {
      practice: [
        "Mainkan oktaf tangan kiri saja, pendek dan dipetik, dengan tanda istirahat setelah setiap oktaf.",
        "Mainkan oktaf tangan kanan saja. Jaga tangan dalam satu posisi, dan gerakkan tangan sebagai satu kesatuan.",
        "Mainkan oktaf tangan kiri yang terus mendorong saja, delapan dalam satu birama.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dari lembut di awal sampai keras di akhir.",
      ],
      tips: [
        "Mulailah dengan lembut. Seluruh karya ini makin keras sampai akhir, jadi jangan langsung keras, agar bunyinya masih bisa terus bertambah.",
        "Untuk oktaf, ibu jari dan kelingking menjaga posisi yang sama. Biarkan pergelangan tangan yang bergerak.",
        "Inilah dentuman terakhir para troll. Mainkan setiap akor dengan keras dan pendek.",
      ],
      tricky: {
        9: "Tangan kanan memulai oktafnya, dan tangan kiri memulai not seperdelapannya. Biarkan kedua tangan tetap lemas.",
        13: "Oktafnya naik lagi melalui F kres, G kres, A kres, dan B. Biarkan pergelangan tangan memantul dari tuts ke tuts.",
        27: "Akornya bergantian antara B minor dan F kres mayor. Jaga jari 1, 2, 3, dan 5 dalam posisinya.",
      },
    },
  },
};
