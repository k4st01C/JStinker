const expenses = {
	budget: [
		{ value: 250, description: 'Sold old TV 📺', user: 'jonas' },
		{ value: -45, description: 'Groceries 🥑', user: 'jonas' },
		{ value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
		{ value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
		{ value: -1100, description: 'New iPhone 📱', user: 'jonas' },
		{ value: -20, description: 'Candy 🍭', user: 'matilda' },
		{ value: -125, description: 'Toys 🚂', user: 'matilda' },
		{ value: -1800, description: 'New Laptop 💻', user: 'jonas' },
	],
	limits: {
		jonas: 1000,
		matilda: 100,
	},

	add(value, description, user = 'jonas') {
		user = user.toLowerCase();
		let lim = this.limits[user] || 0;
		if (value <= lim) this.budget.push({ value: -value, description, user });
	},

	check() {
		this.budget.forEach(e => e.value < -(this.limits[e.user] || 0) && (e.flag = 'limit'));
	},

	bigExpenses(person) {
		let output = this.budget.reduce((a, e) => {
			if (e.value <= -this.limits[person]) a += e.description.slice(-2) + ' / ';
			return a;
		}, '');
		console.log(output.slice(0, -2));
	},
};

Object.seal(expenses.limits);

expenses.add(10, 'Pizza 🍕');
expenses.add(100, 'Going to movies 🍿', 'Matilda');
expenses.add(200, 'Stuff', 'Jay');
expenses.check();

console.log(expenses.budget);
