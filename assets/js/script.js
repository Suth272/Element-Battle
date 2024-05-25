//Establishing variables
let choices = ['fire', 'air', 'earth', 'water'];
let playerChose = document.getElementById('playerChose');
let computerChose = document.getElementById('computerChose');
let resultDisplay = document.getElementById('resultDisplay');

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
            break;
        case 'YOU LOSE!':
            resultDisplay.setAttribute('class', 'redText');
            break;
    }
}