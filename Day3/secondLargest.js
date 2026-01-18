function secondLargest(arr){

    if(arr.length < 2){
        return null
    }

    let fLargest = -Infinity;
    let sLargest = -Infinity;

    // fnding first largest & second largest
    for(let i=0; i<arr.length;i++){

        if(arr[i]>fLargest){
            sLargest = fLargest;
            fLargest = arr[i];

        } else if (arr[i]>sLargest && arr[i]!=fLargest){
            sLargest = arr[i];
        }
    }

    // final check for all same element inside an array [5,5,5]
    return sLargest === -Infinity? null:sLargest;
    
}
const arr1 = [9,1,2,4,5,8];
const sLargest = secondLargest(arr1);
console.log(sLargest);
