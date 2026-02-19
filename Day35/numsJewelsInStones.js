function numsJewelsInStones(jewels, stones){

        let count = 0;

        /**
         for(let i=0; i<stones.length; i++){

            if(jewels.includes(stones[i])){

                count ++
            }
         
         } 

         for(let i=0; i<stones.length; i++){

            // we can break as soon as matching stone is found
            for(let j=0; j<jewels.length; j++){

                if(stones[i] === jewels[j]){
                    count ++
                    break;
                }
            }
         }
          
         */

        for(let i=0; i<jewels.length; i++){
            
            for(let j=0; j<stones.length; j++){

                if(jewels[i] === stones[j]){
                    count ++;
                }
            }
        }

        return count;
}

const jewels = "aA";
const stones = "aAAbbbb";
const output = numsJewelsInStones(jewels, stones);
console.log(output);