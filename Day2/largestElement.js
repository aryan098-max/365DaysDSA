function largestElement(arr1){

    // assume 0th element the largest
    let lEle = arr[0];

    for(let i=0; i<arr1.length;i++){

        if(arr[i]>arr[0]){

            lEle = arr[i];
        }
    }
    
    // return largest element
    return lEle;
}

const arr = [9,7,1,2,3,10,8];
const lElement = largestElement(arr);
console.log(lElement);
