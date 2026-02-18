function fib(n){

    // 1 condition covers both base cases
    // if(n === 0) return 0;
    // if(n === 1) return 1;

    if(n<=1) return n;

    return fib(n-1) + fib(n-2);


}

let n = 5;
const output = fib(n);
console.log(output);