// let selectedFile;
// console.log(window.XLSX);
// document.getElementById('input').addEventListener('change', event => {
// 	selectedFile = event.target.files[0];
// });

// let data = [
// 	{
// 		name: 'jayanth',
// 		data: 'scd',
// 		abc: 'sdef',
// 	},
// ];

// let pdks;

// document.getElementById('button').addEventListener('click', () => {
// 	XLSX.utils.json_to_sheet(data, 'out.xlsx');
// 	if (selectedFile) {
// 		let fileReader = new FileReader();
// 		fileReader.readAsBinaryString(selectedFile);
// 		fileReader.onload = event => {
// 			let data = event.target.result;
// 			let workbook = XLSX.read(data, { type: 'binary' });
// 			workbook.SheetNames.forEach(sheet => {
// 				let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
// 				// pdks = JSON.stringify(rowObject, undefined, 4);
// 				// document.getElementById('jsondata').innerHTML = JSON.stringify(rowObject, undefined, 4);
// 				// rowObject.filter(e=>)
// 				console.log(rowObject);
// 				pdks = rowObject.reduce((a, e) => {
// 					a.push(3);
// 					return a;
// 				}, []);
// 			});
// 		};
// 	}
// });

// console.log(pdks);

// const Car = function (make, speed = 0) {
// 	this.make = make;
// 	this.speed = speed;
// };

// Car.prototype.accelerate = function () {
// 	this.speed += 10;
// 	console.log(this.speed + 'km/h');
// };

// Car.prototype.brake = function () {
// 	this.speed -= 5;
// 	console.log(this.speed + 'km/h');
// };

// const honda = new Car('Honda');
// const mazda = new Car('Mazda', 50);

// honda.accelerate();

// mazda.brake();

// class Car {
// 	constructor(make, speed = 0) {
// 		this.make = make;
// 		this.speed = speed;
// 	}
// 	accelerate() {
// 		this.speed += 10;
// 		console.log(this.speed);
// 	}
// 	brake() {
// 		this.speed -= 5;
// 		console.log(this.speed);
// 	}
// 	get speedUS() {
// 		return this.speed / 1.6;
// 	}
// 	set speedUS(speed) {
// 		this.speed = 1.6 * speed;
// 	}
// }

// const honda = new Car('Honda');
// const mazda = new Car('Mazda', 50);

// honda.accelerate();

// mazda.brake();

// const Person = function (firstName, age) {
// 	this.firstName = firstName;
// 	this.age = age;
// 	this.sex = 'male';
// };

// Person.prototype.yell = () => console.log('AAA');

// const Student = function (firstName, age, discipline) {
// 	Person.call(this, firstName, age);
// 	this.discipline = discipline;
// };
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.shout = () => console.log('BBBBB');

// Student.prototype.constructor = Student;
// const hanna = new Person('Hannah', 22);

// const suzan = new Student('Suzan', 15, 'Math');

// const Car = function (make, currentSpeed) {
// 	this.make = make;
// 	this.currentSpeed = currentSpeed;
// };

// Car.prototype.accelerate = function () {
// 	this.currentSpeed += 10;
// 	console.log(this.currentSpeed);
// };
// Car.prototype.brake = function () {
// 	this.currentSpeed -= 5;
// 	console.log(this.currentSpeed);
// };

// const EV = function (make, currentSpeed, charge) {
// 	Car.call(this, make, currentSpeed);
// 	this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
// 	this.charge = chargeTo;
// 	console.log(this.charge);
// };

// EV.prototype.accelerate = function () {
// 	this.charge -= 1;
// 	this.currentSpeed += 20;
// 	console.log(this.charge, this.currentSpeed);
// };

// class Car {
// 	constructor(make, currentSpeed) {
// 		this.make = make;
// 		this.currentSpeed = currentSpeed;
// 	}

// 	accelerate() {
// 		this.currentSpeed += 10;
// 		console.log(this.currentSpeed);
// 	}

// 	brake() {
// 		this.currentSpeed -= 5;
// 		console.log(this.currentSpeed);
// 	}
// }

// class EV extends Car {
// 	#chargeTo;
// 	constructor(make, currentSpeed, chargeTo) {
// 		super(make, currentSpeed);
// 		this.#chargeTo = chargeTo;
// 	}

// 	chargeBattery(chargeTo) {
// 		this.chargeTo = chargeTo;
// 		console.log(this.#chargeTo);
// 		return this;
// 	}

// 	accelerate() {
// 		this.#chargeTo -= 1;
// 		this.currentSpeed += 20;
// 		console.log(this.#chargeTo, this.currentSpeed);
// 		return this;
// 	}
// }

// const tesla = new EV('tesla', 100, 20);

// const fn = new Function('val', `console.log(22)`);

// fn();

// fn.test = function () {
// 	console.log(this);
// };

// const acc = function () {
// 	console.log(23);
// };

let time;
const debounce = function (fn, waitTime) {
	clearTimeout(time);
	time = setTimeout(() => {
		fn();
	}, waitTime);
};

const cl = () => console.log(111);

document.querySelector('button').addEventListener('click', function () {
	debounce(cl, 1000);
});
