//Just my original code for this exercice i dont wanna lose it.
var computerRandom =  Math.random() * 3;
console.log(computerRandom);
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

const playerSelection = prompt("What do you choose between rock, paper and scissors?");
console.log("You played"+" "+playerSelection);

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

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

console.log(playRound(playerSelection, computerSelection));

console.log("Player score"+" "+ playerScore)

console.log("Machine score"+" "+ computerScore)

function game () {

for (let i = 0; i < 4; i++) {

var computerRandom =  Math.random() * 3;
console.log(computerRandom);
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

const playerSelection = prompt("What do you choose between rock, paper and scissors?");
console.log("You played"+" "+playerSelection);

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

console.log(playRound(playerSelection, computerSelection));

console.log("Player score"+" "+ playerScore)

console.log("Machine score"+" "+ computerScore)
}

if (playerScore > computerScore){
  return "You win this game.";
}
else if (playerScore <  computerScore){
   return "You lose this game"
}
else{
  return "This game is a tie.";
}
}

console.log(game());