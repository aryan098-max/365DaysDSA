/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

    // declaring variables for stack, tempMap 
    let stack = [];
    let n = temperatures.length;

    // creating a result Array for storing the indices
    let result = new Array(n).fill(0);

    // Initially, for last temperature the next warmer temperature is 0
    result[n-1] = 0;

    // Pushing the last indices into the stack
    stack.push(n-1);

    //Now, running the loop for the entire temperatures
    for(let i=n-2; i>=0; i--){
        let top = stack[stack.length-1];
        if(temperatures[i] < temperatures[top]){
            result[i] = top - i;
        } 
        else {

            while(stack.length){
                let top = stack[stack.length-1];
                if(temperatures[i] >= temperatures[top]){
                    top = stack.pop();
                } 
                else {
                    result[i] = top - i;
                    break;
                }
            }
            if(stack.length === 0){
                result[i] = 0;
            }
        }   
        // Finally, push the element inside the stack
        stack.push(i);
    } 

    return result;
    
};