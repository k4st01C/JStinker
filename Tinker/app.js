var root = ReactDOM.createRoot(document.getElementById('app'));

function App() {
	return React.createElement(
		'div',
		null,
		React.createElement(Header, null),
		React.createElement(
			'p',
			null,
			'You liked x times'
		),
		React.createElement(
			'p',
			null,
			'Time is ',
			new Date().toLocaleString()
		),
		React.createElement(
			'small',
			null,
			'Web App'
		)
	);
}

function Header() {
	return React.createElement(
		'h1',
		null,
		'Web App'
	);
}

setInterval(function () {
	return root.render(React.createElement(App, null));
}, 1000);