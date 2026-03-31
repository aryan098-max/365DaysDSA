/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    
    // mapping the next greater element from nums2 inside the map
    let ngeMap = {};
    let stack = [];
    let n = nums2.length;

    // Set the value for the last element as the nge is always -1
    ngeMap[nums2[n-1]] = -1;
    stack.push(nums2[n-1]);

    // Now, running the loop for the entire thing, from the back
    for (let i=n-2; i>=0; i--){
        // finding the top of the stack and comparing with curr element
        let top = stack[stack.length-1];

        if(nums2[i] < top){
            ngeMap[nums2[i]] = top;
        }
        else { 
    // Now, we need to pop the elements and check
    // Since, we are popping from the stack, run until stack is exhauseted
    // You can't access stack with index therefore, not using i or j variable
            while(stack.length){
                let top = stack[stack.length-1];
                if(nums2[i] > top){
                    stack.pop();
                }
                // nums2[i] < top found
                else{
                    ngeMap[nums2[i]] = top; 
                    break;
                }
            }
            // No, greater element is found stack length is exhausted
            if(stack.length === 0){
                ngeMap[nums2[i]] = -1;
            }
        }

        // Finally, after placing an element inside a map push that inside the stack
        stack.push(nums2[i]);
    }

    // Now, as we need to find the nge element for nums1 
    let ans = [];
    for(let i=0; i<nums1.length; i++){

        if(ngeMap[nums1[i]]){
            ans.push(ngeMap[nums1[i]]);
        }
    }
    
    return ans;
};
