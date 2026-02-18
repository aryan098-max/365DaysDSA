function singleNumber(nums){

    let xor = 0;

    for(let i=0; i<nums.length; i++){
        xor = xor ^ nums[i];
    }

    return xor;
}

const nums = [2,2,3,3,12];
const output = singleNumber(nums);
console.log(output);