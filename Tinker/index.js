const numbers = document.querySelectorAll('input');

numbers.forEach((e, i) =>
	e.addEventListener('keydown', el => {
		if (el.key === 'Backspace') {
			if (i === 0) return;
			e.previousElementSibling.focus();
			e.classList.remove('active');
			e.previousElementSibling.classList.add('active');
		} else {
			if (i === 5) return;
			e.nextElementSibling.focus();
			e.classList.remove('active');
			e.nextElementSibling.classList.add('active');
		}
	}),
);
