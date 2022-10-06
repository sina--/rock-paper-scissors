function getComputerChoice() {
	const hands = ["Rock", "Paper", "Scissors"];
	const choice = Math.floor(Math.random() * hands.length);
	console.log(hands[choice]);
}
