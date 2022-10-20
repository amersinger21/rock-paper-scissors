const computerSpace = document.querySelector("#computer-choice-area");
const computerPoints = document.querySelector("#cscore");

const selection = document.querySelectorAll(".choice-btn");
const playerSpace = document.querySelector("#player-choice-area");
const playerPoints = document.querySelector("#pscore");

const start = document.querySelector("#begin");
const textbox = document.querySelector("#results-space");
const resultText = document.createElement("p");

resultText.id = "resultText";

let playerChoice = "";
let computerScore = 0;
let playerScore = 0;

function getPlayerChoice() {
  return playerChoice;
}

selection.forEach((item) => {
  item.addEventListener("click", () => {
    playerChoice = item.id;
    playerSpace.innerText = playerChoice;
    computerSpace.innerText = "";
  });
});

start.addEventListener("click", game);
start.addEventListener("click", () => {
  playerChoice = "";
});

function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];

  let choice = Math.floor(Math.random() * 3 + 0);
  return options[choice];
}

function playRound(playerChoice, computerSelection) {
  computerSpace.innerText = computerSelection;

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
  } else {
    playerSpace.innerText = "";
    computerSpace.innerText = "";
    return "Make a selection";
  }
}

function game() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  let result = playRound(playerSelection, computerSelection);

  if (result.match(/You Win!/)) {
    playerScore += 1;
    playerPoints.textContent = playerScore;
  }

  if (result.match(/You Lose!/)) {
    computerScore += 1;
    computerPoints.textContent = computerScore;
  }

  resultText.innerText = result;
  textbox.appendChild(resultText);
  return;
}
