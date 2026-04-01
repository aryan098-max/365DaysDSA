# Question: Daily Temperatures: Leet Code 739

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 
Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

# Corner case example where temperature can be same
Example 3:

Input: temperatures = [89,62,70,58,47,47,46,76,100,70]
Output: [8,1,5,4,3,2,1,1,0,0]

# Approach

- The approach of this problem is similar to Next Greater Element, the only difference is 
  that we are storing indices into the stack.

- Futhermore, we will not be creating map for this problem because temperature can repeat, 
  we can't create map for this.

- For this problem, we have to create a result array, let result = []; here, we are going
  to store the next day where temperature is going to rise.

- While storing result we need to subtract the top of the stack with the current index, top-i
  and assing it to result[i];


# Pattern

1. First, we need a stack, second, we need to a result array of the same length as the current
  temperature array but fill them with zero

2. Fill the last index of the result with zero because the next warmer temperatures is zero

    For example, 

        let stack = [];
        let n = temperatures.length;
        let result = new Array(n).fill(0);

        // filling last with zero and pushing element inside the stack
        result[n-1] = 0;
        stack.push(n-1) // n-1 is the index of last temperatures


3. Now, we need to run for and while loop to compare the current temperatures and top of 
   the stack. 

4. In next greater element, we were pushing element inside the stack, but here we are pushing
   indices into the stack and comparing, curr temperatures with previous temperatures using top
   of the stack

   For example, 

        for(let i=n-2; i>=0; i--){
            let top = stack[stack.length-1];
            if(temperatures[i] < temperatures[top]){
                // store index by substaraction
                result[i] = top - i; // top is the prev index and i is the curr index
            }
        }


5. Similarly, implement the logic if (temperautres[i] > top), keep popping the stack and finally, 
   use else condition to fill the result.

6. Next, if no greater temp, if(stack.length === 0){ result[i] = 0}

7. Finally, push the current index into the stack and return the result;


# Complexity

1. Time Complexity
- stack only uses O(1)
- O(n)

2. Space Complexity
- O(n)