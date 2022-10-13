const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
  let playerSelection = "paper";
  console.log("player select "+playerSelection);
  console.log(playRound(playerSelection));
  
});

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
  let playerSelection = "rock";
  console.log("player select "+playerSelection);
  console.log(playRound(playerSelection));
});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
  let playerSelection = "scissors";
  console.log("player select "+playerSelection);
  console.log(playRound(playerSelection));
});

function getComputerChoice() {
  var computerRandom =  Math.random() * 3;
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

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {

let computerSelection = getComputerChoice();
console.log("the machine played "+computerSelection);

if (playerSelection === computerSelection) {
  return "Tie";
}

else if ((playerSelection === "rock" && computerSelection === "scissors") 
|| (playerSelection === "scissors" && computerSelection === "paper") 
|| (playerSelection === "paper" && computerSelection === "rock")) {

  playerScore++
  console.log("your score is "+playerScore)
  if (playerScore === 5) { return "You won the game"}
  else {return "Player won this round"}
}

else {
  computerScore++
  console.log("the machine score is "+computerScore)
  if (computerScore === 5) { return "Machine won the game"}
  else {return "Machine won this round"}
}
  
}
