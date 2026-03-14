# Question - Palindrome Linked List

# Approach - You have to solve this problem using two concepts 
             1. Middle of the linked List
             2. Reverse the Linked List
             3. Finally, do the comparison between first half and second half

Given the head of a singly linked list, return true if it is a palindrome or false otherwise. 

Example 1:

Input: head = [1,2,2,1]
Output: true
Example 2:

Input: head = [1,2]
Output: false

# Problem Pattern

1. Find the middle of the linked list using slow and fast pointer approach.

2. Second, reverse the linked list - You have to make sure that middle is pointing to null.
3. Therefore, use, prev, make curr = slow (curr is the middle). You don't need extra middle pointer.

4. Finally, introduce two variables, firstHalf = head, & secondHalf = prev, -> prev is at the end of
   the second half.

5. You must be careful dealing with, making curr = slow (aka middle), secondHalf = prev 


# Complpexity

1. Time Complexity
- O(n) + O(n) + O(n) = 3O(n) = O(n)

2. Space Complexity
- O(1)

