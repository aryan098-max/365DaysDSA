# Approach 1 - Set 1
# Question - Inter Section of the Linked List

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

The test cases are generated such that there are no cycles anywhere in the entire linked structure.

For example, the following two linked lists begin to intersect at node c1:

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'


# Probelm Pattern

1. Introduce two variables skipA and skipB and assing them to headA and headB
2. Introduce a third variables setNodes = set() and run a while loop and copy
   all the values of linkedList1 inside the skipA

# Note: Run the loop until you hit null and keep moving forward

3. Next, now run a while loop for the second linkedList and check whether it the 
   setNodes has that value in the secondLinked list and return that node

4. Finally, otherwise return null.


# Complexity

1. Time Complexity
- We are running a loop for two diff list of length m and n
- O(m+n)

2. Space Complexity
- We are using an extra space to store all the values of the node
- O(n)

======================================================================================

# Approach 2 - Optional two pointer solution - Two pointers travel the same distance 

# Note: If there is not intersection, both will hit null at the same time.

# Pattern

1. We are going to introduce two pointers pointing to headA and headB respectively
2. This appraoch has a unique approach because are moving pA inside headB if it hits
   null and pB inside the headA.

3. In this way, they will eventually meet together you can dry run an example for this.
4. The loop will not come to stop unless both meet each other or they become null.
5. Finally, we are returning either pA or pB which is pointing to the intersected node
   or pointing to null.

   For example, 

   if there are two pA and pB are starting from diff nodes and both will hit null at 
   the same time. You can dry run the code to check

# Case 1: Same length: Both will hit null at the same time loop breaks return pA pointing to null
   pA -> 1 -> 2 -> null

   pB -> 3 -> 4-> null

# Case 2: Diff length: This time also they will hit null at the same time but pA will start traversing
# headB and pB will start traversing headB

   pA -> 1 -> 2-> 3 -> null

   pB -> 4 -> 5 -> null

6. The point is that the loop will break either they intersect or they become null. In both case, the 
   value of pA and pB are same


# Complexity

1. Time Complexity
- O(n) - Linear

2. Space Complexity
- Np, extra space, not using Set
- O(1) - Constant