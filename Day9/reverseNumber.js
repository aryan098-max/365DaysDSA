function reverseNumber(num){

    const tempArray = [];

    for(let i=num.length-1; i>=0; i--){
        tempArray.push(num[i]);
    }
    
    return tempArray.join("");
}

const num = [1,2,3,4];
const reversedNumber = reverseNumber(num);
console.log(reversedNumber);

module.exports = {reverseNumber}

