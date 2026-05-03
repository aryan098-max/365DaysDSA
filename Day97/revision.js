/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.toLowerCase();
    let filteredString = ""

    for(let i=0; i<s.length; i++){

        if(s[i].match(/[a-z0-9]/i)){
            filteredString = filteredString + s[i];
        }
    }
    
    let reversedString = "";

    for(let i=filteredString.length-1; i>=0; i--){

        reversedString = reversedString + filteredString[i];
    }

    return (reversedString === filteredString)
};