function findMaxConsecutiveOnes(nums){

    let currentCount = 0;
    let maxCount = 0;

    for(let i=0; i<nums.length; i++){

        if(nums[i] === 1){
            currentCount = currentCount + 1;
        } else {
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
    }

    return Math.max(maxCount, currentCount);
}

const nums = [1,1,0,1,1,1];
const output = findMaxConsecutiveOnes(nums);
console.log(output);