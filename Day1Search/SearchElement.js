function searchElement(arr1, element){

    for(let i=0;i<arr1.length;i++){

        if(arr[i]===element){

            // return index
            return i;
        }


    }

    // Element Not Found
    return -1
}

const arr = [1,2,3,4,5];
const ele = 4
const index = searchElement(arr, ele);
console.log(index);