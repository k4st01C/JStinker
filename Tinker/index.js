const boxes = document.querySelector('.boxes');
const btnMagic = document.querySelector('.magic');

for (let i = 0; i < 4; i++) {
	for (let j = 0; j < 4; j++) {
		const div = document.createElement('div');
		div.className = 'box';
		div.style.backgroundPosition = `${j * -125}px ${i * -125}px`;
		boxes.append(div);
	}
}

btnMagic.addEventListener('click', () => boxes.classList.toggle('big'));
