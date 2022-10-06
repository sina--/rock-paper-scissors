const hands = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
	const choice = Math.floor(Math.random() * hands.length);
	return(hands[choice]);
}

function playRound(playerSelection,computerSelection) {
	computerSelection = getComputerChoice();

	if (
		(playerSelection === "Rock" && computerSelection === "Scissors") ||
		(playerSelection === "Paper" && computerSelection === "Rock") ||
		(playerSelection === "Scissors" && computerSelection === "Paper")
	) {
		console.log("You win! " + playerSelection + " beats " + computerSelection + "!");
	} else if (
		(playerSelection === "Rock" && computerSelection === "Rock") ||
		(playerSelection === "Paper" && computerSelection === "Paper") ||
		(playerSelection === "Scissors" && computerSelection === "Scissors")
	) {
		console.log("Tie game! You both played " + playerSelection);
	} else {
		console.log("You lose! " + playerSelection + " loses to " + computerSelection + "!");
	}
}
