document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.querySelector('.quote-section form');

    // Added event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the default form behavior
        event.preventDefault();


        // Get form fields
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var messageInput = document.getElementById('message');
        var emailError = document.getElementById('email-error');

        // Validate the form fields
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '' ) {
            alert('Please fill in all the fields');
            return;
        }

        // Validate email format (added code)
        var emailRegex = /^[^\s@]+@[^\@]+\.[^\s@]+$/;
        if(!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address'; // Display error message
            return;
        } else {
            emailError.textContent = ''; // Clear any previous error message
        }

        // Submit the form if all fields are filled
        alert('Form submitted successfully!');
        form.submit();
    });
});