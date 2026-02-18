function lengthOfLastWord(s){

    // start from the last character
    let n = s.length-1;

    // traverse backward through the spaces until character is found
    while(n>=0){

        if(s[n] === " "){
            --n;
        } else{
            break;
        }
    }   

    // character count
    let count = 0;

    // Count the character until the space is reached
    while(n>=0){

        if(s[n] !== " "){
            --n;
            ++count;
        } else{
            break;
        }
    }
    return count; 
}

const s = "Hello World";
const output = lengthOfLastWord(s);
console.log(output);