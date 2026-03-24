# Question - Leet Code 155: Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

# Approach

1. The approach is that we need to pre-calculate minVal while pushing value [val, minVal];
2. So, the entire trick is while pushing, if we are storing for the first time, if the len
   of the stack is empty directly push [val, val]
3. Else calculate minVal by comparing currVal = val, and extracting it inside a variable and
   push inside the stack along with the new val, [val, minVal]

# Pattern

1. Push 
    - The entire code relies on the logic of push as discussed in the appraoch

1. Pop
    - We don't have to destructure or access the value because we just need to pop 
      the top element that's all
    - this.s1.pop()

2. Peek
    - I can use destructuring as well
    - this.s1[this.s1.length-1][0]
    - why [0]the index ? Because we are storing value at 0th index and minVal at 1st index

3. getMin
    - I can use destructuring as well
    - this.s1[this.s1.length-1][1])
    - why [1]the index ? Because we are storing minVal at 1st index 


# Complexity

1. Time Complexity

Q. Why O(1) for all operation?
= Because we are storing [val, minVal] & whenever we are inserting a new val we are doing
  the comparison each time and pushing [val, minVal] inside the stack
- O(1) - For all operations

2. Space Complexity
- For each operations we are not using an extra space; therefore, O(1)
- O(1)