const toggles = document.querySelectorAll("input[type='checkbox']");

function areChecked() {
	return Array.from(toggles).every(el => el.checked);
}

toggles.forEach((el, i) => {
	el.addEventListener('change', event => {
		if (areChecked()) {
			const temp = [0, 1, 2];
			temp.splice(i, 1);
			console.log(temp);
			toggles[temp[~~(Math.random() * 2)]].checked = false;
		}
	});
});
