
let s = " fly me to the moon ";
function lengthOfLastWord(s) 
{
    // Step 1: Trim the string
    let trimmedString = s.trim();

    // Step 2: Split the string into words
    let words = trimmedString.split(" ");

    // Step 3: Identify the last word
    let lastWord = words[words.length - 1];

    // Step 4 & 5: Calculate and return the length of the last word
    return lastWord.length;
}


console.log(lengthOfLastWord(s)); // Output: 4
