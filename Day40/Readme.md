# 1st Appraoch
# Question - Largest Odd Number

- Return the largest odd number, substring or entire from the string

Example 1:

Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
Example 2:

Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".
Example 3:

Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.

# Problem Pattern
- Start the loop from i = nums.length-1, we will start from the last string.

- We divide the last num, if(Number(num[i]) % 2 !== 0) return num because if dividing the last string
  returns 1 the whole string is odd. We don't have to find the substring

- Use a for loop and Number primitive type Number(num[ i ]) to check whether it is even or not
- If the entire num is odd return num;

- If it is even, use slice to reduce the num size, num = num.slice(0,i) - making it a substring

# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(1)

======================================================================================================
# 2nd Approach

# Question - Largest Odd Number

- Return the largest odd number, substring or entire from the string

Example 1:

Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
Example 2:

Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".
Example 3:

Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.

# Problem Pattern
- Start the loop from n = nums.length-1, we will start from the last string.

- We divide the last num, if(Number(num[i]) % 2 === 1) return num.substring(0,n+1)
  why n+1 ? because the last string is initally reduced to length-1;

- Use while loop; while(n>=0), it is reduced each time until odd number is encountered
  --n

# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(1)

=========================================================================================================

