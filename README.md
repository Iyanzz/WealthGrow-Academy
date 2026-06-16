# WealthGrow Academy — Landing Page

Platform edukasi keuangan dan investasi premium. Website ini adalah landing page modern, profesional, dan mobile-friendly yang dirancang untuk meningkatkan konversi melalui WhatsApp.

---

## 🌐 Halaman & Sections

| Section | ID / Anchor | Deskripsi |
|---------|------------|-----------|
| Hero | `#beranda` | Headline utama + ilustrasi SVG + CTA |
| Statistik | *(no anchor)* | Counter animasi 5.000+ peserta, 100+ sesi, dll. |
| Program | `#program` | 5 kartu program edukasi |
| Tentang | `#tentang` | Fitur unggulan & ilustrasi SVG tim |
| Cara Kerja | *(no anchor)* | 3 langkah bergabung |
| Testimoni | `#testimoni` | 3 testimoni original |
| FAQ | `#faq` | 5 FAQ dengan accordion |
| Kontak | `#kontak` | Info kontak + tombol WA CTA |
| Footer | *(footer)* | Logo, navigasi, kontak, copyright |

---

## ⚙️ Cara Edit Informasi Kontak

Semua tombol WhatsApp di seluruh halaman mengambil nomor dari **satu sumber** di `js/main.js`:

```js
const CONTACT = {
  WA_NUMBER: '6281234567890',   // ← GANTI NOMOR DI SINI
  WA_DEFAULT_MSG: '...',
  EMAIL: 'hello@wealthgrowacademy.com',
  INSTAGRAM: 'https://instagram.com/wealthgrowacademy',
};
```

Untuk teks tampilan kontak di Section Kontak dan Footer, edit langsung di `index.html` — setiap field diberi komentar `<!-- EDIT ... DI SINI -->`.

---

## 🗂️ Struktur File

```
/
├── index.html          # Halaman utama (semua section)
├── css/
│   └── style.css       # Semua styling — tema hijau tua + aksen emas
├── js/
│   └── main.js         # Semua interaktivitas + konfigurasi kontak
└── README.md
```

---

## 🎨 Desain & Identitas

- **Palet Warna**: Hijau tua `#1A4731`, Hijau mid `#2D6A4F`, Emas `#D4AF37`, Putih, Krem
- **Font**: Plus Jakarta Sans (body) + Playfair Display (judul)
- **Ilustrasi**: SVG original inline (bukan gambar pihak ketiga)
- **Ikon**: Font Awesome 6 via CDN

---

## ✅ Fitur yang Telah Diimplementasi

- [x] Header sticky dengan scroll effect + hamburger mobile
- [x] Hero section dengan ilustrasi SVG original + floating cards
- [x] Counter animasi (IntersectionObserver)
- [x] 5 program edukasi dalam grid kartu responsif
- [x] Section "Tentang" dengan SVG ilustrasi tim
- [x] Section "Cara Kerja" 3 langkah
- [x] 3 testimoni original (tanpa klaim keuntungan investasi)
- [x] FAQ accordion (buka/tutup dengan animasi)
- [x] Contact section terpusat dengan 5 info kontak
- [x] Footer lengkap (brand, navigasi, program, kontak)
- [x] Floating WhatsApp button
- [x] Scroll spy (highlight menu aktif)
- [x] Scroll animations (fade-up, fade-left, fade-right)
- [x] Semua tombol WA terpusat dari 1 config
- [x] Fully responsive: desktop, tablet, mobile
- [x] SEO-friendly (semantic HTML, meta description, aria labels)
- [x] Disclaimer edukatif (tidak ada klaim keuntungan investasi)

---

## 🚀 Langkah Selanjutnya (Opsional)

- [ ] Tambah form kontak dengan integrasi email (Formspree / EmailJS)
- [ ] Tambah halaman detail per-program
- [ ] Integrasi Google Analytics / Meta Pixel
- [ ] Optimasi gambar (jika ada gambar nyata ditambahkan)
- [ ] Tambah live chat widget (Tawk.to, dll.)

---

## 📝 Catatan Penting

- Website ini adalah **platform edukasi**, bukan layanan manajemen investasi.
- Semua konten menghindari klaim keuntungan finansial atau janji cepat kaya.
- Statistik (5.000+ peserta, dll.) ditampilkan sebagai **ilustrasi demonstrasi**.
- Testimoni fokus pada peningkatan literasi dan kepercayaan diri finansial.
