function numberPattern(n){

    for(let i=0; i<n; i++){

        let toggle = 1;
        let row = ""

        for(let j=0; j<=i; j++){

            row = row + toggle;
            
            if(toggle === 1){
                toggle = 0;
            } else {
                toggle = 1;
            }
        }
        console.log(row);
    }
}

let n = 5;
const output = numberPattern(n);