// # 205. Isomorphic Strings
var isIsomorphic = function(s, t) {

     // corner case
    if(s.length !== t.length){
        return false;
    }

    let mapStoT = {};
    let mapTtoS = {};

    let n = s.length;
    let i = 0;
    
    // For isomorphic using two map
    while(i < n){

        if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        }
        else if(mapStoT[s[i]] !== t[i]){
            return false;
        }
        else if(mapTtoS[t[i] !== s[i]]){
            return false;
        }
        i++;
    }

    return true;
    
};