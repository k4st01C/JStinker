const btns = document.querySelectorAll('button');

btns[0].addEventListener('click', () => {
	let limit = Math.max(
		document.body.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.clientHeight,
		document.documentElement.scrollHeight,
		document.documentElement.offsetHeight,
	);

	const Y = window.pageYOffset + document.documentElement.clientHeight;
	console.log(Y, limit);
	window.scroll({
		left: 0,
		top: Y === limit ? 0 : Y,
		behavior: 'smooth',
	});
});
btns[1].addEventListener('click', () => {
	let limit = Math.max(
		document.body.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.clientHeight,
		document.documentElement.scrollHeight,
		document.documentElement.offsetHeight,
	);
	const Y = window.pageYOffset - document.documentElement.clientHeight;
	console.log(Y);
	window.scroll({
		left: 0,
		top: window.pageYOffset === 0 ? limit : Y,
		behavior: 'smooth',
	});
});
