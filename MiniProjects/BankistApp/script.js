'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};

const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};

const account4 = {
	owner: 'Sarah Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

let loggedAccount;

//*functions

const addUsername8Balance = accs => {
	accs.forEach(e => {
		e.userName = e.owner
			.toLowerCase()
			.split(' ')
			.map(e => e[0])
			.join('');
		e.balance = e.movements.reduce((a, e) => a + e, 0);
	});
};

const displayMovements = movements => {
	containerMovements.innerHTML = '';
	movements.forEach((e, i) => {
		const typ = e < 0 ? 'withdrawal' : 'deposit';
		const HTML = `
    <div class="movements__row">
    <div class="movements__type movements__type--${typ}">${i + 1} ${typ}</div>
    <div class="movements__date">24/01/2037</div>
    <div class="movements__value">${e}€</div>
		</div>`;
		containerMovements.insertAdjacentHTML('afterbegin', HTML);
	});
};

const displaySummary8Balance = acc => {
	const inLabel = acc.movements.filter(e => e > 0).reduce((a, e) => a + e, 0);
	const outLabel = acc.movements.filter(e => e <= 0).reduce((a, e) => a + e, 0);
	const interest = acc.movements
		.filter(e => e > 0)
		.map(e => (e * acc.interestRate) / 100)
		.filter(e => e >= 1)
		.reduce((a, e) => a + e)
		.toFixed(1);
	labelSumIn.textContent = inLabel + '€';
	labelSumOut.textContent = outLabel + '€';
	labelSumInterest.textContent = interest + '€';
	labelBalance.textContent = acc.balance + ' EUR';
};

const clear8LoseFocus = (...inputs) => {
	inputs.forEach(e => (e.value = ''));
	inputs[inputs.length - 1].blur();
};

const updateUI = acc => {
	displayMovements(acc.movements);
	displaySummary8Balance(acc);
	labelWelcome.textContent = `Welcome Back, ${acc.owner.split(' ')[0]}`;
};

//*logic

addUsername8Balance(accounts);
btnLogin.addEventListener('click', e => {
	e.preventDefault();
	const pin = inputLoginPin.value;
	const userName = inputLoginUsername.value;
	loggedAccount = accounts.find(e => userName === e.userName);
	const userBalance = e.balance;
	if (loggedAccount && loggedAccount.pin == pin) {
		containerApp.style.opacity = 100;
		updateUI(loggedAccount);
		clear8LoseFocus(inputLoginUsername, inputLoginPin);
	}
});

btnTransfer.addEventListener('click', e => {
	e.preventDefault();
	const transferAmount = +inputTransferAmount.value;
	const receivingAccount = accounts.find(e => e.userName === inputTransferTo.value);
	if (
		transferAmount > 0 &&
		loggedAccount.balance >= transferAmount &&
		receivingAccount &&
		loggedAccount.userName !== receivingAccount?.userName
	) {
		receivingAccount.movements.push(transferAmount);
		loggedAccount.movements.push(-transferAmount);
		updateUI(loggedAccount);
	}
	clear8LoseFocus(inputTransferAmount, inputTransferTo);
});

btnClose.addEventListener('click', e => {
	e.preventDefault();
	const userName = inputCloseUsername.value;
	const pin = inputClosePin.value;
	const idxAcc = accounts.findIndex(e => e === loggedAccount);
	clear8LoseFocus(inputCloseUsername, inputClosePin);
	if (userName === loggedAccount.userName && +pin === loggedAccount.pin) {
		accounts.splice(idxAcc, 1);
		containerApp.style.opacity = 0;
	}
});

btnLoan.addEventListener('click', e => {
	e.preventDefault();
	const amount = inputLoanAmount.value;
	if (amount > 0 && loggedAccount.movements.some(e => e >= amount * 0.1)) {
		loggedAccount.movements.push(amount);
		updateUI(loggedAccount);
	}
	clear8LoseFocus(inputLoanAmount);
});

let flag = true;
btnSort.addEventListener('click', () => {
	let mutatedArray = loggedAccount.movements.slice().sort((a, b) => (flag ? a - b : b - a));
	flag = !flag;
	displayMovements(mutatedArray);
});

const a = accounts.flatMap(e => e.movements);

const b = a.reduce(
	(a, e) => {
		e >= 0 ? (a.w += e) : (a.d += e);
		return a;
	},

	{ w: 0, d: 0 },
);
