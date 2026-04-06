/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {

    // Two base cases one for success 
    if(n === 1){
        return true;
    }

    if(n < 1 || (n%2 !== 0)){
        return false;
    }

    return isPowerOfTwo(n/2);
};