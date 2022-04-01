const btnClose = document.querySelector('.fa-close');
const btnMenu = document.querySelector('.fa-bars');
const panes = document.querySelectorAll('.left-pane');
const width = 28;

btnClose.addEventListener('click', () => {
	panes.forEach((e, i) => (e.style.transform = 'translateX(-105%)'));
});

btnMenu.addEventListener('click', () => {
	panes.forEach((e, i) => (e.style.transform = 'translateX(0)'));
});
