const img = document.querySelector('img');
const title = document.querySelector('.title');
const par = document.querySelector('.par');
const heart = document.querySelector('.heart');

let likeCounter = 0;
let clickTime = 0;

img.addEventListener('click', function (e) {
	if (!clickTime) clickTime = new Date().getTime();
	else {
		if (new Date().getTime() - clickTime < 500) addHeart(e);
		else clickTime = new Date().getTime();
	}
});

function addHeart(e) {
	const { offsetX, offsetY } = e;
	heart.style.top = offsetY + 'px';
	heart.style.left = offsetX + 'px';
	likeCounter++;
	heart.classList.add('dblClick');
	par.innerText = `You liked it ${likeCounter} times`;
	setTimeout(() => heart.classList.remove('dblClick'), 500);
}
