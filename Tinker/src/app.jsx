const useState = React.useState;
const useEffect = React.useEffect;
const root = ReactDOM.createRoot(document.getElementById('app'));

function App() {
	const [contacts, setContacts] = useState([]);

/* 	run once page renders first time */
useEffect(() => localStorage.getItem("app") && setContacts(JSON.parse(localStorage.getItem('app'))),[]);
/* Runs once during every render */
useEffect(() => localStorage.setItem('app', JSON.stringify(contacts)),[contacts]);
	return (
		<div className='container m-4'>
			<Header />
			<FormArea setContact={setContacts} />
			<ul>
				{contacts.map(e => (
					<Contact setContacts={setContacts} name={e.name} age={e.age} id={e.id}/>
				))}
			</ul>
			<LikeArea />
			<Time />
		</div>
	);
}

function Header() {
	return <h1 className='text-bold text-5xl mb-5 font-sans'>Web App</h1>;
}

function Time() {
	const [time, setTime] = useState(new Date().toLocaleString());
	setTimeout(() => setTime(new Date().toLocaleString()), 1000);
	return <p>Time is {time}</p>;
}

function Contact(props) {
	function deleteContact() {
		props.setContacts(prev=>prev.filter(e=>e.id !=props.id))
	}


	return (
		<li>
			<p>
				{props.name} is {props.age}
			</p>
			<button onClick={deleteContact}>remove</button>
		</li>
	);
}

function LikeArea() {
	const [likeCount, setLikeCount] = useState(0);
	function increaseLikeCount() {
		setLikeCount(prev => ++prev);
	}
	function decreaseLikeCount() {
		setLikeCount(prev => (prev === 0 ? 0 : --prev));
	}
	return (
		<div>
			<button onClick={increaseLikeCount}>Increase Like</button>
			<button onClick={decreaseLikeCount}>Decrease Like</button>
			<p>You liked {likeCount} times</p>
		</div>
	);
}

function FormArea(props) {
	const [name, setName] = useState();
	const [age, setAge] = useState();

	function handleSubmit(e) {
		e.preventDefault();
		props.setContact(prev => prev.concat([{ name, age, id: Date.now() }]));
		setName('');
		setAge('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<fieldset>
				<legend>Add new Pet</legend>
				<input value={name} onChange={e => setName(e.target.value)} id='name' type='text' />
				<input value={age} onChange={e => setAge(e.target.value)} type='number' />
				<button>Add Pet</button>
			</fieldset>
		</form>
	);
}

root.render(<App />);
