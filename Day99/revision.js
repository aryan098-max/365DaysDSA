/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    let x = 0;
    let commonPrefix = "";
    
    while(x < strs[0].length){

        let ch = strs[0][x];

        for(let i=1; i<strs.length; i++){

            if(ch !== strs[i][x] || x > strs[i].length){
                return commonPrefix;
            }
        }

        commonPrefix = commonPrefix + ch;
        ++x;
    }
    return commonPrefix;
};