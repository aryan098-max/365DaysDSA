// # 2942. Find Words Containing Character

var findWordsContaining = function(words, x) {

    let result = [];

    for(let i=0; i<words.length; i++){
        let word = words[i];
        for(let j=0; j<word.length; j++){
            if(word[j] === x){
                result.push(i);
                break;
            }
        }
    }

    return result;
    
}