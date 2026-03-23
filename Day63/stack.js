/*

    1. Arrays are built in stack with restricted access

*/

let stack = [];
stack.push(1);
stack.push(2);
stack.push(3);

// It removes the top element
stack.pop();

console.log(stack);

// Last element of the stack is top element of the stack
console.log(stack[stack.length-1]);

// Invalid stack operation random access of the stack
console.log(stack[3]) // gives ouput but invalid