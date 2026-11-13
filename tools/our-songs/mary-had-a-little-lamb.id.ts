/** The guide of *Mary Had a Little Lamb* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Sarah Josepha Hale menerbitkan puisi tentang Mary dan anak dombanya di Boston pada 1830. " +
    "Melodi yang dipakai untuk menyanyikannya sekarang adalah lagu tradisional, dan tak ada yang tahu siapa yang pertama kali memasangkan keduanya. " +
    "Melodinya hanya memakai empat not, karena itu banyak buku piano untuk pemula dimulai dengan lagu ini.",
  funFact:
    "Pada 1877 Thomas Edison membacakan baris-baris pertamanya ke fonograf barunya. " +
    "Jadi, inilah bait pertama yang pernah direkam lalu diputar kembali.",
  versions: {
    common: {
      practice: [
        "Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not.",
        "Sekarang tangan kiri saja. Tangan kiri menahan satu not sepanjang setiap birama.",
        "Gabungkan kedua tangan, tetap pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Di sini setiap jari punya tutsnya sendiri: ibu jari di C, jari 3 di E.",
        "Kelingking tangan kiri memainkan G rendah, dan ibu jari menunggu di atasnya, di C.",
        "C terakhir berbunyi selama satu birama penuh, jadi hitung empat ketukan sebelum kamu mengangkat tangan.",
      ],
      tricky: {
        3: "Tangan kiri pindah ke G rendah saat tangan kanan mengulang D. Pakai kelingking.",
        4: "Melodi melewati F, dari E ke G. Mainkan G dengan kelingking, dan biarkan jari lainnya tetap di tutsnya.",
        7: "Tangan kanan bergoyang di antara D dan E dengan jari 2 dan 3, sementara bas turun ke G.",
      },
    },
    rare: {
      practice: [
        "Mainkan tangan kanan saja pada paruh kedua, tempat not seperdelapan mulai muncul.",
        "Mainkan tangan kiri saja, dan tahan setiap akor sampai akor berikutnya.",
        "Gabungkan kedua tangan pada 8 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "Setiap pasangan not cepat adalah satu ketukan yang dibagi dua. Hitung “1-dan, 2-dan”.",
        "Untuk akor ini, kelingking tangan kiri menjangkau turun ke F kres.",
        "Tekan B dan D bersamaan di akhir birama, seolah keduanya satu tuts.",
      ],
      tricky: {
        9: "Jari 4 memainkan C yang cepat, lalu jari 2 memainkan A. Jaga tanganmu tetap diam.",
        11: "Tangan kiri menjangkau turun ke F kres, sementara tangan kanan menambahkan B yang cepat.",
        13: "Not-not cepat kembali di sini. Hitung “1-dan, 2-dan” agar semuanya tetap rata.",
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
        "F yang cepat di akhir birama membawamu kembali ke E untuk frasa berikutnya.",
        "Melodinya adalah not teratas setiap terts, jadi biarkan jari yang di atas memimpin.",
      ],
      tricky: {
        9: "Terts dimulai di sini. Ibu jarimu berpindah di antara C dan B di bawah setiap pasangan.",
        13: "Setelah pasangan yang ditahan, frasa terakhir dimulai. Tekan kedua not setiap pasangan seperti satu not.",
        15: "Pasangan not berganti di setiap ketukan, dan bas berganti akor di tengah birama.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: lompat turun ke not bas, lalu naik kembali ke akor.",
        "Mainkan akor tangan kanan saja, dan biarkan jari teratas menyanyikan melodi.",
        "Gabungkan kedua tangan pada 8 birama pertama, dengan tiga perempat kecepatan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Saat memainkan stride, lihat not bas dan biarkan tanganmu menemukan akor dengan rabaan.",
        "Mainkan not teratas setiap akor sedikit lebih keras daripada not lainnya.",
        "Tahan akor terakhir dengan pedal sampai bunyinya hilang.",
      ],
      tricky: {
        3: "Bas melompat turun ke oktaf G rendah. Lirik tangan kirimu sebelum birama dimulai.",
        11: "Jaga ibu jari di G dan posisi akor tetap diam, agar hanya tangan kiri yang berpindah.",
        15: "Angkat tanganmu setelah D terakhir, agar ada waktu untuk membukanya lebar bagi akor penutup.",
      },
    },
  },
};
