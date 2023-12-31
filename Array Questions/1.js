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

// On the website solution submitted
var removeDuplicates = function(nums) {
    let i=0
    for(let u=1; u<nums.length; u++){
        if (nums[u]!=nums[i]){
            nums[++i] = nums[u]
            // newarray.push(nums[i])
        }
    }
    return i+1;
};

// Using a for loop but instead of making a newarray to submit for the site I needed to use a return statement
// the let i=0 is similar to making a new array
// The for loop needs to have a let u=1 to check the number ahead similar to how in the first solution I used i+1.
