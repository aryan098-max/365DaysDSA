function mergerSortedArrays(nums1, nums2, m, n){

    let nums1Copy = nums1.slice(0,m);
    let t1 = 0;
    let t2 = 0;

    for(let i=0; i<nums1.length; i++){

        // t2 >=n = when nums2 assignment finishes
        if( t2>=n || (t1 < m && nums1Copy[t1] < nums2[t2])){

          nums1[i] = nums1Copy[t1];
          t1++;

        } else {

            nums1[i] = nums2[t2];
            t2++;
        }
    }

    // No, need to return anything  in leetcode
    return nums1;
}

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,4,5];
const m = 3;
const n = 3;
const sortedArrays = mergerSortedArrays(nums1, nums2, m, n);
console.log(sortedArrays);