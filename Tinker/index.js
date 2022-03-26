const message = document.querySelector('.message');
const cb = document.querySelector('.fas');
const textbox = document.getElementById('textbox');
const numberLetters = document.getElementById('numberLetters');
const uppercaseCb = document.getElementById('uppercaseCb');
const lowercaseCb = document.getElementById('lowercaseCb');
const numbersCb = document.getElementById('numbersCb');
const symbolsCb = document.getElementById('symbolsCb');
const btn = document.querySelector('button');

const symbols = [
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	',',
	'{',
	'[',
	'}',
	']',
	'|',
	':',
	';',
	"'",
	'<',
	'>',
	'.',
	'?',
	'/',
];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const uppercaseLetters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];
const lowercaseLetters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

let passArr = [];

function cbEvent(cb, arr) {
	cb.addEventListener('change', event => {
		if (event.target.checked) {
			passArr.push(...arr);
		} else {
			for (let i = 0; i < passArr.length; i++) {
				if (arr.includes(passArr[i])) {
					passArr.splice(i, 1);
					i--;
				}
			}
		}
	});
}

function randomIdx(length) {
	return ~~(Math.random() * length);
}

function generatePass() {
	let pass = '';
	for (let i = 0; i < numberLetters.value; i++) {
		pass += passArr[randomIdx(passArr.length)];
	}
	return pass;
}

function reset() {
	uppercaseCb.checked = false;
	lowercaseCb.checked = false;
	numbersCb.checked = false;
	symbolsCb.checked = false;
	numberLetters.value = '10';
	textbox.value = '';
}

function cp2cb() {
	textbox.select();
	textbox.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(textbox.value);
}

reset();
cbEvent(uppercaseCb, uppercaseLetters);
cbEvent(lowercaseCb, lowercaseLetters);
cbEvent(numbersCb, numbers);
cbEvent(symbolsCb, symbols);

btn.addEventListener('click', () => {
	message.innerText = '';
	if (!uppercaseCb.checked && !lowercaseCb.checked && !symbolsCb.checked && !numbers.checked)
		message.innerText = 'Please select at least one checkbox.';
	else {
		textbox.value = generatePass();
	}
});

cb.addEventListener('click', cp2cb);
