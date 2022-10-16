let computerSelection, playerSelection;
let playerScore = 0; 
let computerScore = 0;
let whosePoint = '';
const scoreBoard = document.querySelector('#scoreBoard');
const playerBoard = document.querySelector('.playerBoard');
const computerBoard = document.querySelector('.computerBoard');
const results = document.querySelector('#results');
const newP = document.createElement('p');
const newPoint = document.createElement('p');
const newBtn = document.createElement('button');
newBtn.textContent = "New Game";
let newGame = true;

if (newGame) {
    let btnRock = document.getElementById('rock');
    let btnPaper = document.getElementById('paper');
    let btnScissors = document.getElementById('scissors');
    btnRock.addEventListener('click', function() { playRound('rock'); });
    btnPaper.addEventListener('click', function() { playRound('paper'); });
    btnScissors.addEventListener('click', function() { playRound('scissors'); });
    playerScore, computerScore = 0;
    newGame = false;
    // results.newBtn.remove()
};


function endGame() {

        btnRock.removeEventListener('click', function() { playRound()});
        btnPaper.removeEventListener('click', playRound());
        btnScissors.removeEventListener('click', playRound());
        results.append(newBtn);
}

// game();

// const btns = document.querySelectorAll('.move');
// btns.forEach(move => move.addEventListener('click'))




// document.getElementById('rock').addEventListener('click', playRound(console.log("rock")));






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

function playRound(playerSelection) {
    // getPlayerChoice();
    getComputerChoice();
    // console.log(computerSelection);
    if (computerSelection === playerSelection) {
        // console.log("Tie");
        } else if (computerSelection === "rock") {
            if (playerSelection === "paper") {
            playerScore++;
            whosePoint = "Player point";
        } else {
            computerScore++;
            whosePoint = "Computer point";
        }
        } else if (computerSelection === "paper") {
            if (playerSelection === "rock") {
                computerScore++;
                whosePoint = "Computer point";
            } else {
                playerScore++;
                whosePoint = "Player point";
            }
        } else if (computerSelection === "scissors") {
            if (playerSelection === "rock") {
                playerScore++;
                whosePoint = "Player point";
            } else {
                computerScore++;
                whosePoint = "Computer point";
            }
        }
        if (whosePoint === '') {
            whosePoint = 'Tie';
        }
        playerBoard.textContent = "Player score: " + playerScore;
        computerBoard.textContent = "Computer score: " + computerScore;
        results.appendChild(newP);
        results.appendChild(newPoint);
        newP.textContent = "You threw " + playerSelection + " & computer threw " + computerSelection;
        newPoint.textContent = whosePoint;
        whosePoint = '';
        if (playerScore > 4 || computerScore > 4) {
            if (playerScore > computerScore) {
                winner = "Player";
            } else {
                winner = "Computer";
            }
            newGame = true;
            newP.textContent = "Game over!! " + winner + " wins!!" 
            endGame();


            
            return;
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

