/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let mProfit = 0;
    let buy = prices[0];

    for(let i=1; i<prices.length; i++){

        if(prices[i] - buy > mProfit){
            mProfit = prices[i] - buy;
        }
        else if(buy > prices[i]){
            buy = prices[i];
        }
    }
    return mProfit;
};