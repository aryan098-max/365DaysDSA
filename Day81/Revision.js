/**
 * @param {number[]} nums
 * @return {number[]}
 */

 function mergeArray(left, right){

    let i=0;
    let j=0;
    let result = [];

    while(i<left.length && j<right.length){

        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }

    // if either of the array is exhausted, spread the result
    // we will slice the array
   return [...result, ...left.slice(i), ...right.slice(j)];

 }

var sortArray = function(nums) {
    
    // solve this problem using recursion
    // base case 
    if(nums.length <=1 ) return nums;

    let mid = Math.floor(nums.length/2);

    // We need to keep divding the array into left and right portion
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));

    return mergeArray(left, right);
    
};