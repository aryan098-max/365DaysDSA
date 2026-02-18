function moveZeros(nums){

    let tracker = 0;

    for(let i=0; i<nums.length; i++){

        if(nums[i]!== 0){
            nums[i] = nums[tracker];
            tracker++;
        }
       
    }

    return tracker;
 
}

const nums = [0,1,0,3,12]
const output = moveZeros(nums);
console.log(output);