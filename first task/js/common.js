'use strict';

var userName = document.getElementById('userName');
var userCity = document.getElementById('userCity');
var userPassword = document.getElementById('userPassword');
var userDate = document.getElementById('userDate');
var userPhone = document.getElementById('userPhone');
var error = document.getElementById('error');
var error_city = document.getElementById('error_city');
var error_phone = document.getElementById('error_phone');
var error_password = document.getElementById('error_password');
var error_date = document.getElementById('error_date');
var formOne = document.getElementById('formOne');

userName.onblur = function () {
	if (!this.value.length) {
		this.className = 'error';
		error.innerHTML = 'Please enter a name!!!';
		error.style.color = 'red';
		return;
	}
	this.className = 'valid';
	error.innerHTML = 'Good for you!!!';
	error.style.color = 'green';
};

userCity.onblur = function () {
	if (!this.value.length) {
		this.className = 'error';
		error_city.innerHTML = 'Please enter a city!!!';
		error_city.style.color = 'red';
		return;
	}
	this.className = 'valid';
	error_city.innerHTML = 'Good for you!!!';
	error_city.style.color = 'green';
};

userPassword.onblur = function () {
	var minLength = 5;
	var maxLength = 10;
	if (this.value.length < minLength || this.value.length > maxLength) {
		this.className = 'error';
		error_password.innerHTML = 'Enter a value ' + minLength + ' to ' + maxLength + ' characters in length ';
		error_password.style.color = 'red';
		return;
	}

	this.className = 'valid';
	error_password.innerHTML = 'Good for you!!!';
	error_password.style.color = 'green';
};

userPhone.onblur = function () {
	var regexp = /^[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;
	if (!regexp.test(this.value)) {
		this.className = 'error';
		error_phone.innerHTML = 'Please enter a phone!!!';
		error_phone.style.color = 'red';
		return;
	}

	this.className = 'valid';
	error_phone.innerHTML = 'Good for you!!!';
	error_phone.style.color = 'green';
};

userDate.onblur = function () {
	var regexp = /^[0-9]{2}[.]{1}[0-9]{2}[.]{1}[0-9]{4}$/;
	if (!regexp.test(this.value)) {
		this.className = 'error';
		error_date.innerHTML = 'Please enter a date!!!';
		error_date.style.color = 'red';
		return;
	}
	this.className = 'valid';
	error_date.innerHTML = 'Good for you!!!';
	error_date.style.color = 'green';

};

formOne.addEventListener('submit', function (e){
	e.preventDefault();
	if(!userName.value.length) {
		userName.className = 'error';
	}
	if (userPassword.value.length < 5 || userPassword.value.length > 10) {
		userPassword.className = 'error';
	}
	if (!userDate.value) {
		userDate.className = 'error';
	}
	if (userName.value && userPassword.value && userDate.value) {
		alert('форма отправлена');
	}
});

// userDate.onblur = function validate(userDate, reg) {
// 	var res = userDate.value.search(reg);
// 	if (res == -1) userDate.className = 'error';
// 	else userDate.className = 'valid';
// }

// function userDate() {
// 	var reg = /^[0-9]{2}[{1}[0-9]{2}[{1}[0-9]{4}$/;
// 	validate(userDate, reg);
// }


// function validNoEmp(inputField, helpText) {
// 	if (!inputField.value.length) {
// 		helpText.innerHTML = 'Please enter a date!!!';
// 		helpText.style.color = 'red';
// 		return false;
// 	}

// 	else {
// 		helpText.innerHTML = 'Good for you!!!';
// 	}

// }

// function validateDate (inputField, helpText) {
// 	if (!validNoEmp(inputField, helpText))
// 	return false;
// 	return validateRegEx(/^[0-9]{2}[{1}[0-9]{2}[{1}[0-9]{4}$/, inputField.value);
// }



// userDate.onblur = function () {
// 	if (!this.value.length)
// 		return false;

// 		return validateRegEx(/^[0-9]{2}[{1}[0-9]{2}[{1}[0-9]{4}$/);
// }

// function init(){
// 	formone.date.onblur = dateOnBlur;
// }

// function validate(elem, reg) {
// 	var res = elem.value.search(reg);
// 	if (res == -1) userDate.className = 'error';
// 	else elem.className = 'valid';
// }

// function dateOnBlur() {
// 	var reg = /^\d{2}\/\d{2,4}$/;
// 	validate(this, reg);
// }

// function placeOrder(form) {
// 	if (!userName.value.length || !userPassword.value.length) {
// 		userName.className = 'error';
// 		userPassword.className = 'error';
// 		btn.disabled = true;
// 		alert('форма не отправлена');
// 		return;
// 	}

// 	else {
// 		btn.disabled = false;
// 		alert('форма отправлена');

// 	}
// }














































// function validate() {
// 	var userName = document.getElementById('userName');
// 	    userPhone = document.getElementById('userPhone');
// 	    userCity = document.getElementById('userCity');
// 	    userPassword = document.getElementById('userPassword');


// 	if(!userName.value) {
// 		userName.style.border = '3px solid red';
// 		return false;
// 	}


// 	if(!userPhone.value) {
// 		userPhone.style.border = '3px solid red';
// 		return false;
// 	}

// 	if(!userCity.value) {
// 		userCity.style.border = '3px solid red';
// 		return false;
// 	}

// 	if(!userPassword.value) {
// 		userPassword.style.border = '3px solid red';
// 		return false;
// 	}

// 	return true;
// }