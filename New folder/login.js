document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginErrorMessage = document.getElementById('loginErrorMessage');

    // Check if a user is already logged in (using localStorage)
    if (localStorage.getItem('loggedIn')) {
        window.location.href = 'index.html'; // Redirect to homepage if logged in
    }

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Get stored user data (assuming we saved it in localStorage during registration)
        const userData = JSON.parse(localStorage.getItem('userData'));

        if (userData) {
            // Check if email and password match
            if (userData.email === email && userData.password === password) {
                // Set the logged-in status in localStorage
                localStorage.setItem('loggedIn', true);
                window.location.href = 'index.html'; // Redirect to homepage
            } else {
                loginErrorMessage.textContent = 'Incorrect email or password.';
            }
        } else {
            loginErrorMessage.textContent = 'No account found. Please register first.';
        }
    });
});
