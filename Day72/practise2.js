function bubbleSort(nums){

    let n = nums.length;
    let isSwapped = false;

    for(let i=0; i<n-1; i++){

        for(let j=0; j<n-i-1; j++){

            if(nums[j] > nums[j+1]){
                // swapping 
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                isSwapped = true;
            }
            // optimizing the code
            if(!isSwapped){
                break;
            }
        }

    }
    return nums;
}

const nums = [4,5,2,3,1,7];
const output = bubbleSort(nums);
console.log(output);