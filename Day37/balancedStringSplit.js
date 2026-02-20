function balancedStringSplit(s){

    let R = 0;
    let L = 0;
    let count = 0;

    for(let i=0; i<s.length; i++){

        if(s[i] === 'R'){
            R++;
        } else{
            L++
        }

        if(R === L){
            ++count;
            R = 0;
            L = 0;
        }
    }

    return count;
}

const s = "RLRLRLRRRLLL"
const output = balancedStringSplit(s);
console.log(output);