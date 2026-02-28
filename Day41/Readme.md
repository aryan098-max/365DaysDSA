# Question - Longest Common Prefix

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

# Problem Pattern

1. We will be using to use the 2D techniques for solving this question

2. Introduce a varibale x = 0, which will be very useful for comparing the first char 
   of each string

3. There are a total of 2 loops first is the while loop where a ch variable is introduced
   storing ch = strs[0].[x], eventually value of x is increased for comparing with the rest
   of the characters

4. We are going to compare the each char of all the string and keep moving forward
  unless the length of the first string is exhausted in the while loop 

5. Next, inside the for loop, inside the if condition if (str[i].[x] !== str[0][x] || x === strs[0].length

6. Once, condition fails, use - substring method with the first string = strs[0].substring(0,x)
   
7. Finally, If string is empty and length of the first string is exhausted first
   return strs[0];

# Complexity

1. Time Complexity
- It is O(s) because all the strings inside the strs are compared at the same times
- O(n)

2. Space Complexity
- O(1) - Constant

===========================================================================================================

# 2nd Approach 

- Introduce a for(loop) instead of using while loop - the logic to stop the loop is length of first string
- Second change Introduce a variable called commonPrefix in global and keep concatenating the string unless
  the condition string mismatch and the length of second substring is finished
  : If(ch !== strs[j][i] || i>= strs[j].length) return commonPrefix;

- Keep concatenating outside the j loop - commonPrefix = commonPrefix + ch;
