// For String
function checkPalindrome(str){

    for(let i=0, j=str.length-1; i<j; i++,j--){

        if(str[i] !== str[j]){
            
            return false;
        }
    }

    return true;
}


// String
const str = "sas";
const isPalindrome = checkPalindrome(str);
console.log(isPalindrome);
