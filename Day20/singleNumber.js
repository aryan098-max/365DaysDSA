function singleNumebr(){

       const numsCount = {};

    for(let i=0; i<nums.length; i++){

        if(numsCount[nums[i]] ){

            numsCount[nums[i]] = numsCount[nums[i]] + 1
        } else {

            numsCount[nums[i]] = 1;
        }
    }

    for(let i=0; i<nums.length; i++){

        if (numsCount[nums[i]] === 1){

            return nums[i];
        }
    }

}

const nums  = [1,2,2,3,3];
const output = singleNumber(nums);
console.log(output)