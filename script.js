// global declarations
let log = console.log; //shortening console.log

// function to determine computer's selection of rock, paper or scissors
function getComputerChoice() {
    const rpsArray = ["rock", "paper", "scissors"];

    // generate random number
    let randomNum = Math.floor(Math.random() * 3);
    return rpsArray[randomNum];
} //end function getComputerChoice()

// function to determine human's selection of rock, paper or scissors
function getHumanChoice() {
    return prompt("Enter selection of Rock, Paper or Scissors");
} //end function getHumanChoice()

function playGame() {
    // declaration of score keeping variables
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        log(`Computer has selected: ${computerChoice}`);

        playRound(humanChoice, computerChoice); //calls playRound() for a round to be played

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
        } //end function playRound()
            log(`Player score: ${humanScore}`);
            log(`Computer score: ${computerScore}`);
            log(`New round starting!`);
            log(`--------------------------------`);
    } // end for loop
} //end function playGame()

playGame(); //function call to start game