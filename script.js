const buttons = document.querySelectorAll(".option");
const resultDisplay = document.querySelector("#results-display");
const humanScoreDisplay = document.querySelector("#humanScore")
const computerScoreDisplay = document.querySelector("#computerScore")
const resetButton = document.querySelector("#reset")
let computerScore = 0;
let humanScore = 0;

resetButton.addEventListener("click", resetGame);

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const humanChoice = button.textContent.toLowerCase();
    playRound(humanChoice, getComputerChoice())
  })
})



function getComputerChoice() {

  const randomNum = Math.random();

  if (randomNum < 0.34) {

    return "rock";

  } else if (randomNum < 0.64) {

    return "paper"

  } else {

    return "scissors";

  }

}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultDisplay.textContent = "Its a Tie!";
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    resultDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++
  } else {
    resultDisplay.textContent = `You lost! ${computerChoice} beats ${humanChoice}`;
    computerScore++
  }
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;

  if (computerScore === 5 || humanScore === 5) {
    if (humanScore === 5) {
      resultDisplay.textContent = "Congratulations! you are the final winner!";
    } else {
      resultDisplay.textContent = "The computer is the final Winner!"
    }

    buttons.forEach(button => {
      button.disabled = true;
    })
  }

}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  humanScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
  resultDisplay.textContent = "Make you choice!";
  buttons.forEach(button => {
    button.disabled = false;
  })
}