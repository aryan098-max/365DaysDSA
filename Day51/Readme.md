# Approach 1 - hash map - Set Data Structure
# Question - Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

# Problem Pattern

- First Confusion: How to end the loop?: Using same logic while(curr !== null). 

- If you have the confusion of why curr !== null and why not (curr.next !== null)?
  dry run the code. 

- The pattern of solving this question is that we will check whether our set has the
  already included node in the set

- We are going to check if(seenNode.has(curr)) return false;

- If that's not the case we are going to move to add the node in the set and move to 
  the next node. seenNode.add(curr), curr = curr.next;

- Finally, if it is not the cycle return false;

# Complexity

1. Time Complexity
- O(n) - Linear

2. Spacve Complexity
- Because we are using an extra space for storing the set
- O(n) 
