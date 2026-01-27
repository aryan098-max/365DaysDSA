# Notes
1. sorted increasing order
- [1, 2, 4, 8, 12]
- a[ i+1 ] > a[ i ]

2. sorted decreasing order
- [12, 9, 8, 7, 5, 1]
- a[ i+1 ] < a[ i ]

3. sorted non-decreasing = means array have duplicates
 - [ 1,2,2,2,3,3,3,4,4,5,8,9 ]
 - a[ i+1 ] >= a[ i ]

# Question Remvove Duplicates

# Problem Pattern

- i - is moving forward
- tracker - It is staying behind so that it can shift the element forward.

1. The question is asking to return the total count of unique elements in 
   an array. It is asking to return the k (count of unique elements in an array).

2. The input (array) is in sorted non-decreasing order. Therefore, in this problem
   we have to use a unique method of solving the problem.

3. You must use an tracker (index) to keep track of the pointer, and a loop to do the
   comparison between the tracker and index (nums[ i ] >nums[ tracker ])

4. The tracker is staying behind to make sure that a unique element comes at the front
   in the ascending increasing order. nums[ tracker + 1 ] = nums[ i ] 

5. Return k element (Total no of unique element inside an array)


# Complexity

1. Time Complexity
- O(n)- Linear

2. Space Complexity 
- O(1)