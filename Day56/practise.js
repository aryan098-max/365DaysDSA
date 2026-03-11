var removeDuplicates = function(nums) {
    
    let t = 0;

    for(let i=1; i<nums.length; i++){

        if(nums[i] > nums[t]){

            t = t+1;
            nums[t] = nums[i];
        }
    }
    // tricky part return t+1 because 2 unique elements
    return t + 1;
};

const nums = [1,1,2];
const output = removeDuplicates(nums);
console.log(output);