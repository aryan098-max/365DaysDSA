/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {

    // the reason we can apply binary search algo in this question because
    // after peak the array is sorted, it is sorted increasing order.

    let left = 0;
    let right = nums.length - 1;

    // we want left, right, and middle all point to the same index
    while(left <= right){

        let middle = Math.floor((left + right)/2);

        if(left === right && right === middle){
            return middle;
        }

        if(nums[middle] > nums[middle + 1] && nums[middle] > nums[middle-1]){
            return middle;
        }
        else if(nums[middle] < nums[middle + 1]) {
            left = middle + 1;
        } else {
            // so, that it covers out of bound case, for [2,1]
            // if I do right = middle + 1, right will go out of bound 
            right = middle;
        }
    }
};

const nums = [1,2,3,4];
const output = findPeakElement(nums);
console.log(output);