// # 2942. Find Words Containing Character

var findWordsContaining = function(words, x) {
     // empty array to store result
    let result = [];
     for (let i=0; i<words.length; i++){
        
        if(words[i].includes(x)){
            result.push(i);
        }
     }

     return result;
};