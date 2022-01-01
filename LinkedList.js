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
    
    insert(index, value) {
        const newNode = new Node(value)
        if(index === 0) {
            this.prepend(value);
            return this;
        }
        if(index >= this.length) {
            this.append(value);
            return this;
        }
        const leaderNode = this.traverseToIndex(index - 1)
        // continue
        const holdingNode = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = holdingNode;
        return this
    }
    traverseToIndex(index) {
        let counter = 0
        let currentNode = this.head
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode
    }
}

let mylinklist = new LinkedList(10)
mylinklist.append(5)
mylinklist.prepend(16)
mylinklist.insert(2000, 88)
mylinklist.insert(2, 99)
mylinklist.insert(2, 100)
console.log(mylinklist.printList())

// practice, not complete