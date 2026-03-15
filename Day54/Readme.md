# Question - Remove Linked List Elements

# Approach - Sentinel Node

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

# Problem Pattern

1. First and Foremost you have to solve this problem using the concept of Sentinel node

Q. What is a sentinel node?
- It is a dummy node created using the help of LinkedList constructor

2. Create a sentinel node without passing anything - let sentinel = new ListNode();
3. Now, the reason we are introducing a sentinel node is because we need to solve a 
   corner case in this problem where the val that needs to be removed is at head
   
   Q. why sentinel.next = head? 
   - Because this appraoch solves the problem of head having the val itself.

4. Now, we need to assing sentinel.next = head;
5. Create a prev variable; we are going to use this variable to solve the problem,
   let prev = sentinel

# Note: when we are moving a pointer two times - prev.next = prev.next.next check for both
# prev and prev.next 

6. Now, we are going to run the loop and check: while(prev !== null && prev.next !== null)
7. Now, we need to check if: prev.next.val === val, it is tricky thing here, 

  Q. why prev.next.val ?
    - Because prev.next is pointing to head, we are not being assigned the node itself 
      we are pointing at the node with the help of head.
    
8. Furthermore, after finding the matching value we have to move: prev.next = prev.next.next (two times)
   otherwise one time only.

9. Finally, we have to return: sentinel.next - ? why? because what if head has the val itself which we 
   want to remove.

10. Why are we returning sentinel.next? 

   The reason we are returning sentinel.next is because if there is a value in the Linked List that we want
   to remove is at first 

   1->2->3->4->5

   Let's suppose that I have to remove 1 -> Currently, prev and sentinel is pointing to the same box which
   has two value -> val and next 

   -> sentinel.next = head, therefore, prev.next = head (because it is the same box for both)

   -> Now, when we move prev.next = prev.next.next - The memory address which is being changed right now
     is sentinel.next as well. Therefore, if we delete from the first we have to return sentinel.next

   -> When we don't have to remove the first prev keeps moving forward and at that time sentinel.next is 
      pointing at head only.
   
   # Note: Both sentinel and prev is pointing to the same box -> therefore, we have to return sentinel.next
     at last we have to return sentine.next

# Few dobuts clear through this question

1. First, when we want to make changes in the LinkedList itself we change the next pointer of the curr
   or pre or temp pointers.

2. Otherwise, we are only moving the pointer from one node to another

3. When we change the pointer of LinkedList all the pointer pointing to LinkedList changes: JS concept
   of reference

4. When we are moving the pointer two step ahead check for both: prev and prev.next !== null.


# Complexity

1. Time Complexity
- O(n) - Linear


2. Space Complexity
- O(1) - Constant

