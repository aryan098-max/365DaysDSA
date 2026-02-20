function maxFreqSum(s){

    let map = {};
    for(let i=0; i<s.length; i++ ){
        // For assignment we can use Ternary operator  
        // map[s[i] = !map[s[i]]] ? 1 : ++map[s[i]]
        if(!map[s[i]]){
            map[s[i]] = 1;
        } else{
            ++map[s[i]];
        }
    }

    // Makes second loop Time Complexity because it can have max 26 characters = O(1)
    const mapKeys = Object.keys(map);
    const vowelsSet = new Set(["a", "e", "i", "o", "u"]);
    let maxVowel = 0;
    let maxConsonant = 0;
    
    for(let i=0; i<mapKeys.length; i++){

        if(vowelsSet.has(mapKeys[i])){
            
            if(map[mapKeys[i]]>maxVowel){
                maxVowel = map[mapKeys[i]];
            }

        } else {
            if(map[mapKeys[i]]>maxConsonant){
                maxConsonant = map[mapKeys[i]];
            }

        }
    }

    return maxVowel + maxConsonant;
}


const s = "sucesses";
const output = maxFreqSum(s);
console.log(output);

