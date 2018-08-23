document.querySelector('img').onclick = function() {
    alert('I am not a robot, promise.');
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Ron Cagle is not a robot but ' + myName + ' might be';
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Ron Cagle is not a robot but ' + storedName + ' might be';
}

myButton.onclick = function() {
	setUserName();
}