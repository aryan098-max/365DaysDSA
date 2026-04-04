# Question - Bubble Sort 

- Input = [ 5, 2, 4, 1 ];
- Output = [ 1, 2, 4, 5 ];


# Approach

1. In this approach the largest element is sorted at the last position first and second last
   and so on

2. Futhermore, both i and j are staring from 0 and the entire role of i is to run the loop n-1
   times, we are not comparing i with j. 

3. arr[j] is being compared with arr[j+1]






# Problem Pattern

- We require two loops, and the first loop runs for (n-1), for example, 
  [ 5,2,4,1 ], 5 is compared 2, 4, 1 - It is compared three times. Therefore, n-1

- The second loop runs till  = n-1-i, because each time the largest element is sorted to last position.
- Therefore, the need for checking the last position doesn't exist, i helps us to achieve that. The last 
  index i is sorted, we are controlling the comparison with the last index

- One major confusion is that we are comparing j with i or what, j is comared with j+1
- if (arr[ j ] > arr[ j+1 ]) swap two numbers

- Add one more condition for sorted array 
- Introduce a boolean flag isSorted inside the first loop (i)
- Change the value of isSorted = true - inside the second loop (j)
- if (!isSwapped) break


# Complexity

1. Time Complexity
- O(n^2) - Quadratic


2. Space Complexity
- O(1) - Constant