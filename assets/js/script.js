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
let winSound = new Audio('assets/sounds/win.mp3');
let loseSound = new Audio('assets/sounds/lose.mp3');
let tieSound = new Audio('assets/sounds/tie.mp3');
let selectSound = new Audio('assets/sounds/select.mp3');

function play(playerChoice) {

    // Plays the button select sound
    selectSound.play();

    //Generates computer's choice
    let computerChoice = choices[Math.floor(Math.random() * 4)];
    let result = '';
    
    // Defining the rules and comparing the player's choice to the computer's choice, as well as determining game result
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

    // Updating the elements with choices and results
    playerChose.textContent = 'Player chose: ' + playerChoice;
    computerChose.textContent = 'Computer chose: ' + computerChoice;
    resultDisplay.textContent = result;

    // Resets the result classes and adds animations
    resultDisplay.classList.remove('greenText', 'redText', 'brownText', 'animate');
    void resultDisplay.offsetWidth; // Trigger reflow for animation restart
    resultDisplay.classList.add('animate');

    // Updates the scoreboard
    switch (result) {
        case 'YOU WIN!':
            resultDisplay.classList.add('greenText');
            pScore++;
            playerScore.textContent = pScore;
            winSound.play(); // Plays win sound
            break;
        case 'YOU LOSE!':
            resultDisplay.classList.add('redText');
            cScore++;
            computerScore.textContent = cScore;
            loseSound.play(); // Plays lose sound
            break;
        case "IT'S A TIE!":
            resultDisplay.classList.add('brownText');
            dScore++;
            drawScore.textContent = dScore;
            tieSound.play(); // Plays tie sound
            break;
    }

}