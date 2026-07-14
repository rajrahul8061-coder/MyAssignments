let str1 = "listen";
let str2 = "silent";

let sortstr1 = str1.split("").sort().join("");
let sortstr2 = str2.split("").sort().join("");

let result = sortstr1 === sortstr2;

console.log(result);
console.log(sortstr1); 
console.log(sortstr2);

let str3 = "hello";
let str4 = "world";

let sortstr3 = str3.split("").sort().join("");
let sortstr4 = str4.split("").sort().join("");

let result1 = sortstr3 === sortstr4;

console.log(result1);
console.log(sortstr3); 
console.log(sortstr4);