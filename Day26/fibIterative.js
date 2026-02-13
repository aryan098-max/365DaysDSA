function fibNumber(n){

    // base cases
    // if(n===0) return 0;
    // if(n===1) return 1;

    // covering both base cases
    if(n<=1) return n;

    let prevVal = 0;
    let currentVal = 1;
    let nextVal = 0;

    for(let i=1; i<n; i++){

        nextVal = prevVal + currentVal;
        prevVal = currentVal;
        currentVal = nextVal;
    }

    return nextVal;

}

let n = 1
const output = fibNumber(n);
console.log(output);