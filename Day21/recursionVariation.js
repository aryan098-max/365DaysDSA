function recursionVariation(n){

    if (n === 0) return;

    recursionVariation(n-1);
    console.log(n);
}

let n = 5;
recursionVariation(n);