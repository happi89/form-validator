const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const message = document.getElementById('message');
const messageContainer = document.querySelector('.message-container');
const button = document.querySelector('button');

let isVaild = false;
let passwordsMatch = false;

function validateForm() {
  // using contrainst api
  isVaild = form.checkValidity();
  // style message for an error

  if(!isVaild) {
    // show error message if form is not valid
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'rgb(255, 58, 36)';
    messageContainer.style.borderColor = 'rgb(255, 58, 36)';
    return;
  }

  // check if passwords match
  if(password1.value === password2.value) {
    // style message for a success
    passwordsMatch = true;
    password1.style.borderColor = 'rgb(0, 255, 0)';
    password2.style.borderColor = 'rgb(0, 255, 0)';
  } else {
    // if passwords don't match, style message for an error
    passwordsMatch = false;
    message.textContent = 'Passwords do not match.';
    message.style.color = 'rgb(255, 58, 36)';
    message.style.borderColor = 'rgb(255, 58, 36)';
    password1.style.borderColor = 'rgb(255, 58, 36)';
    password2.style.borderColor = 'rgb(255, 58, 36)';
    return;
  }
  // if passwords match and form is valid
  if(isVaild && passwordsMatch) {
    // style message for a success
    message.textContent = 'Registration successful!';
    message.style.color = 'rgb(0, 255, 0)';
    messageContainer.style.borderColor = 'rgb(0, 255, 0)';
  }
}

// store form data in local storage
function storeFormData(e) {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password2.value,
  }
  // do something with user data
  // localStorage.setItem('user', JSON.stringify(user));
}

//make sure passwords match
function validatePassword(e) {
  e.preventDefault();
  validateForm();
  // store form data in local storage
  if(isVaild && passwordsMatch) {
    storeFormData();
  }
};

form.addEventListener('submit', validatePassword);
