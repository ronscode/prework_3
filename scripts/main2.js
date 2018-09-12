document.querySelector('img').onclick = function() {
    alert('I am not a robot, promise.');
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3.robots');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Studies Show ' + myName + ' might be a Robot';
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Studies Show ' + storedName + ' might be a Robot';
}

myButton.onclick = function() {
	setUserName();
}