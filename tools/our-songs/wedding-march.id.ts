/** The guide of *Wedding March* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mendelssohn menulis mars ini pada 1842 sebagai bagian dari musiknya untuk A Midsummer Night's Dream karya Shakespeare. " +
    "Mars ini menjadi favorit di pesta pernikahan setelah Victoria, Putri Sulung Kerajaan, memilihnya untuk pernikahannya sendiri pada 1858. " +
    "Film-film masih memutarnya setiap kali sepasang pengantin meninggalkan altar.",
  funFact:
    "Pernikahan pertama yang diketahui memakainya berlangsung di Tiverton, Inggris, pada 2 Juni 1847, dimainkan oleh pemain orgel Samuel Reay.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja pada 4 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kanan saja pada birama 4 sampai 8. Tanganmu bergeser turun ke C pada G yang panjang.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not atau satu kuint kosong selama satu birama penuh atau setengah birama.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Mulai dengan ibu jari di F kres dan jari 5 di C tinggi. Melodinya tetap berada di bawah tanganmu.",
        "Angkat tanganmu tepat sebelum G berakhir, lalu geser ke bawah. Sesudah itu jari 4 mendarat di F.",
        "Mainkan dengan cerah dan megah, seperti pintu gereja yang terbuka lebar.",
      ],
      tricky: {
        2: "Tahan B dengan jari 4 selama enam ketukan. Lalu ibu jari memainkan F kres.",
        4: "Tanganmu sudah bergeser ke bawah. Jari 4 memainkan F, dan jari 2 memainkan D.",
        11: "Empat not yang rata: E, F, G, lalu E lagi. Jari 3, 4, dan 5 naik, lalu jari 3 kembali.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kiri saja. Tangan kiri memainkan satu akor di setiap ketukan, seperti drum band yang berbaris.",
        "Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not.",
        "Gabungkan kedua tangan pada birama 9 sampai 16, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Dari akor F ke akor D, jari 5 tetap di A. Hanya not-not atas yang bergerak.",
        "Mainkan akor dengan pendek dan rata, agar melodi berdenting jelas di atasnya.",
        "Akhiri dengan C dan E bersamaan. Jari 1 dan 3 menekan keduanya sebagai satu.",
      ],
      tricky: {
        1: "Tahan C tinggi dengan jari 5. Tangan kiri memainkan A, C, dan F di setiap ketukan.",
        2: "Tangan kiri memainkan A dan D. Tahan B di tangan kanan selama akornya berulang.",
        4: "Jari 4 memainkan F, dan jari 2 memainkan D. Tangan kiri tetap di B, D, dan G.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan tangan kanan saja pada birama 9. Susupkan ibu jari ke F.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Ganti pedal di setiap not bas baru, dua kali dalam setiap birama.",
        "Susupkan ibu jari ke F setelah jari 3 memainkan E.",
        "Sekarang melodinya ada di not teratas setiap pasangan. Biarkan jari yang di atas menyanyikannya.",
      ],
      tricky: {
        4: "Angkat tanganmu di akhir birama 3. Lalu jari 4 mendarat di F, sementara tangan kiri mengalir di G, D, dan B.",
        21: "Rentangkan tanganmu di atas E dan C, yang berjarak satu sekst. Angkat tepat sebelum birama berikutnya.",
        22: "Mainkan C dan E, lalu B dan D, lalu C dan E yang cepat. Setiap kali, ibu jari bergeser satu tuts.",
      },
    },
    legendary: {
      practice: [
        "Mainkan tangan kiri saja: satu oktaf tepat pada ketukan, lalu satu akor, masing-masing dengan istirahat singkat untuk melompat.",
        "Mainkan arpeggio tangan kiri saja. Jari 3 menyeberang di atas ibu jari saat naik.",
        "Mainkan akor tangan kanan saja, dan biarkan jari yang di atas menyanyikan melodinya.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Mainkan oktaf seperti terompet di pernikahan kerajaan. Biarkan kelingking memimpin.",
        "Pada arpeggio, jari 3 menyeberang di atas ibu jari, dan ibu jari menyusup saat turun.",
        "Mainkan not teratas setiap akor sedikit lebih keras daripada not lainnya.",
      ],
      tricky: {
        10: "Tangan kiri naik dua oktaf dari G rendah. Tangan kanan berjalan naik dari D dengan jari 1 sampai 4.",
        12: "Tangan kiri naik lagi dari G. Tangan kanan melompat dari D naik ke G dengan jari 4.",
        17: "Rentangkan tangan kanan di atas C, F, A, dan C. Tangan kiri melompat dari oktaf F rendah ke akornya.",
      },
    },
  },
};
