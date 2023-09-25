//   Reverse String
//Input: s = ["h","e","l","l","o"]
s = ["h","e","l","l","o"]
var reverseString = function(s) {
    let newstr = s.toString()
    
    console.log(newstr.split('').reverse().join(''))
    return newstr.split('').reverse().join('');

};

k = reverseString(s)

// On site, I used 
s.reverse()
// Because you weren't allowed to return the new string instead.