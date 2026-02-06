function starPattern(n){

    for(let i=5; i<=n; i--){
        
        let row = "";
        for(let j=1; j<=i; j++){
            row = row + j
        }

        console.log(row);
    }

}

let n = 5;
starPattern(n);