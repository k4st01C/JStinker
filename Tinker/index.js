const images = document.querySelector('.images');
const btnPrev = document.querySelector('.buttons>button:first-child');
const btnNext = document.querySelector('.buttons>button:last-child');
let i = 0;
setInterval(() => {
	i = ++i % 5;
	images.style.transform = `translateX(-${100 * i}%)`;
}, 2000);

btnPrev.addEventListener('click', () => {
	const coordX = images.style.transform.slice(11, -2);
	console.log(coordX);
	images.style.transform = `translateX(-${-coordX - 100 === 0 ? 400 : -coordX - 100}%)`;
});
btnNext.addEventListener('click', () => {
	const coordX = images.style.transform.slice(11, -2);
	console.log(coordX);
	images.style.transform = `translateX(-${-coordX + 100 === 500 ? 0 : -coordX + 100}%)`;
});
