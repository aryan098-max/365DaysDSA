function lengthOfLastWord(s){

    let n = s.length-1;
    let count = 0;

    while(n>=0){

        if(s[n] !== " "){
            ++count;
        } else if(count>0){
            break;
        }

        --n;
    }

    return count;
}

const s = "Hello World";
const output = lengthOfLastWord(s);
console.log(output);