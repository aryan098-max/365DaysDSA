function largestOddNumber(num){


    for(let i=0; i<num.length; i++){

        if(Number(num[i])%2 !==0){
            return num;  
        } else {
            num = num.slice(0,i);
        }
    }
    
    // Entire num is even
    // return ""
    if(num%2 === 0){
        return num;
    } 




}

const num = "4206";
const output = largestOddNumber(num);
console.log(output);