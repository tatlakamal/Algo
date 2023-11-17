/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const rows = [
       new Set("qwertyuiop"),
       new Set("asdfghjkl"),
       new Set("zxcvbnm")
   ];

   return words.filter(word => {
       const lowerWord = word.toLowerCase();
       const row = rows.find(set => lowerWord.split('').every(char => set.has(char)));
       return row !== undefined;
   });
};