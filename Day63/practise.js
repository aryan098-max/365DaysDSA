var reverseStr = function(s, k) {

    // must split the array for reversing it as strings are immutable
    s = s.split("");
    let j = 0;

    for(let i=0; i<s.length; i=i+(2*k)){

        let n = k;
        let halfLen = Math.floor(k/2);

        for(let j=0; j<halfLen; j++){
            let temp = s[j+i];
            s[i+j] = s[n-1-j+i];
            s[n-1-j+i] = temp;

        }
    }

    return s.join("");

};