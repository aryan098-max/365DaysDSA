function verifyPalindrome(originalNum){

    // Negative number always -121 = 121- (- at the end)
    if(num<0){
        return false;
    }

    let replicatedNum = originalNum;
    let reversedNum = 0

    while(replicatedNum>0){

        let lastDigit = replicatedNum%10;
        reversedNum = (reversedNum * 10) + lastDigit;
        replicatedNum = Math.floor(replicatedNum/10);
    }

    if(reversedNum === originalNum){
        return true;
   }

   return false;
}

// number
const num = 121
const isPalindrome = verifyPalindrome(num);
console.log(isPalindrome)