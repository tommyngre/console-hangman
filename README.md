# console-hangman
This node application uses [inquirer](https://www.npmjs.com/package/inquirer) to guide users through a classic game of hangman.

## data architecture

* A solution is selected from a globabl array of hangman solutions
* A Letter object is created for each letter in the solution and added to an array of Letter objects
* The array of letters is passe to a constructor for a Word object
* In addition, a game object contains these properties which facilitate gameplay
```
let game = {
  solution: '',
  word: {},
  guessesRemaining: '',
  guessBank: [],
  unguessedRemaining: '',
}
```

## data workflow

We print out the solution at the beginning of the game, and after each guess. The entails calling a toString property of the Word object (which corresponds to the word property of the game object), which in turn calls the toString property of each Letter object
* Each Letter object has an isGuessed property. Until the isGuessed property is set to true, the toString property prints a "\_"
* After isGuessed is set to true, the character which corresponds to the letter is printed
* Note: space characters always print as spaces

For each guess, we do some checks and provide unique feedback for each check which might fail
* If the player doesn't guess an non-alpha, then the console says, "Next time, guess a letter"
* If the player doesn't guess a single letter, then the console says, "Next time, guess a single letter"
* If a letter has already been guessed, then the console says, "Aw man, you already guessed '<the letter>'"
* And of course, in the guess is not in the solution, then the console says, "Nope, no '<the letter>' in the solution."

If a guess passes every check, then ... 

![alt text](https://github.com/tommyngre/console-hangman/blob/master/readme%20assets/win-500x300.gif "Win scenario")

![alt text](https://github.com/tommyngre/console-hangman/blob/master/readme%20assets/loss-500x300.gif "Loss scenario and err handling")
