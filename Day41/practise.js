function missingNumber(nums){

    let n = nums.length;
    let totalSum = Math.floor(n * (n+1)/2);
    let currentSum = 0;
    let missingInt = 0;

    for(let i=0; i<nums.length; i++){

        currentSum = currentSum + nums[i];

    }

    return missingInt = totalSum - currentSum;

}

const nums = [5,1,2,3,0];
const output = missingNumber(nums);
console.log(output);