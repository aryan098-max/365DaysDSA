function reverseStr(s,k){

  // convert the string into 
  s = s.split("");
  console.log(s);

  for(let i=0; i<s.length; i=i+(2*k)){

    let n = k;
    let mid = Math.floor(n/2);
    for(let j=0; j<mid; j++){

        let temp = s[i+j];
        s[i+j] = s[i+n-1-j];
        s[i+n-1-j] = temp;
     }
  }
  return s.join("");
}

const s = "abcdef";
const k = 2;
const output = reverseStr(s, k);
console.log(output);