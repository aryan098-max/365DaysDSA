function reverseStr(s,k){

  // convert the string into 
  s = s.split("");
  console.log(s);

  // i+(2*k) ? because we want 
  for(let i=0; i<s.length; i=i+(2*k)){

    let n = k;
    let mid = Math.floor(n/2);

    // We need second loop for reversing k string for each 2k string
    for(let j=0; j<mid; j++){

        let temp = s[j+i];
        s[j+i] = s[n-1-j+i];
        s[n-1-j+i] = temp;
     }
  }
  return s.join("");
}

const s = "abcdefgh";
const k = 2;
const output = reverseStr(s, k);
console.log(output);