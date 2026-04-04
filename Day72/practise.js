/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {

    // mapping of all the vowels and consonant
    let map = {};

    for(let i=0; i<s.length; i++){

        if(!map[s[i]]){
            map[s[i]] = 1;
        } else {
            ++map[s[i]];
        }
    }

    let vowelSet = new Set(["a", "e", "i", "o", "u"]);
    let maxVowel = 0;
    let maxConsonant = 0;

    for (let key in map){

        if(vowelSet.has(key) && maxVowel < map[key]){
            maxVowel = map[key];
        }
        else if(!vowelSet.has(key)) {
            if(maxConsonant < map[key]){
                maxConsonant = map[key]
            }
        }
    }

    return maxVowel + maxConsonant;
    
};