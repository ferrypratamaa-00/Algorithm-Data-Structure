
---

## **📌 SCREENING TEORI - ROUND 1**  

1️⃣ **Apa perbedaan utama antara Array dan Linked List dalam hal akses data dan operasi insert/delete?**  

2️⃣ **Kapan lebih baik menggunakan Linked List dibanding Array? Beri contoh kasus nyata.**  

3️⃣ **Jika ingin mengakses elemen ke-5 dalam Linked List, berapa waktu yang dibutuhkan dalam notasi Big-O? Jelaskan kenapa.**  

4️⃣ **Apa keunggulan Doubly Linked List dibanding Singly Linked List? Kapan kita harus menggunakannya?**  

5️⃣ **Kenapa Array lebih hemat memori dibanding Linked List?**  

---

## **📌 ANSWER KEY**  

### **📌 1️⃣ Perbedaan utama antara Array dan Linked List dalam akses data dan operasi insert/delete**

- **Array** → Data disimpan **secara berurutan dalam blok memori yang bersebelahan**. Akses elemen cepat karena pakai **indeks langsung (O(1))**, tapi insert/delete lambat karena harus **menggeser elemen lain (O(n))**.  
- **Linked List** → Elemen (node) **tidak perlu bersebelahan di memori**. Setiap node menyimpan data & pointer ke node berikutnya. Insert/delete **lebih cepat (O(1))** jika kita punya referensi ke node yang ingin diubah, tapi akses elemen lambat **karena harus traversing dari awal (O(n))**.  

---

### **📌 2️⃣ Kapan lebih baik menggunakan Linked List dibanding Array?**

- **Benar:** Linked List lebih baik untuk **data yang sering berubah** (insert/delete banyak).  
- **Kurang tepat:** Nomor telepon atau alamat lebih cocok disimpan dalam **struktur lain seperti HashMap atau Tree**, bukan Linked List.  

✅ **Contoh nyata yang lebih cocok:**  

1. **Undo/Redo dalam aplikasi teks editor** → Setiap perubahan disimpan dalam **Doubly Linked List**.  
2. **History browser (Back & Forward Button)** → Disimpan dalam **Doubly Linked List**.  
3. **Memori heap dalam OS** → Alokasi dan dealokasi memori lebih dinamis.  

---

### **📌 3️⃣ Waktu akses elemen ke-5 dalam Linked List (Big-O)**

- **Big-O:** **O(n)**  
- **Kenapa?** Linked List **tidak memiliki indeks**, jadi untuk mencari elemen ke-5, kita harus **melewati satu per satu** dari head ke node ke-5.  
- **Contoh traversal:** Jika ada list seperti ini:  

  ```
  Head → A → B → C → D → E
  ```

  Untuk mencapai **E (elemen ke-5)**, kita harus mulai dari **Head → A → B → C → D → E (5 langkah)**.  
  Makanya waktu aksesnya **O(n)**, karena dalam kasus terburuk kita harus traversing sampai elemen terakhir.  

---

### **📌 4️⃣ Keunggulan Doubly Linked List dibanding Singly Linked List**

- **Doubly Linked List** punya **dua pointer**:  
  1. `next` (ke node selanjutnya)  
  2. `prev` (ke node sebelumnya)  

**Keunggulan dibanding Singly Linked List:**  
✅ **Traversal dua arah lebih cepat** → Bisa maju & mundur tanpa harus mulai dari awal.  
✅ **Lebih mudah hapus node dari tengah** → Bisa langsung ke `prev` tanpa harus traversing dari awal.  
❌ **Lebih boros memori** → Karena setiap node menyimpan 2 pointer (`next` & `prev`).  

**Kapan digunakan?**  

- **Ketika butuh navigasi maju-mundur dengan cepat**, misalnya **History browser, Undo/Redo di teks editor, atau Playlist musik**.  

---

### **📌 5️⃣ Kenapa Array lebih hemat memori dibanding Linked List?**

- **Array lebih hemat memori** karena:  
  1. **Hanya menyimpan data saja** → Tidak ada tambahan pointer.  
  2. **Disimpan dalam satu blok memori yang bersebelahan**, sehingga lebih optimal dalam penggunaan cache CPU.  
  3. **Linked List boros memori** karena setiap node menyimpan **pointer tambahan** (`next`, atau `next & prev` dalam Doubly Linked List).  

---
