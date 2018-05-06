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
  //console.log(game.word.chars);
  let n = game.word.chars.map(x => x.isGuessed)
    .reduce(function (acc, i) {
      if (!i) {
        acc++;
      }
      return acc;
    })
  //console.log(n)
  return n;

}

function replayQuestion() {

  inquirer.prompt([
    {
      name: "replay",
      type: "list",
      choices: ["Yup!", "Nope!"],
      message: "Wanna play again?"
    }
  ]).then(answers => {
    if (answers.replay == "Yup!") {
      start();
    } else {
      console.log(` 
! Aw man, thanks for playin! Bye!
        `);
    }
  });
}

function handler() {
  game.word.toString();

  if (game.unguessedRemaining > 0 && game.guessesRemaining > 0) {

    inquirer.prompt([
      {
        type: 'text',
        message: `Guess a letter. ${game.guessesRemaining} guesses left.`,
        name: 'letter',
        validate: function (entry) {
          if (game.guessBank.indexOf(entry) > -1) {
            console.log(` 
! Aw man, you already guessed '${entry.toUpperCase()}'.
            `)
            return false;
          }
          if (entry.length > 1) {
            console.log(` 
! Aw man, you guessed '${entry.toUpperCase()}.' 
! Next time, guess a single letter.
            `)
            return false;
          }
          if (entry.match(/[a-zA-Z]/)) {
            return true;
          } else {
            console.log(` 
! Aw man, you guessed '${entry.toUpperCase()}.' 
! Next time, guess a letter.
            `)
            return false;
          }
        },
      }
    ]).then(answers => {

      game.guessBank.push(answers.letter);

      let isGoodGuess = game.word.handleGuess(answers.letter);
      if (!(isGoodGuess == "yup")) {
        game.guessesRemaining--;
      }

      handler();
    });

  } else {
    if (game.unguessedRemaining == 0) {
      console.log(` 
! You won! You guessed '${game.solution}.' 
       `);
    } else if (game.guessesRemaining == 0) {
      console.log(` 
! Aw man, you lost!
! Anyway, the word was '${game.solution}.' 
       `);
    }
    replayQuestion();
  }
}

function start() {
  console.log(
    `
    
~ Welcome to Console Hangman

~ Your word is :`
  )

  stageAndCleanup();

  let lettersArray = [];

  let letters = dictionary[Math.floor(Math.random() * dictionary.length)];
  //console.log(letters);

  letters = letters.split('')
    .map(x => x.toUpperCase());

  letters.forEach(element => {
    element = element.toUpperCase();
    let char = new Letter(element);
    char.isSpace();
    lettersArray.push(char);
  });

  let word = new Word(lettersArray);

  game.word = word;

  game.unguessedRemaining = getUnguessedRemaining();

  //GAME OBJECT PREPPED >> handler
  handler();
}


start();
