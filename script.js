// global declarations
let log = console.log; //shortening console.log
// declaration of score keeping variables
let humanValue = 0;
let computerValue = 0;
let result = 0;

// function to determine computer's selection of rock, paper or scissors
function getComputerChoice() {
    const rpsArray = ["rock", "paper", "scissors"];

    // generate random number
    let randomNum = Math.floor(Math.random() * 3);
    return rpsArray[randomNum];
} //end function getComputerChoice()

function playRound() {
    const humanChoice = this.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    log(`Player has selected: ${humanChoice}`);
    log(`Computer has selected: ${computerChoice}`);

    // showing player and computer selections on scoreboard
    playerChoice.textContent = humanChoice;
    compChoice.textContent = computerChoice;
    
    if (humanChoice === computerChoice) {
        winner.textContent = `DRAW!`;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        tallyPlayer();
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        tallyComputer();
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        tallyComputer();
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        tallyPlayer();
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        tallyComputer();
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        tallyPlayer();
    }

    if(playerTally.textContent === "5") {
        winner.textContent = ("Player is first to 5 points; they win!");
    }
    
    if(computerTally.textContent === "5") {
        winner.textContent = ("Computer is first to 5 points; they win!");
    }
} //end function playRound()

function tallyPlayer() {
    winner.textContent = ("Player wins!");
    humanValue = playerTally.textContent;
    result = Number(humanValue);
    playerTally.textContent = result + 1;
}

function tallyComputer() {
    winner.textContent = ("Computer wins!");
    computerValue = computerTally.textContent;
    result = Number(computerValue);
    computerTally.textContent = result + 1;
}   

// DOM button references
const rockBtn = document.querySelector("#btn1");
const scissorsBtn = document.querySelector("#btn2");
const paperBtn = document.querySelector("#btn3");
rockBtn.addEventListener('click', playRound);
scissorsBtn.addEventListener('click', playRound);
paperBtn.addEventListener('click', playRound);

// scoreboard DOM references
const playerChoice = document.querySelector('.player-choice');
const compChoice = document.querySelector('.computer-choice');
const winner = document.querySelector('.outcome');
const playerTally = document.querySelector('.player-score');
const computerTally = document.querySelector('.computer-score');