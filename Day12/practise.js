function removeDuplicates(nums){

    let j = 0;

    for(let i=0;i<nums.length;i++){

        if(nums[i]>nums[j]){
            j = j +1;
            nums[j] = nums[i];
        }
    }

    return j+1;
}

const arr = [1,1,2,2,3,3,4];
const totalUniqueElements = removeDuplicates(arr);
console.log("Number of unique element in an array: " + totalUniqueElements);