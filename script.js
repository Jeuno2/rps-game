// global declarations
let log = console.log; //shortening console.log
let humanScore = 0;
let computerScore = 0;
let computerChoice = "";
let humanChoice = "";


// function to determine computer's selection of rock, paper or scissors
function getComputerChoice() {
    const rpsArray = ["rock", "paper", "scissors"];
    let computerNum = 0;

    // generate random number
    let randomNum = Math.floor(Math.random() * 3);
    computerChoice = rpsArray[randomNum];

    log(`Computer has chosen ${computerChoice}`);

    return computerChoice;
}

// function to determine human's selection of rock, paper or scissors
function getHumanChoice() {
    humanChoice = prompt("Enter selection of Rock, Paper or Scissors");
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    log(humanChoice);
    if (humanChoice === computerChoice) {
        log("result is a draw!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        log("Player wins!");
        humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        log("Computer wins!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        log("Computer wins!");
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        log("Player wins!");
        humanScoreScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        log("Computer wins!");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        log("Player wins!");
        humanScore++;
    }

}

computerChoice = getComputerChoice();
humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);