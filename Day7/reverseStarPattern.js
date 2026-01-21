/**
 Output
            *
          * *        
        * * * 
      * * * *
    * * * * *      
 */

 function reverseStarPattern(n){

    for(let i=0; i<n; i++){
        let row = "";
        for(let j=0; j<n-(i+1); j++){

            row = row + " ";
        }

        for(let k=0; k<i+1; k++){
            row = row + "*"
        }

        console.log(row);
    }   

 }

 let n = 5;
 reverseStarPattern(n);