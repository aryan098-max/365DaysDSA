// # 88. Merge Sorted Array

var merge = function(nums1, m, nums2, n) {
    
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
};
