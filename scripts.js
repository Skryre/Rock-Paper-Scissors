//the game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Tie"
      tieScore++;
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "scissors" && computerSelection === "paper" 
    || playerSelection === "paper" && computerSelection === "rock") {
      return "Player won";
      playerScore++;
    }
    else {
      return "Machine won"
      computerScore++;
    }
  }
  
  //computer selection
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
  
  //player selection
  const playerSelection = prompt("What do you choose between rock, paper and scissors?");
  console.log("You played"+" "+playerSelection);
  
  //score tracking
  let playerScore=0;
  let computerScore=0;
  let tieScore=0;
  
  
  console.log(playRound(playerSelection, computerSelection));
  
  //function of the Loop !!
  function game () {
  
  for (let i = 0; i < 4; i++) {
  
  //computer selection
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
  
  //player selection
  const playerSelection = prompt("What do you choose between rock, paper and scissors?");
  console.log("You played"+" "+playerSelection); 
  }
  
  
    if (playerScore>computerScore){
       return "You Win this game.";
     }
       if (playerScore==computerScore){
         return "This game is a tie.";
       }
      else{
       return "You Lose this game.";
     };
  
  }
  
  //play the Loop
  console.log(game());
  