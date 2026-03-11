# Question - Remove Duplicates from Sorted Linked List

# Approach - Use sorted linked approach - 1->1->2->3->3

Since, it is sorted linked list the following two nodes might be same; therefore, we will 
check: 

    if(curr.val === curr.next.val){
        move curr
    }

# Note: Duplicates are repeated once only ->1->2->3->3, build logic according to that

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 
Example 1:

Input: head = [1,1,2]
Output: [1,2]

# Problem Pattern

1. While solving the problem remember one thing you don't have to create set or map because the
   linked list is sorted and 1 val is repeating one time only and it is sequently

   For example, 

   1 -> 1 -> 2 -> 3 -> 3

2. Now, you have to check whether the val is equal: curr.val === curr.next.val, increase curr two times

3. Run the loop until curr !== null or curr.next !== null because are moving two step forward as well

4. Finally, return head


# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(1)