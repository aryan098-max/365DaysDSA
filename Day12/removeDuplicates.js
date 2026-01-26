function removeDuplicates(arr){

    for(let i=0; i<arr.length; i++){

        for(let j=i+1; j<arr.length; j++){

            if(arr[j] === arr[i]){

                for(let k=j; k<arr.length;k++){
                    arr[k] = arr[k+1];
                }
                arr.length--;
            }
        }
    }

    return arr;
}

const arr = [1,2,1,1,3,4]
const uniqueArray = removeDuplicates(arr);
console.log(uniqueArray);