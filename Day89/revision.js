/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {

    let map = {};
    maxVowel = 0;
    maxConst = 0;

    for(let i=0; i<s.length; i++){

        if(!map[s[i]]){
            map[s[i]] = 1;
        }else{
            ++map[s[i]];
        }
    }

    let vSet = new Set(["a", "e", "i", "o", "u"])

    // traversing through the map
    for(let key in map){

        if(vSet.has(key) && maxVowel < map[key]){

            maxVowel = map[key];
        } 
        else if (!vSet.has(key)) {
            if(maxConst < map[key]){
                maxConst = map[key];
            }
        }

    }
    
    return maxConst + maxVowel;

};