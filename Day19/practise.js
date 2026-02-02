function removeDuplicates(nums){

    let tracker = 0;

    for(let i=1; i<nums.length; i++){

        if(nums[i] > nums[tracker]){
            
            tracker = tracker + 1;
            nums[tracker] = nums[i];
        }
    }

    return tracker + 1;
}

const nums = [0,1,0,2,3];
const output = removeDuplicates(nums);
console.log(output);