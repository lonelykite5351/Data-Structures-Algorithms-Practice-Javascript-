// 10 --> 5 --> 16

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        },
        this.tail = this.head;
        this.length = 1;
    }
}

let mylinklist = new LinkedList(10)
console.log(mylinklist);

// practice, not complete