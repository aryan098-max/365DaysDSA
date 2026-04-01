/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {

  let n = nums.length;

  let result = new Array(n).fill(-1);
  let stack = [];

  // pushing last element inside the stack
  stack.push (nums[n-1]);

  for(let i=(2*n)-2; i>=0; i--){

    while(stack.length){
        let top = stack[stack.length-1];
        if(nums[i % n]< top){
            result[i % n] = top;
            break;
        }
        else {
            stack.pop();
        }
    }
    stack.push(nums[i % n]);
  }
  return result.slice(0,n);
};

const nums = [1,2,1];
const output = nextGreaterElements(nums);
console.log(output);