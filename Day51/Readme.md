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

======================================================================================

# Approach 2 - Floyd's Algorithm

- Floyd's Alog suggests that if there is a cycle in the list, eventually two ponter 
fast and slow will meet each other and if they meet return true; cycle exists.

- This problem is solved with the help of fast and slow pointer approach

# Problem Pattern

1. Therefore, we are going to use slow and fast pointer approach as we did in the middle
of th lined list problem 

2. Introduce two variables slow and fast and this time we are not going to start them from
   the same position because we don't want them to be equal at the first place itself.

   For example, 

   slow = head
   fast = head.next

   // We won't start them from the same position because we the while loop will fail immediately.

3. We will run a while() loop now, which will run until slow ! fast. while(slow !== fast). As we are
   running this loop, we will keep moving the slow and fast pointer and check if fast has become null

  For example, 

  // We also need to check if fast has become null or not and we will use || condition this time because
     we want the condition to pass anyhow

   if(fast === null || fast.next === null ) return false

   // keep increasing fast and slow inside the loop

4. Finally, after the loop breaks return false because: slow === fast eventaully

5. Make sure to add a corner case of: if(head === null), which means that the list is empty

# Complexity

1. Time Complexity
- O(n) - Linear 

2. Spacve Complexity
- Floyd's algo we are not using extra space; therefore, O(1)
- O(1) - Constant 