function factorial(n){

    if (n===1) return 1;

    return n * factorial(n-1);

}

let n = 5;
const output = factorial(n);
console.log(output);