const hands = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
	const choice = Math.floor(Math.random() * hands.length);
	return(hands[choice]);
}

function playRound(playerSelection,computerSelection) {
	let result = document.getElementById('result');
	let playerCounter = document. getElementById('playerCounter');
	let computerCounter = document. getElementById('computerCounter');
    let winnerDeclaration = document.getElementById('winnerDeclaration');


	computerSelection = getComputerChoice();
	
	if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Paper" && computerSelection === "Rock") ||
		(playerSelection === "Scissors" && computerSelection === "Paper")
	) {
		result.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";
		playerScore++;
		playerCounter.textContent = playerScore;
	} else if (
		(playerSelection === "Rock" && computerSelection === "Rock") ||
		(playerSelection === "Paper" && computerSelection === "Paper") ||
		(playerSelection === "Scissors" && computerSelection === "Scissors")
	) {
		result.textContent = "Tie game! You both played " + playerSelection;
	} else {
		result.textContent = "You lose! " + playerSelection + " loses to " + computerSelection + "!";
		computerScore++;
		computerCounter.textContent = computerScore;
	}
	if (playerScore === 5 && gameOver === false) {
		winnerDeclaration.textContent = "Game Over! You win!";
		gameOver = true;
	}	
	if (computerScore === 5 && gameOver === false) {
		winnerDeclaration.textContent = "Game Over! You lost!";
		gameOver = true;
	}
}

function resetBoard() {
    playerScore = 0;
    computerScore = 0;
    result.textContent = "Make your selection:\nFirst to five wins!";
	winnerDeclaration.textContent = "";	
    playerCounter.textContent = "/";
    computerCounter.textContent = "/";
	gameOver = false;	
}

