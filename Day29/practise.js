function moveZeros(nums){

    let tracker = 0;

    for(let i=0; i<nums.length; i++){

        if(nums[i] !== 0){

            nums[tracker] = nums[i];
            tracker ++;
        }
      
    }

    for(let j=tracker; j<nums.length; j++){
        nums[j] = 0;
    }

    return nums;
}

const nums = [0,1,0,3,12];
const output = moveZeros(nums);
console.log(output);