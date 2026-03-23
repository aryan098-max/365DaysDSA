# Question - Swap Nodes in Pairs


Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)


Example 1:

Input: head = [1,2,3,4]

Output: [2,1,4,3]


# Approach - Iterative Approach

1. The question is quite tricky basically you need to move three pointers

    1. prev
    2. curr
    3. next
 
 - at the same time to solve the problem

2. So, the approach is prev must be pointing to next, curr should be pointing to next.next
   & next.next to curr

3. Finally, move all the pointer forward move p first and move curr and next with the help 
   of prev


# Pattern

- Base case - check if head or head.next is null or not & return head

1. Introduce sentinel node and three more pointers prev, curr, & next - prev will be attached
   to sentinel

2. Move all the three pointers in such a way that the same logic can be resused after all the
   pointers move forward

3. Initially, prev = sentinel, curr = head, next = head.next 

4. Next, run a while loop which runs until curr && next are not null. Change the pointers of
   prev.next to next, curr.next to next.next, & next.next back to curr

5. Now, move all the pointers forward - prev = curr, now with the help of prev move all the
   pointers. 

  For example, 

    prev-> 1-> 2-> 3-> 4 -> 5 -> null

    sentinel -> 2 -> 1 -> 3 -> 4 -> 5 -> null (prev is at 1)

    prev.next = next
    curr.next = next.next
    next.next = curr

    Now, move prev

    prev = curr; // curr is 1, this node is swapped, prev is attached to that node
    curr = prev.next (curr is at 3)
    next = curr.next (next becomes 4)

    However, while moving next we are using curr, but it can become null (while loop condition)

    therefore, next = curr && curr.next (we must check whether curr exists or not)

6. Finally, this above code will create a pattern which works for every coming node
   At last, return sentinel.next;


# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(1)

================================================================================================================


# Approach - Recursive Approach

1. The problems in the recursion are solved backwards, same appraoch in this solution
2. Basically, we will be swapping last two nodes each time and returning a swapped list
   to the previous call.


# Pattern

1. Base case if(head or head.next becomes null) return head (because at base case
   head becomes null)

2. Introduce two variables, let left = head, right = head.next
3. Now, while we are making a recursive call we are always passing (right.next) to the
   next recursive call ?

   For example, 

   1 -> 2 -> 3 -> 4 -> null (head becomes null at last)

   Initally, 1 is left and 2 is right - 1st call

   let left = swap(right.next) // right.next = 3 

   So, for the next recursive call - 2nd call
   let left = head; (3)
   let right = head.next (4)

   left.next = swap(right.next); (making a third call passing null)
   right.next = left.next
   return r 

   Again, a recursive call is amde - right.next, which is null, return (head), also null - 3rd call

   - Now, going back to the second previous call, null is returned - 2nd call

   left.next = swap(right.next) // returns null - (3rd node points to null now)
   right.next = left (pointing backwards)
   return right (4 -> 3) is returned to the first call

   - Now, going back to the first call, (4 -> 3) is returned swapped list is returned

   left.next = swap(right.next) // (4 -> 3) = (1-> 4-> 3)
   right.next = left // (2 -> 1 -> 4 -> 3)
   return right (Now, we are returning the entire list and right is at first node)

4. Finally, when right is returned it is pointing to head start of the list


# Complexity

1. Time Complexity
- We are taking 2 nodes at a time; 4 nodes - 2 times (half)
- O(n/2) - constant is ignored
- O(n)

2. Space Complexity
- O(1)
   

    
