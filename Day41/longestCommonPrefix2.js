var longestCommonPrefix = function(strs) {
    
    let commonPrefix = "";
    let n = strs[0].length;

    for(let i=0; i<n; i++){

        let ch = strs[0][i];

        for(let j=1; j<strs.length; j++){

            if(ch !== strs[j][i] || i>strs[j].length){
                return commonPrefix;
            }
        }

        commonPrefix = commonPrefix + ch;
    }

    return commonPrefix;
};

const strs = ["flow", "flight", "flower"];
const output = longestCommonPrefix(strs);
console.log(output);