function findMin(nums){

    let minimumElement = nums[0];

    for(let i=0; i<nums.length; i++){

        if(nums[i]<minimumElement){
            minimumElement = nums[i];
        }
    }

    return minimumElement;
}

const nums = [7,1,5,4,3,2];
const output = findMin(nums);
console.log(output);