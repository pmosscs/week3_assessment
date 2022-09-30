console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert('You have successfully submitted the form.')
	//console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let pic = document.querySelector("img");

pic.addEventListener('mouseover', () => {
	alert('I see you. And I love you. Give me your contact info so I can be with you.');
})