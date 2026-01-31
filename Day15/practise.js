function reverseString(s){

    let length = s.length;
    let halfLen = Math.floor(s.length/2);

    for(let i=0; i<halfLen; i++){

        let temp = s[i];
         s[i] = s[length-1-i];
         s[length-1-i] = temp;
    }

    return s;
}


const s = ["h", "e", "l", "l", "o"];
const reversedString = reverseString(s);
console.log(reversedString);
