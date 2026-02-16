function binarySearch(nums, target){

    // edge case
    if(nums.length<1){
        return -1;
    }

    let start = 0;
    let end = nums.length;

    while(start<end){

        let middle = Math.floor((start+end)/2);

        if(nums[middle] === target){
            return middle;
        } else if(nums[middle]<target){
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

const nums = [1,4,5,6,9,12,15];
const traget = 4;
const output = binarySearch(nums, traget);
console.log(output);