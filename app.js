function getComputerChoice () {
  const randInteger = Math.floor(Math.random() * 3);
  switch (randInteger) {
    case 1: return "Rock";
    case 2: return "Paper";
    default: return "Scissor";
  }
}

function playRound (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  const WIN = "WIN";
  const LOSE = "LOSE";
  const DRAW = "DRAW";

  if (playerSelection === computerSelection) {
    return DRAW;
  }

  if (playerSelection === "rock") {
    if (computerSelection === "scissor") {
      return WIN;
    } else {
      return LOSE;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return WIN;
    } else {
      return LOSE;
    }
  } else {
    if (computerSelection === "paper") {
      return WIN;
    } else {
      return LOSE;
    }
  }
  
}

function playgame() {
  let userScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, paper or scissor?");
    const computerSelection = getComputerChoice();  
    
    let res = playRound(playerSelection, computerSelection);
    if (res === "WON") {
      userScore++;
      console.log("user win");
    } else if (res === "LOSE") {
      computerScore++;
      console.log("computer win");
    } else {
      console.log("its a draw");
    }
  }
  console.log(`final score is: user ${userScore} - ${computerScore} computer`);
}
playgame();