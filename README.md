# HAHAHIHI
# 🍱 Katalog Produk Makanan Ringan by Nandang

Ini adalah katalog digital untuk menampilkan produk makanan ringan yang dibagi menjadi dua jenis:

- ✅ **Produk Ready Stock** → [`index.html`](./index.html)
- ⏳ **Produk Preorder** → [`preorder.html`](./preorder.html)

## 🔧 Fitur Utama

- 🔎 Pencarian produk
- 🗂️ Filter berdasarkan kategori & hari kirim (preorder)
- 🛒 Keranjang belanja (terintegrasi WA)
- 💸 Opsi pembayaran: QRIS & Transfer BCA
- 📆 Produk preorder dapat diatur berdasarkan hari pengiriman

---

## 📄 Struktur File

| File | Fungsi |
|------|--------|
| `index.html` | Halaman katalog produk ready stock |
| `preorder.html` | Halaman katalog produk preorder |
| `qris.html` | Halaman menampilkan gambar QRIS |
| `app.js` | Script untuk fetch data dari Google Sheets, logika keranjang |
| `cart.css` | Gaya CSS untuk layout elegan & responsif |
| `qris.png` | Gambar kode QR untuk pembayaran QRIS |

---

## 💳 Pembayaran

- **Transfer ke BCA 8025147932 a.n Nandang Tri Prasojo**
- **QRIS:** tersedia di halaman [qris.html](./qris.html)

---

## 📊 Data Produk

Semua data produk diambil dari Google Sheets:
- [Ready Stock](https://docs.google.com/spreadsheets/d/15g0UFq0fLNbyORzKiITkLzlRduUSvi6TEFhVqoQOedM/edit#gid=1044556738)
- [Preorder](sheet terpisah dengan struktur sama)

Kolom penting:
- `aktif` = `yes` untuk produk yang tampil
- `kategori` = jenis makanan (misal: keripik, manis, gurih)
- `hari_kirim` = khusus preorder (Senin, Rabu, dll)

---

## 🌐 Akses Katalog

Setelah project ini di-*deploy* ke GitHub Pages, pelanggan bisa langsung mengakses:

- `https://username.github.io/katalog/index.html` → Ready Stock
- `https://username.github.io/katalog/preorder.html` → Preorder

📌 Kamu juga bisa buat QR code ke halaman tersebut untuk dicetak!

---

## 🧑‍💻 Developer

Dibuat dengan ❤ oleh Nandang.  
Butuh bantuan pengembangan lebih lanjut? Hubungi lewat WA dari tombol checkout!

