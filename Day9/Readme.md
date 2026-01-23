==============================================================
# Palindrome
sas

# Problem Pattern

# First Method
1. Find reverse and compare the reversedNum with the original num
2. To find reverse - use pure mathematical method 

# Second Method for Array & String
1. First Method - Using a loop (i<j) concept for string an array
2. Find Reverse & Compare

# Complexity 

1. Time Complexity
- O(n)

2. Space Complexity
- O(1)

=================================================================
# Reverse a Number
- 123 = 312

# Problem Pattern

# First Method
1. Use a reverse loop 
2. Push the element from end into an array

# Second Method
1. First Step  - Use a loop
2. Second Step - Find the last digit & store in a variable
3. Third Step - Remove the last digit & repeat the process
4. Formulate the reverseNumber Formula = reversedNumber * 10 + lastDigit

# Complexity

1. Time Complexity 
- O(n)

2. Space Complexity
- O(1) 

=================================================================
# Extract Last Digit
- n = n%10

- After extracting the last digit save that variable into another variable

# Remove Last Digit
- n = Math.floor(n/10)
=================================================================