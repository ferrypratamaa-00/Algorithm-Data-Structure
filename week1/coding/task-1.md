##

### 🚀 Next Step: **Screening Coding**

## Langsung kita uji dengan implementasi dasar. Soal pertama:

### **💻 Coding Test 1: Implementasi Singly Linked List Sederhana di TypeScript**

**Tugas kamu:**  
Buat implementasi class `SinglyLinkedList` dengan fitur berikut:

1. `append(data: any): void` → Menambahkan node di akhir
2. `prepend(data: any): void` → Menambahkan node di awal
3. `delete(data: any): void` → Menghapus node berdasarkan nilai
4. `print(): void` → Mencetak semua elemen sebagai string `"A -> B -> C"`

**Bonus:** `find(data: any): Node | null`

---

Tentu bisa! Yuk kita breakdown satu per satu fitur dari **Singly Linked List** ini — tapi tanpa coding ya, jadi kamu bisa ngerti logika dan strukturnya dulu dengan santai 👇

---

## 💡 Konsep Dasar: Apa Itu Singly Linked List?

Singly Linked List adalah struktur data di mana tiap elemen (disebut **node**) berisi dua hal:

1. `data` → nilai yang disimpan.
2. `next` → referensi (atau pointer) ke **node berikutnya**.

Ciri khasnya:

-   Hanya bisa maju satu arah (makanya namanya "singly").
-   Ga kayak array, dia ga punya index dan ukuran tetap.

---

## 📦 Struktur Umum:

-   **Node**: object yang punya `data` dan `next`.
-   **LinkedList**: punya `head` (awal list), dan bisa juga punya `tail` (akhir list, opsional tapi sering dipakai).

---

## 🧩 Breakdown Fitur

### 1. `append(data: any): void`

**Tujuan**: Nambahin node baru di **akhir** list.

🧠 Logikanya:

-   Cek apakah list kosong (head = null). Kalau iya, jadikan node baru itu sebagai head.
-   Kalau udah ada isi:
    -   Mulai dari head, **iterasi sampai ketemu node terakhir** (yang next-nya null).
    -   Set `next` node terakhir ke node baru itu.

---

### 2. `prepend(data: any): void`

**Tujuan**: Nambahin node baru di **awal** list.

🧠 Logikanya:

-   Buat node baru.
-   Set `next` node baru ke `head` yang lama.
-   Ubah `head` menjadi node baru itu.

Jadi posisinya kayak disisipin paling depan.

---

### 3. `delete(data: any): void`

**Tujuan**: Menghapus node yang punya nilai data tertentu.

🧠 Logikanya:

-   Cek dulu apakah list kosong. Kalau iya, yaudah.
-   Kalau data yang mau dihapus ada di `head`, cukup ubah `head` ke `head.next`.
-   Kalau di tengah:
    -   Iterasi dari head sambil ngecek `current.next.data`.
    -   Kalau ketemu node yang `next.data`-nya cocok, ubah `current.next` ke `current.next.next`.

Jadi node yang dihapus itu "di-skip".

---

### 4. `print(): void`

**Tujuan**: Nge-print semua isi node dalam bentuk string kayak `"A -> B -> C"`.

🧠 Logikanya:

-   Mulai dari head, ambil data dari tiap node, simpan dalam array atau string.
-   Lanjut terus sampai `next` = null.
-   Gabungkan pakai `->` dan print.

---

### ⭐ Bonus: `find(data: any): Node | null`

**Tujuan**: Mencari node pertama yang punya `data` sesuai.

🧠 Logikanya:

-   Mulai dari head, cek satu per satu: `current.data === data`.
-   Kalau ketemu, return node itu.
-   Kalau sampai akhir ga ketemu, return null.

---
