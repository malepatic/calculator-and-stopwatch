$(document).ready(() => {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
        $('#welcomeMessage').text(`Welcome, ${loggedInUser}!`);
    }

    const calculate = (num1, num2, operation) => {
        switch(operation) {
            case 'add': return num1 + num2;
            case 'subtract': return num1 - num2;
            case 'multiply': return num1 * num2;
            case 'divide': return num2 !== 0 ? num1 / num2 : 'Infinity';
            default: return null;
        }
    };

    const validateNumberField = (field, errorElement) => {
        const value = field.val().trim();
        if (value && !/^-?\d*\.?\d+$/.test(value)) {
            errorElement.text('Please enter a valid number.').show();
            return false;
        } else {
            errorElement.hide();
            return true;
        }
    };

    const validateCalculatorForm = () => {
        const isValidNum1 = validateNumberField($('#number1'), $('#number1Error'));
        const isValidNum2 = validateNumberField($('#number2'), $('#number2Error'));
        $('.button-group button').prop('disabled', !(isValidNum1 && isValidNum2));
    };

    $('#number1, #number2').on('input', function() {
        validateCalculatorForm();
    });

    $('#calculatorForm button').click(function() {
        const num1 = parseFloat($('#number1').val());
        const num2 = parseFloat($('#number2').val());
        const operation = $(this).data('operation');

        const result = calculate(num1, num2, operation);
        $('#result').val(result);

        if (operation === 'divide' && num2 === 0) {
            $('#resultError').text('Cannot divide by zero.').show();
        } else {
            $('#resultError').hide();
        }
    });
});