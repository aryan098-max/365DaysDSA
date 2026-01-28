// The pattern is to reverse the number using mathematical formula
// The reversed num should be compared with the original num to check palindrome

function checkPalindrome(num){

    // adding a condition for the negative 
    if(num<0){
        return false;
    }

    // creating a copy of the original num
    let numCopy = num;
    let reversedNum = 0;

    while(numCopy>0){

        let lastDigit = numCopy%10;
        reversedNum = (reversedNum * 10) + lastDigit;
        numCopy = Math.floor(numCopy/10);
    }

    // checking palindrome
    if(reversedNum === num){
        return true;
    }

    return false;
}

const num = 121;
const isPalindrome = checkPalindrome(num);
console.log(isPalindrome);