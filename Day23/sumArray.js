function sumArray(arr,i){

    if(i >= arr.length){
        return 0;
    }
   return arr[i] + sumArray(arr, i+1);

}
let i = 0;
let arr = [5,4,3,2,1];
const output = sumArray(arr, i);
console.log(output);