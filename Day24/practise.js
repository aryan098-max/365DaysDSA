function missingNumber(nums){

    let n = nums.length;
    let numsTotal = 0;
    let totalSum = n * Math.floor(n+1)/2;
    
    for(let i=0; i<nums.length; i++){
        numsTotal = numsTotal + nums[i];
    }

    let missingNum = totalSum - numsTotal;
    return missingNum;

}

const nums = [3,0,1 ]
const missedNum = missingNumber(nums);
console.log(missedNum);
