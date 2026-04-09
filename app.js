const signupForm = document.getElementById('signupForm');
const inputFields = signupForm.querySelectorAll('input');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
});