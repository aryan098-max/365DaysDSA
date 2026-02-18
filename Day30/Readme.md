# Question - Selection Sort

- Input = [ 5,2,1,4 ]
- Output = [ 1, 2, 4, 5 ]

# Problem Pattern

- We are sorting the array from the start
- The outer loop run for n-1 iteration
- We have to also introduce minElement variable and index at outer loop

- Inside the inner loop, j starts from j = i+1 because, the first element
  is sorted on each ith iteration.
- The second loop runs till (j < n) because unlike bubble sort we are not sorting 
  the element from the last
- Inside the inner loop we are finding out the minimumElement and assigning the 
  j to index variable. To record the index later for swapping.

- Finally, outside the inner loop again in main loop we have to perform the swapping
- Perform swapping only if (index value is not equal to i), which is the old value
- We are adding this condition for better efficency


# Complexity

1. Time Complexity
- O(n^2) - Quadratic



2. Space Complexity
- O(1) - Constant