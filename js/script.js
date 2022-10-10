let computerSelection, playerSelection;
let playerScore = 0; 
let computerScore = 0;
game();

function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);
    if (num < 33) {
        computerSelection = 'rock';
    } else if (num < 66) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
    }

function getPlayerChoice () {
    playerSelection = (prompt('Make your selection: Rock, Paper, or Scissors?')).toLowerCase();
    while (["rock", "paper", "scissors"].indexOf(playerSelection) === -1) {
        playerSelection = (prompt('Make your selection: Rock, Paper, or Scissors?')).toLowerCase();
    }
    }

function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        console.log("Tie");
        } else if (computerSelection === "rock") {
            if (playerSelection === "paper") {
            playerScore++;
            console.log("Player point");
        } else {
            computerScore++;
            console.log("Computer point");
        }
        } else if (computerSelection === "paper") {
            if (playerSelection === "rock") {
                computerScore++;
                console.log("Computer point");
            } else {
                playerScore++;
                console.log("Player point");
            }
        } else if (computerSelection === "scissors") {
            if (playerSelection === "rock") {
                playerScore++;
                console.log("Player point");
            } else {
                computerScore++;
                console.log("Computer point");
            }
        }
    }

function game() {
    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        getPlayerChoice();
        playRound(computerSelection, playerSelection);
    }
    if (playerScore === computerScore) {
        console.log("It's a tie game!");
    } else if (playerScore > computerScore) {
        console.log("Player wins!");
    } else {
        console.log("Computer wins!")
    }
} 