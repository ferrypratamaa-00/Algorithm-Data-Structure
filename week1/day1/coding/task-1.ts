class ListNode {
    data: any;
    next: ListNode | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    append(data: any) {
        const newNode = new ListNode(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    prepend(data: any) {
        const newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data: any) {
        if (this.head == null) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    find(data: any) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    print(): void {
        let current = this.head;
        const result: any = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" -> "));
    }
}

const list = new SinglyLinkedList();

list.append("E");
list.prepend("A");
list.prepend("C");
list.prepend("B");
list.prepend("D");
list.delete("C");

const found = list.find("B");
console.log("Found node:", found?.data);

list.print();
