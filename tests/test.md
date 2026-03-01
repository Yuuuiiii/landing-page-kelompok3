# Laporan Pengujian (Testing) - Kelompok 3

Dokumen ini berisi pencatatan hasil pengujian fungsionalitas website selama masa pengembangan.

## 1. Skenario Pengujian: Penambahan Anggota Baru (Logika IPO)
- **Fitur yang diuji:** Form input penambahan anggota tim pada halaman utama.
- **Langkah pengujian:** Mengisi form dengan memasukkan Nama, Role, dan Deskripsi anggota baru, lalu menekan tombol submit (tambah).
- **Hasil yang Diharapkan (Expected Output):** Kartu profil anggota baru muncul di halaman beserta semua data yang diinputkan.
- **Hasil Aktual (Actual Output):** Kartu anggota berhasil muncul, bagian Nama dan Role berhasil tampil, dan juga bisa menambahkan deskripsi.

## 2. Skenario Pengujian: Responsivitas Layout
- **Fitur yang diuji:** Tampilan website di layar mobile/smartphone.
- **Langkah pengujian:** Mengecilkan ukuran window browser ke ukuran mobile (width < 768px).
- **Hasil yang Diharapkan:** Elemen grid anggota sejajar menjadi satu kolom (stacking) dan navbar menyesuaikan.
- **Status:** ✅ PASSED (Secara visual sudah responsif, akan diuji lebih lanjut setelah finalisasi CSS).