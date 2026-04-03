# Question: Find a Peak Element: Leet Code 162

A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.


# Approach

1. The reason we can solve this problem using Binary Search Alog because after each peak the 
   array increases in increasing order

2. Futhermore, if there are multiple peaks we just need to find one peak which can be either 
   side left or right


# Pattern

1. The question has similar approach has First Bad Version where we have to move the right = middle
   otherwise the test case will fail for:

    For example,
    let arr = [2,1];

    Now, if change right = middle + 1, it will go out of bound and we need right, left, and middle on the
    the same index

2. We have two appraoches as same as First Bad Version, it depends whether we run the loop till

    - while(left < right) or while(left <= right)

    - If we follow the first while loop return right outside the loop 
    - If we follow the second while loop we need to add a condition 
        if(left === right && right === middle){
            return right;
        }

# Complexity

1. Time Complextiy
- O(logn)

2. Space Complexity
- O(1)