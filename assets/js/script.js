//Establishing variables
let choices = ['fire', 'air', 'earth', 'water'];
let playerChose = document.getElementById('playerChose');
let computerChose = document.getElementById('computerChose');
let resultDisplay = document.getElementById('resultDisplay');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let drawScore = document.getElementById('drawScore');

// Setting the scores
let pScore = 0;
let cScore = 0;
let dScore = 0;

//Load sound effects
let winSound = new Audio('assets/sounds/victorymale-version-230553.mp3');
let loseSound = new Audio('assets/sounds/you-lose-game-sound-230514.mp3');
let tieSound = new Audio('assets/sounds/woosh-230554.mp3');
let selectSound = new Audio('assets/sounds/walkman-button-272973.mp3');

function play(playerChoice) {
    // Stop and reset the previous sound before playing the button sound
    selectSound.pause();
    selectSound.currentTime = 0;
    selectSound.play();

    // Wait for the button sound to finish before playing the result sound
    selectSound.onended = function() {
        //Generates computer's choice and sets the result variable to be blank
        let computerChoice = choices[Math.floor(Math.random() * 4)];
        let result = '';

        // Defining the rules and comparing the player's choice to the computer's choice, as well as determining game results
        if (playerChoice === computerChoice) {
            result = "IT'S A TIE!";
        } else {
            switch (playerChoice) {
                case 'fire':
                    if (computerChoice === 'air') {
                        result = 'YOU WIN!';
                    } else if (computerChoice === 'earth') {
                        result = "IT'S A TIE!";
                    } else {
                        result = 'YOU LOSE!';
                    }
                    break;
                case 'air':
                    if (computerChoice === 'earth') {
                        result = 'YOU WIN!';
                    } else if (computerChoice === 'water') {
                        result = "IT'S A TIE!";
                    } else {
                        result = 'YOU LOSE!';
                    }
                    break;
                case 'earth':
                    if (computerChoice === 'water') {
                        result = 'YOU WIN!';
                    } else if (computerChoice === 'fire') {
                        result = "IT'S A TIE!";
                    } else {
                        result = 'YOU LOSE!';
                    }
                    break;
                case 'water':
                    if (computerChoice === 'fire') {
                        result = 'YOU WIN!';
                    } else if (computerChoice === 'air') {
                        result = "IT'S A TIE!";
                    } else {
                        result = 'YOU LOSE!';
                    }
                    break;
            }
        }

        // Update the elements with choices and results
        playerChose.textContent = 'Player chose: ' + playerChoice;
        computerChose.textContent = 'Computer chose: ' + computerChoice;
        resultDisplay.textContent = result;

        // Resets the result classes and adds animations
        resultDisplay.classList.remove('greenText', 'redText', 'brownText', 'animate');
        void resultDisplay.offsetWidth;  // Trigger reflow for animation restart
        resultDisplay.classList.add('animate');

        // Updates the scoreboard, telling the user who won and plays the appropiate sound
        switch (result) {
            case 'YOU WIN!':
                resultDisplay.classList.add('greenText');
                pScore++;
                playerScore.textContent = pScore;
                winSound.play();
                break;
            case 'YOU LOSE!':
                resultDisplay.classList.add('redText');
                cScore++;
                computerScore.textContent = cScore;
                loseSound.play();
                break;
            case "IT'S A TIE!":
                resultDisplay.classList.add('brownText');
                dScore++;
                drawScore.textContent = dScore;
                tieSound.play();
                break;
        }
    }
}
