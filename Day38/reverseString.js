function reverseStr(s, k){

    s = s.split("");
    console.log(s);
    
    for(let x=0; x<s.length; x = x+(2*k)){

        let mid = Math.floor(k/2);
        for(let i=0; i<=mid; i++){

            let temp = s[i];
            s[i] = s[mid];
            s[mid] = temp;
        }
    }

    return s.join("");
}

const s = "abcd";
const k =2;
const output = reverseStr(s,k);
console.log(output);