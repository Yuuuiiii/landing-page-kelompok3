# Desain Awal — Landing Page Kelompok 3

## Konsep
Website landing page profil kelompok dengan fitur tambah anggota dinamis berbasis IPO (Input-Proses-Output).

**Tema Visual**: Dark mode dengan aksen biru — modern, bersih, profesional.

## Struktur Halaman

```
┌─────────────────────────────────┐
│           HERO SECTION          │
│     "Kelompok Tiga" + info      │
│      Universitas Siliwangi      │
└─────────────────────────────────┘
           ↓ scroll
┌─────────────────────────────────┐
│          ABOUT SECTION          │
│   Universitas · Fakultas        │
│   Prodi · Mata Kuliah           │
└─────────────────────────────────┘
           ↓ scroll
┌─────────────────────────────────┐
│           TEAM SECTION          │
│  [Kartu] [Kartu] [Kartu]        │
│  [Kartu] [Kartu]                │
└─────────────────────────────────┘
           ↓ scroll
┌─────────────────────────────────┐
│        FORM TAMBAH ANGGOTA      │
│  Preview Kartu | Input Fields   │
│  Nama · NIM · Role · Foto       │
│         [Tambah Anggota]        │
└─────────────────────────────────┘
           ↓ scroll
┌─────────────────────────────────┐
│             FOOTER              │
│     © Kelompok 3 · RBPL         │
└─────────────────────────────────┘
```

## Alur IPO

```
INPUT                PROSES                    OUTPUT
─────                ──────                    ──────
Nama          →   Validasi input          →   Kartu anggota
NIM           →   Konversi foto Base64    →   muncul di
Role          →   Simpan localStorage     →   halaman
Foto          →   Render HTML dinamis     →   secara
Deskripsi     →                           →   realtime
```

---

## Komponen Utama

### Kartu Anggota
- Foto bulat (100x100px)
- NIM (font mono, muted)
- Nama (font medium)
- Badge role (pill shape, biru)
- Hover: naik 5px + border biru

### Form Tambah Anggota
- Preview kartu realtime di sebelah kiri
- Input: Nama, NIM, dropdown Role, upload Foto, Textarea Deskripsi
- Validasi: nama, NIM, role wajib diisi
- Toast notification hijau saat berhasil

---

## Responsif
- **Desktop** (>768px): Form 2 kolom (preview + input)
- **Mobile** (<768px): Form 1 kolom, kartu 1 kolom