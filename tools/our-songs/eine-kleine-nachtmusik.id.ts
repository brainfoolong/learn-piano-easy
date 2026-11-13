/** The guide of *Eine kleine Nachtmusik* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart menyelesaikan serenade untuk alat musik gesek ini di Wina pada 1787. " +
    "Karya ini baru diterbitkan pada 1827, lebih dari tiga puluh tahun setelah ia wafat. " +
    "Dalam film Amadeus (1984), Salieri tua memainkannya, dan seorang pastor langsung mengenali melodinya.",
  funFact: "Judulnya berarti “sebuah serenade kecil”, dan Mozart sendiri mencatatnya dalam daftar karyanya.",
  versions: {
    common: {
      practice: [
        "Mainkan birama 1 sampai 4 dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan birama 5 sampai 8 dengan tangan kanan saja, setelah tanganmu pindah ke tempat barunya.",
        "Sekarang tangan kiri saja. Tangan kiri menahan G dan D, atau D saja, selama satu birama penuh.",
        "Gabungkan kedua tangan, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ibu jari di D, jari 2 di G, jari 4 di B, dan jari 5 di D tinggi.",
        "Mainkan G dengan pendek dan cerah, seperti hentakan singkat alat musik gesek.",
        "Pakai tanda istirahat setelah D tinggi untuk memindahkan jari 2, 3, dan 5 ke F kres, A, dan C.",
      ],
      tricky: {
        5: "Tanganmu sudah pindah saat tanda istirahat. Kini jari 5 memainkan C, dan jari 3 memainkan A.",
        7: "Berjalanlah turun di C, A, dan F kres dengan jari 5, 3, dan 2, lalu naik lagi ke A.",
        13: "Geser tanganmu naik saat tanda istirahat di birama 12. Jari 3 mendarat di B, dan ibu jari di G.",
      },
    },
    rare: {
      practice: [
        "Mainkan melodi pembuka dengan tangan kanan saja, dan biarkan lagu menunggu setiap not.",
        "Mainkan tangan kiri saja. Tangan kiri berayun di antara nada akar dan kuint di setiap ketukan.",
        "Gabungkan kedua tangan pada melodi pembuka, pelan-pelan.",
        "Mainkan bagian jawaban dengan kedua tangan. Birama 11 bergerak dalam not seperdelapan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Hitung tangan kiri dalam not seperempat. Setiap not melodi jatuh tepat pada ketukan bersama tangan kiri.",
        "Naik di D, F kres, A, dan C dengan jari 1, 2, 3, dan 5, lalu turun lagi.",
        "Bagian jawaban pulang ke G. Biarkan not terakhir berbunyi selama satu birama penuh.",
      ],
      tricky: {
        5: "Geser tanganmu saat tanda istirahat di birama 4. Jari 5 mendarat di C, dan jari 3 di A.",
        7: "Berjalanlah turun di C, A, dan F kres dengan jari 5, 3, dan 2, lalu naik lagi ke A.",
        13: "Geser tanganmu naik saat tanda istirahat di birama 12. Jari 3 mendarat di B, dan ibu jari di G.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts dan sekst tangan kanan saja, dan tekan kedua not setiap pasangan not seperti satu not.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut dan rata, agar melodi bernyanyi di atasnya.",
        "Melodinya adalah not atas dari setiap pasangan not, jadi biarkan jari yang di atas memimpin.",
        "Ganti pedal di setiap garis birama, saat not bas baru berbunyi.",
      ],
      tricky: {
        16: "Angkat tanganmu setelah terts terakhir, lalu turun ke A dan D dengan jari 1 dan 4.",
        17: "Bagian jawaban dimulai tinggi di A dengan jari 3. Pakai tanda istirahat sebelumnya untuk meraih ke atas.",
        24: "Angkat jari dari A saat tanda istirahat, lalu mendarat di B, D, dan G dengan jari 1, 2, dan 5.",
      },
    },
    legendary: {
      practice: [
        "Mainkan oktaf tangan kanan saja. Jaga ibu jari dan jari 5 tetap terentang, dan gerakkan seluruh tangan.",
        "Mainkan rentetan not cepat di birama 11 dan 15 saja, pelan-pelan, sampai mengalir lancar.",
        "Mainkan tangan kiri saja. Tangan kiri melompat di antara oktaf pada nada akar dan kuint.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Oktaf di kedua tangan terdengar seperti satu orkestra gesek yang lengkap. Mainkan dengan mantap.",
        "Saat naik, ibu jari menyusup setelah F kres. Saat turun, jari 3 menyeberang di atas G.",
        "Setelah rentetan not cepat, angkat tanganmu saat tanda istirahat, lalu mendarat di keempat not akor G mayor.",
      ],
      tricky: {
        2: "Angkat oktaf G, lalu lompat turun ke oktaf D. Jaga tanganmu tetap terentang.",
        3: "Empat oktaf berturut-turut: G, D, G, dan B. Angkat tanganmu sedikit setelah setiap oktaf.",
        14: "Lompat turun dari oktaf B ke oktaf G, lalu bersiaplah untuk rentetan not cepat.",
      },
    },
  },
};
