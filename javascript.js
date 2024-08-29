let humanScore = 0;
let computerScore = 0;

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
    if (humanChoice === "rock" && computerChoice == "scissors"){
        console.log("You win!")
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice == "rock"){
        console.log("You win!")
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice == "paper"){
        console.log("You win!")
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice == "rock"){
        console.log("You lose!")
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice == "paper"){
        console.log("You lose!")
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice == "scissors"){
        console.log("You lose!")
        computerScore++;
    }
    else{
        console.log("It's a draw.")
    }
}

function playGame(){
    
    for (let i = 1; i < 6; i++){
        console.log("Round" + String(i) + "!")
        let human = getHumanChoice();
        let computer = getComputerChoice();
        console.log("Your move: " + human);
        console.log("Computer's move: " + computer);
        playRound(human, computer);
        console.log("Your score: " + humanScore);
        console.log("Computer's score: " + computerScore)
    }
}

playGame();


