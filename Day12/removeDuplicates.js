function removeDuplicates(nums){

    // A tracker to track the position of unique elements
    let tracker = 0;

    for(let i=0; i<nums.length; i++){

        if(arr[i]>arr[tracker]){

            tracker = tracker + 1;
            arr[tracker] = arr[i];
        }
    }
    console.log(nums);
    return (tracker+1);
}

const arr = [1,2,1,1,3,4]
const uniqueElementsCount = removeDuplicates(arr);
console.log("The total number of elements: ", uniqueElementsCount);