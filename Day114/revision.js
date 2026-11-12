// # 1. Two Sum

var twoSum = function(nums, target) {
    
    // Using two loops
    for(let i=0; i<nums.length; i++){

        for(let j=i+1; j<nums.length; j++){

            if((nums[i]+nums[j] === target)){
                // return the a new array with the index
                return [i,j];
            }
        }
    }
};