function fibIterative(n){

    // base case
    if(n<=1) return n;

    let preValue = 0;
    let currentValue = 1;
    let nextValue = 0;

    for(let i=1; i<n; i++){

        nextValue = preValue + currentValue;
        preValue = currentValue;
        currentValue = nextValue;

    }

    return nextValue;
}

const n = 5;
const output = fibIterative(n);
console.log(output);