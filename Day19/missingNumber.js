function missingNumber(nums){

    let n = nums.length;
    let totalSum = n * (n+1)/2;
    let totalArray = 0;
    let missingNumber = 0;

    for(let i=0; i<nums.length; i++){

        totalArray = totalArray + nums[i];
    }

    missingNumber = totalSum - totalArray;

    return missingNumber;

}

const nums = [3,0,1];
const output = missingNumber(nums);
console.log(output);