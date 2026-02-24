function isPalindrome(s){

      s = s.toLowerCase();
    let i =0;
    let j = s.length-1;

    while(i<=j){

        if(!s[i].match(/[a-z0-9]/i)){
            ++i;
        } else if(!s[j].match(/[a-z0-9]/i)){
            --j;
        } else if(s[i] === s[j]){
            ++i, --j;
        } else {
            return false;
        }
    }
    return true;
   
}

const s = "aaa aaa";
const output = isPalindrome(s);
console.log(output);