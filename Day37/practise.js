function selectionSort(nums){

    let n = nums.length;
    for(let i=0; i<n-1; i++){

        let min = nums[i];
        let index = i;

        for(let j=i+1; j<n; j++){

            if(nums[j]<nums[i]){
                min = nums[j];
                index = j;
            }
        }

        // Saving Time on Swapping Operations
        if(index != i){
            let temp = nums[i]
            nums[i] = min;
            nums[index] = temp;
        }
       
    }

    return nums;
}

const nums = [5,2,4,1];
const output = selectionSort(nums);
console.log(output);