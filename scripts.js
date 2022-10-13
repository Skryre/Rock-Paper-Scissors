const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
  playerSelection = "paper";
});

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
  playerSelection = "rock";
});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
   playerSelection = "scissors";
});

console.log("You played"+" "+playerSelection);


var playerSelection = "";

var computerRandom =  Math.random() * 3;
function getComputerChoice() {
  if (computerRandom <= 1) {
    return "rock"
  }
  else if (computerRandom <= 2) {
    return "scissors"
  }
  else {
    return "paper"
  }
};
const computerSelection = getComputerChoice();
console.log("The Machine played"+" "+computerSelection);

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  }
  else if (playerSelection === "rock" && computerSelection === "scissors" 
  || playerSelection === "scissors" && computerSelection === "paper" 
  || playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Player won";
  }
  else {
    computerScore++;
    return "Machine won";
  }
}

function gameOver() {
  return playerScore === 5 || computerScore === 5
}