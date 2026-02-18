function binarySearch(nums,target){

      if(nums.length<1){
        return -1;
    }
    
    let start = 0;
    let end = nums.length-1;

    while(start<=end){

    let middle = Math.floor((start+end)/2);    

        if( nums[middle] === target){
            return middle
        }
        else if(nums[middle] < target){
            start = middle + 1;

        } else {
            end = middle - 1;

        }
    }

    return -1;
}

 const nums = [-5];
 const target = 3;
 const output = binarySearch(nums, target);
 console.log(output);