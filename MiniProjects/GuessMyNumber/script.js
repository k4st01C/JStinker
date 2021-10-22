'use strict';

(function () {
	//*Components
	const btnAgain = document.querySelector('.again');
	const scoreBoard = document.querySelector('.number');
	const inputGuess = document.querySelector('.guess');
	const btnCheck = document.querySelector('.check');
	const message = document.querySelector('.message');
	const sScore = document.querySelector('.score');
	const sHighScore = document.querySelector('.highscore');

	//*initial values
	let highScore = 0;
	let score = 20;
	let guess;

	//*Functions
	const rndNumber1to20 = () => ~~(Math.random() * 20) + 1;

	const reset = () => {
		message.textContent = 'Start guessing...';
		scoreBoard.textContent = '?';
		inputGuess.value = '';
		sScore.textContent = 20;
		btnCheck.disabled = false;
		score = 20;
		guess = rndNumber1to20();
	};

	const win = () => {
		scoreBoard.textContent = guess;
		message.textContent = 'Correct Number!';
		sHighScore.textContent = highScore > score ? highScore : score;
		btnCheck.disabled = true;
	};

	const loseGame = () => {
		btnCheck.disabled = true;
		message.textContent = 'YOU LOST!!!';
		console.log(2);
	};

	const loseRound = () => {
		sScore.textContent = --score;
		if (!score) return loseGame();
		console.log(score);
		message.textContent = `${inputGuess.value > guess ? 'too high!' : 'too low!'}`;
	};

	//*logic
	guess = rndNumber1to20();
	btnCheck.addEventListener('click', () => (inputGuess.value != guess ? loseRound() : win()));
	btnAgain.addEventListener('click', reset);
})();
