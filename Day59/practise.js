var merge = function(nums1, m, nums2, n) {
    
   let t1 = m-1;
   let t2 = n-1;

    for (let i=nums1.length-1; i>=0; i--){

        // t2 is exhausted
        if(t2<0 || (t1>=0 && nums1[t1] > nums2[t2])){
            nums1[i] = nums1[t1];
            t1--;
        } else {
            nums1[i] = nums2[t2];
            t2--;
        }
    }

    return nums1;
};

const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6]; 
const n = 3;
const output = merge(nums1, m, nums2, n);
console.log(output);