'use strict';

//*Components
const btnAgain = document.querySelector('.again');
const scoreBoard = document.querySelector('.number');
const inputGuess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const pMessage = document.querySelector('.message');
const pScore = document.querySelector('.label-score');
const pHighScore = document.querySelector('.label-highscore');

//*Functions
const rndNumber1to20 = () => ~~(Math.random() * 20) + 1;

//*initial values
const guess = rndNumber1to20();
let score = 20;
let highScore = 0;

btnCheck.addEventListener('click', () => {
	if (inputGuess.value != guess) {
		if (inputGuess.value > guess) pMessage.innerHTML = 'too high!';
		else pMessage.innerHTML = 'too low!';
		score--;
		pScore.innerHTML = `💯 Score: ${score}`;
	} else {
		scoreBoard.innerHTML = guess;
		pMessage.innerHTML = 'Correct Number!';
		highScore = guess;
		btnCheck.disabled = true;
	}
});
