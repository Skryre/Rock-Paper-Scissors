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

const container = document.querySelector('#Results');
const contMess = document.querySelector('#Message');

const displayPlayer = document.createElement('div');
displayPlayer.classList.add('Results-Player');
displayPlayer.textContent = 'Player : ' + playerScore;

const displayMachine = document.createElement('div');
displayMachine.classList.add('Results-Machine');
displayMachine.textContent = 'Machine : ' + computerScore;

const displayResults=document.createElement('div');
displayResults.classList.add('vvv');
displayResults.textContent = 'Lets Go!!';

container.appendChild(displayPlayer);
container.appendChild(displayMachine);
contMess.appendChild(displayResults);

const buttons = document.querySelectorAll('button')
function stopGame() {
  buttons.forEach(elem => {
      elem.disabled = true
  })
}

function playRound(playerSelection) {

let computerSelection = getComputerChoice();
console.log("the machine played "+computerSelection);

if (playerSelection === computerSelection) {
  displayResults.textContent = 'It is a tie!! both of you picked '+ playerSelection+'!';
  return "Tie";
}

else if ((playerSelection === "rock" && computerSelection === "scissors") 
|| (playerSelection === "scissors" && computerSelection === "paper") 
|| (playerSelection === "paper" && computerSelection === "rock")) {

  playerScore++
  displayPlayer.textContent = 'Player : ' + playerScore;
  console.log("your score is "+playerScore)

  if (playerScore === 5) { 
    displayResults.textContent = 'You won this game, you reached '+playerScore+'!';
    stopGame()
    return "You won the game"
  }
  else {
    displayResults.textContent = 'You won this round, '+playerSelection+' beats '+computerSelection+'!';
    return "Player won this round"
  }
}

else {
  computerScore++
  displayMachine.textContent = 'Machine : ' + computerScore
  console.log("the machine score is "+computerScore)

  if (computerScore === 5) { 
    displayResults.textContent = 'The Machine won this game, it reached '+computerScore+'!';
    stopGame();
    return "Machine won the game"
  }
  else {
    displayResults.textContent = 'The machine won this round, '+computerSelection+' beats '+playerSelection+'!';
    return "Machine won this round"
  }
}
}

