const loginFormHandler = async (event) => {
  event.preventDefault();

  //* Get the input values from the form
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  //* Validate username and password
  if (username && password) {
    //* Make an API request to log in the user
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      //* If the login was successful, redirect to the homepage
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  //* Get the input values from the form
  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  //* Validate username and password
  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      //* If the signup was successful, redirect to the login page
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
};
//* Attach event listener to the login form
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
//* Attach event listener to the signup form
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
