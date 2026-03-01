function isIsomorphic(s,t){

    // base case 
    if(s.length !== t.length){
        return false;
    }

    // Two map approach

    let mapStoT={};
    let mapTtoS={};

    for(let i=0; i<s.length; i++){

        if(!mapStoT[s[i]] && !mapTtoS[t[i]]){

            // creating mapping a:e, e:a
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        }
        else if(mapTtoS[t[i]] !== s[i]){
            return false;
        }
        else if(mapStoT[s[i]] !== t[i]){
            return false;
        }
    }

    return true;
}

const s = "add";
const t = "egg";
const output = isIsomorphic(s,t);
console.log(output);