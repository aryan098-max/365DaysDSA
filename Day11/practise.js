function binarySearch(arr, ele){

    // small length
    if(arr.length<1){
        return -1 
    } 

    let start = 0;
    let end = arr.length-1;
    let middle = Math.floor((start + end)/2);

    while(start<end){

        if(ele > arr[middle]){
            start = middle;
            middle = Math.floor((start + end)/2);
        } else if(ele < arr[middle]) {
            end = middle;
            middle = Math.floor((start + end)/2);
        } else {
            return middle;
        }
    }

}

const arr = [4,5,6,7,8,9,12];
const searchElement = 9;
const index = binarySearch(arr, searchElement);
console.log(index);