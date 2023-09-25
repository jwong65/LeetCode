// Remove Duplicates from Sorted Array

// First the integer array is nums and then we need a new array that will hold the correct sorted array
let nums =  [1,1,2]
var removeDuplicates = function(nums) {
    newarray = new Array
    for (let i=0; i<nums.length; i++){
        // I use this if statement to check if the next number in the array is the same, if it is not then I add it to the new array
        if(nums[i]!=nums[i+1]){
            newarray.push(nums[i])
        }
    }
    console.log(nums)
    console.log(newarray)
};

// This is to run the file
k = removeDuplicates(nums);