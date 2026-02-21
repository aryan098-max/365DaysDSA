function numJewelsInStones(jewels, stones){

    let jSet = new Set();
    let count = 0;

    // first loop for creating a set

    for(let i=0; i<jewels.length; i++){

        jSet.add(jewels[i]);
    }

    // second loop for increasing the count

    for(let j=0; j<stones.length; j++){
        if(jSet.has(stones[j])){
            ++count;
        }
    }

    return count;
}

const jewels = "aA";
const stones = "aAAbbbbb";
const output =  numJewelsInStones(jewels, stones);
console.log(output);

