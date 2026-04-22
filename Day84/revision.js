/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    // string needs to be lower case
    s = s.toLowerCase();
    let filteredString = "";

    // string needs to be only alphanumeric
    for(let i=0; i<s.length; i++){

        if(s[i].match(/[a-z0-9]/i)){
            // keep concatenating the strings (alphanumberic)
            filteredString = filteredString + s[i];
        }
    }

    console.log(filteredString);

    // After we have a alphanumeric string
    str = filteredString.split("");
    console.log(str);
    let reversedStr = "";

    for(let i=str.length-1; i>=0; i--){
        // string reversed
        reversedStr = reversedStr + str[i];
    }
    console.log(reversedStr);

    return reversedStr === filteredString;
};

const s = "raceacar";
const output = isPalindrome(s);
console.log(output);