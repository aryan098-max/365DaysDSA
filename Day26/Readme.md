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
- Exponential - power
- O(2^n-1), Ignore constants - O(2^n)
- fib(4), O(2^4-1), O(2^3)
- fib(4), goes 3 levels down, at three 3 levels there are 8 calls

- We can also solve the time complexity using a formula approach
- T(n) = T(n-1) + T(n-2) + C
       = 2T(n-1) + C (ConsiderT(n-1) === T(n-2))
       = 2{2 T(n-1-1)+ C} + C (T(n-1) = 2 T(n-1))
       = 4 T(n-2) + 3C
       = 4{2 T(n-3)+C} + 3C
       = 8 T(n-3) + 7C 
       = 2^k T(n-k) + (2^k - 1)C ( We are generating a general formula)
       - We derived the general formula for different values of k 

       - We are subtracting n to reach the base case; therefore, n-k = 0
       n = k

       = 2^n T(0) + (2^n -1)C
       Therefore, we can say 
       = O(2^n) Exponential Time Complexity - Worst 


2. Space Complexity
- O(n)