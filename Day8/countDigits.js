function countDigit(num){

    let count = 0;

    while(num>0){

        num = num/10;
        count ++;
    }

    return count;

}

const num = 259;
const digitCount = countDigit(num);
console.log(digitCount);