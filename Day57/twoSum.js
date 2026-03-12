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

const nums = [2,7,15,11];
const target = 9;
const output = twoSum(nums, target);
console.log(output);