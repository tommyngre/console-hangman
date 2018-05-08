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

We print out the solution at the beginning of the game, and after each guess. The entails calling a `toString` property of the Word object (which is stored as the word property of the game object), which in turn calls the `toString` property of each Letter object
* Each Letter object has an `isGuessed` property. Until the `isGuessed` property is set to true, the `toString` property prints a "\_"
* After `isGuessed` is set to true, the character which corresponds to the letter is printed
* Note: space characters always print as spaces

For each guess, we do some checks and provide unique feedback for each check which might fail
* If the player doesn't guess an non-alpha, then the console says, "Next time, guess a letter"
* If the player doesn't guess a single letter, then the console says, "Next time, guess a single letter"
* If a letter has already been guessed, then the console says, "Aw man, you already guessed '*the letter*'"
* And of course, in the guess is not in the solution, then the console says, "Nope, no '*the letter*' in the solution."

If a guess passes every check, then the handleGuess property of the Word (which is stored as the word property of the game object) is called. It checks whether every Letter object in the Word object corresponds to the player's guess. 
* If it does, then isGuessed is set to true and the letter displays in lieu of "\_"
* If not, the "\_" continues to display until the letter is guessed
* The guessed letter is added to the game object property guessBank

## gameover

The game ends in two cases
* when the player runs out of moves (# moved are defined in the game object)
* when all letters in the word have been guessed

The player only loses a move if they guess a letter which the solution does not contain. If the player's guess is invalid (e.g. multiples letters, or a special character), then the guess doesn't count and they do not lose a move

A function `getUnguessedRemaining()` is called after each guess, which checked the isGuessed property of each Letter in the Word. If isGuessed is true for all letters, then the we congratulate the player on their win.

* This shows a win, with only one bad guess, in which the player opts to play a second game
![alt text](https://github.com/tommyngre/console-hangman/blob/master/readme%20assets/win-500x300.gif "Win scenario")

* This shows a loss, with a variety of bad guesses, in which the player does not opt to play a second game
![alt text](https://github.com/tommyngre/console-hangman/blob/master/readme%20assets/loss-500x300.gif "Loss scenario and err handling")
