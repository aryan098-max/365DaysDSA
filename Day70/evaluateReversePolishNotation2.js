/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

 let stack = [];
//  let operandsSet = new Set(["+", "-", "*", "/"]);
 let map = {
    "+" : (a,b) => (a + b),
    "-" : (a,b) => (a - b),
    "*" : (a,b) => (a * b),
    "/" : (a,b) => (a / b),    
 }


 for(let i=0; i<tokens.length; i++){

    if(map[tokens[i]]){

        // Suggestion b is pushed last
        let b = stack.pop();
        let a = stack.pop();
        let result = map[tokens[i]](a,b);
        stack.push(Math.trunc(result));
    } else {
        stack.push(tokens[i]);
    }
 }

 return Number(stack.pop());
    
};