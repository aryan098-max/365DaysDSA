# Question Problem, Method 1

- Input 
const nums1 = [ 1,2,3,0,0,0 ];
const nums2 = [ 2,4,5 ];
const m = 3;
const n = 3;

- Output
- [ 1, 2, 2, 3, 4, 5 ]


# Probelm Pattern

1. We are solving the problem in #TC - O(n) & SC - O(n) 
2. Create a copy of nums1 till m using array.slice() 
3. Create two tracker - t1 for nums1 & t2 for nums2
4. Create logic for nums1 and t1 & nums t2 respectively
5. Complete the entire thing in one lopp and if else

- Hint
1. if(condition will have extra logic and conditions)
2. Add out of bond condition for nums1 and nums2 

- We need out of bound logic for both t1 and t2 
- if t1 finishes first t1>=0 is required


# Complexity

1. Time Complexity
- O(n) - Linear

2. Space Complexity
- O(n) - Linear, a duplicated array was created

===========================================================================

# Question Problem, Method 2

- Input 
const nums1 = [ 1,2,3,0,0,0 ];
const nums2 = [ 2,4,5 ];
const m = 3;
const n = 3;

- Output
- [ 1, 2, 2, 3, 4, 5 ]


# Probelm Pattern

1. We are solving the problem in #TC - O(n)
2. m & n variable = m-1, n-1 respectively
3. Create two tracker - t1 for nums1 & t2 for nums2
4. Create logic for nums1 and t1 & nums t2 respectively
5. Complete the entire thing in one lopp and if else

- Hint
1. if(condition will have extra logic and conditions)
2. For method two t1>t2 logic is used 
3. Add out of bound logic also

- The position of m and n in this solution is at m and n


# Complexity

1. Time Complexity
- O(n) - Linear

2. Space Complexity
- O(1)