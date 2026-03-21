var numJewelsInStones = function(jewels, stones) {
    
    let count = 0;
    let jSet = new Set();

    // Adding jewels inside the jSet
    for(let i=0; i<jewels.length; i++){

        jSet.add(jewels[i]);
    }

    for(let i=0; i<stones.length; i++){

        if(jSet.has(stones[i])){
            count++;
        }
    }
    return count;
};

const jewels = "aA";
const stones = "aAAbbbb";
const output = numJewelsInStones(jewels, stones);
console.log(output);