//create a class
class Stack{
    constructor(){
        this.items = []
    }
    push(item) {
        this.items.push(item)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length - 1]
    }
    isEmpty(){
        return this.items.length === 0
    }
}

const stacks = new Stack()
stacks.push(1)      // add to the array = [1]
stacks.push(2)      // add again to the array = [1, 2]
stacks.push(3)      // add again = [1,2,3]
stacks.pop()        //returns 3, stack now is [1,2]
stacks.peek()       //return 2 looking the arrayn since the 3 is being popped

console.log(stacks)