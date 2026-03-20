var maxFreqSum = function(s) {

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

    for(let key in map){

        if(vowelSet.has(key) && map[key]>maxVowel){
            maxVowel = map[key];
        } else if((!vowelSet.has(key)) && map[key]>maxConsonant){
            maxConsonant = map[key];
        }
    }

    return maxVowel + maxConsonant;
};

const s = "aeiaeia";
const output = maxFreqSum(s);
console.log(output);