function reverseInteger(num){

    let numCopy = num;
    numCopy = Math.abs(numCopy);
    let reversedNum = 0;

    while(numCopy>0){

        let lastDigit = numCopy%10;
        reversedNum = (reversedNum * 10) + lastDigit;
        numCopy = Math.floor(numCopy/10);
    }

    let limit = Math.pow(2,31);
    // let limit = 2**31

    // af
    if(reversedNum > limit || reversedNum < -limit ){
        return 0;
    }

    return (num<0) ? -reversedNum : reversedNum
}

let num = -123;
const reversedNumber = reverseInteger(num);
console.log(reversedNumber);