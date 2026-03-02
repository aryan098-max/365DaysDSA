function selectionSort(nums){

    let n = nums.length

    for(let i=1; i<n; i++){
        
        let curr = nums[i];
        let prev = i-1;

        while(nums[i]<curr){

            nums[prev+1] = curr;
            prev--;
        }

        nums[prev + 1] = nums[i];
    }

    return nums;
}

const nums  = [7,1,5,6,4,3];
const output = selectionSort(nums);
console.log(output);