function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.show-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = 'Show';
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    let isValid = true;

    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    
    const emailDomain = '@gmail.com';
    const emailFormatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailFormatRegex.test(email) || !email.endsWith(emailDomain)) {
        emailError.style.display = 'block';
        isValid = false;
    }

    if (!password || password.length < 6) {
        passwordError.style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        window.location.href = 'dashboard.html';
    }
});