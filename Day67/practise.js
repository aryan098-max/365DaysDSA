var isAnagram = function(s, t) {

    // base case
    if(s.length !== t.length){
        return false;
    }

    // mapping each word of s
    let map = {}

    for(let i=0; i<s.length; i++){

        if(!map[s[i]]){
            map[s[i]] = 1;
        } else {
            ++map[s[i]];        
        }
    }

    // Now, reduce the count of each word 

    for(let j=0; j<t.length; j++){

        if(!map[t[j]] || map[t[j]]<0){
            return false;
        } else {
            --map[t[j]];
        }

    }

    // Finally, return true
    return true;
};