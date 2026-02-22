function removeDuplicates(nums){

    let t = 0;

    for(let i=0; i<nums.length; i++){

        if(nums[i] > nums[t]){
            
            t = t+1;
            nums[t] = nums[i];
        }
    }
    
    return t+1;
}

let nums = [1,1,2];
const output = removeDuplicates(nums);
console.log(output);