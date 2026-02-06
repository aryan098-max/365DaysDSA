function sumArray(n){

    if( n === 0) return arr[0];

    return arr[n] + sumArray(n-1);

}

const arr = [5,3,2,1,9];
const output = sumArray(arr.length-1);
console.log(output);