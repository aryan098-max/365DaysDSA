# Second Largest Element in an Array

# Problem Pattern

1. First Iterate through the entire array
2. Find the first largest element 
3. Before assigning a new fLargest, re-assign the sLargest with fLargest
4. Always check that arr[i]!=fLargest
5. All element same - return sLargest === -Infinity ? null:sLargest
6. The code you write should pass the all the test cases.


# Complexity

1. Time Complexity
- We are iterating through an entire array only once

2. Space Complexity 
- Constant O(1)