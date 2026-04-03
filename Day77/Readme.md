# Question - Seach in Rotated Sorted Array: Leet Code 33

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly left rotated at an unknown index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be left rotated by 3 indices and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [3,4,5,6,7,8,0,1,2], target = 6
Output: 3

Example 2:

Input: nums = [5,6,7,1,2,3,4], target = 2
Output: 4


Example 1:

Input: nums = [3,1], target = 1
Output: 1


# Approach 

1. We have to cover all threee corner cases in the above example 
2. This alogrithm uses Binary Search Alogrithm but things are more complicated in this problem
3. We have to know which side of the array is sorted and we can find that by checking whether
   middle of the array is less than left or greater than left
4. Eventually, after finding the part which has the sorted part we check different conditions 
   to find the array


# Pattern

1.   if(arr[middle] >= arr[left]){

    if(target < arr[middle] && target >= arr[left]){

        right = middle - 1;
    }
    else {
        left = middle + 1;
    }
}

- This part of the code covers Input: nums = [3,4,5,6,7,8,0,1,2], target = 6: Dry run the code



2.    else {

            if(target > arr[middle] && target <= arr[right]){

                left = middle + 1;
            } 
            else {
                right = middle - 1;
            }
        }

- This part of the code covers: Input: nums = [5,6,7,1,2,3,4], target = 2


3. if(arr[middle] >= arr[left]) - this >= covers [3,1], target = 1 case


4. Finally, return -1 if target not found

5. Dry run the code to understand the logic


# Complexity

1. Time Complexity
- O(log n)

2. Space Complexity
- O(1)




