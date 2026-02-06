function sumOddArray(nums, n){

    // isOdd, returns true or false
    // it covers the first element
    let isOdd = nums[n]%2 !== 0;

    // Base Case 
    if(n === 0){
        // for first element
        if(isOdd){
            return nums[n];
        } else{
            return 0;
        }
    }

    if(isOdd){

       return nums[n] + sumOddArray(nums, n-1);

    } else{

        return sumOddArray(nums, n-1);
    }

}

const nums = [1,2,3,4,5];
const n = nums.length-1;
const output = sumOddArray(nums, n);
console.log(output);