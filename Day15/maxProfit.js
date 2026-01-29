function maxProfit(prices){

    let lowestPrice = prices[0];
    let highestPrice = -Infinity;
    let lowestDay = 0;
    let mProfit = 0

    for(let i=0; i<prices.length; i++){

        if(lowestPrice > prices[i]){
            lowestPrice = prices[i];
            lowestDay = i;
        }
    }

    for(let j=lowestDay; j<prices.length;j++){

        if(prices[j]>highestPrice){
            highestPrice = prices[j];
        }

    }
    if(lowestPrice < highestPrice){

        mProfit = highestPrice - lowestPrice;
    }

    return mProfit
}

const prices = [7,1,5,3,6,4];
const maximumProfit = maxProfit(prices);
console.log(maximumProfit);