/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

    // base for 0 and 1
    if(x<2){
        return x;
    }

    let left = 2
    let right = Math.floor(x/2);
    
    while(left <= right){

        let middle = Math.floor((left + right)/2);
        
        if(x === middle ** 2){
            return middle;
        }
        else if(x < middle ** 2){
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    // If a given number is not a perfect square, right exceeds left
    // right is our ans
    return right;
};