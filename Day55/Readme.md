# Question - Remove the Nth Node 

# Approach 1 - Two pass solution 
- Use sentinel node and prev to solve the problem
- To remove the Nth node we need to find the prevPost and move prev to that position

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

# Problem Pattern

1. We have to solve this problem using the similar pattern as Remove Linked Liste Elements

2. Introduce a sentinel node and point it to head.next. We need to also introduce a length
  variable because we need to count the total node in the list.

    Make sure that lenth starts from 0; not 1 take example and dry run the code to know why 0?

3. After counting total node in the list, introduce two variables prev = sentinel (as previously done)
  next, is:     

  let prevPost = length - n;

  Q. Why prevPost = length - n?
  - Let's suppose that there are 4 nodes in the list and n = 2 (2nd node from the last)

  -  1->2->3->4, we need to remove 3 we need to reach 2 - we can reach that using length - n;

  - prevPos = 4-2 = 2 (2nd position from the start of the linked list)

4. Now, we need to run a loop till prevPos and the loop should start with i=0 so that we can 
   reach at the desire position

   - for(let i=0; i<prevPos; i++) keep moving prev to the next index;
   - Finally, move prev to prevPos

5. After, moving prev to the prevPos change the pointer of the next to next.next 
    prev.next = prev.next.next;

    The only way to delete a node is to move the pointer to that position to next node

6. Finally, return sentinel.next -> In case, the Nth node is at head.


# Complexity

1. Time Complexity
- O(n) + O(n) = 2O(n) - O(n);

2. Space Complexity
- O(1)

===================================================================================================================

# Question - Remove the Nth Node 

# Approach 2 - One pass solution 



