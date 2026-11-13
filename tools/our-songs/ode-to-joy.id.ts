/** The guide of *Ode to Joy* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven menulis melodi ini untuk bagian terakhir Simfoni Kesembilan miliknya, yang pertama kali dimainkan di Wina pada 1824. " +
    "Paduan suara menyanyikannya dengan puisi Friedrich Schiller tentang sukacita dan persahabatan. " +
    "Kini melodi ini menjadi himne Uni Eropa, yang dimainkan tanpa lirik. " +
    "Dalam film Die Hard, melodi ini terdengar saat para pencuri membuka brankas.",
  funFact: "Beethoven hampir tuli total saat Simfoni Kesembilan pertama kali dimainkan, dan badannya harus diputar agar ia bisa melihat tepuk tangan penonton.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not.",
        "Sekarang tangan kiri saja. Tangan kiri hanya berganti di antara dua posisi.",
        "Gabungkan kedua tangan pada 8 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Di sini setiap jari punya tutsnya sendiri: ibu jari di C, kelingking di G.",
        "D terakhir dua kali panjangnya not sebelumnya, jadi hitung dua ketukan.",
        "Bagian tengah adalah bagian yang tenang. Mainkan dengan lembut, lalu kembali dengan mantap di birama 13.",
      ],
      tricky: {
        2: "Berjalanlah turun mulai dari kelingking, satu jari untuk setiap tuts: 5, 4, 3, 2.",
        12: "Ibu jarimu merentang turun ke G rendah, sementara jari lainnya tetap di tempatnya.",
        13: "Setelah tanda istirahat, temukan E dengan jari 3, dan melodi dimulai lagi.",
      },
    },
    rare: {
      practice: [
        "Tepuk atau ketuk ritme bertitik di birama 4, lalu mainkan tangan kanan saja.",
        "Mainkan tangan kiri saja, dan tahan setiap akor sampai akor berikutnya.",
        "Gabungkan kedua tangan pada bagian tengah, tempat akor berganti setiap dua ketukan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Panjang, pendek, panjang: F kres berlangsung satu setengah ketukan, dan E setengah ketukan.",
        "Dua not cepat itu adalah not seperdelapan. Bayangkan satu ketukan yang dibagi dua.",
        "Setiap akor di bagian tengah berlangsung dua ketukan. Biarkan berbunyi sampai akor berikutnya.",
      ],
      tricky: {
        10: "F kres dan G lewat dengan cepat. Jaga jari 3 dan 4 tetap dekat dengan tutsnya.",
        12: "Ibu jarimu bergeser dari D turun ke A rendah, dan tangan mengikutinya.",
        13: "Dari A rendah, jari 3 menjangkau naik ke F kres. Lihat dulu sebelum melompat.",
      },
    },
    epic: {
      practice: [
        "Mainkan bas Alberti saja sampai mengalir dengan sendirinya: rendah, tinggi, tengah, tinggi.",
        "Mainkan terts tangan kanan saja, dan jaga kedua not setiap pasangan tetap bersamaan.",
        "Gabungkan kedua tangan pada 4 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya.",
        "Melodinya adalah not teratas setiap pasangan, jadi biarkan jari yang di atas memimpin.",
        "Di sini pedal berganti di tengah setiap birama. Lepaskan pedal saat akor baru dimulai.",
      ],
      tricky: {
        8: "Ganti dari jari 3 ke jari 1 pada D yang berulang, agar tangan siap untuk birama 9.",
        13: "Di sini terts kembali. Tekan kedua not setiap pasangan seperti satu not.",
        16: "Ibu jarimu turun ke A rendah untuk akor terakhir, di bawah D yang dimainkan jari 3.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat ke bawah untuk not bas, lalu kembali ke atas untuk akornya.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodinya.",
        "Mainkan arpeggio tangan kiri saja, pada bagian tengah.",
        "Gabungkan kedua tangan pada seluruh lagu, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat not basnya, dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Mainkan not teratas setiap akor sedikit lebih keras daripada not lainnya.",
        "Arpeggio naik dengan jari 5, 3, 2, 1, jadi ibu jari mendarat di not teratas.",
      ],
      tricky: {
        2: "Melodi berjalan turun sementara bas melompat. Jaga pandanganmu pada tangan kiri.",
        6: "Akor berganti di setiap ketukan. Biarkan ibu jari di A, dan gerakkan jari-jari atas saja.",
        14: "Melodi turun dari A ke E, sementara ibu jari tetap di dekat C kres. Biarkan jari teratas membawa melodinya.",
      },
    },
  },
};
