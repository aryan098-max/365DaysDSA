function secondLargest(arr1){

    let fLargest = -Infinity
    let sLargest = -Infinity

    if(arr1.length<2){
        return -1;
    }

    for(let i=0;i<arr1.length;i++){

        if(arr1[i]>fLargest){
            sLargest = fLargest;
            fLargest = arr[i];

        } else if(arr1[i>sLargest] && arr1[i]!==fLargest){
            sLargest = arr1[i];
        }

    }

    return sLargest = sLargest === -Infinity ? -1 :sLargest


}

const arr = [10,20,30,30,20];
const sLargest = secondLargest(arr);
console.log(sLargest);