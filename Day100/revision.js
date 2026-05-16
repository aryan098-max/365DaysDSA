/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let len = s.length-1;
    let halfLen = Math.floor(s.length/2);

    for(let i=0; i<halfLen; i++){

        let temp = s[i]
        s[i] = s[len-i];
        s[len - i] = temp;
    }
};