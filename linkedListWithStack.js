const LinkedList = require('./linkedListWTail')

class LinkedListStack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }

    pop() {
        return this.list.removeFromFront()
    }

    peek() {
        return this.list.head.value
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        this.list.getSize()
    }

    print() {
        this.list.print()
    }
}