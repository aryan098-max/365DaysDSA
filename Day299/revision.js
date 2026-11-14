// # 27. Remove Element

var removeElement = function(nums, val) {
    
    let tracker = 0;

    for(let i=0; i<nums.length;i++){

        if(nums[i] !== val){
            // shift elements to left if not equal to value
            nums[tracker] = nums[i];
            tracker = tracker + 1;
        }

    }
    return tracker;
};