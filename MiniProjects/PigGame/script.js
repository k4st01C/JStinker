'use strict';

//*components
//*components-Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//*components-labels
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');

//*variables
let activePlayer, scores, scoresCurrent;

//*functions
const init = () => {
	activePlayer = 0;
	scores = [0, 0];
	scoresCurrent = [0, 0];
	currentScore0El.textContent = 0;
	currentScore1El.textContent = 0;
	score0El.textContent = 0;
	score1El.textContent = 0;

	diceImg.classList.add('hidden');
	player0El.classList.remove('player--winner');
	player1El.classList.remove('player--winner');
	player0El.classList.add('player--active');
	player1El.classList.remove('player--active');
};

const rndDice = () => ~~(Math.random() * 6 + 1);
const changeImg = num => (diceImg.src = `./imgs/dice-${num}.png`);
const showCurrentScore = () =>
	(document.getElementById(`current--${activePlayer}`).textContent = scoresCurrent[activePlayer]);

const playRound = () => {
	const rolledDice = rndDice();
	changeImg(rolledDice);
	if (rolledDice === 1) return switchPlayer();
	scoresCurrent[activePlayer] += rolledDice;
	showCurrentScore();
};

const switchPlayer = () => {
	scoresCurrent[activePlayer] = 0;
	showCurrentScore();
	[player0El, player1El].forEach(e => e.classList.toggle('player--active'));
	activePlayer = activePlayer ? 0 : 1;
};

const anounceWinner = () => {
	diceImg.classList.add('hidden');
	document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
	document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
};

//*logic
init();
btnRoll.addEventListener('click', playRound);
btnHold.addEventListener('click', () => {
	scores[activePlayer] += scoresCurrent[activePlayer];
	if (scores[activePlayer] >= 100) anounceWinner();
	document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
	switchPlayer();
});
btnNew.addEventListener('click', init);
