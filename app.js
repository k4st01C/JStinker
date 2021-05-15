function deepCopy(source) {
	if (typeof source !== 'object' || source === null) return 'not an object';
	let copy = Array.isArray(source) ? [] : {};

	for (const key in source) {
		if (typeof source[key] !== 'object' || source[key] === null) {
			copy[key] = source[key];
		} else {
			copy[key] = deepCopy(source[key]);
		}

	}
	return copy;
}


a=[1,2,[3,4],{a:{
	a:1,
	b:2
}},function(){}]

b=deepCopy(a)
console.log(deepCopy(b));
