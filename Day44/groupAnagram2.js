function groupAnagrams(strs) {
    
    // map variable
    let map = {};

    // running a loop for each word 
    for(let i=0; i<strs.length; i++){

        // Each word will have a key
        let key = "";
        let word = strs[i];
        let freqArr = Array(26).fill(0);

        for(let j=0; j<word.length; j++){

            // index for increasing the count of word
            // - 'a'.charCodeAt() = 97
            let index = word[j].charCodeAt() - 'a'.charCodeAt();
            freqArr[index]++;
        }

        // eat = freqArr[1,0,0,0,1,..........] 

        // Now creating a key for each char: [a1,0,0,0,e1,......]
        for(let k=0; k<26; k++){

            // turning k into letters and concatenating count of each letter to it
            key = key + String.fromCharCode(k+97) + freqArr[k];
        }

        // key of group of anagram: a1b0c0d0e1...t1 - this is the key and words

        // Note: anagrams will have same key: [a1,0,0,0,e1,.....]
        // Finally, creating a map, assinging the word back to the key
        // array of same words grouped under same key
        if(!map[key]){
            map[key] = [word];
        } else{
            map[key].push(word);
        }
    }
    
    // return the values from the map, Object.values(map): wrap the values with an array making it 2D array
    return Object.values(map);
  
};

const strs = ["eat","tea","tan","ate","nat","bat"];
const output = groupAnagrams(strs);
console.log(output);
