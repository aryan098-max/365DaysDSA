/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let x = 0;
    let i = 0;
    while (i < nums.length){

        x = x ^ nums[i];
        i++;
    }

    return x;
};