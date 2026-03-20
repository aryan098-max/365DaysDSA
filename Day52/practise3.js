var isPalindrome = function(s) {
     // First convert all the string into lower case
    s = s.toLowerCase();

    // Introduce a new variable
    let filteredString = "";
    
    // Don't split the string intially because s[i].match is doing a decent job
    // first extract alpanumeric characters using regex
    for(let i=0; i<s.length; i++){

        if(s[i].match(/[a-z0-9]/i)){
            // a new string is created
            filteredString += s[i];
        }
    }
    // after creating a string which contains alphanumeric character
    let reversedString = filteredString.split("");
    let halfLen = Math.floor(reversedString.length/2);
    let n = filteredString.length;

    for(let j=0; j<halfLen; j++){

        let temp = reversedString[j];
        reversedString[j] = reversedString[n-1-j];
        reversedString[n-1-j] = temp;
    }

    // converting reversedString back into a string from array
    reversedString = reversedString.join("");

    return filteredString === reversedString;
};

const s = "race a car";
const output = isPalindrome(s);
console.log(output);