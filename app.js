function a(){
	console.log(3);
	b();
}

function b(){
	console.log(4);
	a();
}


a()