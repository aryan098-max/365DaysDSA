function secondLargest(arr){

    let fLargest = arr[0];
    let sLargest = arr[1];

    // swap elements
    if(fLargest<sLargest){
        [fLargest, sLargest] = [sLargest, fLargest];
    }

    // fnding first largest & second largest
    for(let i=2; i<arr.length;i++){

        if(arr[i]>fLargest){
            fLargest = arr[i];
        }

        if(arr[i]>sLargest && arr[i]!=fLargest){
            sLargest = arr[i];
        }
    }

    return sLargest;
    
}
const arr1 = [9,1,2,4,5,8];
const sLargest = secondLargest(arr1);
console.log(sLargest);
