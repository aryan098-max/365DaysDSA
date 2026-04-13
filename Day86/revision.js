/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    // corner case
    if(strs.length < 1){
        return "";
    }

    let longestCPrefix = "";
    let x = 0;

    while(x < strs[0].length){

        let ch = strs[0][x];

        for(let i=1; i<strs.length; i++){

            if(ch !== strs[i][x] || x >= strs[i].length){

                return longestCPrefix;
            }
        }
        longestCPrefix = longestCPrefix + ch;
        x++;
    }

    return longestCPrefix;
    
};