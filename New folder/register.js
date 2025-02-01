document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const registerErrorMessage = document.getElementById('registerErrorMessage');

    // Handle register form submission
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirmPassword').value.trim();

        // Simple validation
        if (password !== confirmPassword) {
            registerErrorMessage.textContent = 'Passwords do not match.';
            return;
        }

        // Check if the user already exists (simple validation with localStorage)
        const existingUser = JSON.parse(localStorage.getItem('userData'));

        if (existingUser && existingUser.email === email) {
            registerErrorMessage.textContent = 'An account with this email already exists.';
            return;
        }

        // Save user data in localStorage (for demo purposes)
        const userData = { name, email, password };
        localStorage.setItem('userData', JSON.stringify(userData));

        // Redirect to login page after successful registration
        window.location.href = 'login.html';
    });
});
