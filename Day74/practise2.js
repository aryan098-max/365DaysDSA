/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let tracker = 0;

    for(let i=1; i<nums.length; i++){

        if(nums[i] > nums[tracker]){

            // Increase tracker first
            tracker = tracker + 1;

            nums[tracker] = nums[i];
        }
    }

    // we have to increase track of counter because we are initially starting 
    // tracker = 0, but we have 2 unique elements
    return tracker + 1;
    
};