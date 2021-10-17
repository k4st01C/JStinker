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
    if (text.substring(0,textArea.value.length)!==textArea.value) {
        textArea.style.borderColor='red'
    } else {
        textArea.style.borderColor='blue'
    }

}

function reset() {
    clearInterval(counter);
    counter=null;
    textArea.value=""
    timer.innerHTML = '00:00:00';
    flag=false;
}

function startTimer() {
	let textEntered = textArea.value;
    spellCheck()
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
btn.addEventListener('click',reset);