// Create an array of musical groups or artists
const bands = ["fleatwood mac", "the beatles", "the lumineers", "ed sheeran", "james taylor", "prince", "alabama shakes", "arctic monkeys", "the head and the heart", "kendrick lamar", "chance the rapper", "green day", "motion city soundtrack","my chemical romance", "of monsters and men", "panic at the disco", "taylor swift", "twenty one pilots", "the weeknd", "michael jackson", "madonna", "led zeppelin", "pink floyd", "rihanna", "queen", "eminem", "whitney houston", "kanye west", "adele", "journey", "usher", "the black eyed peas"]

// Variables
var underScore = [];
var rightGuess = ["Right: "];
var wrongGuess = ["Wrong: "];
var guessesRemaining = 7;

// Choose words randomly
var randomResponse = bands[Math.floor(Math.random() * bands.length)];

console.log(randomResponse);

// DOM Manipulation
var underscoreDom = document.getElementsByClassName("underscores");
var rightGuessDom = document.getElementsByClassName("rightGuess");
var wrongGuessDom = document.getElementsByClassName("wrongGuesses");
var guessesRemainingDom = document.getElementsByClassName("remainingGuesses");

// Create underscores based on words chosen at random
var generateUnderscores = () => {
    for (var i = 0; i < randomResponse.length; i++) {
        underScore.push("_");
    } 
    return underScore;
}

document.addEventListener("keypress", (event) => {
    var letter = String.fromCharCode(event.keyCode);
    if (randomResponse.indexOf(letter) > -1) {
        // Adding right guesses to right guess array
        rightGuess.push(letter);
        // Fill letters guessed into underscore spots if they are correct and push to right guess class
        underScore[randomResponse.indexOf(letter)] = letter;
        underscoreDom[0].textContent = underScore.join(" ");
        rightGuessDom[0].textContent = rightGuess;
        
        console.log(underScore);

         // Alert if user guesses right answer
        if (underScore.join(" ") == randomResponse) {
        alert("You Win!")

    }
        // Push wrong guesses and guesses remaining into wrong guess and guesses remaining class
    } else { 
        if (wrongGuess.indexOf(letter) === -1) {
            guessesRemaining--;
            wrongGuess.push(letter);
            wrongGuessDom[0].textContent = wrongGuess;
            guessesRemainingDom[0].textContent = guessesRemaining;
        }

        console.log(guessesRemaining);
    }
    
});

underscoreDom[0].textContent = generateUnderscores().join(" ");

