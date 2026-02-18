function removeElement(nums, val){

    let t = 0;

    for(let i=0; i<nums.length; i++){
        
        if(nums[i] !== val){
            nums[t] = nums[i];
            t++;
        }
    }

    return t;
}

const nums = [3,2,2,3];
const val = 2
const output = removeElement(nums, val);
console.log(output);