// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:


// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

let Letter = function (char) {
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
        //console.log(`Nice! ${guess} is in there :)`);
      } else {
        //console.log(`You already guessed ${guess} :\\`);
      }
    } else {
      //console.log(`Nope. No ${guess} :(`);
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