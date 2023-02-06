class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.tail = node
            this.head = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print() {
        if(this.isEmpty()){
            return console.log("This list is empty")
        } else {
            let values = ''
            let curr = this.head
            while(curr){
                values += `${curr.value} `
                curr = curr.next
            }
            return console.log(values)
        }
    }

    removeFromBack(){
        if(this.isEmpty()){
            return console.log('The List is empty')
        } 
        let value = this.tail.value
        this.size--
        if (this.size === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        return console.log(value)
    }

    removeFromFront() {
        if(this.isEmpty()){
            return console.log("The list is empty")
        }
        let value = this.head.value
        this.size--
        if(this.size === 1){
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
        }
        return console.log(value)
    }

}

const list = new DoublyLinkedList()

list.append(5)
list.append(87)
list.prepend(50)
list.prepend(60)
list.print()
console.log(list.getSize())
list.removeFromFront()
list.removeFromBack()
list.print()
console.log(list.getSize())