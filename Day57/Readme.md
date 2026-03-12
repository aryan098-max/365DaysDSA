# Question Two Sum

# Approach 1 - Two nested loops - O(n^2)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

# Problem Pattern

1. Run two loops i and j (nested) and each of i with each of j and 
   check if it is equal to target

   if(nums[i] + nums[j] === traget){
    return [i,j];
   }

# Complextity 

1. Time Complexity
- O(n^2) - Nested loop

2. Space Complexity
- O(1)

===================================================================================

# Approach 2 - using map datastructure with complement logic

# We have to find a complement by reducing:

    For example, 

    9 - 2 = 7
    9 - 7 = 2
    --------
     (7+2)  9
    let complement = target - nums[i];

    - The thing is that if my input is [2,7,11,15]

    1. During the first iteration 

        complement = 9-2 = 7

    2. During the second iteration 

        complement = 9-7 = 2
    
    We are storing - seenCom.set(nums[i], i): (2, 0) (stored)
    Next time, we check:

        let complement = 9-7 = 2

        if(seenCom.has(complement)){

            // it does exists we just stored - {2=>0}
            // look seenCom.get(complement) returns 0, i returns current index 1
            return [seenCom.get(complement), i]. 
        }

1. In this appraoch use map and complement logic and keep adding the element to the
   map

2. Create num and index key and value pair in the map

    let complement = target - nums[i]

    if(mapCom.has(complemement)){   
        // this code right here gives me the key
        return [set.get(complement), i];
    }
    {2=>0, ... this is the strucutre in which our data is being stored}
    mapCom.set(complement, i);


# Complexity

1. Time Complexity
- O(n)

2. Space Complexity
- O(n)