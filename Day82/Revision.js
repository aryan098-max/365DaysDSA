/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let lastWordCount = 0;
    let i = s.length - 1;

    // first we need to reach the last word
    while(i >= 0){

        if(s[i] === " "){
            i--;
        }else {
            break;
        }
    }

    // second loop count the length of the last word

    while(i >=0){

        if(s[i] !== " "){
            lastWordCount++;
            i--; // always forget this line
        }else {
            break;
        }
    }
    
    return lastWordCount;
};