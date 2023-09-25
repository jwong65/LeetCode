//  Best Time to Buy and Sell Stock II

// First part of the solution is through the array you need to find the lowest integer.
// For example Input: prices = [7,1,5,3,6,4] in the question the lowest possible price is 1 on the 2nd day.
// Input: prices = [1,2,3,4,5] And this would be 1 on the first day.

prices = [7,1,5,3,6,4]

var maxProfit = function(prices) {
    // This is to iterate through each section
    var profit = 0
    // For the loop it starts at 1 because the first number cannot go backwards and check the previous week
    for (let i=1; i<prices.length; i++){
       
        if (prices[i]>= prices[i-1]){
            // This is to check if the next day is too cheaper than the current day
            // This is a continuing running count of the profit as you sell from one day to the next
                profit+= (prices[i]-prices[i-1])
        }
    }
    console.log(profit)
    return profit
};

// This is to run the file
k= maxProfit(prices)