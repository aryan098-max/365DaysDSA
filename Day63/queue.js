let queue = [];

// enqueue, 1 is entered first and 3 last
queue.push(1);
queue.push(2);
queue.push(3);

// dequeue, removes the first element from the queue
// Never do queue.pop();
queue.shift();

// front of the queue
let front = queue[0];
console.log(queue[front]); // 1

// Randome access not allowed