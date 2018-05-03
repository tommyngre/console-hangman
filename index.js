let dictionary = [
  "Gwen Le Butte",
  "Nosewolf",
  "Brampersandon",
  "Tojee",
  "The Baoding"
];

let inquirer = require('inquirer');

let Letter = require('./Letter.js');
let Word = require('./Word.js');


let game = {
  solution: '',
  word: {},
  guessesRemaining: '',
  guessBank: [],
  unguessedRemaining: '',
}

function stageAndCleanup() {
  game.solution = dictionary[Math.floor(Math.random() * dictionary.length)];
  game.word = {};
  game.guessesRemaining = 10;
  guessBank = [];
}

function getUnguessedRemaining() {
  let acc = 0;
  console.log(game.word.chars);
  let n = game.word.chars.map(x => x.isGuessed)
    .reduce(function (acc, i) {
      if (!i) {
        acc++;
      }
      return acc;
    })
  console.log(n)
  return n;

}

function handler() {

  if (game.unguessedRemaining > 0 && game.guessesRemaining > 0) {

    var inquirer = require('inquirer');
    inquirer.prompt([
      {
        type: 'text',
        message: `Guess a letter. ${game.guessesRemaining} guesses left.`,
        name: 'letter',
        validate: function (entry) {
          if (entry.length > 1) {
            return false;
          }
          if (entry.match(/[a-zA-Z]/)) {
            return true;
          }
        },
      }
    ]).then(answers => {
      game.guessesRemaining--;
      game.word.handleGuess(answers.letter);
      game.word.toString();

      handler();
    });

  }
}

function start() {

  stageAndCleanup();

  let lettersArray = [];

  let letters = dictionary[Math.floor(Math.random() * dictionary.length)];
  console.log(letters);

  letters = letters.split('')
    .map(x => x.toUpperCase());

  letters.forEach(element => {
    element = element.toUpperCase();
    let char = new Letter(element);
    lettersArray.push(char);
  });

  let word = new Word(lettersArray);

  game.word = word;

  game.unguessedRemaining = getUnguessedRemaining();

  //GAME OBJECT PREPPED >> handler
  handler();
}


start();
