
var sortArray = function(nums) {
// base case
    if(nums.length <=1) return nums;

    let start = 0;
    let end = nums.length;
    let mid = Math.floor((start+end)/2);

    const left = sortArray(nums.slice(0,mid));
    const right = sortArray(nums.slice(mid));

    return merge(left, right)
};

function merge(left, right){

    let result = [];
    let m = left.length;
    let n = right.length;
    let t1 = 0;
    let t2 = 0;
    
    let len = left.length + right.length;

    for(let i=0; i<len; i++){

        if(t2>=n || (t1< m && left[t1]<right[t2])){
            result.push(left[t1]);
            t1++;
        } else {
            result.push(right[t2]);
            t2++;
        }
    }

    return result;
}

const nums = [5,3,2,1];
const output = sortArray(nums);
console.log(output);