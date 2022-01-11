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
    
    // printList() {
    //     const array = []
    //     let currentNode = this.head
    //     while(currentNode !== null) {
    //         array.push(currentNode.value)
    //         currentNode = currentNode.next
    //     }
    //     return array
    // }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        return this
    }

    // prepend(value) {
    //     // const newNode = {
    //     //     value: value,
    //     //     next: null
    //     // }
    //     const newNode = new Node(value)
    //     newNode.next = this.head
    //     this.head = newNode
    //     this.length++
    //     return this
    // }
    
    // insert(index, value) {
    //     const newNode = new Node(value)
    //     if(index === 0) {
    //         this.prepend(value);
    //         return this;
    //     }
    //     if(index >= this.length) {
    //         this.append(value);
    //         return this;
    //     }
    //     const leaderNode = this.traverseToIndex(index - 1)
    //     // continue
    //     const holdingNode = leaderNode.next;
    //     leaderNode.next = newNode;
    //     newNode.next = holdingNode;
    //     this.length++
    //     return this
    // }

    // remove(index) {
    //     /*  method 1: traverse two times, not good.
    //         const prevNode = this.traverseToIndex(index - 1)
    //         const nextNode = this.traverseToIndex(index + 1)
    //         prevNode.next = nextNode
    //         return this
    //     */
        
    //     // method 2
    //     const prevNode = this.traverseToIndex(index - 1)
    //     const prepareToRemoveNode = prevNode.next
    //     prevNode.next = prepareToRemoveNode.next
    //     this.length--;
    //     return this.printList()
    // }
    // traverseToIndex(index) {
    //     let counter = 0
    //     let currentNode = this.head
    //     while(counter !== index) {
    //         currentNode = currentNode.next;
    //         counter++;
    //     }
    //     return currentNode
    // }
}

// let mylinklist = new LinkedList(10)
// mylinklist.append(5)
// mylinklist.prepend(16)
// mylinklist.insert(2000, 88)
// mylinklist.insert(2, 99)
// mylinklist.insert(2, 100)
// mylinklist.remove(3)
// console.log(mylinklist.printList())

// practice, not complete