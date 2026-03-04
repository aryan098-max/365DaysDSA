function findMaxConsecutiveOnes(nums) {
    
    let maxCount = 0;
    let currCount = 0;

    for(let i=0; i<nums.length; i++){

        if(nums[i] === 1){
            currCount = currCount + 1;
        } else {
            if(currCount > maxCount){
                maxCount = currCount;
            }

            currCount = 0;
        }
    }

    return Math.max(currCount, maxCount);
};

const nums = [1,1,0,1,1,1];
const output = findMaxConsecutiveOnes(nums);
console.log(output);