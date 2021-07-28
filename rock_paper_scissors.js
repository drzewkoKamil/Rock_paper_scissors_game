function computerPlay() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    return `Draw!`;
  }
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win!`;
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You lose!`;
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
    return `You lose!`;
  }
  if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win!`;
  }
  if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You lose!`;
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You win!`;
  }
}
function updateScoreDiv(divId, scoreToUpdate) {
  if (scoreToUpdate === playerScore) {
    document.getElementById(divId).innerHTML = `Your score: ${scoreToUpdate}`;
  } else {
    document.getElementById(
      divId
    ).innerHTML = `Computer score: ${scoreToUpdate}`;
  }
}

function changeScore(result) {
  switch (result) {
    case `You win!`:
      playerScore++;
      updateScoreDiv("playerScore", playerScore);
      if (playerScore === 5) {
        alert("You win!");
        disableButtons();
        break;
      }
      break;
    case `You lose!`:
      computerScore++;
      updateScoreDiv("computerScore", computerScore);
      if (computerScore === 5) {
        alert("You lose!");
        disableButtons();
        break;
      }
      break;
    default:
      break;
  }
}

function disableButtons() {
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let result = playRound(button.getAttribute("id"));
    changeScore(result);
  });
});
