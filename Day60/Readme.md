# Question - Rotate the List

Given the head of a linked list, rotate the list to the right by k places.

Example 1:

Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

# Approach

1. Cover a corner case of k > length of the list, using %

    1. Let's suppose that length of the list is 5 but k is 100

    - We need to calculate length first and re-calculate k
        =  k % length
        =  100 % 5
        =  0 
    - This means we don't have to rotate list

    2. Let's suppose that length of the list is 5 but k is 9

    - We need to calculate length first and re-calculate k
        =  k % length
        =  9 % 5
        =  4 
    - This means have to rotate the list 4 times

2. Solve this problem using fast and slow pointer approach but place fast to kth
   position by calculating length of the list


# Pattern

1. First cover corner case of list = 0 or 1 - if(head || head.next) !== null return head.

2. Now, we need to calculate length of the list and k as diccussed earlier in the approach.

3. Next, move fast to the kth position using for loop.

4. Now, start a while loop slow from head and fast from kth position we will stop once f.next
   becomes null because we want f.next to point back to head

5. As fast reaches to last node slow stops before the kth position

6. Now, as fast reaches last node it need to point to the existing head; fast.next = head

7. We need introduce a newHead variable, let newHead = slow.next (it will be the newhead) & 
   slow.next will point to null now.

8. Finally, return newhead


# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(1)
