      // Login form handler
      const loginFormHandler = async (event) => {
        event.preventDefault();


        const username = document.querySelector('#login-username').value.trim();
        const password = document.querySelector('#login-password').value.trim();


        if (username && password) {
          // Send a POST request
          const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
          });


          if (response.ok) {
            // If successful, redirect the browser
            document.location.replace('/');
          } else {
            console.log('Incorrect username or password, please try again');
            alert(response.statusText);
          }
        }
      };


      // Signup form handler
      const signupFormHandler = async (event) => {
        event.preventDefault();


        const username = document.querySelector('#signup-username').value.trim();
        const password = document.querySelector('#signup-password').value.trim();
        const confirmPassword = document.querySelector('#signup-password-confirm').value.trim();


        if (username && password && confirmPassword && password === confirmPassword) {
          const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, password }),
            headers: { 'Content-Type': 'application/json' },
          });


          if (response.ok) {
            document.location.replace('/');
          } else {
            alert(response.statusText);
            console.log('Error in the signup form');
          }
        } else {
          console.log('Form fields are empty or passwords do not match');
          alert('Please fill in all form fields and ensure passwords match');
        }
      };


      // Add submit event listener to login form
      document.querySelector('.form-login').addEventListener('submit', loginFormHandler);


      // Add submit event listener to signup form
      document.querySelector('.form-signup').addEventListener('submit', signupFormHandler);