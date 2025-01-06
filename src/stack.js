const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = []
  }
  // showArray(){
  //   console.log(this.stack);
  // }
  push(element) {
    console.log(this.stack);
    this.stack.push(element)
    console.log(this.stack);
  }

  pop() {
    return this.stack.pop()
  }

  peek() {
    console.log(this.stack);
    return this.stack[this.stack.length - 1]
  }
}

// const stack = new Stack();

// stack.push(1);
// stack.push(2);
// console.log(stack.peek())
// console.log(stack.pop())
// stack.pop()
// stack.showArray()
// console.log(stack.pop());

module.exports = {
  Stack
};
