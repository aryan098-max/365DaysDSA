var isIsomorphic = function(s, t) {

    // Solve this problem using two map solution
    let mapStoT={};
    let mapTtoS={};

    for(let i=0; i<s.length; i++){

        if((!mapStoT[s[i]]) && (!mapTtoS[t[i]])){
            
            // create two way mapping
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        } 
        // same char should be mapped with same char
        else if(mapTtoS[t[i]] !== s[i]){
            return false;
        }
        // we are using i for navigating
        else if(mapStoT[s[i]] !== t[i]){
            return false;
        }
    }

    // otherwise return true;
    return true;
    
};

const s = "foo";
const t = "bar";
const output = isIsomorphic(s,t);
console.log(output);