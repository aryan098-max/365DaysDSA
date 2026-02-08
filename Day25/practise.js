function removeDuplicates(nums){

    let t = 0;

    for(let i=1; i<nums.length; i++){

        if(nums[i]>nums[t]){
            t = t+1;
            nums[t] = nums[i]
        }
    }

    return t+1;
}

const nums = [1,1,2,2,3,];
const k = removeDuplicates(nums);
console.log(k);
