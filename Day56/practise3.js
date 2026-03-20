var longestCommonPrefix = function(strs) {

   let commonPrefix = "";

   for(let i=0; i<strs[0].length; i++){
        let ch = strs[0][i];

        for(let j=1; j<strs.length; j++){

            if(ch !== strs[j][i] || i> strs[j].length){
                return commonPrefix;
            }
        }
        commonPrefix += ch;
   }
   return commonPrefix;
};

const strs = ["flower", "flight", "flow"];
const output = longestCommonPrefix(strs);
console.log(output);