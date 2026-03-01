var largestOddNumber = function(num) {
    
    let n = num.length;
    let i = n-1;

    while(i>=0){
        if(num[i]%2 === 1){
            return num.substring(0,i+1);
        } 
        i--;
    }
    return "";
};

const num = "1212121212";
const output = largestOddNumber(num);
console.log(output);
