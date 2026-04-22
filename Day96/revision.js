/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {

     // first split the string
      s = s.split("");
     
     for(let i=0; i<s.length; i=i+(2*k)){

        // Introducing n for mid calculation
        let n = k;

        // find the middle 
        let mid = Math.floor(k/2);

        // second loop for actually reversing the each k string
        for(let j=0; j<mid; j++){

            let temp = s[j + i];
            s[j + i] = s[n-1-j+i];
            s[n-1-j+i] = temp;
        }
     }

     return s.join("");
    
};