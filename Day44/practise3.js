function validAanagram(s,t){
    // length constraint
    if(s.length !== t.length){
        return false;
    }
    
    // first map all the letters
    let map={};
    for(let i=0; i<s.length; i++){

        if(!map[s[i]]){
            map[s[i]] = 1;
        } else {
          ++map[s[i]];
        }
    }

    // Return false if map[t[j]] doesn't exist and if length reduces less than zero

    for(let j=0; j<t.length; j++){

        if(!map[t[j]] || map[t[j]]<0){
            console.log(map);
            return false;
        }

        map[t[j]]--;
    }

    return true;
}

const s = "aacc";
const t = "ccac";
const output = validAanagram(s,t);
console.log(output);