// 10 --> 5 --> 16

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        },
        this.tail = this.head;
        this.length = 1;
    }
    
    printList() {
        const array = []
        let currentNode = this.head
        while(currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }

    append(value) {
        // const newNode = {
        //     value: value,
        //     next: null
        // }
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }
    prepend(value) {
        // const newNode = {
        //     value: value,
        //     next: null
        // }
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
}

let mylinklist = new LinkedList(10)
mylinklist.append(5)
mylinklist.prepend(16)
console.log(mylinklist.printList())

// practice, not complete