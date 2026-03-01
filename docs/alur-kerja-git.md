# Alur Kerja Git — Kelompok 3 RBPL

## Platform
- **Hosting**: GitHub
- **Repository**: https://github.com/Yuuuiiii/landing-page-kelompok3
- **Branch Utama**: `main`

## Alur Kerja Tim

### 1. Setup Awal (Team Lead)
```bash
# Buat repo di GitHub, lalu clone
git clone https://github.com/Yuuuiiii/landing-page-kelompok3.git
cd landing-page-kelompok3

# Buat struktur folder
mkdir docs src tests

# Buat file awal
echo "" > src/index.html
echo "" > src/style.css
echo "" > src/script.js
echo "" > docs/pembagian-tugas.md
echo "" > tests/test.md

# Commit & push
git add .
git commit -m "Initial commit - setup struktur proyek"
git push origin main
```

### 2. Setiap Anggota Clone & Buat Branch
```bash
# Clone repo
git clone https://github.com/Yuuuiiii/landing-page-kelompok3.git
cd landing-page-kelompok3

# Buat branch sendiri
git checkout -b fitur-nama-tugas
```

### 3. Kerjakan Fitur & Commit Rutin
```bash
# Setelah edit file
git add .
git commit -m "Menambahkan fitur X"
git push origin fitur-nama-tugas
```

### 4. Pull Request & Code Review
- Buka GitHub → tab **Pull requests** → **New pull request**
- Set `base: main` ← `compare: fitur-nama-branch`
- Isi judul dan deskripsi PR
- Minta review dari minimal 1 anggota lain
- Setelah disetujui → **Merge pull request**

### 5. Update Lokal Setelah Merge
```bash
git checkout main
git pull origin main
```

---

## Perintah Git yang Digunakan

| Perintah | Fungsi |
|---------|--------|
| `git clone <url>` | Clone repo dari GitHub ke lokal |
| `git checkout -b <nama>` | Buat branch baru |
| `git add .` | Tandai semua perubahan |
| `git commit -m "pesan"` | Simpan perubahan dengan pesan |
| `git push origin <branch>` | Upload ke GitHub |
| `git pull origin main` | Ambil update terbaru dari GitHub |
| `git status` | Cek status perubahan |
| `git log --oneline` | Lihat riwayat commit |

---

## Catatan Penting
- Setiap anggota **wajib kerja di branch masing-masing**, jangan langsung di `main`
- Pesan commit harus **jelas dan deskriptif**
- Lakukan `git pull origin main` sebelum mulai kerja setiap hari
- Selesaikan merge conflict dengan diskusi bersama tim