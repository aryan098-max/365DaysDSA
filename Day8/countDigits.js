function countDigit(num){

    // corner case for zero
    if(num === 0){
        return 1;
    }

    // negative corner case
    num = Math.abs(num);

    let count = 0;

    while(num>0){

        num = Math.floor(num/10);
        count ++;
    }

    return count;

}

const num = 259;
const digitCount = countDigit(num);
console.log(digitCount);