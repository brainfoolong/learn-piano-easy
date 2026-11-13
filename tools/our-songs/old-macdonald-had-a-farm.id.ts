/** The guide of *Old MacDonald Had a Farm* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Old MacDonald Had a Farm adalah lagu anak-anak tentang seorang petani dan hewan-hewannya. " +
    "Versi awalnya, berjudul Ohio, dicetak pada 1917 dalam buku lagu yang dinyanyikan tentara Inggris. " +
    "Setiap bait menambahkan satu hewan dan suaranya, jadi lagu ini bisa berlangsung selama penyanyinya mau.",
  funFact: "Dalam lagu tahun 1917, petani itu bernama Old Macdougal, dan pertaniannya ada di Ohio.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not.",
        "Sekarang tangan kiri saja. Tangan kiri menahan setiap not selama dua atau empat ketukan.",
        "Gabungkan kedua tangan pada 8 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ibu jarimu ada di D dan jari 3 di G. Setiap jari tetap di tutsnya sendiri.",
        "Angkat tanganmu sedikit sebelum B tinggi, agar kamu mendarat di sana tepat waktu.",
        "Ini suara hewan-hewannya. Buat not-not itu memantul, dan tersenyum kalau mau.",
      ],
      tricky: {
        3: "Kelingkingmu menjangkau naik ke B tinggi, sementara ibu jari tetap di dekat D.",
        7: "Jangkauan yang sama lagi: kelingking di B, lalu jari 4 di A.",
        15: "Satu jangkauan terakhir ke B. Pakai tanda istirahat pendek sebelumnya untuk bersiap.",
      },
    },
    rare: {
      practice: [
        "Tepuk ritme not-not cepat di birama 11 dan 12, lalu mainkan tangan kanan saja.",
        "Mainkan tangan kiri saja, dan tahan setiap akor sampai akor berikutnya.",
        "Gabungkan kedua tangan pada 4 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Dua D cepat itu not seperdelapan. Bayangkan keduanya sebagai satu ketukan yang dibagi dua.",
        "Di sini pola pendek, pendek, panjang terus berulang. Ucapkan suara hewannya dalam hati sambil bermain.",
        "Akor tangan kiri berganti di tengah birama. Biarkan setiap akor berbunyi selama dua ketukan.",
      ],
      tricky: {
        3: "Ibu jari meninggalkan D, dan kelingking langsung mengambil B tinggi. Biarkan tanganmu tetap terbuka.",
        7: "Lompatan yang sama naik ke B. Di tengah birama, jari 4 tangan kiri mengambil A.",
        15: "Lompatan terakhir ke B. Setelah itu, kedua tangan tinggal memainkan akor penutup.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts tangan kanan saja, dan tekan kedua not setiap pasangan bersamaan.",
        "Gabungkan kedua tangan pada 4 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
        "Ganti pedal setiap setengah birama, saat bas Alberti mulai lagi.",
      ],
      tricky: {
        7: "Terts melompat naik dari D ke G dan B. Gerakkan seluruh tangan, dan jaga posisinya.",
        15: "Setelah rentetan not cepat, kelingkingmu mendarat di B. Biarkan rentetan itu membawa tanganmu ke sana.",
        16: "Tanganmu turun dari A ke akor terakhir. Ibu jari di B, jari 3 di G.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke not bas, lalu naik kembali ke akor.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Mainkan rentetan not cepat tangan kanan saja, pelan-pelan dulu.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Saat bermain stride, lihat not basnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Mainkan not teratas setiap akor sedikit lebih keras daripada yang lain.",
        "Not-not cepat naik dengan geser, satu jari per tuts, sampai kelingking di B.",
      ],
      tricky: {
        4: "Tahan akor panjang selama tiga ketukan, lalu turunkan ibu jari ke G untuk akor pada ketukan 4.",
        8: "Ibu jarimu memainkan kedua D cepat, siap untuk not-not tunggal di birama 9.",
        13: "Rentetan not berakhir dengan ibu jari di D. Geser ibu jari turun ke B untuk akor, dengan jari 2 di D.",
      },
    },
  },
};
