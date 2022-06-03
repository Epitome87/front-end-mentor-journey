const form = document.querySelector('.email-form');
const emailInput = document.querySelector('#email');
const emailFeedback = document.querySelector('.form-feedback');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailValue = emailInput.value;

  // Check if email is valid
  if (validateEmail(emailValue)) {
    form.classList.add('success');
    form.classList.remove('error');
    emailFeedback.textContent = 'Email successfully sent!';
  } else {
    form.classList.add('error');
    form.classList.remove('success');
    emailFeedback.textContent = 'Please provide a valid email';
  }
});

// Borrowed from stack overflow :)
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
