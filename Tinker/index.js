a = document.createElement('h1');
a.textContent = 'asdad';
document.body.append(a);

(function () {
	const header = document.querySelector('h1');
	header.style.color = 'red';
	document.addEventListener('click', () => (header.style.color = 'blue'));
})();
