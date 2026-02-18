function lengthOfLastWord(s){

    s = s.trim();
    s = s.split(" ");
    return s[s.length-1].length;
}

const s = "Hello World";
const output = lengthOfLastWord(s);
console.log(output);


