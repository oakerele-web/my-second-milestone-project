    // Game Variables
    var mysteryNumber = Math.floor(Math.random() * 100);
    console.log(mysteryNumber);
    var playersGuess = 0;
    var guessesRemaining = 10;
    var guessesMade = 0;
    var gameState = "";
    var gameWon = false;

    // The input and output field
    var input = document.querySelector("#input");
    var output = document.querySelector("#output");

    // The Button
    var button = document.querySelector("button");    
    button.addEventListener("click", clickHandler, false);

    // Listen for Enter key presses
    window.addEventListener("keydown", keydownHandler, false);

    function keydownHandler(event){
        if(event.keyCode === 13){
            validateInput();
        }
    }

    // Ensuring only numbers are entered
    function clickHandler(){
        validateInput();
    }

    function validateInput(){
        playersGuess = parseInt(input.value);
        if(isNaN(playersGuess)){
            output.innerHTML = "Please enter a number.";
        }else{
            playGame();
        }
    }

    function playGame(){
        guessesRemaining --;
        guessesMade ++;
        gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;

        if(playersGuess > mysteryNumber){
            output.innerHTML = "That's too high." + gameState;

        // Check for the end of the game
        if (guessesRemaining < 1){
            endGame();
        }
        }
        else if(playersGuess < mysteryNumber){
            output.innerHTML = "That's too low." + gameState;

        // Check for the end of the game
        if (guessesRemaining < 1){
            endGame();
        }
        }
        else if(playersGuess === mysteryNumber){
            gameWon = true;
            endGame();
        }
    }

    // Add endGame function

    function endGame(){
        if (gameWon){
            output.innerHTML = "Yes, it's " + mysteryNumber + "!" + "<br>"
            + "It took you " + guessesMade + " guesses.";
        }
        else {
            output.innerHTML = "No more guesses remaining!" + "<br>"
            + "The number was: " + mysteryNumber + ".";
        }
        // Add disable the button to ensure game cannot play anymore after endgame
        button.removeEventListener("click", clickHandler, false);
        button.disabled = true;

        // Disable the enter key
        window.removeEventListener("keydown", keydownHandler, false);

        // Disable the input field
        input.disabled = true;
    }
