/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let t1 = m-1;
    let t2 = n-1;   

    let len = nums1.length-1;

    for(let i=len; i>=0; i--){

        // t2 exhausted corner case, t1 not exhausted
        if(t2<0 || t1>=0 && nums1[t1] > nums2[t2]){
            nums1[i] = nums1[t1];
            t1--;
        }
        else{
            nums1[i] = nums2[t2];
            t2--;
        }
    }
    
};