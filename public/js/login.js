// Login form handler
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (username && password) {
    // Send a POST request to the login endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If login is successful, redirect the browser to the homepage
      document.location.replace('/');
    } else {
      // Show an error message if login fails
      alert(response.statusText);
    }
  }
};

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);