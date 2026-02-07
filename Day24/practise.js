function checkPalindrome(num){

    let numCopy = num;
    let reversedNum = 0;

    while(numCopy > 0){

        let lastDigit = numCopy % 10;
        reversedNum = (reversedNum * 10) + lastDigit;
        numCopy = Math.floor(numCopy/10);
    }

    if(reversedNum === num){
        return true;
    } else {
        return false;
    }
}

let num = 121;
const isPalindrome = checkPalindrome(num);
console.log(isPalindrome);

