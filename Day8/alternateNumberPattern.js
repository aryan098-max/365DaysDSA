/*
    # Output 
    1 
    1 0
    1 0 1
    1 0 1 0
    1 0 1 0 1
    1 0 1 0 1 0

*/

// 1st Way
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

// 2nd Way
function switchNumberPattern(n){

    for(let i=0;i<n;i++){

        let row = "";
        let toggle = 1;

        for(let j=0; j<i+1; j++){

            row = row + toggle;

            if(toggle === 1){
                // switch the value of toggle
                toggle = 0;
            } else {
                // switch again
                toggle = 1;
            }
        }

        console.log(row);
    }


}

let n = 6;
alternateNumberPattern(n);
switchNumberPattern(n);
