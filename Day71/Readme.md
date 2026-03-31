# Question - Next Greater Element I: Leet Code 496

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 
Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.


# Approach

1. We need to solve this problem using the help of stack, and checking for the Next Greater Element
   (nge) from the last.

2. Furthermore, we have to use map for mapping the nge for nums2 and later witht he help of ngeMap, 
   we are going to check for nums1 whether that key exists or not.

3. If key exists, push the value inside the the new ans


# Pattern

1. Introduce, variable such as, let stack = [], let ngeMap = {}, let n = num2.length-1
2. After, introducing the variables, map the last element to -1 because NGE last element
   is -1
3. After mapping the element, push the element inside the stack. 

4. Now, we have to run the loop for the rest of the element, but start the loop from 

    For example, 
        for(let i=n-2; i>=0; i--){

            // Because we have already completed for n-1 element
        }

5. Now, we need to map each element, 

    let top = stack[stack.length-1]
    if(nums2[i] < top){
        map the element
    }

6. If the curr element is not less than top of the stack, we need to pop each element and check
   
7. For, this introduce a while loop and keep popping and check and if nums2[i] < top is found
   break the loop

    For example, we are going to utilize the length of the stack because we can't access the elements
        with index; therefore, we can't utilize i or j variable for this
    else{
        while(stack.length){
            let top = stack[stack.length-1];
            if(nums2[i] > top){
                // keep popping the element
                // popping reduces the length of the stack, so don't worry about not breaking out of
                   while loop
            }
            else // finally after an element greater than curr is found {

                // map the element
                break; // we must break the element here because otherwise it will go to infinite loop
            }
        }
        // Since, no greater element was found and stack is empty, map with -1
        if(stack.length === 0){
            ngeMap[nums2[i]] === -1
        }
    }

8. After, mapping elements by popping elements out of the stock, don't forget to push the elements inside the
   stack, we will do it at the end of for loop

    For example, 

        for(){

            if(){

            } else {

                while(stack.length){

                    if(){

                    } else{

                    }
                }
                // no greater element found
            }

        // Finally, after mapping each element as moving to the next element, push curr element into the stack

            stack.push(nums2[i])
        }

9. Finally, moving to the next phase of the code, introduce a ans array, let ans = [];

10. Now, we will run a loop and map: ngeMap[nums1[i]], after finding the key push the value
    inside the stack, we can access the value using, ans = ngeMap[nums1[i]];

        For, example, 
            for(let i=0; i<nums1.length; i++){

                if(ngeMap[nums1[i]]) // key exists{
                    // push value inside the stack
                }
            }

11. Finally, return ans


# Complexity 

1. Time Complexity
- The total time complexity is O(n + m)

- Processing nums2 - O(m)
- The algorithm iterates through nums2 once.
- Inside the loop, each element is pushed onto the stack exactly once and popped at most once.
- Even though there is a nested while loop, the total number of operations across all iterations is 
  linear because each element is handled a constant number of times (one push, one pop).
- Processing nums1 - O(n)

- O(n + m) 


2. Space Comlpexity
- stack - O(n), ngeMap - O(n), ans - O(n)
- O(n)