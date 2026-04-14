/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    // corner case
    if(s.length !== t.length){
        return false;
    }

    let map = {};

    for(let i=0; i<s.length; i++){

        if(!map[s[i]]){
            map[s[i]] = 1;
        } else{
            map[s[i]]++;
        }
    }

    // Now, checking t in for every char in s

    for(let j=0; j<t.length; j++){

        if(!map[t[j]] || map[t[j]] < 0){
            return false;
        }

        // reducing the value as well, forgot this
        --map[t[j]];
    }
    
    return true;
};