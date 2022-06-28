# Form Validator

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Film in all the inputs
- See error messages when passwords dont match
- See success message when passwords match

### Screenshot

![Screenshot from 2022-06-28 16-19-13](https://user-images.githubusercontent.com/101960666/176277243-1cfb0c28-fe3e-4e85-8476-2139cde2b4ae.png)

### Links

- Live Site URL: [Form Validator](https://happi89.github.io/form-validator/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

To see how you can add code snippets, see below:

first time using forms! this was good practice. Aso learnt a bit about regex!
```html
pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
```

styles form accordingly and submits when form is valid and also a local storage function that is not in use.
```js
function validatePassword(e) {
  e.preventDefault();
  validateForm();
  // store form data in local storage
  if(isVaild && passwordsMatch) {
    storeFormData();
  }
};
```

### Useful resources

- [W3Schools forms](https://www.w3schools.com/html/html_forms.asp) - This helped me understanding forms and how you can use the different attributes
