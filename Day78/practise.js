function insertionSort(nums){

    // starting the loop with i=1, because i=0, is going to become the previous element
    for(let i=1; i<nums.length; i++){

        let curr = nums[i];
        prev = i-1;

        while(nums[prev]>curr && prev>=0){
            // move left to the curr to the right
            nums[prev + 1] = nums[prev];
            prev--;
        }

        nums[prev + 1] = curr;
    }

    return nums;
}
const nums = [7,6,5,1,3,4];
const output = insertionSort(nums);
console.log(output);
