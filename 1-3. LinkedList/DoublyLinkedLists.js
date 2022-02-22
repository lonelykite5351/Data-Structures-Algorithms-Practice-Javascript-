// 10 --> 5 --> 16

class Node {
    constructor(value) {
        this.value = value
        this.previous = null
        this.next = null
    }
}

class DoublyLinkedLists {
    constructor(value) {
        this.head = {
            value: value,
            previous: null,
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
        const newNode = new Node(value)
        newNode.previous = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    prepend(value) {
        const newNode = new Node(value)
        this.head.previous = newNode
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
        const holdingNode = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = holdingNode;
        newNode.previous = leaderNode
        holdingNode.previous = newNode
        this.length++
        return this
    }

    remove(index) {
        const prevNode = this.traverseToIndex(index - 1)
        const prepareToRemoveNode = prevNode.next
        prevNode.next = prepareToRemoveNode.next
        prepareToRemoveNode.next.previous = prevNode
        this.length--;
        return this.printList()
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

let mylinklist = new DoublyLinkedLists(10)
mylinklist.append(5)
mylinklist.append(16)
mylinklist.prepend(19)
mylinklist.insert(3, 88)
// mylinklist.insert(2, 99)
// mylinklist.insert(2, 100)
mylinklist.remove(2)
console.log(mylinklist)
console.log(mylinklist.printList())

// practice, not complete