function merge(left, right){

    let result = [];
    let i = 0;
    let j = 0;

    while(i<left.length && j<right.length){

        if(left[i]<right[j]){
            result.push(left[i]);
            i++
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // exhaustion case 
    return [...result, ...left.slice(i), ...right.slice(j)]

}

function mergeSort(nums){

    // base case
    if(nums.length <=1) return nums;

    const mid = Math.floor(nums.length/2);
    const left = mergeSort(nums.slice(0,mid));
    const right = mergeSort(nums.slice(mid));

    return merge(left,right);

}

const nums = [5,2,3,1];
const output = mergeSort(nums);
console.log(output);