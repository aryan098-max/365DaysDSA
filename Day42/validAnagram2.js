function validAanagram(s,t){

    // base condition length not equal return false
    if(s.length !== t.length){
        return false;
    }

    // for maping the alphabets
    let map = {};

    for(let i=0; i<s.length; i++){

        if(!map[s[i]]){
            map[s[i]] = 1;
        } else {
            map[s[i]]++;
        }
    }

    // Now, reduce the count of the letters
    for(let j=0; j<t.length; j++){

        if(!map[t[j]] || map[t[j]]<0){
            // console.log(map);
            return false;
        }
        --map[t[j]];
    }
    return true;
}

const s = "aacc";
const t = "ccac";
const output = validAanagram(s,t);
console.log(output);