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

// Signup form handler
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the signup form
  const username = document.querySelector('#signup-email').value.trim();
  const password = document.querySelector('#signup-password').value.trim();

  if (username && password) {
    // Send a POST request to the signup endpoint
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If signup is successful, redirect the browser to the login page
      document.location.replace('/login');
    } else {
      // Show an error message if signup fails
      alert(response.statusText);
    }
  }
};

// Add event listener for login form submission
document.querySelector('.form-login').addEventListener('submit', loginFormHandler);

// Add event listener for signup form submission
document.querySelector('.form-signup').addEventListener('submit', signupFormHandler);

// Login page animation

// Get all switcher elements
const switchers = [...document.querySelectorAll('.switcher')];

// Add click event listener to each switcher
switchers.forEach((item) => {
  item.addEventListener('click', function () {
    // Remove 'is-active' class from all switcher parent elements
    switchers.forEach((item) => item.parentElement.classList.remove('is-active'));
    
    // Add 'is-active' class to the clicked switcher's parent element
    this.parentElement.classList.add('is-active');

    // Change the page title based on the active form
    const pageTitle = document.querySelector('.section-title');
    if (this.classList.contains('switcher-signup')) {
      pageTitle.textContent = 'Signup for awesome blogposts';
    } else {
      pageTitle.textContent = 'Welcome Back to the Blogpost!';
    }
  });
});
