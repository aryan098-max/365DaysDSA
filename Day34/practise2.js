function selectionSort(nums){

    n = nums.length;

    for(let i=0; i<n-1; i++){

        let min = nums[i];
        let index = i;

        for(let j=i+1; j<n; j++){

            if(min>nums[j]){

                min = nums[j];
                index = j;
            }
        }

        if(index != i){
            let temp = nums[i];
            nums[i] = min;
            nums[index] = temp;
        }
        
    }

    return nums;
}

const nums = [ 5,2,1,4 ];
const output = selectionSort(nums);
console.log(output);