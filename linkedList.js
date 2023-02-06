class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while (curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }   

    insert(value, index) {
        if(index < 0 || index > this.size) {
            return console.log('the index is out of the scope') 
        } else if (index === 0){
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if(index < 0 || index >= this.size){
            return null
        
        }
        let removeVal;
        if (index === 0){
            removeVal = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            removeVal = prev.next
            prev.next = removeVal.next
        }
        this.size--
        return removeVal.value
    }

    removeValue(value) {
        if(this.isEmpty()){
            return null
        } 
        if(this.head.value === value){
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if (prev.next){
                let removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    search(value) {
        if(this.isEmpty()){
            return -1
        }
        let curr = this.head
        let i = 0
        while(curr){
            if(curr.value === value){
                return i
            }
            i++ 
            curr = curr.next
        }
        return -1
    }

    reverse(){
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }        
        this.head = prev
    }
}

const list = new LinkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
console.log(list.removeValue(5))
console.log(list.search(7))
list.reverse()
list.print()