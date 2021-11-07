const dogs = [
	{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
	{ weight: 8, curFood: 200, owners: ['Matilda'] },
	{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
	{ weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(e => (e.recommendedFood = e.weight ** 0.75 * 28));
dogs.forEach(e => e.owners.includes('Sarah') && console.log(e.recommendedFood > e.curFood ? 'too little' : 'too much'));
const ownersMuch = dogs.map(e => e.recommendedFood > e.curFood && e.owners);

console.log(dogs);
console.log(ownersMuch);
