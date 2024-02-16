function getComputerChoice () {
  const randInteger = Math.floor(Math.random() * 3);
  switch (randInteger) {
    case 1: return "Rock";
    case 2: return "Paper";
    default: return "Scissor";
  }
}

function playRound (playerSelection) {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = getComputerChoice().toLowerCase()

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

const buttons = document.querySelector('.container').childNodes;
let playerScore = 0;
let computerScore = 0;

const user = document.querySelector('#user');
const computer = document.querySelector('#computer');

const playerRes = document.createElement('h3'); 
const computerRes = document.createElement('h3');

user.appendChild(playerRes);
computer.appendChild(computerRes);

const section = document.querySelector('section');
const message = document.createElement('h2'); 

buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerRes.parentNode.style.backgroundColor = 'white';
    computerRes.parentNode.style.backgroundColor = 'white';
    message.textContent = '';
    if (playRound(button.id) === "WIN") {
      playerScore ++;
    } else if (playRound(button.id) === "LOSE") {
      computerScore ++;
    }

    playerRes.textContent = playerScore;
    computerRes.textContent = computerScore;

    if (computerScore === 5 || playerScore === 5) {
      if (computerScore < playerScore) {
        message.textContent = 'you won';
        playerRes.parentNode.style.backgroundColor = 'rgb(0, 204, 0)';
      } else {
        message.textContent = 'you lost';
        computerRes.parentNode.style.backgroundColor = 'rgb(240, 0, 0)';
      }
      section.appendChild(message);
      
      playerScore = 0;
      computerScore = 0;
    }

  });
});

