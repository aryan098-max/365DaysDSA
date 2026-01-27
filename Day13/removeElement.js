function removeElement(nums, val){

    let tracker = 0;

    for(let i=0; i<nums.length;i++){

        if(nums[i] !== val){
            // shift elements to left if not equal to value
            nums[tracker] = nums[i];
            tracker = tracker + 1;
        }

    }
    return tracker
}

const nums = [4,5,6,4,7,8,9,4];
const val = 4;
const elementCount = removeElement(nums, val);
console.log(elementCount);