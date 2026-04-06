/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let xCopy = x;
    xCopy = Math.abs(xCopy);
    let reversedNum = 0;

    while(xCopy > 0){

        let lastDigit = xCopy % 10;
        reversedNum = (reversedNum * 10) + lastDigit;
        xCopy = Math.floor(xCopy/10);
    }

    console.log(reversedNum);

    let limit = Math.pow(2,31);

    // checking for both positive and negative
    if(reversedNum > limit-1 || -reversedNum < -limit){
        return 0;
    }
    
    return (x < 0) ? -reversedNum : reversedNum;
};