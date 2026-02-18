function mergerSortedArrays(nums1, nums2){

    let result = [];
    let i = 0;
    let j = 0;

    // using while loop

    while(i<nums1.length && j<nums2.length){

        if(nums1[i]<nums2[j]){
            result.push(nums1[i])
            i++;
        } else {
            result.push(nums2[j])
            j++;
        }
    }

    // Using slice for the all the remaning elements if either i or j is exhausted
    return [...result, ...nums1.slice(i), ...nums2.slice(j)]
}

const nums1 = [1,3,5,7];
const nums2 = [2,4,8,9];
const output = mergerSortedArrays(nums1, nums2);
console.log(output);