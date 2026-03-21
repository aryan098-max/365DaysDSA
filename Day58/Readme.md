# Question - Add Two Numbers 

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 
Example 1:

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

# Understanding the Question

1. The interesting thing about this problem is that the linked list is given reverse; therefore, we can perform
   the addition more easier

   For example, when we add two numbers we add from the right hand side; however, we are doing it from the left
   handside and original numbers are reverse in that way.

   Input: l1 = [2,4,3], l2 = [5,6,4]
   Output: [7,0,8]
   Explanation: 342 + 465 = 807.

   In this question, the ans is reversed order 7 is the starting the linked list

# Approach

1. The solution is staright forward; however, we have to cover three corner case here, 

    - l1 exhausted (null)
    - l2 exhausted (null)
    - carry 
    - digit 

    - What if l1 is exhausted and l2 is exhausted but carry is remaning that time make them zero
      therefore, we do - (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry

- We get carry dividing the sum with 10 and we get digit by modulus the sum with 10

    carry = Math.floor(sum/10);
    digit = sum % 10;

2. Initially, introduce a sentinel node (dummy node) so that it will point to newNode, also
   introduce dummyHead (setinelHead) because dummy will keep moving forward to point to newNode
   each time.

3. Calculate the sum using (l1.val + l2.val) + carry; however, we need to cover a corner case what if l1 or
   l2 is exhausted first.

   - Therefore, we need to check if l1 or l2 exists or not each time
   - (!l1 ? 0 : l1.val) - so if it doesn't exist but carry exist to cover this case we need to do this

4. Now, we need to cacluate carry and digit each time
5. We make a new node using the value of digit calculated using - digit = sum % 10;

6. After, that create a new node and assign it a digit value and dummy.next should be point
   to this newNode now and it must move forward to the newlyAdded node

   Therefore, next time a new node is added dummy.next point to that new node

7. Note, we are covering another corner case here, if l1 or l2 is null already stop moving it forward

8. Finally, return dummyHead.next because it is the starting of the node

    l1 = l1 && l1.next;
    l2 = l2 && l2.next; (only move them if they are not null)


# Complexity

1. Time Complexity
- O(m + n) - Linear

2. Space Complexity
- We are creating a new linkedlist
- O(m + n)
