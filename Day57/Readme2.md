# Question - Odd Even Linked List 

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.You must solve the problem in O(1) extra space complexity and O(n) time complexity.


 Example 1:

Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

# Problem Pattern

- In this question, we need to group odd and even indices together

# No matter what, odd node always points to null

1. First, we need to check for the constraint what if head is null or head.next is 
   null. Q. why head.next === null ? what if we have one node only. 

2. As we need to move odd and even, we need to store the position of the second even 
  we will store inside a variable called evenStart.

3. We will run the loop until (odd.next !== null && even.next !== null) because we 
   are moving the pointer two steps ahead.

4. One more thing don't forget to move the actual pointer changing the odd.next is 
   not enough we need to traverse the actual pointer as well. 

5. Finally, we need to make sure that the last odd index node is pointing to the
   start of even index node. For that we introduced a variable called evenStart

   Now, odd.next = evenStart

# Complexity

1. Time Complexity
- O(n)


2. Space Complexity
- O(1)