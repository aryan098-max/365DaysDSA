const {reverseNumber} = require('./reverseNumber')

function checkPalindrome(str){

    for(let i=0, j=str.length-1; i<j; i++,j--){

        if(str[i] !== str[j]){
            
            return false;
        }
    }

    return true;
}

function verifyPalindrome(str){

    // empty
    if(str.length < 1){
        return -1;
    }

    // Reversing the str & comparing
   const reversedData = reverseNumber(str);

   if(reversedData === str){
        return true;
   }

   return false;
}

const str = "sas";
const isPalindrome = checkPalindrome(str);
const isPalindromeSecond = verifyPalindrome(str)
console.log(isPalindrome);
console.log(isPalindromeSecond);