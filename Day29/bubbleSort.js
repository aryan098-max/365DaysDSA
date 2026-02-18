function bubbleSort(nums){

    let n = nums.length;

    for(let i=0; i<n-1; i++){

        let isSwapped = false

        for(let j=0; j<n-i-1; j++){

            if(nums[j]>nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                isSwapped = true;
            }

            if(!isSwapped) break;
        }
    }

    return nums;
}

const nums = [5,1,2,4];
const output = bubbleSort(nums);
console.log(output);
