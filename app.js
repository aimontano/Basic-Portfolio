const btnSubmit = document.querySelector('#btnSubmit');
const formName = document.querySelector('#formName');
const formEmail = document.querySelector('#formEmail');
const formMessage = document.querySelector('#formMessage');

const validateForm = () => {
	if(formName.length > 0 && formEmail.length > 0 && formMessage.length > 0){
		return true;
	} else {
		return false;
	}
}

btnSubmit.addEventListener('click', () => {
	if(validateForm) {
		console.log(formName.value);
		console.log(formEmail.value);
		console.log(formMessage.value);
	} else {
		console.error("Form is not valid");
	}
})