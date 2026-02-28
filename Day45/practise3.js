function insertionSort(nums){

    for(let i=1; i<nums.length; i++){

        let curr = nums[i];
        let prev = i - 1;

        while(nums[prev] > curr){

            nums[prev+1] = nums[prev];
            prev--;
        }
        nums[prev+1] = curr;
    }
    
    return nums;
}
const nums = [7,1,5,4,6,3];
const output = insertionSort(nums);
console.log(output);