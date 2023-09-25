//   Reverse String
//Input: s = ["h","e","l","l","o"]
s = ["h","e","l","l","o"]
var reverseString = function(s) {
    let newstr = s.toString()
    
    console.log(newstr.split('').reverse().join(''))
    return newstr.split('').reverse().join('');

};

k = reverseString(s)