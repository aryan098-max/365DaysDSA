var lengthOfLastWord = function(s) {

    let i = s.length-1;
    let lastWordCount=0;

    while(i>=0){

        if(s[i] !== " "){
            break;
        }
        i--;
    }

    while(i>=0){

        if(s[i] === " "){
            break;
        }
        lastWordCount ++;
        i--;
    }
    
    return lastWordCount;
};

const s = "a";
const output = lengthOfLastWord(s);
console.log(output)