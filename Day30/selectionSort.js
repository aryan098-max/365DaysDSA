function selectionSort(nums){

    let n = nums.length;

    for(let i=0; i<n-1; i++){

        let minElement = nums[i];
        let index = i;

        for(let j=i+1; j<n; j++){

            if(nums[j]<minElement){
                minElement = nums[j];
                index = j;
            }

        }

        if(index != i ){
            let temp = nums[i];
            nums[i] = minElement;
            nums[index] = temp;
        }
       
    }
    return nums;

}

const nums = [7,1,5,4,3,2];
const output = selectionSort(nums);
console.log(output);