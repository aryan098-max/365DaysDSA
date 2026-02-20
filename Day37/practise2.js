function merge(left, right){

    let result = [];
    let i = 0;
    let j = 0;

    while(i<left.length && j<right.length){

        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];

}

function sortArray(nums){

    // base case
    if(nums.length <= 1) return nums;

    let start = 0;
    let end = nums.length;
    let mid = Math.floor((start + end)/2);

    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid));

    return merge(left, right);
}

const nums = [5,2,3,1]
const output = sortArray(nums);
console.log(output);