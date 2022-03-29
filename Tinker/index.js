const img = document.querySelector('.img');

const imgUrls = {
	fa_home: 100,
	fa_box: 200,
	fa_book_open: 300,
	fa_users: 400,
};

document.addEventListener('click', e => {
	if (e.target.classList.contains('fa-solid')) {
		const temp = e.target.classList[1].replaceAll('-', '_');
		img.style.backgroundImage = `url("https://picsum.photos/${imgUrls[temp]}`;
	}
});
