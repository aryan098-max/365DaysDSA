// # 121. Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
    
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
};