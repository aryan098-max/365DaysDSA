function fibRecursive(n){

    // base case
    if(n<=1) return n;

    return fibRecursive(n-1) + fibRecursive(n-2);
}

const n = 5;
const output = fibRecursive(n);
console.log(output);