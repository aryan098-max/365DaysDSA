function largestOddNumber(num){

    let n = num.length-1;

    while(n>=0){

        if(Number(num[n])%2 === 1){
            // Initially, n is reduced
            return num.substring(0,n+1);
        }

        --n;
    }

    // Entire num even
    return "";
}

const num = "31";
const output = largestOddNumber(num);
console.log(output);