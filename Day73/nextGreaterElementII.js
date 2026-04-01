/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {

  // doubling the array 
  const doubleArr = [...nums, ...nums];
  let n = doubleArr.length;

  let result = new Array(n).fill(-1);
  let stack = [];

  // pushing last element inside the stack
  stack.push (doubleArr[n-1]);

  for(let i=n-2; i>=0; i--){

    while(stack.length){
        let top = stack[stack.length-1];
        if(doubleArr[i]< top){
            result[i] = top;
            break;
        }
        else {
            stack.pop();
        }
    }
    stack.push(doubleArr[i]);
  }
  return result.slice(0,n/2);
};

const nums = [1,2,1];
const output = nextGreaterElements(nums);
console.log(output);