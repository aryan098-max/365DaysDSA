# Question - Insertion Sort

- Input = [7, 4, 3, 5, 1, 2]
- Output = [ 1, 2, 3, 4, 5, 7 ]

# Problem Pattern

- In selection sort, we must keep pushing the bigger value to the right until
  the lowest value is found and put the current value to the top or back of the 
  prev value

1. Outer loop
- Introduce two variables in the outer loop, curr = nums[i], prev = i - 1;
- In selection sort, we are considering min = nums[i], index = i,
- Similarly, In insertion sort, we are introducing two variables on the outer loop

2. Inner loop, Using while()
- while(nums[ prev ]> curr) - keep running until this condition is met
-  Inisde the loop we are pushing the prev element to the right with the help of
   prev

3. Finally, after shifting all the elements to the right assign the curr value to 
   [ prev + 1 ]

# Complexity

1. Time Complexity
- O(n^2) - Quadratic

2. Space Complexity
- O(1) - Constant