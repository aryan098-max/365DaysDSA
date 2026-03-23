 1. Queue - FIFO = First In First Out

        - enqueue(add)
        - dequeue(remove)
        - peek.front - returns element at the front of the queue
    
        - I can only insert elements from the back. However, comes first will be 
          served first

        - I can only remove elements from the front of the queue

        - Examples: Ticket Counter, OS Task Scheduling, Printers
        

    2. Stack - LIFO = Last In First Out - It has only one end

        - push
        - pop
        - peek/top

        - I can only add elements from the top

        - I can remove elements from the top of the stac. Whoever comes last will be served 
          first

        - Example: Stack of Books, Undo feature, Browsing History, Recursion


    3. Why do we need the ?
    - Organisze data logically (based on the problem's need)
    - Order of operations matter
    - Optimize time/space for specific use cases

    4. Uses Cases:
    - Recursion
    - Level Order Traversal in trees
    - BFS
    - DFS

    5. What is stack & queue in code?
    - JS also has a stack data structure
    - Stack is an array as well

    let stack = [] - it is a stack

    - All the arrays inside the js are already stack because we are allowed to stack.push(10)
    - We are allowed to do push and pop from the array

    6. When we already have array, why do we need stack and queues?
    - Stack is a logical data strucuture. It is a property over an array. It is an array with 
      restricted actions
    - Don't do random access on the stack. You can't modify random index inside the stack.

    # Stack is an array with restricted access.
    # Stack is an array with disciplined enforced.