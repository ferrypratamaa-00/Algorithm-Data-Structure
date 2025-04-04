
---

## **📌 SCREENING TEORI - ROUND 2**  

1️⃣ **Bagaimana cara menghitung jumlah elemen dalam Linked List? Berapa kompleksitas waktunya dalam Big-O?**  

2️⃣ **Jika kita ingin menambahkan elemen di awal dan akhir pada Linked List, bagaimana perbedaannya dibandingkan dengan Array dalam hal performa?**  

3️⃣ **Apa yang terjadi jika kita menghapus node tengah dalam Singly Linked List? Jelaskan langkah-langkahnya.**  

4️⃣ **Sebutkan minimal 3 kelemahan Linked List dibandingkan Array yang belum disebut sebelumnya.**  

5️⃣ **Dalam situasi apa penggunaan Circular Linked List lebih baik dibandingkan Singly atau Doubly Linked List?**  

---

## **📌 ANSWER KEY**   

---

### **📌 1️⃣ Cara menghitung jumlah elemen dalam Linked List & kompleksitas Big-O**  

- **Cara menghitung jumlah elemen dalam Linked List** → Harus melakukan **traversal dari Head ke Tail**, sambil menghitung jumlah node yang ada.  
- **Kompleksitas Big-O** → **O(n)** karena kita harus melewati semua elemen satu per satu.  

**Perbaikan jawaban:**  
```typescript
function countNodes(head: ListNode | null): number {
    let count = 0;
    let current = head;
    while (current !== null) {
        count++;
        current = current.next;
    }
    return count;
}
```


---

### **📌 2️⃣ Perbedaan menambahkan elemen di awal dan akhir pada Linked List vs Array**  


- **Menambah di awal Linked List** → **O(1)**  
  1. Buat node baru  
  2. Arahkan `next` dari node baru ke `head` saat ini  
  3. Perbarui `head` ke node baru  
  **Cepat (O(1))** karena kita hanya mengubah pointer  

- **Menambah di akhir Linked List** → **O(n)** (jika tidak ada pointer ke tail)  
  1. Traverse sampai node terakhir  
  2. Buat node baru  
  3. Arahkan `next` dari node terakhir ke node baru  

- **Menambah di awal Array** → **O(n)** karena harus geser semua elemen ke kanan  
- **Menambah di akhir Array** → **O(1)** (jika masih ada kapasitas), **O(n)** jika perlu alokasi ulang memori  



---

### **📌 3️⃣ Apa yang terjadi jika kita menghapus node tengah dalam Singly Linked List?**  


- **Langkah-langkah menghapus node tengah dalam Singly Linked List:**  
  1. Traverse hingga menemukan node **sebelum node yang ingin dihapus**  
  2. Ubah `next` dari node sebelumnya untuk langsung menunjuk ke node setelahnya  
  3. Hapus node yang diinginkan  

**Kode sederhana dalam TypeScript:**  
```typescript
function deleteMiddleNode(head: ListNode | null, target: number): ListNode | null {
    if (!head || !head.next) return null;  // Jika linked list kosong atau hanya ada 1 elemen

    let prev = null;
    let slow = head;
    let fast = head;

    // Menggunakan two-pointer untuk menemukan node tengah
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next!;
        fast = fast.next.next;
    }

    // Hapus node tengah
    if (prev) prev.next = slow.next;

    return head;
}
```

---

### **📌 4️⃣ Kelemahan Linked List dibandingkan Array**  

🔴 **Kelemahan Linked List yang belum disebut:**  
1. **Tidak bisa diakses secara langsung (O(n))** → Harus traversal dari awal untuk menemukan elemen tertentu.  
2. **Boros memori** → Setiap node menyimpan **data + pointer**, sehingga membutuhkan lebih banyak memori dibanding array.  
3. **Kurang cache-friendly** → Data dalam array tersimpan **berdekatan di memori**, sedangkan Linked List tersebar sehingga memperlambat akses karena cache CPU tidak bisa mengoptimalkannya.  

---

### **📌 5️⃣ Kapan Circular Linked List lebih baik?**  

**Circular Linked List bagus untuk:**  
- **Playlist musik** → Lagu terakhir kembali ke lagu pertama (loop).  
- **Round-robin scheduling** → Dalam sistem operasi, proses CPU dijadwalkan dalam lingkaran.  
- **Cache LRU (Least Recently Used)** → Circular Linked List bisa digunakan untuk menyimpan referensi data yang sering diakses.  


---
