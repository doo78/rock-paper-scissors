let humanScore = 0;
let computerScore = 0;
let finish = false;

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return options[Math.floor(Math.random()*3)].toLowerCase();
}

function getHumanChoice(){
    let choice = prompt("Rock, paper or scissors: ").toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = prompt("You can only pick rock, paper or scissors: ")
    }
    return choice;
}

function playRound(humanChoice, computerChoice){

    if (finish === false){
        humanChoice = humanChoice.toLowerCase();

        let humanScoreDisplay = document.querySelector("#humanScore");
        let computerScoreDisplay = document.querySelector("#computerScore");
        let outcome = document.querySelector("#outcome")

        if (humanChoice === "rock" && computerChoice == "scissors"){
            outcome.textContent = "You win!";
            humanScore++;
            humanScoreDisplay.textContent = "Your score: " + humanScore;
        }
        else if (humanChoice === "paper" && computerChoice == "rock"){
            outcome.textContent = "You win!";
            humanScore++;
            humanScoreDisplay.textContent = "Your score: " + humanScore;
        }
        else if (humanChoice === "scissors" && computerChoice == "paper"){
            outcome.textContent = "You win!";
            humanScore++;
            humanScoreDisplay.textContent = "Your score: " + humanScore;
        }
        else if (humanChoice === "scissors" && computerChoice == "rock"){
            outcome.textContent = "You lose!";
            computerScore++;
            computerScoreDisplay.textContent = "Computer score: " + computerScore;
        }
        else if (humanChoice === "rock" && computerChoice == "paper"){
            outcome.textContent = "You lose!";
            computerScore++;
            computerScoreDisplay.textContent = "Computer score: " + computerScore;
        }
        else if (humanChoice === "paper" && computerChoice == "scissors"){
            outcome.textContent = "You lose!";
            computerScore++;
            computerScoreDisplay.textContent = "Computer score: " + computerScore;
        }
        else{
            outcome.textContent = "It's a draw!";
        }

        if (humanScore == 5 || computerScore == 5){
            let winner;
            if (humanScore > computerScore){
                winner = "You win!";
            }
            else{
                winner = "The computer wins!";
            }

            outcome.textContent = "Game over! " + winner;
            finish = true;
        }
    }
}


const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        let computer = getComputerChoice();
        console.log(computer);
      playRound(button.innerText, computer);
    });
  });

/*
function playGame(){
    
    let human = getHumanChoice();
    let computer = getComputerChoice();
    console.log("Your move: " + human);
    console.log("Computer's move: " + computer);
    playRound(human, computer);
    console.log("Your score: " + humanScore);
    console.log("Computer's score: " + computerScore)

}

playGame();
*/


