# Question - Leet Code 225: Implement Stack Using Queues


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


# Approach - Implemented Using Two Stacks

1. We have to solve this problem using two stacks
2. Implementing push is simple because same in queue and stack 
3. However, implementing pop() and top() is tricky becuase queue uses FIFO
   and stack uses LIFO. Therefore we have to use two queues


# Problem Pattern

1. We have to use this inside the constructor function and rest of the function
   all the time after introducing two queues

    For example, 

    this.q1 = [];
    this.q2 = [];
   
2. Implementing push is simple access the q1 and push the element: this.q1.push(x);

3. Implementing pop

    - First introduce a n variable, n = this.q1.length
    - Run the loop til n-1 and shift all the elements from the q1 store it inside
      a variable and push it inside q2
    - Now, only the last element is remaning at last which we need pop
    - pop that last ement using - let popedEle = this.q1.shift()
    - Finally, before returning the ans swap q1 and q2 access them using this

4. Implementing top

    - It is similar as pop however, we need to add the lastly removed element back inside the q2 before swapping and returning the top element

5. Implementing Empty
    
    - While implementing only keep one thing in my mind if (this.q1.length === 0)
      return true
    - We want to return true when list is empty

  


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