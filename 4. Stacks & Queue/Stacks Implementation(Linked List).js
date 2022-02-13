class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    printStack() {
        const array = []
        let currentNode = this.top
        while(currentNode) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array
    }
    peek() {
        return this.top
    }
    push(value) {
        const newNode = new Node(value)
        if(!this.bottom) {
            this.bottom = newNode
            this.top = this.bottom
            this.length++
            return this
        }
        newNode.next = this.top
        this.top = newNode
        this.length++
        return this
    }
    pop() {
        if(!this.top) {
            return this
        }
        if(!this.top.next) {
            this.bottom = null
        }
        const removeNode = this.top
        this.top = this.top.next
        this.length--
        return removeNode
    }
}

const myStack = new Stack();
myStack.push("Discord")
myStack.push("Udemy")
myStack.push("google")
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.printStack());
//Discord
//Udemy
//google
