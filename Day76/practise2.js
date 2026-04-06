/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

    let maxCount = 0;
    let currentCount = 0;

    for(let i=0; i<nums.length; i++){

        if(nums[i] === 1){
            currentCount ++;
        } else{
            currentCount = 0;
        }

        if(maxCount < currentCount){
            maxCount = currentCount;
        }
    }
    
    return maxCount;
};