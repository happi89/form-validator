const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const message = document.getElementById('message');
const messageContainer = document.querySelector('.message-container');
const button = document.querySelector('button');

let isVaild = false;

function validateForm() {
  // using contrainst api
  isVaild = form.checkValidity();
  // style message for an error
  message.textContent = 'Please fill out all fields.';
  message.style.color = 'red';
  messageContainer.style.borderColor = 'red';
}

//make sure passwords match
function validatePassword(e) {
  e.preventDefault();
  validateForm();
};

form.addEventListener('submit', validatePassword);
