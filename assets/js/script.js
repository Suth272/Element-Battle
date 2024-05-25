let choices = ['fire', 'air', 'earth', 'water'];
let playerChose = document.getElementById('playerChose');
let computerChose = document.getElementById('computerChose');
let resultDisplay = document.getElementById('resultDisplay');

function play(playerChoice) {

    let computerChoice = choices[Math.floor(Math.random() * 4)]
    console.log(computerChoice)

}