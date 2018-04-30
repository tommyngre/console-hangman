let dictionary = [
  "Gwen Le Butte",
  "Nosewolf",
  "Brampersandon",
  "Tojee",
  "The Baoding"
];

let Letter = require('./Letter.js');
let Word = require('./Word.js');

// index.js: The file containing the logic for the course of the game
/// Randomly selects a word and uses the Word constructor to store it
/// Prompts the user for each guess and keeps track of the user's remaining guesses

let array = [];

let solution = dictionary[Math.floor(Math.random()*dictionary.length)];

solution = solution.split('')
  .map(x => x.toUpperCase());

solution.forEach(element => {
  element = element.toUpperCase();
  let char = new Letter(element);
  array.push(char);
  console.log(array);
});

console.log(solution);
