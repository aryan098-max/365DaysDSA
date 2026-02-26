function findWordsContaining(words,x){

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

const words = ["Leet", "Code"];
x="e";
const output = findWordsContaining(words,x)
console.log(output);