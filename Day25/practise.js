function removeElement(nums){

    let t = 0;

    for(let i=0; i<nums.length; i++){

        if(nums[i]!==val){
            nums[t] = nums[i];
            t = t+1;
        }
    }

    return t;
    
}

const nums = [3,2,2,3];
const val = 3
const k = removeElement(nums, val);
console.log(k);
