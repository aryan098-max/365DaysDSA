function numsJewelsInStones(jewels, stones){

    let jSet = new Set();

    // using a loop to add all the elements inside jSet
    for(let i=0; i<jewels.length; i++){
        jSet.add(jewels[i])
    }
      
    // using another loop for checking set.has()

    let count = 0;
    for(let j=0; j<stones.length; j++){

        if(jSet.has(stones[j])){
            count ++;
        }
    }

    return count;
}

const jewels = "aA";
const stones = "aAAbbbb";
const output = numsJewelsInStones(jewels, stones);
console.log(output);