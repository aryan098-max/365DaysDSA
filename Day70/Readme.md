# Question - Leet Code 150: Reverse Polish Notation

You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9


# Reverse Polish Notation 
  3 4 + = (3 + 4) 


# Approach

- If it matches the airthemetic operators pop first value, second value 
- Perform the mathematical expresion 
- Push the value back into stack for furhter operations
- Finally, return Number(stack.pop())


# Pattern

1. Introduce a stack variable, and create a map out of the operators.
2. Run the loop and push the elements inside the stack if tokens[i] is !== operators.
3. If it is a operator, pop 1st value, pop 2nd value store them inside a variable.

    - Note: pop them in a reverse order, store 1st value into b, and 2nd value into a
      because that is the order in which they should be evaluated

    - For example, ("8", "2","/")
      Here, inside the stack [2,8] it is stored in this way, so b = 2, a = 8
      then only a/b is valid

    - Furhter dry run the code to understand,

4. Now, let result = eval(`${a} ${tokens[i]} ${b}`)  (using string literal to avoid js error of --)
5. Note: Before pushing the result into the stack truncate the value - stack.push(Maht.truc(result))
   - The reason we have to do that to remove decimal.

6. Finally, return Number(stack.pop()) because the value inside the stack is string.

# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- Using a stack to push and pop the values
- O(n)








