var isAnagram = function(s, t) {

    // base case length of s and t should be equal
    if(s.length !== t.length){
        return false;
    }

    // creating mapAna for counting the entire string
    let mapAna = {};

    for(let i=0; i<s.length; i++){

        if(!mapAna[s[i]]){
            mapAna[s[i]] = 1;
        } else {
            mapAna[s[i]]++;
        }   
    }

    // after creating the mapAna which has count of each letters
    // Now, reducing each char

    for(let j=0; j<t.length; j++){

        // count of a letter is extra
        if(!mapAna[t[j]] || mapAna[t[j]]<0){
            return false;
        }else{
            --mapAna[t[j]];
        }
    }
    return true;
};