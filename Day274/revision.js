// # 7. Reverse Integer

var reverse = function(x) {
     let xCopy = Math.abs(x);
    console.log(xCopy);
    let reversedNum = 0;

    while(xCopy > 0){

        let lastDigit = xCopy%10;
        reversedNum = reversedNum * 10 + lastDigit;
        xCopy = Math.floor(xCopy/10);
    }

    let limit = Math.pow(2,31);

    if(reversedNum > limit - 1 || reversedNum < -limit){
        return 0;
    }
    
    return (x < 0 ? -reversedNum : reversedNum);
    
};