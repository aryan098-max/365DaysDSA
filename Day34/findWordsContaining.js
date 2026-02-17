function findWordsContaining(words, x){

    // empty array to store result
    let result = [];
     for (let i=0; i<words.length; i++){
        
        if(words[i].includes(x)){
            result.push(i);
        }
     }

     return result;
}

const words = ["Leet","Code"];
const x = "e";
const output = findWordsContaining(words, x);
console.log(output);