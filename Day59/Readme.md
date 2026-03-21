# Question - Merget Two Sorted Lists

Q. What is non-decreasing order?
- Non-decreasing order means a sequence of numbers is arranged from smallest to largest, 
  where each number is greater than or equal to the preceding one

- Nodecrease - It means that the sequence is never decreasing it either stays same or goes 
  up.

# Approach One - Use similar approach as merge sort array

- Create a new node each time out of a l1.val or l2.val and sentinel.next
  must point to that newly created node.

1. First, check if l1.val is less than l2.val and keep creating a newNode 
   each time
2. After creating newNode, make sure that sentinel node is pointing to 
   that newNode
3. As we are doing for l1 we will do for l2 as well
4. The unique thing about linked list solution is that we are creating 
   a new Node each time.

# Problem Pattern

1. Introduce two variables sentinel & sentinelDummyHead - sentinel = new ListNode()
2. Both are pointing to a pointer which is 0 and next is null.

3. Now, we need to start the loop but we don't have length as array therefore, 
   we will go   until either l1 or l2 is null.

4. Use simialar logic as merge sort array to create a new node each time using 
   l1.val or l2.val and keep moving l1 and l2 forward.

5. Finally, after creataing a brand new sorted linked list return 
   sentinelCopy. next because it is pointing to start of the newly created list

# Complexity

1. Time Complexity
- O(m + n) - Linear

2. Space Complexity
- O(m + n) - Space


================================================================================

# Approach 2 

- In this approach we are moving the curr pointer in zig zag way

1. We are not going to use a sentinel node or dummy node here
2. Find the start of the list by comparin l1.val and l2.val 
3. Later, traverse the list using a third variable curr
4. Keep moving l1, l2, and curr as well

# Problem Pattern

# Base checking if l1 and l2 is null if l1 null return l2 and vicevers
- If you start with the dummy node no need to write that condition as well
- No need to do if(!l1) return l2; if(!l2) return l1;




# 1st Phase
1. Introduce a variable curr = null, at the start of the journey
2. First, find the start like from where do the list will start l1 or l2
3. After finding, the point from where you will start the list create
   a variable let start = curr (so that later you can return it)

# Alternative approach for 1st Phase instead of finding the starting point

1. Create dummyNode which is null 
2. curr variable should be assigned to the dummyNode
3. -> In this line we are pointing the sentinel.next to starting of the node
   -> curr and sentinel is attached to the same box, so curr.next = l1 means
   -> sentinel.next is also pointing to l1;




# 2nd Phase
4. We will keep moving curr, l1 and l2 therefore, we need start variable
5. Now, write a while loop which will run if both l1 and l2 are not null
6. Now, inside the while comapre the value of l1.val with l2.val and keep
   pointing curr.next to l1 or l2 depending on the sorted small value
7. Finally, at some point either l1 or l2 will be exhauseted and if l1 and
   l2 are uneven make sure that curr.next point to non-exhausted list

# 3rd Phase 
8. Now, we need to find the non-exhausted list using: if(l1 !== null){
        curr.next = l1;
    }
    - We don't need to traverse from this point onward as the list will be
      completed
- Or if(l2 !== null) {curr.next = l2}

9. Finally, we need to return start as it is pointing to the correct starting point


# Complexity

1. Time Complexity
- O(m + n) - Linear

2. Space Complexity
- We are not creating a new linked list
- O(1) - Constant space