# Question - Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []

# Problem Pattern

1. First and foremost, confusion is how we will point back. To solve this we are going to 
   introduce a total of 3 new variables.

    - temp = we need temp first because this variable is used to store the upcoming node. 
             This variable solve the problem of maintaining the link to forward node.

    - prev = It is initally null and assigned curr.next so that first node start pointing to null
    - curr = curr starts from the first node itself, it is directly assinged to first node

- Now, regarding how long the loop will run since curr is on the first node itself, eventually it b
  becomes null itself; therefore, until first node becomes null. The loop runs:

    - while(curr !== null){
        keep running the loop
    }

# Confusion:
  The loop stops at curr.next === null or curr = null. To resolve this #dry run the code.

3. To solve, this problem play with the temp, prev, and curr variable assign the value of one 
   variable to another and keep moving ahead.

# Complexity

1. Time Complexity
- O(n) - Linear

2. Space Complexity
- O(1) - Constant