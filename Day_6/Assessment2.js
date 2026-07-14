


let s = "Hello World"

function lengthOfLastWord(s)
{

    let trimming = s.trim();
    let words = trimming.split(" ");
    let lastWord = words[words.length-1];
    return lastWord.length

}
console.log(lengthOfLastWord(s));