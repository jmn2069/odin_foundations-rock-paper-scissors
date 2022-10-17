let computerSelection, playerSelection;
let string = "Rock, Paper, Scissors"
let test = document.getElementById('test');
let playerScore = 0; 
let computerScore = 0;
let whosePoint = '';
let computerChoices = ['rock', 'paper', 'scissors'];
const scoreBoard = document.querySelector('#scoreBoard');
const playerBoard = document.querySelector('.playerBoard');
const computerBoard = document.querySelector('.computerBoard');
const results = document.querySelector('#results');
const newP = document.getElementById('pointP');
const newPoint = document.getElementById('resultP');
let startBtn = document.getElementById('start');
const moves = document.querySelectorAll('.move');

startBtn.addEventListener('click', startGame);
let btnRock = document.getElementById('rock');
let btnPaper = document.getElementById('paper');
let btnScissors = document.getElementById('scissors');
btnRock.style.display = 'none';
btnPaper.style.display = 'none';
btnScissors.style.display = 'none';
btnRock.addEventListener('click', function() { playRound('rock'); });
btnPaper.addEventListener('click', function() { playRound('paper'); });
btnScissors.addEventListener('click', function() { playRound('scissors'); });

function startGame() {
    whosePoint = '';
    moves.forEach(move => move.style.display = 'block');
    moves.forEach(move => move.classList.add('fadein'));
    startBtn.style.display = 'none';
    playerScore = 0;
    computerScore = 0;
    playerBoard.textContent = "Player score: " + playerScore;
    computerBoard.textContent = "Computer score: " + computerScore;
    newP.textContent = '';
    newPoint.textContent = whosePoint;
}


function endGame() {
    startBtn.style.display = 'block';
    moves.forEach(move => move.classList.remove('slidein'));
    moves.forEach(move => move.style.display = 'none');
    // moves.forEach(move => move.parentNode.removeChild(move));
    startBtn.classList.remove('hidden');
}

function getComputerChoice() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

let timePerLetter = 200;
let newLineCharacter = '|';

function printOut(string) {
    let i = 0;
    let printNextLetter = function() {
        if (i < string.length) {
            var CHAR = string[i];
            switch(CHAR) {
                case newLineCharacter:
                    test.append('<br>');
                    break;
                default:
                    test.append(CHAR);
                    break;
            }
            i++;
            setTimeout(printNextLetter, timePerLetter);
        }
    }
    printNextLetter();
}
printOut(string);

function playRound(playerSelection) {
    computerSelection = getComputerChoice();
        if (computerSelection != playerSelection) {
        if (computerSelection === "rock") {
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
        } else {
            whosePoint = 'Tie';
        }
        playerBoard.textContent = "Player score: " + playerScore;
        computerBoard.textContent = "Computer score: " + computerScore;
        newP.textContent = "You threw " + playerSelection + " & computer threw " + computerSelection;
        newPoint.textContent = whosePoint;
        if (playerScore > 4 || computerScore > 4) {
            if (playerScore > computerScore) {
                winner = "Player";
            } else {
                winner = "Computer";
            }
            newP.textContent = "Game over!! " + winner + " wins!!" 
            endGame();
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

