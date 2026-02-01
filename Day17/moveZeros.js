function moveZeros(nums){

    let x = 0;

    for(let i=0; i<nums.length; i++){

        if(nums[i] !== 0){

            nums[x] = nums[i];
            x++;
        }
    }

    // Fill the rest of the position with zero

    for(let j=x; j<nums.length; j++){

        nums[j] = 0;
    }

    return nums;
}

const nums = [0,1,0,3,2];
const output = moveZeros(nums);
console.log(output);