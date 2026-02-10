var missingNumber = function(nums) {

  let n = Math.max(...nums);
  let totalSum = (n * (n+1))/2;
  let currentSum = 0;
  let missingNum = 0;

  for(let i=0; i<nums.length; i++){

    currentSum = currentSum + nums[i];
  }

    missingNum = totalSum - currentSum;
    return missingNum;
};

const nums = [1,2,4,5];
const output = missingNumber(nums);
console.log(output);