const root = ReactDOM.createRoot(document.getElementById('app'));

function App() {
	return (
		<div>
			<Header/>
			<p>You liked x times</p>
			<p>Time is {new Date().toLocaleString()}</p>
			<small>Web App</small>
		</div>
	);
}

function Header () {
	return <h1>Web App</h1>;
}




setInterval(() => root.render(<App/>), 1000);
