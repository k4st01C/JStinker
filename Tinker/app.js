var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var useState = React.useState;
var useEffect = React.useEffect;
var root = ReactDOM.createRoot(document.getElementById('app'));

function App() {
	var _useState = useState([]),
	    _useState2 = _slicedToArray(_useState, 2),
	    contacts = _useState2[0],
	    setContacts = _useState2[1];

	/* 	run once page renders first time */


	useEffect(function () {
		return localStorage.getItem("app") && setContacts(JSON.parse(localStorage.getItem('app')));
	}, []);
	/* Runs once during every render */
	useEffect(function () {
		return localStorage.setItem('app', JSON.stringify(contacts));
	}, [contacts]);
	return React.createElement(
		'div',
		{ className: 'container m-4' },
		React.createElement(Header, null),
		React.createElement(FormArea, { setContact: setContacts }),
		React.createElement(
			'ul',
			null,
			contacts.map(function (e) {
				return React.createElement(Contact, { setContacts: setContacts, name: e.name, age: e.age, id: e.id });
			})
		),
		React.createElement(LikeArea, null),
		React.createElement(Time, null)
	);
}

function Header() {
	return React.createElement(
		'h1',
		{ className: 'text-bold text-5xl mb-5 font-sans' },
		'Web App'
	);
}

function Time() {
	var _useState3 = useState(new Date().toLocaleString()),
	    _useState4 = _slicedToArray(_useState3, 2),
	    time = _useState4[0],
	    setTime = _useState4[1];

	useEffect(function () {
		var interval = setInterval(function () {
			return setTime(new Date().toLocaleString());
		}, 1000);
		return function () {
			return clearInterval(interval);
		};
	}, []);

	return React.createElement(
		'p',
		null,
		'Time is ',
		time
	);
}

function Contact(props) {
	function deleteContact() {
		props.setContacts(function (prev) {
			return prev.filter(function (e) {
				return e.id != props.id;
			});
		});
	}

	return React.createElement(
		'li',
		null,
		React.createElement(
			'p',
			null,
			props.name,
			' is ',
			props.age
		),
		React.createElement(
			'button',
			{ onClick: deleteContact },
			'remove'
		)
	);
}

function LikeArea() {
	var _useState5 = useState(0),
	    _useState6 = _slicedToArray(_useState5, 2),
	    likeCount = _useState6[0],
	    setLikeCount = _useState6[1];

	function increaseLikeCount() {
		setLikeCount(function (prev) {
			return ++prev;
		});
	}
	function decreaseLikeCount() {
		setLikeCount(function (prev) {
			return prev === 0 ? 0 : --prev;
		});
	}
	return React.createElement(
		'div',
		null,
		React.createElement(
			'button',
			{ onClick: increaseLikeCount },
			'Increase Like'
		),
		React.createElement(
			'button',
			{ onClick: decreaseLikeCount },
			'Decrease Like'
		),
		React.createElement(
			'p',
			null,
			'You liked ',
			likeCount,
			' times'
		)
	);
}

function FormArea(props) {
	var _useState7 = useState(),
	    _useState8 = _slicedToArray(_useState7, 2),
	    name = _useState8[0],
	    setName = _useState8[1];

	var _useState9 = useState(),
	    _useState10 = _slicedToArray(_useState9, 2),
	    age = _useState10[0],
	    setAge = _useState10[1];

	function handleSubmit(e) {
		e.preventDefault();
		props.setContact(function (prev) {
			return prev.concat([{ name: name, age: age, id: Date.now() }]);
		});
		setName('');
		setAge('');
	}

	return React.createElement(
		'form',
		{ onSubmit: handleSubmit },
		React.createElement(
			'fieldset',
			null,
			React.createElement(
				'legend',
				null,
				'Add new Pet'
			),
			React.createElement('input', { value: name, onChange: function onChange(e) {
					return setName(e.target.value);
				}, id: 'name', type: 'text' }),
			React.createElement('input', { value: age, onChange: function onChange(e) {
					return setAge(e.target.value);
				}, type: 'number' }),
			React.createElement(
				'button',
				null,
				'Add Pet'
			)
		)
	);
}

root.render(React.createElement(App, null));