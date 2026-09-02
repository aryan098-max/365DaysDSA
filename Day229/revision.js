// # 1. Two Sum
var twoSum = function(nums, target) {

    let seenCom = new Map();

    for(let i=0; i<nums.length; i++){

        let complement = target - nums[i];

        if(seenCom.has(complement)){
            return [seenCom.get(complement), i]
        }
        
        seenCom.set(nums[i], i);
    }
    
};