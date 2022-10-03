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
  let playerScore = 0;
  let computerScore = 0;
  let tieScore = 0;

  //the game
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Tie";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "scissors" && computerSelection === "paper" 
    || playerSelection === "paper" && computerSelection === "rock") {
      playerScore = playerScore++;
      return "Player won";
    }
    else {
      computerScore = computerScore++;
      return "Machine won";
    }
  }
  
  console.log(playRound(playerSelection, computerSelection));
  

  function game () {
  
  //function of the Loop !!
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

  //game function in the loop
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Tie";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" 
    || playerSelection === "scissors" && computerSelection === "paper" 
    || playerSelection === "paper" && computerSelection === "rock") {
      playerScore = playerScore++;
      return "Player won";
    }
    else {
      computerScore = computerScore++;
      return "Machine won";
    }
  }

  console.log(playRound(playerSelection, computerSelection));
  }
  
  if (playerScore > computerScore){
      return "You win this game.";
  }
  else{
    return "You lose this game.";
  }
  }

  //play the Loop
  console.log(game());
  

// TROUVER UNE FACONS DE FAIRE POUR SAUVER LE NOMBRE DE FOIS JOUÉ