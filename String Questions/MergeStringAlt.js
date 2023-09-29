/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    word1split = word1.split("")
    word2split = word2.split("")
    let combinedword = ""
    let i =0
   
   while (i<word1.length && i< word2.length){
       combinedword += word1[i]+word2[i]
       i+=1
   }
   if (word1.length> i){
       combinedword+= word1.slice(i)
   }
   if (word2.length> i){
       combinedword +=word2.slice(i)
   }
    return combinedword 
};