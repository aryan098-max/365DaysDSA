/**
 
 Expcepted Output
 * * * *
 * * * *
 * * * *
 * * * * 
 
 */

function starPattern(n){

    for(let i=0;i<n;i++){ 

        // The value of row is re-initalized every time it enters the block of execution
        // Therefore, it is not retaining value; this is how block scope works
        let row =""; 

        for(let j=0;j<n;j++){ 
            row = row + "*"
        }

        // We can inspect to see that the it literally prins (****) on a single line
        console.log(row); 
    }

}

let n = 4
starPattern(n);
