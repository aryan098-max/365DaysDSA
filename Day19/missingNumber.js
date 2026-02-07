function missingNumber(nums){

    // let n = nums.length;
    // let totalSum = n * Math.floor((n+1)/2);
    // let totalArray = 0;
    // let missingNumber = 0;

    // for(let i=0; i<nums.length; i++){

    //     totalArray = totalArray + nums[i];
    // }

    // missingNumber = totalSum - totalArray;

    // return missingNumber;


    let n = nums.length;
    let totalSum = n * Math.floor((n+1)/2);
    let numsTotal = 0;

    for(let i=0; i<nums.length; i++){

        numsTotal = numsTotal + nums[i];
    }

    let missingNum = totalSum - numsTotal;
    
    return missingNum;
};


const nums = [0,1];
const output = missingNumber(nums);
console.log(output);