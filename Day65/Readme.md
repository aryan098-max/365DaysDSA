# Question - Leet Code 225: Implement Stack using Queues

Example 1:

Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False

# Approach

1. Implement the solution using two stack
2. The approach is even more simpler keep pushing back the element you popped
   back into the queue till n-1


# Pattern

1. Implement push same as doing the two queue

2. Implement pop 

    - Run the loop till n-1 extract the top element and return it
    - The rest of the elements are same as early because we are again
      pusing elements back inside it. 

3. Implement top
   
   - Same as pop only difference put back the topEle back in the queue

4. Empty is same as two queues

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