var removeDuplicates = function(nums) {

   // t is for the tracking
   let t = 0; 

   for(let i=0; i<nums.length; i++){

        if(nums[i] > nums[t]){
            t = t + 1;
            // We are modiyfing the array; therefore, 
            nums[t] = nums[i];
        }
   }
    
    return t+1;
};