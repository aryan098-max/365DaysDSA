function numberPattern(n){
    
    for(let i=1;i<=n;i++){
        let row = "";

        for(let j=1; j<=i; j++){

            row = row + (i);
        }
        console.log(row);
    }
}

const n = 5;
numberPattern(n)