var search = function(nums, target) {
    
    let start = 0;
    let end = nums.length-1;

    while(start<=end){

        let middle = Math.floor((start+end)/2);

        if(nums[middle] === target){
            return middle;
        } else if(nums[middle] < target){
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    // base condition index not found 
    return -1;
};

const nums = [1,2,3,4,5,6];
const target = 2;
const output = search(nums,target);
console.log(output);