// Word.js: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// An array of new Letter objects representing the letters of the word
// A function that returns a string of the word
/// This should call the function on each letter object 
/// (the first function defined in Letter.js) 
/// that displays the character or an underscore,
/// and concatenates those together.
// A function that takes a character as an argument
/// and calls the guess function on each letter object
/// (the second function defined in Letter.js)

let Letter = require('./Letter.js');

let Word = function (solution) {
  //constructor should receive the array of Letter objs
  ///as opposed to construct it
  this.chars = solution;
  this.toString = function () {
    let str = this.chars.map(letter => { letter.character });
    console.log(str);
  };
  this.handleGuess = function (guess) {
    this.chars.forEach(letter => {
      letter.handleGuess(guess);
    });
  }
}

module.exports = Word;



// let solution = new Word(bimp);

// console.log(solution);