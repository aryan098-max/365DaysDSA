
function insertionSort(nums){

    for(let i=1; i<nums.length; i++){

        let curr = nums[i];
        let prev = i-1;

        while(nums[prev] > curr){

            // shiftign prev to prev+1
            nums[prev + 1] = nums[prev];
            prev --;
        }
        // Now, move curr to [prev + 1], as prev has decreased
        nums[prev + 1] = curr;
        
    }
    return nums;
  
}

const nums = [7,4,1,5,6,3];
const output = insertionSort(nums);
console.log(output);