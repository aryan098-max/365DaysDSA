// # 283. Move Zeroes

var moveZeroes = function(nums) {

     let t = 0;

    for(let i=0; i<nums.length; i++){

        if(nums[i] !== 0){
            nums[t] = nums[i]
            t++;
        }
    }

    for(let j=t ; j<nums.length; j++){
        nums[j] = 0;
    }
    
};