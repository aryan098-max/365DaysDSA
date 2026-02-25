function longestCommonPrefix(strs){

     let x = 0;
    // while loop runs until the length of the first string is exhausted
    while(x < strs[0].length){

        let ch = strs[0][x];

        // for loop run from 1 until the length of the array is exhausted
        for(let i=1; i<strs.length; i++){

            if(ch !== strs[i][x] || x === strs[0].length){

                return strs[0].substring(0, x);
            }
        }

        ++x;
    }

    // If string is empty and length of the first string is exhausted first
    return strs[0];

}

const strs = ["flower", "flight", "flow"];
const output = longestCommonPrefix(strs);
console.log(output);