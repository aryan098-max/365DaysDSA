 function sumNumber(n){

    // basecase
    if(n === 0){
        return 0;
    }

    return n + sumNumber(n-1);

 }

 let n = 5;
 const output = sumNumber(n);
 console.log(output);