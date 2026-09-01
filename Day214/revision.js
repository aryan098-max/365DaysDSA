// # 9. Palindrome Number

var isPalindrome = function(x) {
      let xCopy = x;
   let reversedNum = 0;
   
   while(xCopy>0){
        let lastDigit = xCopy%10;
        reversedNum = (reversedNum * 10) + lastDigit;
        xCopy = Math.floor(xCopy/10);
   }

   if(reversedNum === x){
        return true;
   } else {
        return false;
   }


    
};