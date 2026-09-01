// # 20. Valid Parentheses
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
        } 
        else {
            // pop the last value from the stock
            let top = stack.pop();
            if(!top || s[i] !== bracketMap[top]){
                return false;
            }
        }
    }
    return stack.length === 0;
    
};
