function reverseInteger(num){

    let numCopy = num;
    numCopy = Math.abs(numCopy);
    let reversedNum = 0;

    while(numCopy>0){

        let lastDigit = numCopy%10;
        reversedNum = (reversedNum * 10) + lastDigit;
        numCopy = Math.floor(numCopy/10);
    }

    return (num<0) ? -reversedNum : reversedNum
}

let num = -123;
const reversedNumber = reverseInteger(num);
console.log(reversedNumber);