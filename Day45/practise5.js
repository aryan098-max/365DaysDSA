var reverseStr = function(s, k) {

    s = s.split("");

    for(let i=0; i<s.length; i=i + (2*k)){

        let n = k;
        let mid = Math.floor(n/2);
        for(let j=0; j<mid; j++){   

            let temp = s[j+i];
            s[j+i] = s[n-1-j+i];
            s[n-1-j+i] = temp;

        }
    }
    
    return s.join("");
};

const s = "abcdef";
const k = 2;
const output = reverseStr(s,k);
console.log(output);