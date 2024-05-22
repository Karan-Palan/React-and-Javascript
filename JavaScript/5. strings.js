const name  = "Karan" 
const repoCount = 50

console.log(`My name is ${name} and repo count is ${repoCount}`);

const gameName = new String('karan-palan.com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // the number at the last does not get included
console.log(newString);

const anotherString = gameName.slice(-8, 4) // can also give negative values
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes all the start and end spaces

const url = "https://github.com/karan%palan"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) // to check if the string inclued

console.log(gameName.split('-'));