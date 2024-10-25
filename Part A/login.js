$(document).ready(() => {
    const validateEmail = email => /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/.test(email);
    const validateLength = (value, min, max) => value.length >= min && value.length <= max;
    const validateSpecialChars = value => /^[a-zA-Z0-9]*$/.test(value);

    const validateField = (field, errorElement, validationFunction, errorMessage) => {
        const value = field.val().trim();
        if (value && !validationFunction(value)) {
            errorElement.text(errorMessage).show();
            return false;
        } else {
            errorElement.hide();
            return true;
        }
    };

    const validateForm = () => {
        let isValid = true;
        isValid &= validateField($('#email'), $('#emailError'), validateEmail, 'Invalid Northeastern email.');
        isValid &= validateField($('#username'), $('#usernameError'), 
            value => validateLength(value, 5, 30) && validateSpecialChars(value), 
            'Username must be 5-30 chars and contain no special characters.');
        isValid &= validateField($('#password'), $('#passwordError'), 
            value => validateLength(value, 8, 20), 
            'Password must be 8-20 characters long.');
        
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        if (password && confirmPassword && password !== confirmPassword) {
            $('#confirmPasswordError').text('Passwords do not match.').show();
            isValid = false;
        } else {
            $('#confirmPasswordError').hide();
        }

        $('#loginButton').prop('disabled', !isValid);
    };

    $('#loginForm input').on('input', function() {
        validateForm();
    });

    $('#loginButton').click(() => {
        const username = $('#username').val();
        sessionStorage.setItem('loggedInUser', username);
        window.location.href = 'calculator.html';
    });
});