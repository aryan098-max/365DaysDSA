function maxProfit(nums){

    let maxP = 0;
    let lowestPrice = nums[0];
    for(let i=0; i<nums.length; i++){

        if(nums[i]-lowestPrice > maxP){
            maxP = nums[i] - lowestPrice;
            
        }

        if(nums[i]<lowestPrice){
            lowestPrice = nums[i];
        }
    }

    return maxP
}

const nums = [7,1,5,4,6,3];
const output = maxProfit(nums);
console.log(output);