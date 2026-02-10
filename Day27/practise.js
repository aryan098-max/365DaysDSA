 // Two base
 function isPowerOfTwo(n){
    
    if(n === 1 ) return true;

    if(n<1 || n%2 !==0){
        return false;
    }

    return isPowerOfTwo(n/2);

 }

 let n = 24
 const output = isPowerOfTwo(n);
 console.log(output);
  