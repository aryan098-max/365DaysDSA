function extractLastDigit(num){

    // Last Digit = /
    let lastDigit = Math.floor(num/10);
    return lastDigit;
}

const num = 123;
const lastDigit = extractLastDigit(num);
console.log(lastDigit);