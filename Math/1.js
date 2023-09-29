// Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
n =5
var fizzBuzz = function(n) {
    const string1=[]

    for (let i=1; i<=n; i++){
    if((i%3===0) && (i%5===0)){
        string1.push("FizzBuzz")
    }
    else if (i%3===0){
        string1.push("Fizz")
    }
    else if(i%5===0){
        string1.push("Buzz")
    }
    else{
        string1.push(i.toString())
    }
}
    return string1
};