class CrazyQueue {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        const firstArray_length = this.first.length;
        for(let i = 0; i < firstArray_length; i++){
            this.last.push(this.first.pop())
        }
        this.last.push(value)
        return this
    }

    dequeue() {
        const lastArray_length = this.last.length;
        for(let i = 0; i < lastArray_length; i++){
            this.first.push(this.last.pop())
        }
        return this.first.pop()
    }
    peek() {
        if(this.last.length > 0){
            return this.last[0]
        }
        this.first[this.first.length - 1]
    }
}

const myQueue = new CrazyQueue();
myQueue.peek();
console.log(myQueue.enqueue('Joy'))
console.log(myQueue.enqueue('Matt'))
console.log(myQueue.enqueue('Pavel'))
console.log(myQueue.peek())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.peek())