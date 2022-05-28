// selecting html elements


/*
	let submitButton = document.querySelector('#submit-button');

	let emailElement = document.querySelector('#email');
	let messageElemet = document.querySelector('#message');

submitButton.addEventListener('click', function(e) {
	e.preventDefault();  // prevents the form from submitting when blank

	let emailValue = emailElement.value;
	let messageValue = messageElemet.value;

	if(emailValue.includes('@')) {
		// all good
		alert('thank you for your message');
	} else {
		alert('oh no. that does not look like a valid email address. please try again');
	}

})

*/

// OR

let submitButton = document.querySelector('#submit-button');

function emailValidate(email) {
	if(email.includes('@')) {
		return true;
	} else {
		return false;
	}
}

function clickListener(event) {
	event.preventDefault();

	let emailInput = document.querySelector('#email');
	let messageInput = document.querySelector('#message');

	let emailText = emailInput.value;
	let messageText = messageInput.value;

	if (emailValidate(emailText) !== true) {
		alert('oh no. that does not look like a valid email address. please try again');
		return false;
	} else {
		alert('thanks for your message');
		emailInput.value=null;
		messageInput.value=null;
	}
}


submitButton.addEventListener('click', clickListener);


// attaching 'click listener'

// getting user entered values

// javascript validations