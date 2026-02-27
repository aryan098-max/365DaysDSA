function numJewelsInStones(jewels, stones) {
    

    const jSet = new Set();
    let count = 0;

    // loop for copying the values inside the jSet
    for(let j=0; j<jewels.length; j++){
        jSet.add(jewels[j]);
    }

    for(let i=0; i<stones.length; i++){

        if(jSet.has(stones[i])){
            count++;
        }
    }

    return count;
};

const jewels = "aA";
const stones = "aAAbbbbbb";
const output = numJewelsInStones(jewels, stones);
console.log(output);