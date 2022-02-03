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
    peek() {}
    push(value) {
        const newNode = new Node(value)
    }
    pop() {}
    //isEmpty
}

const myStack = new Stack();
myStack.push("Discord")
myStack.push("Udemy")
myStack.push("google")
console.log(myStack);
//Discord
//Udemy
//google
