function reverseString(str){

    let strCopy = [];

    for(let i=str.length-1; i>=0; i--){

        strCopy.push(str[i]);
    }

    return strCopy;
}

const str = ["h", "e", "l", "l", "o"];
const output = reverseString(str);
console.log(output);