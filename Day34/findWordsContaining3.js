function findWordsContaining(words, x){

    // empty array to store result
    let result = [];

    for(let i=0; i<words.length; i++){
        
        for(let j=0; j<words[i].length; j++){

            if(words[i][j] === x){
                result.push(i);
                break;
            }
        }
    }

    return result;
}

const words = ["leet","code"];
const x = "e";
const output = findWordsContaining(words, x);
console.log(output)