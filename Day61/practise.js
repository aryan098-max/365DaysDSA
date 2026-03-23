/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = {}

    for(let i=0; i<strs.length; i++){

        let key = "";
        let word = strs[i];
        let freqArr = Array(26).fill(0);

        // second loop for increasing the freq at index based on char
        for(let j=0; j<word.length; j++){

            // using a index variable to do that
            let index = word[j].charCodeAt() - 'a'.charCodeAt();
            freqArr[index] ++;
        }

        // Now, I have an array with diff indexes create a key using each index
        for(let k = 0; k<26; k++){
            key = key + String.fromCharCode(k+97) + freqArr[k];
        }

        // Finally, creating array of each word using the key
        if(!map[key]){
            map[key] = [word];
        } else {
            map[key].push(word);
        }
    }

    return Object.values(map);
};