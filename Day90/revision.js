/**
 * @param {number[]} nums
 * @return {number[]}
 */

 function merge(left, right){

    let i = 0; 
    let j = 0;
    let result=[];

    while(i<left.length && j<right.length){

        if(left[i] < right[j]){
            result.push(left[i]);
            i++;

        }else{
            result.push(right[j]);
            j++;
        }   
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
 }


var sortArray = function(nums) {

    if(nums.length <= 1){
        return nums;
    }

    let middle = Math.floor((nums.length)/2);

    let left = sortArray(nums.slice(0,middle));
    let right = sortArray(nums.slice(middle));
    
    return merge(left, right);
};