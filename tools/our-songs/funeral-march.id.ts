/** The guide of *Funeral March* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mars pemakaman ini adalah bagian ketiga dari Sonata Piano No. 2 karya Chopin, yang diterbitkan pada 1840. " +
    "Mars ini dimainkan di pemakaman Chopin sendiri, dan di pemakaman kenegaraan John F. Kennedy. " +
    "Film dan kartun sering mengutip bagian pembukanya untuk adegan pemakaman.",
  funFact: "Banyak ahli memperkirakan mars ini ditulis pada 1837, dua tahun sebelum Chopin menyelesaikan bagian lain sonatanya.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Akhirnya melodi bergerak menjauh dari D.",
        "Sekarang tangan kiri saja. Tangan kiri berayun di antara D dan B mol, seperti lonceng yang pelan.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Hitung sampai empat pada D pertama. Lalu D panjang dan D pendek mengantar ke birama berikutnya.",
        "Mainkan dengan lembut dan berat, seperti langkah pelan di belakang peti mati.",
        "Ibu jari terus bersandar di C kres. Ibu jari hanya bermain di birama 7, 12, dan 15.",
      ],
      tricky: {
        7: "Tahan E selama tiga hitungan, lalu mainkan D selama satu hitungan. Tahan D selama tiga hitungan, dan ibu jari memainkan C kres paling akhir.",
        12: "Jari 3 menahan E selama empat hitungan. Lalu ibu jari memainkan C kres, dan tangan kiri tetap di A.",
        15: "Empat not yang rata: E, F, E, lalu C kres dengan ibu jari. Jaga setiap jari di tutsnya sendiri.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Tangan kiri membunyikan akor di setiap ketukan, seperti dentang lonceng.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada birama 9 sampai 16, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Mainkan akor tangan kiri dengan lembut dan rata, agar melodi tetap di atas.",
        "Di antara kedua akor, hanya not rendah yang bergerak. Jari 2 dan 1 tetap di D dan F.",
        "Akhiri dengan D dan F bersamaan, dan biarkan keduanya memudar perlahan.",
      ],
      tricky: {
        10: "Tekan D dan F bersamaan dengan jari 2 dan 4. Lalu jari 5 memainkan G, dan jari 4 memainkan F.",
        11: "Tangan kiri memainkan G, B mol, dan D dengan jari 5, 4, dan 2. Tangan kanan berjalan turun dari G.",
        12: "Ibu jari dan jari 3 menekan C kres dan E bersamaan. Tangan kiri hanya memainkan A, dengan jari 5.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan birama 11 dengan tangan kanan saja. Biarkan ibu jari menyusup ke F.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
        "Biarkan ibu jari menyusup ke F setelah jari 3 memainkan E mol.",
        "Kini melodinya ada di atas setiap pasangan not. Biarkan jari 5 menyanyikannya.",
      ],
      tricky: {
        19: "Jaga tanganmu tetap terbuka, dengan ibu jari di E mol dan jari 5 di C. Angkat ibu jari untuk C yang pendek.",
        21: "Seperti di birama 19, ibu jari dan jari 5 memainkan sekst. Lalu jari 5 memainkan C sendirian.",
        22: "Jari 4 mengambil C dalam sekst itu, sehingga jari 5 bebas meraih ke atas ke E mol.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: satu oktaf tepat pada ketukan, lalu satu akor, masing-masing dengan tanda istirahat pendek untuk melompat.",
        "Mainkan arpeggio tangan kiri saja. Saat naik, jari 3 menyeberang di atas ibu jari.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Mainkan oktaf dengan berat dan pelan, seperti lonceng besar. Biarkan kelingking memimpin.",
        "Dalam arpeggio, jari 3 menyeberang di atas ibu jari, dan ibu jari menyusup saat turun.",
        "Mainkan not teratas setiap akor sedikit lebih keras dari yang lain.",
      ],
      tricky: {
        9: "Arpeggio dimulai. Jari 3 menyeberang di atas ibu jari ke E mol, sementara tangan kanan berjalan turun dari G.",
        14: "Tangan kiri mulai di F rendah dengan jari 5. Jari 3 menyeberang di atas ibu jari ke A mol.",
        22: "Angkat tanganmu saat tanda istirahat pendek, lalu mendarat di E mol, A mol, C, dan E mol.",
      },
    },
  },
};
