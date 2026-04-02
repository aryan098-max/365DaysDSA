# Question - Next Greater Element II - Leet Code 503

Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

 

Example 1:

Input: nums = [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number. 
The second 1's next greater number needs to search circularly, which is also 2.


# Appraoch

1. The question is same as Next Greate Element I but the only difference is that we need to double 
   the array
2. If we double the array we need to return half of the result to get the correct result


# Pattern

1. const doubleArr = [...nums, ...nums], we need to double the array that is the only difference
2. Next, we need to return half of the array


# Complexity

1. Time Complexity
- Stack, push and pop are constant
- O(n)

2. Space Complexity
- O(n)


==============================================================================================================

# 2nd Approach

1. We don't have to double the array, we just need to run the loop twice the length

    For example, 
        for(let i=(2*n)-2 ; i>=0; i++){
            
            // Now, while accessing the element we need to access it via % n
            while(stack.length){

                if(nums[i % n]), because i = double the length, % it by the length to get the correct element
            }

            stack.push(nums[i] % n) // while pushing also % by index
        }

