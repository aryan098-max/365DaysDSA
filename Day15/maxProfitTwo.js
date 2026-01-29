function maxProfit(prices){

    let maximumProfit = 0;
    let lowestPrice = prices[0];

    for(let i=1; i<prices.length;i++){

        if(prices[i] - lowestPrice > maximumProfit){
            maximumProfit = prices[i] - lowestPrice;

        }

        if(prices[i]<lowestPrice){

            lowestPrice = prices[i];
        }

    }

    return maximumProfit;
}

const prices = [7,1,5,3,6,4];
const mProfit = maxProfit(prices);
console.log(mProfit);