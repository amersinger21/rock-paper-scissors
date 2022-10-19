const selection = document.querySelectorAll('.choice-btn');
const start = document.querySelector('#begin')
const playerPoints = document.querySelector('#pscore');
const computerPoints = document.querySelector('#cscore');

let playerChoice = '';

function getPlayerChoice() {
    return playerChoice;
};

 selection.forEach(item => {
        item.addEventListener('click', ()=>{
            playerChoice = item.id;
        });
    }); 

start.addEventListener('click', game);
start.addEventListener('click', ()=>{
    playerChoice= '';
    });

function getComputerChoice(){
    let options = ["Rock", "Paper", "Scissors"];

    let choice = Math.floor(Math.random() * 3 + 0);
    return options[choice];
}

function playRound(playerChoice, computerSelection) {

    console.log(playerChoice, computerSelection);

    if (playerChoice.match(/rock/i)) {
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

    if (playerChoice.match(/paper/i)) {
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

    if (playerChoice.match(/scissors/i)) {
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

    else {
        console.log("Make a selection");
        return;
    };
}
let computerScore = 0;
let playerScore = 0;

function game() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();

    let result = playRound(playerSelection,computerSelection);

        if (result.match(/You Win!/)){
            playerScore+=1;
            console.log(result);
            playerPoints.textContent = playerScore;
        }

        if (result.match(/You Lose!/)){
            computerScore+=1;
            console.log(result);
            computerPoints.textContent = computerScore;
        } 

        if (result.match(/Tie!/)) {
            console.log(result);
            
        }

        else{ 
            return;
        }
   

//     if (playerScore > computerScore){
//         console.log("Player score: " + playerScore);
//         console.log("Computer score: " + computerScore);
//         return "Player Wins the Game!";
//     }

//     if (playerScore < computerScore) {
//         console.log("Player score: " + playerScore);
//         console.log("Computer score: " + computerScore);
//         return "Computer wins the game!";
//     }

//     console.log("Player score: " + playerScore);
//     console.log("Computer score: " + computerScore);
//     return "Tie game!";  
}
