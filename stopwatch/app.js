const sw = function () {
	let duration = 0;
	let count;
	this.start = function () {
		if (count) {
			throw new Error('çalışıyor zaten');
		} else {
			count = setInterval(() => {
				duration++;
			}, 10);
		}
	};
	this.stop = function () {
		clearInterval(count);
		count = null;
	};
	this.reset = function () {
		this.duration = 0;
	};
	Object.defineProperty(this, 'duration', {
		get duration () {
			return duration;
		},
	});
};

a = new sw();
