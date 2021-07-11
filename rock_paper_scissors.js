function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function capitalize(text){
    let firstLetter = text.charAt(0)
    let rest = text.slice(1)
    return (firstLetter.toUpperCase() + rest.toLowerCase())
}

function playRound() {
    let playerSelection = capitalize(prompt("What's your selection?", "Rock"));
    let computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return `Draw!`;
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }

}

function playFiveRounds() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        alert(result);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }
    alert(`Your score: ${playerScore}\nComputer score: ${computerScore}`);
    if (playerScore > computerScore) {
        return "You win!"
    } else {
        return "You lose!"
    }
}

console.log(playFiveRounds());


