function maxProfit(prices){

    let lowestPrice = prices[0];
    let mProfit = 0;

    for(let i=1; i<prices.length; i++){

        if(prices[i]-lowestPrice > mProfit){
            mProfit = prices[i]-lowestPrice;
        }

        if(prices[i]<lowestPrice){
            lowestPrice = prices[i];
        }
    }

    return mProfit;
}

const prices = [7,1,5,3,6,4];
const maximumProfit = maxProfit(prices);
console.log(maximumProfit);