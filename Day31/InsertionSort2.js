function insertionSort(nums){

    for(let i=1; i<nums.length; i++){

        for(let j=i-1; j>=0; j--){

            let prev = j
            let curr = j+1;

            if(nums[curr]<nums[prev]){

                let temp = nums[prev];
                nums[prev] = nums[curr];
                nums[curr] = temp
            }

        }
    }
    
    return nums;
}

const nums = [7, 4, 3, 5, 1, 2];
const output = insertionSort(nums);
console.log(output);