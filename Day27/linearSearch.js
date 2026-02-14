function linearSearch(nums, val){

    for(let i=0; i<nums.length; i++){

        if(nums[i] === val){
            return i
        }
    }

}

const nums = [1,2,3,4,5];
const val = 4
const output = linearSearch(nums, val);
console.log(output);