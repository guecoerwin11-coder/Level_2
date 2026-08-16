class Queue {
    constructor(){
        this.items = []
    }
    queue(item){
        this.items.push(item)
    }
    dequeue(){
        return this.items.shift()
    }
    front(){
        return this.items[0]
    }
    isEmpty(){
        return this.items.length === 0
    }
}

const q = new Queue()

q.queue('bob')  //add it first
q.queue('win')  //add second
q.queue('apey') //add third
q.dequeue()     //remove the first item = 'bob'

console.log(q)