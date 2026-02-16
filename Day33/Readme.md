 # 1st Approach
 # Question - Length of Last Word

 - Input = "Hello World"
 - Output = 5

 # Problem Pattern

 - First convert the string into an array using s.trim()
 - Later, split the array - s.split(" ")
 - Finally, s[ s.length-1 ].length



 # Complexity

 1. Time Complexity
 - Trim function takes - O(n)
 - Split function also takes - O(n)
 - O(n) + O(n) = 2O(n) = O(n) - Linear, built in function used


 2. Space Complexity
 - Split creates a new array, which takes new space
 - O(n) - Constant


===================================================================
# 2nd Approach 

 # Question - Length of Last Word

 - Input = "Hello World"
 - Output = 5

 # Problem Pattern

- n = s.length-1, start from the last of the string 

- First, while loop is used to traverse back to the character
- Until, character is reached it traverse backward
- break is used to break the loop, when character is found and for
  edge cases empty character " " 

- Introduce a count variable which keep counts of the character
- Second, while loop is used to traverse backward until " " is found


 # Complexity

 1. Time Complexity
 - O(n) * O(n) = O(n^2)


 2. Space Complexity
 - O(1) - Constant

===================================================================

# 3rd Approach

 # Question - Length of Last Word

 - Input = "Hello World"
 - Output = 5

 # Problem Pattern

- Solve the problem in a single loop
- If space is not encountered increase the count, else decrease the --n
- Finally, use a tricky approach of using the value of count variable to
  stop the loop

- We are using the value of count to know if " " has been encountered again
- If count>0 break

 # Complexity
 1. Time Complexity
 -  O(n) - Linear


 2. Space Complexity
 - O(1) - Constant

===================================================================
