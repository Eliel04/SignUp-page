const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    const userInfo = {        // get info from form and create an object
        id: Date.now(),      // generate a unique id based on the current timestamp
        username: username,
        password: password,
        email: email
    };


    //save to local storage
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    console.log('User information saved to local storage:', userInfo);
    // Optionally, you can clear the form after submission
    form.reset();
});
