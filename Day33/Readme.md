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
 - O(1) - Constant, built in function used


 2. Space Complexity
 - O(1) - Constant


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

- n = s.length-1, start from the last of the string 

- First, while loop is used to traverse back to the character
- Until, character is reached it traverse backward
- break is used to break the loop, when character is found and for
  edge cases empty character " " 

- Introduce a count variable which keep counts of the character
- Second, while loop is used to traverse backward until " " is found
- Each time a character is encountered increase the value of count


 # Complexity

 1. Time Complexity
 - O(n) * O(n) = O(n^2)


 2. Space Complexity
 - O(1) - Constant

===================================================================
