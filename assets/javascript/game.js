

var chosenWord = [];
var currentOutput = "";
var userGuesses = [];
var availableWords = ["cellar", "adventurer", "artisan", "bandit", "bureaucrat", "chancellor", "chapel", "council room", "feast", "festival", "gardens", "harbinger", "laboratory", "library", "market", "merchant", "militia", "mine", "moat", "moneylender", "poacher", "remodel", "sentry", "smithy", "spy", "thief", "throne room", "vassal", "village", "witch", "woodcutter", "workshop"];
var guessesLeft = 5;
var visableGuesses = document.getElementById("guessesLeft");
var userWins =  document.getElementById("userWins");
var userLosses = document.getElementById("userLosses");
var wordToGuess = document.getElementById("wordToGuess");
var lettersGuessed = document.getElementById("lettersGuessed");
var wins=0;
var losses=0;
var lettersLeft=1;
var tempWord = availableWords[Math.floor(Math.random() * availableWords.length)];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(tempWord);

function updateChosen(){
	chosenWord = [];
	for(var i = 0; i < tempWord.length; i++){
		chosenWord.push(tempWord.charAt(i));
		// console.log(chosenWord);
	}
}
updateChosen();

function startUnknown(){
	// console.log("here");
	for (var a = 0; a < chosenWord.length; a++){
		currentOutput += "_ ";
	}
	wordToGuess.textContent = currentOutput;
}

function updateOutput(){
	currentOutput = "";
	lettersLeft = 0;
	for(var i = 0; i < chosenWord.length; i++){
		if(userGuesses.indexOf(chosenWord[i]) > -1){
			currentOutput += chosenWord[i];
		}
		else{
			currentOutput += "_ ";
			lettersLeft++;
		}
	}
	wordToGuess.textContent = currentOutput;
}

function updateGuessesLeft(){
	visableGuesses.textContent = guessesLeft;
}

function resetGame(){
	tempWord = availableWords[Math.floor(Math.random() * availableWords.length)];
	updateChosen();
	guessesLeft = 5;
	updateGuessesLeft();
	userGuesses = [];
	startUnknown();
}

startUnknown();
// console.log(currentOutput);

document.onkeyup = function(event){

	var userGuess = event.key;

	if(letters.indexOf(userGuess) > -1){
		// console.log(userGuesses);
		// console.log(userGuess);
		// console.log(userGuesses.indexOf(userGuess));
		if(userGuesses.indexOf(userGuess) === -1){

			userGuesses.push(userGuess);
			if(chosenWord.indexOf(userGuess) > -1){
				console.log("guess correct");
				updateOutput();
			}
			else{
				guessesLeft--;
				updateGuessesLeft(guessesLeft);
			}
		}
		else{
			alert("letter already guessed");
		}
	}
	else{
		alert("invalid input");
	}

	if(lettersLeft == 0){
		wins++;
		// console.log(wins);
		userWins.textContent = toString(wins);
		resetGame();
	}else if(guessesLeft == 0){
		losess++;
		userLosses.textContent = losses;
		resetGame();
	}
}






