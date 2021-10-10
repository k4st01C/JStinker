const hourHand=document.querySelector('#hour')
const minuteHand=document.querySelector('#minute')
const secondHand=document.querySelector('#second')

let time=new Date()
let seconds=6*time.getSeconds()
let minutes=6*time.getMinutes()
let hours=(time.getHours()%12)*30
secondHand.style.transform=`rotate(${seconds}deg)`
minuteHand.style.transform=`rotate(${minutes}deg)`
hourHand.style.transform=`rotate(${hours}deg)`

setInterval(() => {
	seconds+=6
	secondHand.style.transform=`rotate(${seconds}deg)`
	minuteHand.style.transform=`rotate(${minutes}deg)`
	hourHand.style.transform=`rotate(${hours}deg)`
}, 1000);