let index = require('./index.js');
let word = require('./Word.js');

let Letter = function (char) {
  this.isSpace = function(){
    if (this.character == ' '){
      this.isGuessed = true;
    }
  }
  this.character = char;
  this.isGuessed = false;
  this.toString = function () {
    if (this.isGuessed) {
      return this.character;
    } else {
      return "_";
    }
  };
  this.handleGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guess == this.character) {
      if (this.isGuessed == false) {
        this.isGuessed = true;
        return "yup";
      } else {
        // This should come into play- would represent a duplicate
        return "nope";
      }
    } else {
      return "nope";
    }
  };
}

module.exports = Letter;

//TEST CASES
// var test = new Letter('g');
// console.log(test.toString());
// test.handleGuess('m');
// console.log(test.toString());
// test.handleGuess('g');
// console.log(test.toString());