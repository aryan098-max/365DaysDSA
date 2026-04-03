# Question - Sqrt(x) : Leet Code 69

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 


# Approach

1. We need to use binary search alogirthm for this, instead of linear search
2. Therefore, our left = 2, because square root of any number always lies between
   2 ..... n/2, It is mathematically proof
3. Therefore, according to this, right = n/2 because our square root of any digit 
   falls between these two 
4. Now, since left and right is decided, we are going to find the middle using left 
   and right and compare the square root with: middle ** 2
5. Middle is our squar root


# Pattern

# Note: while finding middle we are finding the middle not using the index but the value itself
  2,3,4,5 = middle is (2+5)/2 = 3.5 = 3, No index value


1. Cover a base where if(x < 2) return x, base case for 0 and 1
2. Now, for left = 2, right = x/2
3. Run a while loop till: while(left <= right), find the middle and move left and right
   by comparing the number with (middle ** 2), we need to compare by finding the square root
   of middle



# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(1)