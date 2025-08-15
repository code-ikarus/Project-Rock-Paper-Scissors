function playGame(){
let humanScore = 0;
let computerScore = 0;



function getComputerChoice(){
  const randomNum = Math.random();
  if (randomNum < 0.34) {
    return "rock";
  } else if(randomNum < 0.64){
    return "paper"
  } else{
    return "scissors";
  }
}

function getHumanChoice(){
  let playerSelection = prompt("Enter your choice (rock, paper, scissors): ")
}

function playRound(humanChoice, computerChoice){

  const human = humanChoice.toLowerCase();

  if (human === computerChoice){
    console.log("its a tie")
  }else if(
    (human === 'rock' && computerChoice === 'scissors') ||
    (human === 'paper' && computerChoice === 'rock') ||
    (human === 'scissors' && computerChoice === 'paper')
  ){
    console.log(`You win! ${human} beats ${computerChoice}`);
    humanScore++;
  } else{
    console.log(`You lose! ${computerChoice} beats ${human}`)
    computerScore++
  }
}

console.log("\n--- Starting the game! (5 rounds) ---");
for(let i = 0; i < 5 ; i++){
  playRound(getHumanChoice(), getComputerChoice);
  console.log(`Current score: You ${humanScore} | computer ${computerScore}`)
}

   console.log("\n--- Game Over! ---");
      if (humanScore > computerScore) {
        console.log("Congratulations, you are the final winner!");
      } else if (computerScore > humanScore) {
        console.log("The computer is the final winner!");
      } else {
        console.log("The game is a tie!");
      }
    }

