const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

loginLink.addEventListener('click', (event) => {
  event.preventDefault();
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
  document.title = "Login"; // Use assignment operator = instead of comparison operator ==
  
  setTimeout(() => {
    signupForm.style.opacity = 0;
    loginForm.style.opacity = 1;
  }, 10);
});

signupLink.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
  document.title = "Signup"; // Use assignment operator = instead of comparison operator ==
  
  setTimeout(() => {
    loginForm.style.opacity = 0;
    signupForm.style.opacity = 1;
  }, 10);
});
