function powerOfTwo(n){

    // base case, it means that it is even number
    // if n === 1, it means quotient is 1 
    if(n === 1) return true;

    // n = 3, becomes 0.5..., therefore, n < 1
    if( n<1 || (n%2 !== 0)) return false;

    return powerOfTwo(n/2);

}

const n = 24;
const isPowerofTwo = powerOfTwo(n);
console.log(isPowerofTwo);