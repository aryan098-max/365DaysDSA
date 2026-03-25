var removeOuterParentheses = function(s) {

    let stack = [];
    let result = "";

    for(let i=0; i<s.length; i++){

        if(s[i] === "("){
            stack.push(s[i]);

            // adding to the result after pushing inside the stack
            let len = stack.length
            if(len > 1){
                result = result + s[i];
            }
        } 
        else{ 

            // concatenating to the result before popping off to add ")"
            // close bracket as well
            let len = stack.length
            if(len > 1){
                result = result + s[i];
            }

            stack.pop();
        }
      
    }
};