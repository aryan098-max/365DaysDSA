# Question - Leet Code 20 - Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true


# Approach and Pattern

1. We need to create a map of opening as key and closing as value keeping both as {"[": "]"}

2. Now, the whole ideaa is if map has the key push the key
inside the stack

3. Now, when we encounter a closing bracket we run else condition and pop the first element from the stack,

4. After popping that bracket from the stack we check whether it doesn't matches with the closing bracket.

5. The entire goal is empty the stack


# Pattern

1. First, check the base case length <=1 return false

2. Second, create a stack with empty array and create a bracketMap = { 
    "[" :"]",
    "{" :"}",
    "(": ")"
}, storing all kinds of brackets

3. In the for loop store the opening brackets inside the stack

4. If condition checks whether the key exists in the given string or not. If it doesn't exists, run else condition.

5. In the else condition introduce a variable top and store the first element of the stack now we are checking if the top element matches with the closing bracket

5. After popping the first element, we check: tricky part we will check if s[i] = closing bracket (next iteration) is not equal to bracketMap[top].

    For example, 

    s = "()"

    - Now, if will push [(] inside the stack and will go the second string

    - if will fail this time because ")" is not inside the map because we are storing by the opening bracket
    - else will extract the top bracket from the stack

    - Next, if condition will check top is empty or not first || it will again check if s[i] = ")", !== bracketMap[top] = bracketTop["("] = it returns the key ")", which means ")" !== ")" it won't execute loop finishes
    
    - Our, entire goal is to emptied the stack

6. Check the length of the stack - return stack.length === 0, which returns true 


# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- stack is staking a space of (n)
- O(n)