const text = document.querySelector('h1');
const input = document.querySelector('input');
type = text.innerText;
let speed = 300 / input.value;
i = 1;

text.innerText = '';

function aaa() {
	if (i === type.length) i = 1;
	text.innerText = '';
	text.innerText += type.slice(0, i);
	i++;
	setTimeout(aaa, speed);
}

aaa();

input.addEventListener('input', e => (speed = 300 / +e.target.value));
