function login() {
    // Your login logic here
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example: Check if the username and password are valid
    if (username === 'user' && password === 'password') {
        alert('Login successful');
    } else {
        alert('Invalid username or password');
    }
}

function loginWithGoogle() {
    // Redirect to the Google OAuth login page
    window.location.href = '/auth/google';
}
