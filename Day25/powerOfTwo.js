function powerOfTwo(n){

    // base case
    if(n === 1) return true;

    if( n<1 || (n%2 !== 0)) return false;

    return powerOfTwo(n/2);

}

const n = 24;
const isPowerofTwo = powerOfTwo(n);
console.log(isPowerofTwo);