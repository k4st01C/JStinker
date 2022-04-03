const list = document.querySelector('.list');
const input = document.querySelector('form>input');
const form = document.querySelector('form');

let todoIdx = 0;
const todos = [];

if (localStorage.getItem('notes')) {
	for (const iterator of JSON.parse(localStorage.getItem('notes'))) {
		addTodo(iterator.todo, iterator.done);
	}
}
function updateLS() {
	localStorage.setItem('notes', JSON.stringify(todos));
}

function isTodo(e) {
	return e.target.classList.contains('todo');
}

function addTodo(todo, state = 0) {
	const temp = document.createElement('div');
	temp.className = state ? 'todo done' : 'todo';
	temp.setAttribute('data-idx', todoIdx);
	temp.innerText = todo;
	list.insertBefore(temp, list.children[0]);
	todos.push({ todo, done: state });
	todoIdx++;
	updateLS();
	input.value = '';
}

input.value = '';

form.addEventListener('submit', e => {
	e.preventDefault();
	if (input.value) addTodo(input.value);
});
list.addEventListener('click', e => {
	if (isTodo(e)) {
		e.target.classList.toggle('done');
		todos[e.target.dataset.idx].done ^= true;
		updateLS();
	}
});
list.addEventListener('contextmenu', e => {
	e.preventDefault();
	if (isTodo(e)) {
		e.target.remove();
		todos.splice(e.target.dataset.idx, 1);
		updateLS();
	}
});
