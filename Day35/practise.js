function secondLargest(nums){

    let fLargest = -Infinity;
    let sLargest = -Infinity;

    for(let i=0; i<nums.length; i++){

        if(nums[i]>fLargest){
            sLargest = fLargest;
            fLargest = nums[i];
        } else if(nums[i] > sLargest && nums[i]!== fLargest){

            sLargest = nums[i];
        }
    }

    return sLargest === -Infinity? null:sLargest;
}

const nums = [4,9,8,7,5,1];
const output = secondLargest(nums);
console.log(output);