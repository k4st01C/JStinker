const form = document.querySelector('form');
const input = document.querySelector('input');
const img = document.querySelector('img');
const name = document.querySelector('.name');
const bio = document.querySelector('.bio');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const repos = document.querySelector('.repos');

const url = 'https://api.github.com/users/';

function listRepos(repos) {
	return repos.reduce((ac, repo) => {
		ac += `<span>${repo.name}</span>`;
		return ac;
	}, '');
}

function getURL(url) {
	return axios.get(url);
}

async function fetchRepos() {}

function render(data, repos) {
	const { avatar_url, bio, name, followers, following, public_repos } = data;
	return `<div class="user-card">
        <img class="profile" src=${avatar_url} alt="">
        <div class="text">
            <h2 class="name">${name}</h2>
            <p class="bio">${bio}</p>
            <div class="metrics">
                <h5 class="followers">${followers} Followers</h5>
                <h5 class="following">${following} Following</h5>
                <h5 class="repo">${public_repos} Repos</h5>
            </div>
            <div class="repos">
            ${listRepos(repos)}
            </div>
        </div>
    </div>`;
}

form.addEventListener('submit', fetchUrl);

async function fetchUrl(event) {
	event.preventDefault();
	try {
		const [
			{
				value: { data },
			},
			{
				value: {
					data: [...repos],
				},
			},
		] = await Promise.allSettled([getURL(url + input.value), getURL(url + input.value + '/repos')]);
		form.insertAdjacentHTML('afterend', render(data, repos));
	} catch (error) {
		console.log(error);
		form.insertAdjacentHTML('afterend', `<div class="user-card">No Profile with this name</div>`);
	}
}
