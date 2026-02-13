# Question Fibonacci Number - Iterative - Top Down Approach

- Input (n) = 2
- Output (n) = 1


# Problem Pattern
- You need two base cases for n===1 & n===0
- You need three variables, prevVal, currVal, nextVal
- Run the loop from i=2 because 0 and 1 iteration is covered with base case


# Complexity

1. Time Complexity
- O(n) - Linear


2. Space Complexity
- O(1)

====================================================================

# Question Fibonacci Number - Recursive - Bottom Up Approach

- Input (n) = 2
- Output (n) = 1


# Problem Pattern
- Add both cases for 0 and 1 
- Now, the pattern is f(n-1) + fib(n-2)


# Complexity

1. Time Complexity
- O(n) - Linear


2. Space Complexity
- O(n)