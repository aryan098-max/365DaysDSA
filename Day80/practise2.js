/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {

    let count = 0;
    let jewelSet = new Set();
    let i = 0;
    while(i < jewels.length){

        jewelSet.add(jewels[i]);
        i++;
    }
    
    for(let i=0; i<stones.length; i++){

        if(jewelSet.has(stones[i])){
            count ++;
        }
    }

    return count;
};