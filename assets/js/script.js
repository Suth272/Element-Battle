//Establishing variables
let choices = ['fire', 'air', 'earth', 'water'];
let playerChose = document.getElementById('playerChose');
let computerChose = document.getElementById('computerChose');
let resultDisplay = document.getElementById('resultDisplay');
let playerScore = document.getElementById('playerScore');
let computerScore = document.getElementById('computerScore');
let drawScore = document.getElementById('drawScore');
let pScore = 0;
let cScore = 0;
let dScore = 0;

function play(playerChoice) {
    //Generates computer's choice
    let computerChoice = choices[Math.floor(Math.random() * 4)]
    let result = '';
    //Deciding who wins
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

    playerChose.textContent = 'Player chose: ' + playerChoice;
    computerChose.textContent = 'Computer chose: ' + computerChoice;
    resultDisplay.textContent = result;

    resultDisplay.removeAttribute('class', 'greenText');
    resultDisplay.removeAttribute('class', 'redText');


    switch (result) {
        case 'YOU WIN!':
            resultDisplay.setAttribute('class', 'greenText');
            pScore++;
            playerScore.textContent = pScore;
            break;
        case 'YOU LOSE!':
            resultDisplay.setAttribute('class', 'redText');
            cScore++;
            computerScore.textContent = cScore;
            break;
        case "IT'S A TIE!":
            resultDisplay.setAttribute('class', 'brownText');
            dScore++;
            drawScore.textContent = dScore;
            break;
    }

}