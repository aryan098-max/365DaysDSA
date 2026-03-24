var isValid = function(s) {

    // base case || corner case
    if(s.length <= 1){
        return false;
    }

    let stack = [];
     let bracketMap = {
        "[":"]",
        "{":"}",
        "(":")"
     }

    for(let i=0; i<s.length; i++){

        // how to check opening or close bracket
        if(bracketMap[s[i]]){
            stack.push(s[i]);
        } else {
            let top = stack.pop();
            // checking if top is empty 
            if(!top || s[i] !== bracketMap[top]){
                return false;
            }
        }
    }
    return stack.length === 0;
};

const s = "()[]{}"
const output = isValid(s);
console.log(output);