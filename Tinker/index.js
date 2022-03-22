const nav = document.querySelector('nav');
document.addEventListener('scroll', myFunction);

function myFunction() {
	if (window.scrollY > 250) {
		document.getElementById('nav').classList.add('styled');
	} else {
		document.getElementById('nav').classList.remove('styled');
	}
}
