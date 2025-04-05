### 💻 Coding Test 2: Implementasi Array Manual (Tanpa Gunakan Array Bawaan)

Buat class `MyArray` yang bisa melakukan:

1. `push(data: any): void`
2. `get(index: number): any`
3. `pop(): any`
4. `delete(index: number): void`
5. `print(): void` (contoh: `A, B, C, D`)

**Catatan:**

-   Simulasikan array pakai objek `{ [key: number]: value }`
-   Tanpa menggunakan metode bawaan array kayak `.push()`, `.pop()`, `.splice()`
-   Tes fungsi seperti tadi

---

### 1. **Struktur dasar**

Kita simulasikan array pakai:

-   `this.data`: sebuah object `{0: 'A', 1: 'B', ...}`
-   `this.length`: untuk ngitung jumlah item di array

---

## ✳️ 1. `push(data)`

**Tujuan**: Tambah item ke akhir array

**Logika**:

-   Masukkan `data` ke `this.data[this.length]`
-   Naikkan `this.length` satu angka

**Contoh**:  
Awalnya: `{}`, length: `0`  
`push("A")` → data jadi `{0: "A"}`, length: `1`  
`push("B")` → data jadi `{0: "A", 1: "B"}`, length: `2`

---

## ✳️ 2. `get(index)`

**Tujuan**: Ambil data di indeks tertentu

**Logika**:

-   Langsung akses `this.data[index]`

**Contoh**:

-   `get(1)` → ambil isi dari `this.data[1]`

---

## ✳️ 3. `pop()`

**Tujuan**: Hapus item terakhir dan return datanya

**Logika**:

-   Ambil data di `this.length - 1`
-   Hapus item itu dari `this.data`
-   Kurangi `this.length` satu angka
-   Kembalikan nilai yang tadi dihapus

**Contoh**:
Sebelum: `{0: "A", 1: "B", 2: "C"}`, length: 3  
`pop()` → hapus `"C"`, jadi: `{0: "A", 1: "B"}`, length: 2

---

## ✳️ 4. `delete(index)`

**Tujuan**: Hapus item di index tertentu

**Logika**:

1. Cek dulu, index valid atau nggak
2. Geser semua item setelah index ke kiri
    - Misal hapus index 1: maka item di index 2 dipindah ke 1, index 3 ke 2, dst.
3. Hapus item terakhir karena udah digeser
4. Kurangi `this.length`

**Contoh**:
Sebelum: `{0: "A", 1: "B", 2: "C"}`, length: 3  
`delete(1)` → geser `"C"` ke index 1  
Setelah: `{0: "A", 1: "C"}`, length: 2

---

## ✳️ 5. `print()`

**Tujuan**: Tampilkan semua data yang tersimpan

**Logika**:

-   Loop dari `0` sampai `this.length - 1`
-   Ambil tiap item di `this.data[i]` dan simpan di array sementara
-   Gabungkan array itu pakai koma dan tampilkan

**Contoh**:
Data: `{0: "A", 1: "B", 2: "C"}`  
Hasil print: `A, B, C`

---
