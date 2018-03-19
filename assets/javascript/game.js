// Create an array of musical groups or artists
const bands = ["fleatwood mac", "the beatles", "the lumineers", "ed sheeran", "james taylor", "prince", "alabama shakes", "arctic monkeys", "the head and the heart", "kendrick lamar", "chance the rapper", "green day", "motion city soundtrack","my chemical romance", "of monsters and men", "panic at the disco", "taylor swift", "twenty one pilots", "the weeknd", "michael jackson", "madonna", "led zeppelin", "pink floyd", "rihanna", "queen", "eminem", "whitney houston", "kanye west", "adele", "journey", "usher", "the black eyed peas"]

// Variables
var underScore = [];
var rightGuess = ["Right: "];
var wrongGuess = ["Wrong: "];
var guessesRemaining = 7;
var userGuess;

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

function updateLetters() {
    for (var j = 0; j < randomResponse.length; j++) {
        if (randomResponse[j] === userGuess) 
        underScore[j] = randomResponse[j];
    }
}

document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();
    console.log(userGuess);
    if (randomResponse.indexOf(userGuess) > -1) {
        updateLetters();
        // Adding right guesses to right guess array
        rightGuess.push(userGuess);
        // Fill letters guessed into underscore spots if they are correct and push to right guess class
        // underScore[randomResponse.indexOf(userGuess)] = userGuess;
        underscoreDom.textContent = underScore.join(" ");
        rightGuessDom.textContent = rightGuess;
        
        console.log(underScore);
        console.log(rightGuess);

         // Alert if user guesses right answer
        if (underScore.join(" ") == randomResponse) {
            alert("You Win!")

    }
        // Push wrong guesses and guesses remaining into wrong guess and guesses remaining class
    } else { 
        if (wrongGuess.indexOf(userGuess) === -1) {
            guessesRemaining--;
            wrongGuess.push(userGuess);
            wrongGuessDom.textContent = wrongGuess;
            guessesRemainingDom.
            textContent = guessesRemaining;
        }

        console.log(guessesRemaining);
    }
    
};

underscoreDom.textContent = underScore.join(" ");

