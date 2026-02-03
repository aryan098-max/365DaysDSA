function maxProfit(prices){

     let lowestPrice = prices[0];
    let highestPrice = prices[1];
    let maximumProfit = 0;
    let maxValueCheck = 0;

    for(let i=1; i<prices.length; i++){

        maxValueCheck = prices[i] - lowestPrice;

        if(maxValueCheck > maximumProfit){
            maximumProfit = maxValueCheck
        }

        if(prices[i]<lowestPrice){
            lowestPrice = prices[i];
        }
    }

    return maximumProfit;
}

const prices = [7,1,5,4,6,3];
const output = maxProfit(prices);
console.log(output);