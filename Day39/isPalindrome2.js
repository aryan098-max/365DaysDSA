function isPalindrome(s){

    s = s.toLowerCase();
    let filteredString = "";
    let reversedString = "";

    //Run a loop to filterout string and reverse string at the same time
    for(let i=0; i<s.length; i++){

        if(s[i].match(/[a-z0-9]/i)){

            filteredString = filteredString + s[i];
            reversedString = s[i] + reversedString;
        }
    }

    return reversedString === filteredString ;
}

const s = "aaa aaa";
const output = isPalindrome(s);
console.log(output);