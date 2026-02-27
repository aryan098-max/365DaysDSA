function maxFreq(s){

    let map = {};

    for(let i=0; i<s.length; i++){

        if(!map[s[i]]){
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }
    
    console.log(map);

    let maxVowel = 0;
    let maxConsonant = 0;
    let vowelSet = new Set(["a", "e", "i", "o", "u"]);

    for(let key in map){

        if(vowelSet.has(map[key]) && map[key]>maxVowel){

            maxVowel = map[key];
        } else if(!(vowelSet.has(key)) && map[key] > maxConsonant) {
            maxConsonant = map[key];
        }
    }
    return maxVowel + maxConsonant;



}

const s = "successes";
const output = maxFreq(s);
console.log(output);