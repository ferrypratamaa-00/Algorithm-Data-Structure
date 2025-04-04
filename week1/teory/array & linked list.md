---

# **📌 1️⃣ TEORI LENGKAP: ARRAY & LINKED LIST**  

## **🟢 Apa itu Algoritma dan Struktur Data?**  
Sebelum masuk ke Array & Linked List, kita perlu ngerti dulu dua konsep ini:  

- **Algoritma**: Sekumpulan langkah yang dilakukan untuk menyelesaikan masalah.  
  👉 Contoh: Algoritma buat cari nomor HP teman di daftar kontak.  
- **Struktur Data**: Cara kita menyimpan dan mengorganisir data di dalam program supaya bisa diakses dan dikelola dengan efisien.  
  👉 Contoh: Daftar kontak bisa disimpan sebagai **Array** atau **Linked List**, tergantung kebutuhan.  

Sekarang, kita masuk ke struktur data pertama: **ARRAY** 🚀  

---

## **📦 ARRAY: Struktur Data Paling Umum**  

### **📌 Definisi:**  

Array adalah **kumpulan elemen yang disimpan dalam satu blok memori yang berurutan**. Setiap elemen diakses melalui **indeks**, mulai dari `0`.  

👉 **Contoh dalam kehidupan nyata:**  

- **Daftar kontak di HP** → kamu bisa langsung cari nama berdasarkan indeks.  
- **Kursi di bioskop** → kursi `A5` bisa langsung diakses tanpa cari satu per satu.  

### **⚙️ Bagaimana Cara Kerja Array?**  

Misalkan kita punya array:  

```ts
const arr = [10, 20, 30, 40, 50];  
```

- **Akses cepat (O(1))**: Mau ambil `arr[2]` (elemen ke-3 → `30`)? Langsung!  
- **Tambah/hapus di tengah (O(n))**: Kalau mau masukin angka di tengah, elemen lain harus **digeser**.  

---

### **📌 Operasi Utama dalam Array**  

| Operasi           | Contoh                           | Kompleksitas |
|------------------|---------------------------------|-------------|
| **Akses elemen** | `arr[i]`                        | `O(1)`      |
| **Tambah di akhir** | `arr.push(60)`               | `O(1)`      |
| **Hapus di akhir** | `arr.pop()`                   | `O(1)`      |
| **Tambah/hapus di tengah** | `arr.splice(2, 1, 99)` | `O(n)`      |
| **Cari elemen** | `arr.indexOf(40)`               | `O(n)`      |

👉 **Array cocok digunakan ketika:**  
✅ Kita sering **mengakses** elemen secara acak (karena `O(1)`)  
❌ **Tidak cocok** kalau sering menambah/menghapus di tengah (karena butuh `O(n)`)  

---

## **🔗 LINKED LIST: Alternatif yang Lebih Fleksibel**  

### **📌 Definisi:**  

Linked List adalah **kumpulan node yang saling terhubung**. Setiap **node** terdiri dari:  

1. **Data** (nilai yang disimpan)  
2. **Pointer** (referensi ke node berikutnya)  

👉 **Contoh dalam kehidupan nyata:**  

- **Rantai sepeda** → Setiap mata rantai terhubung ke yang lain, kalau ada yang putus, bisa langsung disambung lagi.  
- **Playlist lagu** → Bisa ditambah/hapus tanpa harus geser semua lagu lain.  

---

### **📌 Jenis-Jenis Linked List**  

1️⃣ **Singly Linked List (SLL)** → Setiap node hanya punya **1 pointer** ke node berikutnya.  
2️⃣ **Doubly Linked List (DLL)** → Setiap node punya **2 pointer** (ke depan & belakang).  
3️⃣ **Circular Linked List (CLL)** → Node terakhir terhubung ke node pertama.  

### **⚙️ Bagaimana Cara Kerja Linked List?**  

Misalkan kita punya **Singly Linked List** seperti ini:  

```ts
class Node {
  value: number;
  next: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

const head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
```

Di sini:  

- **Node pertama (`10`) menunjuk ke `20`**  
- **Node `20` menunjuk ke `30`**  
- **Node `30` menunjuk ke `null`** (akhir list)  

---

### **📌 Operasi Utama dalam Linked List**  

| Operasi           | Contoh                          | Kompleksitas |
|------------------|--------------------------------|-------------|
| **Akses elemen** | Harus **traverse satu per satu** | `O(n)` |
| **Tambah di awal** | Ganti `head` jadi node baru | `O(1)` |
| **Tambah di akhir** | Cari node terakhir, tambahkan node baru | `O(n)` |
| **Tambah di tengah** | Perlu traversal, lalu ganti pointer | `O(n)` |
| **Hapus elemen** | Ubah pointer dari node sebelumnya | `O(n)` |

👉 **Linked List cocok digunakan ketika:**  
✅ Kita sering **menambah/menghapus elemen** di awal/tengah (karena `O(1)`)  
❌ **Tidak cocok** kalau kita sering **mengakses elemen secara acak** (`O(n)`)  

---

## **🆚 PERBANDINGAN ARRAY VS LINKED LIST**  

| Fitur             | Array        | Linked List       |
|------------------|--------------|-------------------|
| **Akses cepat** | ✅ `O(1)` | ❌ `O(n)` (harus traverse) |
| **Tambah di awal** | ❌ `O(n)` (harus geser elemen) | ✅ `O(1)` |
| **Tambah di tengah** | ❌ `O(n)` | ✅ `O(n)` (lebih fleksibel) |
| **Hapus di awal** | ❌ `O(n)` | ✅ `O(1)` |
| **Memori** | ✅ Lebih hemat | ❌ Lebih boros (ada pointer) |

👉 **Gunakan Array jika:**  
✔️ Sering akses elemen berdasarkan indeks  
✔️ Ukuran data **statis** dan jarang diubah  

👉 **Gunakan Linked List jika:**  
✔️ Sering menambah/menghapus elemen  
✔️ Ukuran data **dinamis**  

---

## **📌 Kesimpulan Singkat**  

1️⃣ **Array cepat untuk akses data, tapi lambat untuk insert/delete di tengah**  
2️⃣ **Linked List lambat untuk akses data, tapi cepat untuk insert/delete**  
3️⃣ **Kalau butuh fleksibilitas, pakai Linked List. Kalau butuh kecepatan akses, pakai Array.**  

---
