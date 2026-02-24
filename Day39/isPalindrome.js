function isPalindrome(s){

    s = s.toLowerCase();
    let filteredString = "";

    //Run a loop to filterout string
    for(let i=0; i<s.length; i++){

        if(s[i].match(/[a-z0-9]/i)){

            filteredString += s[i];
        }
    }

    let reversedString = filteredString.split("");
    let n = reversedString.length;
    let halfLen = Math.floor(reversedString.length/2);
    
    for(let j=0; j<halfLen; j++){

        let temp = reversedString[j];
        reversedString[j] = reversedString[n-1-j];
        reversedString[n-1-j] = temp;
    }

    reversedString = reversedString.join("");
    return reversedString === filteredString ;

}

const s = "race a car";
const output = isPalindrome(s);
console.log(output);