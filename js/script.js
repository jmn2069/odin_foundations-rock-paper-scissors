let computerSelection, playerSelection;
let newGame = false;
const string = "Choose your weapon, go forth, and defend humanity. First to five wins...";
const scrollText = document.getElementById('scrollText');
let playerScore = 0; 
let computerScore = 0;
let whosePoint = '';
const computerChoices = ['rock', 'paper', 'scissors'];
const scoreBoard = document.querySelector('#scoreBoard');
const playerBoard = document.querySelector('.playerBoard');
const computerBoard = document.querySelector('.computerBoard');
const results = document.querySelector('#results');
const newP = document.getElementById('pointP');
const newPoint = document.getElementById('resultP');
const startBtn = document.getElementById('start');
const moves = document.querySelectorAll('.move');
const startGroup = document.querySelectorAll('.startGroup');
const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');
const playersGroup = document.querySelectorAll('.playersGroup');
const headerText = document.getElementById('headerText');
btnRock.style.display = 'none';
btnPaper.style.display = 'none';
btnScissors.style.display = 'none';
startBtn.addEventListener('click', intro);
btnRock.addEventListener('click', function() { playRound('rock'); });
btnPaper.addEventListener('click', function() { playRound('paper'); });
btnScissors.addEventListener('click', function() { playRound('scissors'); });

function intro() {
    startGroup.forEach(startGroup => startGroup.classList.add('fadeout'));
    if (!newGame) {
    setTimeout(() => headerText.style.display = 'block', 3000);
    setTimeout(() => headerText.classList.add('fadein'), 500);
    setTimeout(() => playersGroup.forEach(playersGroup => playersGroup.style.display = 'block'), 4000)
    setTimeout(() => playersGroup.forEach(playersGroup => playersGroup.classList.add('fadein')), 500)
    setTimeout(() => printOut(scrollText, string), 4000);
    setTimeout(() => moves.forEach(move => move.style.display = 'block'), 6000);
    setTimeout(() => moves.forEach(move => move.classList.add('fadein')), 500);
    setTimeout(() => startGroup.forEach(startGroup => startGroup.style.display = 'none'), 3000);
    setTimeout(() => startGroup.forEach(startGroup => startGroup.classList.remove('fadeout')), 3000);
} else {
    startBtn.classList.add('fadeout');
    setTimeout(() => startGroup.forEach(startGroup => startGroup.style.display = 'none'), 3000);
    setTimeout(() => startBtn.classList.remove('fadeout'), 3000);
    setTimeout(() => moves.forEach(move => move.style.display = 'block'), 3000);
    setTimeout(() => moves.forEach(move => move.classList.add('fadein')), 500);
    startGame();
}
}

function startGame() {
    whosePoint = '';
    playerScore = 0;
    computerScore = 0;
    playerBoard.textContent = playerScore;
    computerBoard.textContent = computerScore;
    newP.textContent = '';
    newPoint.textContent = whosePoint;
}

function endGame() {
    startBtn.classList.add('fadein');
    startBtn.style.display = 'block';
    moves.forEach(move => move.style.display = 'none');
    newGame = true;
}

function getComputerChoice() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

const timePerLetter = 50;
const newLineCharacter = '|';

function printOut(target, string) {
    let i = 0;
    let printNextLetter = function() {
        if (i < string.length) {
            var CHAR = string[i];
            switch(CHAR) {
                case newLineCharacter:
                    target.append('<br>');
                    break;
                default:
                    target.append(CHAR);
                    break;
            }
            i++;
            setTimeout(printNextLetter, timePerLetter);
        }
    }
    printNextLetter();
}


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
        playerBoard.textContent = playerScore;
        computerBoard.textContent = computerScore;
        newP.textContent = "You threw " + playerSelection + " & computer threw " + computerSelection;
        newPoint.textContent = whosePoint;
        if (playerScore > 4 || computerScore > 4) {
            if (playerScore > computerScore) {
                winner = "Player";
            } else {
                winner = "Computer";
            }
            newP.textContent = "Game over!! " + winner + " wins!!" 
            newGame = true;
            endGame();
        }
    }