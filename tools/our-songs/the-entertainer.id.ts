/** The guide of *The Entertainer* in Indonesian. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Scott Joplin, sang Raja Ragtime, menerbitkan rag ini di St. Louis pada 1902. " +
    "Dalam rag, melodi yang melompat-lompat dan jatuh di antara ketukan berjalan di atas bas mantap yang berbunyi “um-pa”. " +
    "Ini bagian pertamanya, bagian yang disenandungkan semua orang. " +
    "Film The Sting membuatnya terkenal di seluruh dunia pada 1973.",
  funFact: "Joplin mendapat Penghargaan Pulitzer khusus pada 1976, hampir enam puluh tahun setelah ia wafat.",
  versions: {
    common: {
      practice: [
        "Mainkan 2 birama pertama dengan tangan kanan saja, sampai lompatan dari E ke C terasa mudah.",
        "Mainkan tangan kanan saja sepanjang seluruh frasa.",
        "Gabungkan kedua tangan pada 8 birama pertama.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh.",
      ],
      tips: [
        "Ibu jari di E, jari tengah di C tinggi. Biarkan tangan terbuka dan berayun di antara keduanya.",
        "Mainkan setiap E dengan pendek dan memantul. Jeda kecil itulah lompatan khas rag.",
        "Jari 2 sampai 5 berada di B, C, D, dan E, bersebelahan.",
      ],
      tricky: {
        2: "Tangan berayun dari C turun ke E, lalu kembali. Lepaskan setiap tuts dengan cepat, agar ada cukup waktu untuk melompat.",
        9: "Dari B, ibu jarimu turun kembali ke E. Biarkan tangan terbuka, dan melodi mulai lagi.",
        10: "Birama berayun yang sama seperti tadi: jari tengah di C, ibu jari di E, dan not-not pendek.",
      },
    },
    rare: {
      practice: [
        "Mainkan birama gantung dan 2 birama pertama dengan tangan kanan saja.",
        "Mainkan tangan kiri saja: satu not rendah, lalu satu akor, seperti mars kecil.",
        "Gabungkan kedua tangan pada 9 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis.",
        "Sekarang mainkan dengan kecepatan penuh.",
      ],
      tips: [
        "D kres dan E sama-sama dimainkan jari 2. Geser jari itu naik satu tuts masuk ke melodi.",
        "Di setiap birama, tangan kiri berbunyi “um” pada ketukan 1 dan “pa” pada ketukan 3.",
        "Biarkan tanjakan C, D, D kres, E makin keras sedikit demi sedikit di setiap not.",
      ],
      tricky: {
        2: "Jari 2 bergeser dari D kres naik ke E, dan kelingking menjangkau C tinggi.",
        3: "Biarkan kelingking di atas C dan jari 2 di atas E. Hanya pergelangan tangan yang berayun.",
        10: "Setelah tanda istirahat, jari 2 melompat turun ke E. Lihat tutsnya sebelum mendarat.",
      },
    },
    epic: {
      practice: [
        "Mainkan tangan kiri saja: lompat turun ke not bas, lalu naik ke akor.",
        "Mainkan tangan kanan frasa kedua saja, tempat F kres membawa melodi ke G.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dengan pedal.",
      ],
      tips: [
        "Injak pedal bersama setiap not bas dan lepaskan untuk akornya, agar akor tetap jernih.",
        "Bas turun satu tuts, dari E ke E mol. Biarkan itu terdengar.",
        "Frasa terakhir mengulang satu kelompok not pendek tiga kali. Hitunglah, agar kamu tahu sedang di ulangan yang mana.",
      ],
      tricky: {
        4: "Tangan kiri melompat dari F rendah naik ke akor, sementara tangan kanan menahan A dan C.",
        5: "Setelah tanda istirahat, pindahkan tangan kanan ke atas agar jari 2 mendarat di C untuk tanjakannya.",
        21: "Tanjakan birama 5 kembali. Pindah ke atas selama tanda istirahat, dan jari 2 mengambil C.",
      },
    },
    legendary: {
      practice: [
        "Mainkan bas stride saja: satu oktaf jauh di bawah, lalu akornya di atas.",
        "Mainkan sekst tangan kanan saja, dengan ibu jari dan kelingking bergerak bersama.",
        "Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan.",
        "Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan.",
        "Sekarang mainkan dengan kecepatan penuh, dan biarkan akor terakhir terus berbunyi.",
      ],
      tips: [
        "Pada bas stride, lihat oktaf rendahnya, dan biarkan tangan menemukan akor dengan rabaan.",
        "Mainkan not teratas setiap sekst sedikit lebih keras, agar melodi bernyanyi.",
        "Oktaf bas turun dari E ke E mol, lalu terus ke D.",
      ],
      tricky: {
        4: "Tangan kiri melompat dari oktaf F rendah naik ke akor, sementara tangan kanan merentang di atas F, A, dan C.",
        12: "Akor F kembali. Daratkan oktaf rendah lebih dulu, lalu biarkan tangan melenting ke atas.",
        20: "Akor F datang untuk ketiga kalinya, dengan lompatan yang sama seperti birama 4. Jaga ketukan tetap mantap.",
      },
    },
  },
};
