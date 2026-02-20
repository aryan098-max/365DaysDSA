function maxFreqSum(s){

    // for storing the count of the characters
    let map = {};
    for(let i=0; i<s.length; i++){

        if(!map[s[i]]){
            map[s[i]] = 1
        } else {
            ++map[s[i]];
        }
    }

    // Finding the maxVowel and maxConsonant

    let vowelsSet = new Set(["a", "e", "i", "o", "u"]);
    let maxVowel = 0;
    let maxConsonant = 0;
    for(let i=0; i<s.length; i++){

        if(vowelsSet.has(s[i])){
            // maxVowel = Math.max(maxVowel, map[s[i]]);

            if(map[s[i]]>maxVowel){
                maxVowel = map[s[i]];
            }
        } else {
            // maxConsonant = Math.max(maxConsonant, map[s[i]]);
            if(map[s[i]]>maxConsonant){
                maxConsonant = map[s[i]];
            }
        }        
    }
    return maxConsonant + maxVowel;
}

const s = "sucesses";
const output = maxFreqSum(s);
console.log(output);