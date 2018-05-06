let index = require('./index.js');
let Letter = require('./Letter.js');

let Word = function (solution) {
  //constructor should receive the array of Letter objs
  ///as opposed to construct it
  this.chars = solution;
  this.toString = function () {
    let str = this.chars.map(letter => letter.toString())
    .join('');
    console.log(
`  
   ${str}
`);
  };
  this.handleGuess = function (guess) {
    let tally = 0;
    this.chars.forEach(letter => {
      if (letter.handleGuess(guess) == "yup") {
        tally++;
      }
    });
    if (tally > 0 ) {
      return "yup";
    } else {
      return "nope";
    }
  }
}

module.exports = Word;



// let solution = new Word(bimp);

// console.log(solution);