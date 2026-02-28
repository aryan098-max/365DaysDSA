var missingNumber = function(nums) {
    
    let n = nums.length
    let totalSum = Math.floor((n * (n+1))/2)
    let currentSum = 0;
    let missingNum = 0;

    // current sum 
    for(let i=0; i<nums.length; i++){

        currentSum = currentSum + nums[i];
    }

    return missingNum = totalSum - currentSum;

};

const nums = [3,0,1];
const output = missingNumber(nums);
console.log(output);