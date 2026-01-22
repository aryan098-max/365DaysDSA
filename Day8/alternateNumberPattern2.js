/**
    Output
    1 
    0 1
    0 1 0
    1 0 1 0
    1 0 1 0 1

 */

function alternateNumberPattern(){

    let toggle = 1;

    for(let i=0; i<n; i++){

        let row = "";

        for(let j=0; j<i+1; j++){

            row = row + toggle;

            if(toggle === 1){
                // switch to zero
                toggle = 0;
            } else{
                // switch to one
                toggle = 1;
            }
        }

        console.log(row);
    }

}

let n = 5;
alternateNumberPattern(n);