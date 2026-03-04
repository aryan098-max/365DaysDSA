# Slow and Fast pointer Approach
  - Linked List problem can be usally solved using slow and fast pointer approach
  
# Question - Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3

Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

# Problem Pattern

1. We are going to solve this problem using two pointer approach.

    - slow = head
    - fast = head

2. slow pointer is going to traverse from one node to another and fast pointer 
   is going to traverse 2 times the slow pointer.

3. So, when slow reaches 1 index, fast is going to reach 3rd index. In this way, we 
   are apporach the problem.

4. We are going to use while loop which stops run till: (fast !=null && fast.next !== null)
   keep increasing the fast and slow pointer from, slow = slow.next, fast = fast.next.next

  Q. Why while(fast!= null && fast.next!=null) why && ? To understand take example of a node
     and dry run the code
    - We have to use && because at a time, means for odd, fast.next === null and for even, 
    fast == null. 

    - If we use || s will keep on moving forward and same for fast

5. Finally, return slow - which always comes to middle and it is pointing to middle node

# Complexity

1. Time Complexity
- O(n) - Linear

2. Space Complexity
- O(1) - Constant