class MyArray {
    data: { [key: number]: any };
    length: number;

    constructor() {
        this.data = {};
        this.length = 0;
    }

    push(item: any): void {
        this.data[this.length] = item;
        this.length++;
    }

    get(index: number): any {
        if (index < 0 || index >= this.length) return undefined;
        return this.data[index];
    }

    pop(): any {
        if (this.length === 0) return undefined;

        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];

        this.length--;
        return lastItem;

        this.length--;
        return lastItem;
    }

    delete(index: number): any {
        if (index < 0 || index > this.length) return undefined;

        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }

        delete this.data[this.length - 1];
        this.length--;
    }

    print(): void {
        const result: any = [];
        for (let index = 0; index < this.length; index++) {
            result.push(this.data[index]);
        }
        console.log(result.join(", "));
    }
}

const array = new MyArray();

array.push("A");
array.push("B");
array.push("C");
array.push("D");
array.push("E");
array.pop();
array.delete(2);

const get = array.get(3);
console.log({ get });

array.print();
