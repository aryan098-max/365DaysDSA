function largestOddNumber(num){

    let n = num.length-1;

    for(let i=n; i>=0; i--){

        if(Number(num[i])%2 !== 0){
            return num;  
        } else {
            num = num.slice(0,i);
        }
    }
    
    // Entire num is even
    // return ""
    return "";

}

const num = "4206";
const output = largestOddNumber(num);
console.log(output);