class Queue {
    constructor(){
        this.storage = {}
        this.front = 0
        this.rear = 0
    }
    
    enqueue(element) {
        this.storage[this.rear] = element
        this.rear++
    }
    
    dequeue(){
        const item = this.storage[this.front]
        delete this.storage[this.front]
        this.front++
        return item
    }
    
    isEmpty() {
        return this.rear - this.front === 0
    }

    peek(){
        return this.storage[this.front]
    }

    size(){
        return this.rear - this.front
    }

    print(){
        console.log(this.storage)
    }
}