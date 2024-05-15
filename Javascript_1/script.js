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

        // Grabs the insulation thickness and material
        var insulationThickness = parseFloat(document.getElementById('insulation-thickness').value);
        var insulationMaterial = document.getElementById('insulation-material').value;

        // Calculate R-Value
        var rValue = calculateRValue(insulationThickness, insulationMaterial);

        // Display R-Value
        alert('Estimated R-Value: ' + rValue);

        // Submit the form if all fields are filled
        alert('Form submitted successfully!');
        form.submit();
    });
});

// Function to Calculate R-Value
function calculateRValue(thickness, material) {
    // Define R-Values per inch for different insulation material
    var rValuesPerInch = {
// R-Value for Open Cell Sprayfoam        
        'open cell': {  
            1: 3.8, // Example of 1 inch of Open Cell Sprayfoam Insulation
            3.5: 14, // Example of 3.5 inches of Open Cell Sprayfoam Insulation
            6: 21, // Example of 5.5 inches of Open Cell Sprayfoam Insulation
            8: 31, // Example of 8 inches of Open Cell Sprayfoam Insulation
            10: 38, // Example of 10 inches of Open Cell Sprayfoam Insulation
            11: 42, // Example of 11 inches of Open Cell Sprayfoam Insulation
            13: 49, // Example of 13 inches of Open Cell Sprayfoam Insulation
            14: 54, // Example of 14 inches of Open Cell Sprayfoam Insulation
            16: 60, // Example of 16 inches of Open Cell Sprayfoam Insulation
            // Add more thickness and corresponding r-values as needed     
        },
// R-Value for CLosed Cell Sprayfoam
        'closed cell': {
        1: 7.1, // Example of 1 inch of Closed Cell Sprayfoam Insulation
        2: 14, // Example of 2 inches of Closed Cell Sprayfoam Insulation
        3: 20, // Example of 3 inches of Closed Cell Sprayfoam Insulation
        3.5: 23, // Example of 3.5 inches of Closed Cell Sprayfoam Insulation
        4.5: 30, // Example of 4.5 inches of Closed Cell Sprayfoam Insulation
        5.5: 37 // Example of 5.5 inches of Closed Cell Sprayfoam Insulation
        6: 40, // Example of 6 inches of Closed Cell Sprayfoam Insulation
        7: 47, // Example of 7 inches of Closed Cell Sprayfoam Insulation
        8: 53 // Example of 8 inches of Closed Cell Sprayfoam Insulation
        9: 60 // Example of 9 inches of Closed Cell Sprayfoam Insulation
        // Add more thickness and corresponding r-values as needed
        }
        // Add more material and their R-Values as needed
    }

    // Lookup R-Value based on material and thickness 
    var rValuePerInch = rValuesPerInch[material][thickness];
        if(rValuePerInch) {
            return rValuePerInch;
            } else {
                return 'N/A'; // If Material or Thickness not found
        }
}