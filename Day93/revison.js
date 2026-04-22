function insertionSort(nums){

    let n = nums.length;

    // First loop starts from i=1, cause i=0 is the prev
    for(let i=1; i<nums.length; i++){

        // Two variables
        let curr = nums[i];
        let prev = i-1;

        while(nums[prev] > curr && prev >=0){

            // keep moving prev forward and keep reducing the prev for further elements
            nums[prev + 1] = nums[prev];
            prev --;
        }

        // Next, after moving all the prev element forward move curr to the prev-1
        nums[prev + 1] = curr;
    }
    return nums;
   
}

const nums = [5,1,0,9,8,7,6];
const output = insertionSort(nums);
console.log(output);