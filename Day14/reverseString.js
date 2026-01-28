// Method 1
// function reverseString(str){

//     let j=str.length-1;

//     for(let i=0; i<j; i++, j--){

//         let temp = "";
//         temp = str[i];
//         str[i] = str[j];
//         str[j] = temp;
//     }

//     return str
// }

// const str = ["h", "e", "l", "l", "o"];
// const output = reverseString(str);
// console.log(output);

// ===================================================================

// Method 2

function reverseString(str){

    let length = str.length;
    let halfLen = Math.floor(length/2);

    for(let i=0; i<halfLen; i++){

        let temp = str[i];
        str[i] = str[length-1-i];
        str[length-1-i] = temp;
    }

    return str;

}

const str = ["a", "b", "c", "d", "e", "f"];
const output = reverseString(str);
console.log(output);

