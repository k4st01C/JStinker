const text = document.querySelector('header p').innerHTML;
const btn = document.querySelector('.myButton');
const timer = document.querySelector('#timer');
const textArea = document.querySelector('textarea');

timer.innerHTML = '00:00:00';
let bL = 0;
let flag = false;
let counter;

const leadingZero = (x) => (x <= 9 ? '0' + x : x);

function spellCheck(){

}

function startTimer() {
    textArea.classList.add('redfocus')
	let textEntered = textArea.value;
	if (!textEntered.length && !flag) {
		flag = true;
		counter = setInterval(() => {
			bL++;
			let m = Math.floor((bL / 6000) % 60);
			let s = Math.floor((bL / 100) % 60);
			let ms = bL % 100;
			timer.innerHTML = `${leadingZero(m)}:${leadingZero(s)}:${leadingZero(
				ms,
			)}`;
		}, 10);
	} else if (textEntered.length === text.length) {
		clearInterval(counter);
	}
}

textArea.addEventListener('keypress', startTimer);
