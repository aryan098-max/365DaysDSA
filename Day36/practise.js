function insertionSort(nums){

    let n = nums.length;

    for(let i=1; i<n; i++){

        let currEle = nums[i];
        let prev = i-1;

        while(currEle<nums[prev]){

            nums[prev+1] = nums[prev];
            prev --;
        }

        nums[prev+1] = currEle;
    }
    return nums;
}

const nums = [7,1,4,5,6,8];
const output = insertionSort(nums);
console.log(output);