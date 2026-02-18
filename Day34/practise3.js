function selectionSort(nums){

    let n = nums.length;

    for(let i=1; i<n; i++){

        let curr = nums[i];
        let prev = i-1;

        while(curr<nums[prev] && prev>=0){

            // shift prev to right
            nums[prev+1] = nums[prev];
            prev--;
        }
        nums[perv+1] = curr;
    }


}

const nums = [5,2,4,1];
const output = selectionSort(nums);
console.log(output);