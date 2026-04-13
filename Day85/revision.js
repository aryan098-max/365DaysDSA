/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {

    // length
    let n = num.length-1;

    for(let i=n; i>=0; i--){

        // keep slicing the num if it is even
        if(num[i]%2 !== 0){
            return num;
        } else {
            num = num.slice(0,i);
        }
    }
    
    return "";
};