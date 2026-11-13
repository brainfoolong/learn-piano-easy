/** The guide of *Habanera* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Carmen menyanyikan aria ini saat pertama kali muncul dalam opera Carmen karya Georges Bizet, yang pertama kali dipentaskan di Paris pada tahun 1875. " +
    "Bizet mengambil melodinya dari sebuah lagu karya Sebastián Iradier, karena mengira lagu itu lagu rakyat. " +
    "Film The Bad News Bears (1976) memakai musik Carmen dari awal sampai akhir.",
  funFact: "Habanera adalah tarian dari Kuba, dan namanya diambil dari Havana, ibu kotanya.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada birama 1 sampai 5, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja dari birama 5 sampai birama 9, di posisi baru yang lebih rendah.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap birama dan tidak pernah berpindah.",
        "Gabungkan kedua tangan pada 10 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap jari memainkan satu tuts, dari jari 5 sampai ibu jari. Melodinya meluncur turun, tuts demi tuts.",
        "Angkat tangan sejenak setelah B mol, lalu daratkan jari 5 di A.",
        "Mainkan luncuran turun itu dengan pelan dan halus, seperti kucing yang sedang menggeliat.",
      ],
      tricky: {
        5: "Di sini tangan berpindah turun. Angkat tangan setelah B mol, lalu daratkan jari 5 di A.",
        15: "Perpindahan yang sama dengan birama 5: angkat tangan setelah B mol, lalu daratkan jari 5 di A.",
        20: "Setelah tanda istirahat, jari 5 memainkan A dan jari 3 memainkan G. Jari 4 menunggu.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada birama 2 sampai 6, pelan-pelan, dan hitung tiga ketukan di setiap birama.",
        "Mainkan tangan kanan saja pada birama 7 sampai 9, tempat hiasan turn kecil muncul.",
        "Mainkan tangan kiri saja. Kelima jarinya tetap di D, E, F, G, dan A.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Satu A panjang, lalu dua A pendek. Bayangkan “taa, ta-ta”.",
        "Hiasan turn F, G, F memakai jari 2, 3, dan 2. Jaga jari-jari itu tetap dekat dengan tuts.",
        "Angkat tangan setelah B mol, lalu daratkan jari 5 di A.",
      ],
      tricky: {
        5: "Setelah berpindah, jari 5 mendarat di A, lalu memainkannya dua kali lagi, pendek dan cepat.",
        15: "Sama seperti birama 5: daratkan jari 5 di A, lalu mainkan dua A pendek.",
        20: "Setelah tanda istirahat, jari 5 memainkan A dan jari 3 memainkan G. Jari 4 menunggu.",
      },
    },
    epic: {
      practice: [
        "Mainkan ritme habanera dengan tangan kiri saja: panjang, pendek, lalu dua not yang rata.",
        "Mainkan terts tangan kanan saja, dan tekan kedua not setiap pasangan not seperti satu not.",
        "Gabungkan kedua tangan pada birama 1 sampai 6, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Not pendek tangan kiri mengantar ke birama berikutnya. Biarkan not itu memantul.",
        "Melodinya adalah not teratas setiap terts, jadi biarkan jari yang di atas memimpin.",
        "Mainkan bas dengan lembut dan ringan, seperti langkah seorang penari di bawah suara penyanyi.",
      ],
      tricky: {
        5: "Tangan kanan turun ke A, sementara tangan kiri memulai D panjangnya. Latih keduanya bersamaan, pelan-pelan.",
        17: "Di sini terts-terts berbelok dengan cepat. Bergantian antara jari 1 dan 3 dengan jari 2 dan 4.",
        20: "Setelah tanda istirahat, jari 2 dan 4 memainkan F dan A. Lalu terts-terts itu berjalan turun.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: oktaf rendah, A yang pendek, lalu dua akor.",
        "Mainkan oktaf tangan kanan saja. Jaga tangan tetap terbuka, dan gerakkan tangan sebagai satu kesatuan.",
        "Gabungkan kedua tangan pada putaran kedua, tempat melodi naik satu oktaf.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Lihat oktaf rendahnya, dan biarkan tangan menemukan akor-akornya dengan rabaan.",
        "Ibu jari dan kelingking memainkan setiap oktaf. Geser keduanya turun bersamaan, satu tuts setiap kali.",
        "Mainkan not teratas setiap oktaf sedikit lebih keras, agar melodinya bernyanyi.",
      ],
      tricky: {
        12: "Tangan kanan melompat naik ke oktaf D. Pakai tanda istirahat di birama 11 untuk sampai ke sana.",
        17: "Di sini oktaf-oktaf berbelok dengan cepat. Biarkan pergelangan tangan lemas, dan biarkan lengan menuntun tangan.",
        21: "Ibu jari dan kelingking meraih tuts hitam untuk C kres. Majukan tangan sedikit.",
      },
    },
  },
};
