# Problem - Binary Search

Input - [ -1, 0, 5, 4, 9, 8, 7], 9
Outut = 4

# Problem Pattern

- Run the loop until (start<= end) because otherwise it will fail for [ 1,3 ] & [ 5 ]
- Additionally, move the start further with = middle + 1 and reduce end = middle -1
- We are doning this because otherwise, it will fail [ 1, 3 ] condition here, middle dones't move forward
- It causes an infinite loop, therefore, we have to make sure that we reduce the start and end
- There are total 3 conditions

- Complexity

1. Time Complexity
- n is getting divided n/2, n/4, n/8, therefore, n/2^k = 1, therefore, taking log on both sides
- log n = log (base2) 2^k (log(base 2) 2 is 1)
- log n = k
- O(logn) - Logarithmic

- Space Complexity
- O(1)