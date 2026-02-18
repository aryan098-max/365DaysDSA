function mergeSort(nums1, nums2, m, n){

    let l = m + n;
    let nums3 = [];
    let t1 = 0;
    let t2 = 0;

    for(let i=0; i<l; i++){

        if(t2>=n || t1<m && nums1[t1]<nums2[t2]){

            nums3.push(nums1[t1]); 
            t1++;

        } else {
            nums3.push(nums2[t2]);
            t2++;
        }
    }

    return nums3;
}

const nums1 = [1,3,5,7];
const nums2 = [2,4,8,9];
const m = nums1.length;
const n = nums2.length;
const output = mergeSort(nums1, nums2, m, n);
console.log(output);