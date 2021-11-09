'use strict';

/* -------------------------------------------------------------------------- */
/*                                  variables                                 */
/* -------------------------------------------------------------------------- */

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');

let currentEl = document.querySelector('.operations__content--1');
let currentBtn = document.querySelector('.operations__tab--1');

const nav = document.querySelector('.nav');

/* -------------------------------------------------------------------------- */
/*                                  functions                                 */
/* -------------------------------------------------------------------------- */

const toggleOpacity = function (el) {
	if (el.target.tagName === 'A') {
		const link = el.target;
		const siblings = link.closest('.nav').querySelectorAll('.nav__link');
		const logo = link.closest('.nav').querySelector('img');
		[...siblings, logo].forEach(e => {
			if (e !== link) e.style.opacity = this;
		});
	}
};

/* -------------------------------------------------------------------------- */
/*                                    logic                                   */
/* -------------------------------------------------------------------------- */

/* ------------------------------ modalwindows ------------------------------ */

const openModal = function () {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});

/* ------------------------------ smoothScroll ------------------------------ */

document.querySelector('.nav__links').addEventListener('click', e => {
	e.preventDefault();
	const id = e.target.getAttribute('href');
	id && document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

/* ------------------------------ tabbedComponent ------------------------------ */

document.querySelector('.operations__tab-container').addEventListener('click', e => {
	const id = e.target.closest('.operations__tab')?.getAttribute('data-tab');
	if (!id) return;
	//closest is like upward querySelctor
	const selectedEl = document.querySelector(`.operations__content--${id}`);
	const selectedBtn = document.querySelector(`.operations__tab--${id}`);
	selectedEl.classList.toggle('operations__content--active');
	selectedBtn.classList.toggle('operations__tab--active');
	currentEl.classList.toggle('operations__content--active');
	currentBtn.classList.toggle('operations__tab--active');
	currentEl = selectedEl;
	currentBtn = selectedBtn;
});

/* --------------------------- fadeOutNavElements --------------------------- */

nav.addEventListener('mouseover', toggleOpacity.bind(0.5));
nav.addEventListener('mouseout', toggleOpacity.bind(1));
