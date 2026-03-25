# Question - Leet Code 1021; Remove Outer Most Parentheses

Example 1:

Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

# Appraoch 

1. First understanding the question itself is imp read the description from Leet Code
2. We need to remove the outermost parentheses from a valid string
3. We need to concatenate open bracket = "(" to the result var after pushing and concatenate ")" before popping.
4. This is the entire trick and we must do that using the stack.length, At length=1
   we will not do anything we will do it after length > 1

# Pattern

1. Introduce a string variable let str = [], to concatenate the inner parentheses.
2. Next, you need to introduce a variable let stack = [], to solve the problem.

3. So, we are finding the open parenthses we are pushing that parentheses inside the stack and after close parentheses we are popping the stack.

4. Now, inside the if condition we are checking for open parentheses and at else we
   are popping

5. Extra Trick - We need to apply is that: if we want to add inner parentheses inside
   the result we need to check length of stack.

6. While pushing we are going to check the length after pushing and while popping we 
   will check the length before popping to add the # closing bracket ")"

7. Finally, return string


# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- stack and result size can increase as input grows
- O(n)


========================================================================================

# Approach - Using level variable 

- The entire thing is open bracket push close bracket pop at concatenate after
  push and concatenate before pop

1. Make use of a let level variable don't rely on stack anymore
2. The entire logic depends on level

# Pattern

1. Introduce a level variable at the top and increase the level after encountering
   "(" open bracket, increase the level and add it on the result.

2. At else condition, after encountering ")", concatenate the string before decreasing
   the level. Decrease the level back to 1 after concatenating.


# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- Not using stack anymore so we can say O(1) but result is being used
- But we can argue that we are only using it to store the result 
- O(n) or O(1) depends on the explanation