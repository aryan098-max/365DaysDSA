 function merge(nums1, nums2){

    let i = 0;
    let j = 0;

    let result = [];

    while(i<nums1.length && j<nums2.length){

        if(nums1[i] < nums2[j]){
            result.push(nums1[i]);
            i++;
        } else{
            result.push(nums2[j]);
            j++;
        }
    }

    return [ ...result, ...nums1.slice(i), ...nums2.slice(j)];

 }


var sortArray = function(nums) {

    // base case
    if(nums.length <= 1){
        return nums;
    }

    let middle = Math.floor(nums.length/2);

    let left = sortArray(nums.slice(0,middle));
    let right = sortArray(nums.slice(middle));

    return merge(left, right);
    
};

const nums = [5,2,3,1];
const output = sortArray(nums);
console.log(output);