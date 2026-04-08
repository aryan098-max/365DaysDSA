/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    let i = s.length-1;
    let lengthLast = 0;

    while(i >= 0){

        if(s[i] === " "){
            i--;
        } else {
            break;
        }
    }

    while(i >= 0){

        if(s[i] !== " "){
            lengthLast ++;
            --i;
        } else {
            break;
        }
    }

    return lengthLast;

};