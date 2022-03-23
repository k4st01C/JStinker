const btnNotification = document.querySelector('.btn-notification');
const notificationContainer = document.querySelector('.notification-container');

btnNotification.addEventListener('click', notify);

const messages = ['message 1', 'message 2', 'message3'];
notificationIdx = 0;

function notify() {
	notificationIdx = ++notificationIdx % 3;
	const notification = document.createElement('button');
	notification.innerText = messages[notificationIdx];
	if (notificationIdx === 0) notification.classList.add('green');
	else if (notificationIdx === 1) notification.classList.add('yellow');
	else if (notificationIdx === 2) notification.classList.add('red');
	notificationContainer.append(notification);
	setTimeout(() => notification.remove(), 2000);
}
