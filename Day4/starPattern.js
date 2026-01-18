function starPattern(){

    for(let i=0;i<4;i++){ 

        // The value of row is re-initalized every time it enters the block of execution
        // Therefore, it is not retaining value; this is how block scope works
        let row =""; 

        for(let j=0;j<4;j++){ 
            row = row + "*"
        }

        // We can inspect to see that the it literally prins (****) on a single line
        console.log(row); 
    }

}

starPattern();
