var removeOuterParentheses = function(s) {

    let level = 0;
    let result = "";

    for(let i=0; i<s.length; i++){

        if(s[i] === "("){

            ++level;
            if(level > 1){
                result = result + s[i];
            }
        } 
        else{ 
            if(level > 1){
                result = result + s[i];
            }
            --level;
        }
    }
    return result;
};