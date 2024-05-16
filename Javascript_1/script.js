document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('.quote-section form');

    // Added event listener for form submission
    form.addEventListener('submit', function(event) {
        console.log('Form Submitted'); // Check if this log appears in the console
        // Prevent the default form behavior
        event.preventDefault();
        // Reset the code


        // Get form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const emailError = document.getElementById('email-error');

        // Validate the form fields
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '' ) {
            alert('Please fill in all the fields');
            return;
        }

        // Validate email format (added code)
        const emailRegex = /^[^\s@]+@[^\@]+\.[^\s@]+$/;
        if(!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address'; // Display error message
            return;
        } else {
            emailError.textContent = ''; // Clear any previous error message
        }

        // Grabs the insulation thickness and material
        const insulationThickness = parseFloat(document.getElementById('insulation-thickness').value);
        const insulationMaterial = document.getElementById('insulation-material').value;

        // Calculate R-Value
        let rValue;
        try {
             rValue = calculateRValue(insulationThickness, insulationMaterial);
             // Display R-Value
             alert('Estimated R-Value: ' + rValue);
        } catch (error) {
             // Handle error from calculateRValue function
             alert(error.message);
             return;
        }

        // Submit the form if all fields are filled
        alert('Form submitted successfully!');
        console.log('Before page reload');
        window.location.reload(); // Reload the page
    });
});

// Function to Calculate R-Value
function calculateRValue(thickness, material) {
    // Define R-Values per inch for different insulation material
    const rValuesPerInch = {
    // R-Value for Open Cell Sprayfoam        
        'open cell': {  
            1: 3.8,   // Example of 1 inch of Open Cell Sprayfoam Insulation
            3.5: 14,  // Example of 3.5 inches of Open Cell Sprayfoam Insulation
            6: 21,    // Example of 5.5 inches of Open Cell Sprayfoam Insulation
            8: 31,    // Example of 8 inches of Open Cell Sprayfoam Insulation
            10: 38,   // Example of 10 inches of Open Cell Sprayfoam Insulation
            11: 42,   // Example of 11 inches of Open Cell Sprayfoam Insulation
            13: 49,   // Example of 13 inches of Open Cell Sprayfoam Insulation
            14: 54,   // Example of 14 inches of Open Cell Sprayfoam Insulation
            16: 60,   // Example of 16 inches of Open Cell Sprayfoam Insulation
                      // Add more thickness and corresponding r-values as needed     
        },
// R-Value for Closed Cell Sprayfoam
        'closed cell': {
            1: 7.1,   // Example of 1 inch of Closed Cell Sprayfoam Insulation
            2: 14,    // Example of 2 inches of Closed Cell Sprayfoam Insulation
            3: 20,    // Example of 3 inches of Closed Cell Sprayfoam Insulation
            3.5: 23,  // Example of 3.5 inches of Closed Cell Sprayfoam Insulation
            4.5: 30,  // Example of 4.5 inches of Closed Cell Sprayfoam Insulation
            5.5: 37,  // Example of 5.5 inches of Closed Cell Sprayfoam Insulation
            6: 40,    // Example of 6 inches of Closed Cell Sprayfoam Insulation
            7: 47,    // Example of 7 inches of Closed Cell Sprayfoam Insulation
            8: 53,    // Example of 8 inches of Closed Cell Sprayfoam Insulation
            9: 60,    // Example of 9 inches of Closed Cell Sprayfoam Insulation
                      // Add more thickness and corresponding r-values as needed
        }
        // Add more material and their R-Values as needed
    }

    // Lookup R-Value based on material and thickness 
    const rValuePerInch = rValuesPerInch[material]?.[thickness];
        if(rValuePerInch !== undefined) {
            return rValuePerInch;
            } else {
                throw new Error('Invalid material or thickness');
        }
    }