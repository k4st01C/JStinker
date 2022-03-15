const counters = document.querySelectorAll('.brand > p:nth-child(2)');

const numbers = [12000, 7500, 5000];

counters.forEach((e, i) => {
	let start = 0;
	const interval = setInterval(() => {
		start += numbers[i] / 1000;
		e.innerText = start;
		if (start >= numbers[i]) clearInterval(interval);
	}, 1);
});
