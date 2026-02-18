# Question - Sort Array - Merge Sort - O(n logn)

- Input = [ 5,3,1,4 ]
- Output = [ 1,3,4,5 ]

# Problem Pattern

1. Use recurrsion, Divide and Conquer Algo
2. Base case is length of either left side or right side array is 1
3. Use recusrion for both left side and right side of the array
4. Keep dividing it until a single array is returned
5. Finally, use mergeSort array function to sort the array
6. We have already done this question earlier, use that logic

# Complexity

1. Time Complexity
- O(n logn) 
- It is O(n) because we are using another function which is sorting array using O(n)
- It is logn because we are dividing the problem repeatedly
- n/2^k = 1 , n = 2^k, Taking log on both sides, O(logn)
- Therefore, it is O(n logn)

2. Space Complexity
- O(n) because we are using extra space while sorting the array