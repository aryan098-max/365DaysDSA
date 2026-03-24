# Question - Leet Code 232: Implement Queue using Stacks

# Note - you can't implement Queue using a single stack, must use two stacks

Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
 


# Approach - double-shuttle

1. Follow Same Approach as Implement Stack Using Queue; However, we need can't 
   swap s1 and s2 because we need to preserve the order.
2. Therefore, copy elements from to s1 to preserve the order.


# Pattern

1. Push - same as usal

2. Pop
    -  Same as implement stack using queue but copy back elements back to s1
       to preserve the order

3. top 
    - Same as implement stack using queue but copy elments back to s1

4. empty - same as usual


# Complexity

1. Time Complexity
- push - O(1)
- pop - O(n)
- top - O(n)
- empty - O(1)

2. Space Complexity
- Because I am not creating any extra space during these opeartions
- push - O(1)
- pop - O(1)
- top - O(1)
- empty - O(1)

=======================================================================================

# Approach - Solve it using O(1) for pop and top - Amortized Constant Time approach

1. We are going to push all the elements into the s2 into reversed order and 
   perform operations after that

    For example, push(1),(2),(3),(4)
    arr = [1,2,3,4]

    Queue is First In First Out; However, if I pop an element now I will get 
    4, but I need 1 because 1 was first in 

2. Now, let's suppose that I need to remove an element if I use pop() 4 will 
   be removed; however, in queue first element should be removed when we are 
   popping element

3. Therefore, we will copy all the elements inside s2 in reverse order and perform
   popping which will give me the desired element = 1


# Pattern

1. Push - same as usal

2. Pop an element

    - Copy the entire s1 into s2 into reverse order which will put 1 at first
    - Now, I can pop it
    - reversed arr1, arr2 = [4,3,2,1]
    - Now, if I use pop I will get the last element which is the desired element

3. Peek

    - Copy as pop method but now we need to access the last element which is 1
    - this.s2[s2.length-1];

4. Empty - Here we have to check for both s1 and s2 because we are filling both stacks

    - return this.s1.length === 0 && this.s2.length === 0;


# Complexity

1. Time Complexity
- push - O(1)

- It only triggers the transfer when is empty. Otherwise, it just looks at the top of 
  which is O(1), worst case O(n) if have to trasnfer the entire s1 into s2
- pop - Best Case O(1), Worst Case O(n), Avg Case O(1)

- It only triggers the transfer when is empty. Otherwise, it just looks at the top of 
  which is O(1), worst case O(n) if have to trasnfer the entire s1 into s2
- top - Best O(1), Worst case O(n), Avg Case O(1)

- empty - O(1)

2. Space Complexity
- Because I am not creating any extra space during these opeartions
- push - O(1)
- pop - O(1)
- top - O(1)
- empty - O(1)