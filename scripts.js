const hands = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	const choice = Math.floor(Math.random() * hands.length);
	return(hands[choice]);
}

function playRound(playerSelection,computerSelection) {
	let result = document.getElementById('result');
	let scoreboard = document.getElementById('scoreboard');
	computerSelection = getComputerChoice();
	playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
	
	if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Paper" && computerSelection === "Rock") ||
		(playerSelection === "Scissors" && computerSelection === "Paper")
	) {
		result.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";
		playerScore++;
	} else if (
		(playerSelection === "Rock" && computerSelection === "Rock") ||
		(playerSelection === "Paper" && computerSelection === "Paper") ||
		(playerSelection === "Scissors" && computerSelection === "Scissors")
	) {
		result.textContent = "Tie game! You both played " + playerSelection;
	} else {
		result.textContent = "You lose! " + playerSelection + " loses to " + computerSelection + "!";
		computerScore++;
	}
	scoreboard.textContent = "Player score = " + playerScore + " Computer Score = " + computerScore;
}
