/**
 * @param {number[]} nums
 * @return {number[]}
 */

const mergeArray = function(left, right){

    let i=0;
    let j=0;
    let result = [];

    while(i<left.length && j<right.length){

        if(left[i] < right[j]){
            result.push(left[i]);
            i++;
            
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // while returning using slice, because we want elements not able
    // to cover in the loop
    return [...result, ...left.slice(i), ...right.slice(j)];
}

var sortArray = function(nums) {

    if(nums.length <= 1){
        return nums;
    }
    
    let mid = Math.floor(nums.length/2);

    // keep dividing the array
    // slicing the array returns an array
    let left = sortArray(nums.slice(0,mid))
    let right = sortArray(nums.slice(mid));

    // Now, meriging them
    return mergeArray(left, right);
    
};