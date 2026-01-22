/*
    # Output 
    1 
    1 0
    1 0 1
    1 0 1 0
    1 0 1 0 1
    1 0 1 0 1 0

*/

function alternateNumberPattern(n){

    for(let i=0; i<n;i++){

        let row = "";

        for(let j=0;j<i+1;j++){

            if(j%2 !== 0){
                row = row + "0";
            } else {
                row = row + "1"
            }
        }
        console.log(row);
    }


}

let n = 6;
alternateNumberPattern(n);
