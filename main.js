function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];

    let choice = Math.floor(Math.random() * 3 + 0);

    return options[choice];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.match(/rock/i)) {
        if (computerSelection === "Rock") {
            return "Tie!";
        }
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        }
        if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        }        
    } 

    if (playerSelection.match(/paper/i)) {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        }
        if (computerSelection === "Paper") {
            return "Tie!";
        }
        if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper";
        }        
    } 

    if (playerSelection.match(/scissors/i)) {
        if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        }
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper";
        }
        if (computerSelection === "Scissors") {
            return "Tie!";
        }  

    } 
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection,computerSelection);

        if (result.match(/You Win!/)){
            playerScore+=1;
            console.log(result);
            continue;
        }

        if (result.match(/You Lose!/)){
            computerScore+=1;
            console.log(result);
            continue;
        } 

        if (result.match(/Tie!/)) {
            console.log(result);
            continue;
        }

    }    

    if (playerScore > computerScore){
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        return "Player Wins the Game!";
    }

    if (playerScore < computerScore) {
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
        return "Computer wins the game!";
    }

    return "Tie game!";  
}

console.log(game());