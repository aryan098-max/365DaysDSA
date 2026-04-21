function bubbleSort(nums){

    let n = nums.length;

    for(let i=0; i<n-1; i++){

        for(let j=0; j<n-1-i; j++){

            if(nums[j] > nums[j + 1]){

                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
            }
        }
    }

    return nums;
}

const nums = [5,1,0,9,8,7,6];
const output = bubbleSort(nums);
console.log(output);