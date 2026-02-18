function mergeSort(nums1, nums2, m, n){

    let t1 = m-1;
    let t2 = n-1;
    let x = nums1.length-1;

    for(let i=x; i>=0; i--){

        if(t2<0 || t1>=0 && nums1[t1]>nums2[t2]){

            nums1[i] = nums1[t1];
            t1--;
        } else {
            nums1[i] = nums2[t2];
            t2--;
        }
    }

    return nums1;
}

const nums1 = [1,2,3,0,0,0];
const nums2 = [2,5,6];
const m = 3;
const n = 3;
const output = mergeSort(nums1, nums2, m, n);
console.log(output);