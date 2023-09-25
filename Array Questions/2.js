//  Best Time to Buy and Sell Stock II

// First part of the solution is through the array you need to find the lowest integer.
// For example Input: prices = [7,1,5,3,6,4] in the question the lowest possible price is 1 on the 2nd day.
// Input: prices = [1,2,3,4,5] And this would be 1 on the first day.

prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
    // This is to iterate through each section
    for (let i=0; i<prices.length; i++){
        var profit;
        if (prices[i]>= prices[i+1]){
            // This is to check if the next day is too cheaper than the current day
            continue
        }
        else{
        }
    }
    console.log(prices)
};

// This is to run the file
k= maxProfit(prices)