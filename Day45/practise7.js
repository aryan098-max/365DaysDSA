function merge(left, right){

    let n = left.length + right.length;
    let result = [];
    let t1 = 0;
    let t2 = 0;

    for(let i=0; i<n; i++){
        if( t2>=right.length || (t1<left.length && left[t1]<right[t2])){
            result.push(left[t1]);
            t1++;
        } else {
            result.push(right[t2]);
            t2++;
        }
    }

    return result;
}

function mergeSort(nums) {
    
    if(nums.length === 1) return nums;
    let mid = Math.floor(nums.length/2);

    let left = mergeSort(nums.slice(0,mid));
    let right = mergeSort(nums.slice(mid));

    return merge(left, right);
};


const nums = [5,2,3,1];
const output = mergeSort(nums);
console.log(output);