function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
	let i = getRandomInt(0, 2);
	if (i === 0) {
		console.log('Rock');
		return 'Rock';
	} else if (i === 1) {
		console.log('Paper');
		return 'Paper';
	} else {
		console.log('Scissor');
		return 'Scissor';
	}
}

function playRound(computerSelection) {
	// your code here!
	let sign = prompt("What's your selection? 1. Rock, 2.Paper, 3. Scissor, enter 1, 2, or 3?", '1');
	if (sign === '1') {
		if (computerSelection === 'Rock') {
			return 'tie';
		} else if (computerSelection === 'Paper') {
			return 'player lose!';
		} else {
			return 'player win!';
		}
	} else if (sign === '2') {
		if (computerSelection === 'Rock') {
			return 'player win!';
		} else if (computerSelection === 'Paper') {
			return 'tie';
		} else {
			return 'player lose!';
		}
	} else {
		if (computerSelection === 'Rock') {
			return 'player lose!';
		} else if (computerSelection === 'Paper') {
			return 'player win!';
		} else {
			return 'tie';
		}
	}
}

function game() {
	playerScore = 0;
	computerScore = 0;
	for (let i = 0; i < 3; i++) {
		let r = playRound(getComputerChoice());
		if (r === 'player win!') {
			playerScore += 1;
		} else if (r === 'player lose!') {
			computerScore += 1;
		}
	}
	document.write("Player's Score:" + playerScore);
	document.write("Computer's Score:" + playerScore);
}

const btn = document.querySelector('#btn');
btn.onclick = game();
