# Question Pattern - Method 1

- The first solution fails for prices = [2,4,1] test case

# Problem Pattern
1. Find the lowest element in the array
2. Find the highest element in the array, which comes after the lowest
3. Add a condition (lowestPrice < highestPrice) return lowest - highest
4. Otherwise, return zero

# Complexity

1. Time Complexity
- O(n) + O(n) = 2O(n) = O(n) - Linear

2. Space Complexity
- O(1) - Constant

=============================================================

# Question Pattern - Method 2

# Problem Pattern
1. In this method, we are solving the problem with 1 loop only
2. Assume lowestPrice = prices[0]
3. Use the same concept as tracker and i
4. Starting the first loop with i = 1 because lowestPrice = p[0]
5. We are going to subtract p[i] from lowestPrice (p[i] === highestPrice)
6. Therefore, we are going to increase the i each iteration for evaluating 
   each corner case

- Hint 
- We are not going to declare a variable highestPrice for solving the problem
- We are going to use prices[ i ] as means to solve the problem and comparing 
  the value each time with maximumProfit

# Complexity

1. Time Complexity
- O(n) - Linear

2. Space Complexity
- O(1) - Constant

