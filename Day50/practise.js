var largestOddNumber = function(num) {

    // length variable
    let n = num.length-1;

    // Directly run the loop
    while(n>=0){
        
        if(Number(num[n])%2 !== 0){
            return num.substring(0, n+1);
        } 
        n--;
    }

    // Entire digit is even
    return "";
};