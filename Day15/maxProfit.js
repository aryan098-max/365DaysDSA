// This solution fails for prices = [2,4,1] test case because in this question 
// we are supposed to find the best combination not difference between the highest & lowest

function maxProfit(prices){

    let lowestPrice = prices[0];
    let highestPrice = -Infinity;
    let lowestDay = 0;
    let mProfit = 0

    for(let i=1; i<prices.length; i++){

        if(prices[i] < lowestPrice){
            lowestPrice = prices[i];
            lowestDay = i;
        }
    }

    for(let j=lowestDay; j<prices.length;j++){

        if(prices[j]>highestPrice){
            highestPrice = prices[j];
        }

    }

    mProfit = highestPrice - lowestPrice;

   if(mProfit > 0){
        return mProfit;
    } 

    return 0;
}

const prices = [7,1,5,3,6,4];
const maximumProfit = maxProfit(prices);
console.log(maximumProfit);