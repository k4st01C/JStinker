'use strict';

//*components

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

//*functions

const addHidden = () => {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

const removeHidden = () => {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

//*logic
btnsShowModal.forEach(e => e.addEventListener('click', () => removeHidden()));
[btnCloseModal, overlay].forEach(e => e.addEventListener('click', () => addHidden()));
document.addEventListener('keydown', e =>
	e.key === 'Escape' && !modal.classList.contains('hidden') ? addHidden() : null,
);
