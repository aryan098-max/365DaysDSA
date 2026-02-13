function maxProfit(prices){

    let lowestPrice = prices[0];
    let maximumProfit = 0;

    for(let i=0; i<prices.length; i++){

        if(prices[i]-lowestPrice > maximumProfit){
            maximumProfit = prices[i] - lowestPrice;
        }

        if(prices[i]<lowestPrice){
            lowestPrice = prices[i];
        }

    }

    return maximumProfit

}

const prices = [7,5,1,3,6,4];
const maximumProfit = maxProfit(prices);
console.log(maximumProfit);

