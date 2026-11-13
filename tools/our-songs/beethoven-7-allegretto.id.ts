/** The guide of *Symphony No. 7: Allegretto* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven menulis Simfoni Ketujuh pada tahun 1811 dan 1812. " +
    "Pada pertunjukan perdananya di Wina, Desember 1813, penonton meminta Allegretto dimainkan sekali lagi. " +
    "Film The King's Speech (2010) memutarnya sebagai latar pidato radio Raja pada masa perang.",
  funFact: "Melodinya mula-mula terdengar rendah, dimainkan oleh viola dan selo.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 4 dengan tangan kanan saja. Ibu jarimu memainkan setiap E.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja. Di sana melodi naik sampai G.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap birama.",
        "Gabungkan kedua tangan, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ucapkan “panjang, pendek, pendek” sambil memainkan birama pertama. Ritme itulah seluruh karya ini.",
        "Tanganmu tidak pernah berpindah. Jari 1, 2, dan 3 memainkan E, F kres, dan G.",
        "Mulai dengan sangat lembut, lalu buat setiap birama sedikit lebih keras.",
      ],
      tricky: {
        10: "Di sini jari 4 memainkan A. Jaga tangan tetap diam, dan hanya jari itu yang menjangkau ke atas.",
        11: "Jari 5 memainkan B tiga kali. Jaga jari itu tetap melengkung, agar kelingkingmu tetap kuat.",
        12: "Jari 4 kembali ke A untuk not terakhir. Tahan selama empat ketukan.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada 8 birama pertama, dan hitung “panjang, pendek, pendek”.",
        "Mainkan tangan kiri saja. Di setiap birama, tangan kiri menahan satu akor tiga not.",
        "Gabungkan kedua tangan pada 8 birama pertama, dengan pedal.",
        "Mainkan paruh kedua lagu, tempat tangan kiri bergantian memainkan not rendah dan akor.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Di sini tangan kiri bergeser sedikit ke bawah. Jari 5 pindah dari G kres ke G.",
        "Injak pedal selama setiap birama penuh, dan ganti tepat di garis birama.",
        "Sekarang tangan kiri bermain di setiap ketukan. Mainkan dengan rata, seperti mars yang pelan.",
      ],
      tricky: {
        10: "Tangan kiri memainkan G kres dengan jari 5, lalu B dan E bersamaan. Jaga tangan tetap diam.",
        15: "Tangan kiri berayun di antara G dan D dengan jari 5 dan 2.",
        16: "Mainkan E dan G bersamaan dengan jari 1 dan 3. Lalu angkat tangan kanan pada tanda istirahat.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja sampai akor terurai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan pasangan not tangan kanan saja, dan tekan kedua not setiap pasangan seperti satu not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan akor terurai dengan lembut, agar E yang berulang bernyanyi di atasnya.",
        "Ganti pedal pada ketukan terakhir, saat akornya berubah menjadi D mayor.",
        "Ganti pedal tiga kali di birama ini, sekali untuk setiap akor baru.",
      ],
      tricky: {
        17: "Jari 1, 2, dan 5 memainkan C, F, dan A. Di bawahnya, tangan kiri memainkan akor F mayor terurai.",
        19: "Akor berganti di tengah birama. Ganti pedal bersama akornya.",
        20: "Rentangkan tangan kiri selebar satu oktaf: jari 5 di A, jari 2 di E, dan ibu jari di A tinggi.",
      },
    },
    legendary: {
      practice: [
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Mainkan arpeggio tangan kiri saja. Ibu jari menyusup, dan jari 3 menyeberang.",
        "Gabungkan kedua tangan pada birama 9 sampai 16, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi panjang.",
      ],
      tips: [
        "Mainkan not teratas setiap oktaf sedikit lebih keras, agar melodinya menonjol.",
        "Rentangkan tangan kanan selebar satu oktaf penuh untuk setiap akor, dengan ibu jari dan jari 5 di kedua ujungnya.",
        "Di bagian akhir, melodi naik sampai A. Biarkan akor terakhir berbunyi panjang dengan pedal.",
      ],
      tricky: {
        10: "Tangan kiri mulai dari E rendah. Pakai tanda istirahat di akhir birama 9 untuk melompat ke bawah.",
        15: "Jari 3 menyeberangi ibu jari ke B. Jaga pergelangan tangan tetap datar saat tangan naik.",
        17: "Jari 1, 2, 4, dan 5 memainkan A, C, F, dan A. Angkat tangan kiri pada setiap tanda istirahat pendek.",
      },
    },
  },
};
