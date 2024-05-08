<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") { 
    // Collect form data 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up email parameters
    $to = "acinsulation.ny.ct@gmail.com"; //Change this to your email address
    $subject = "New Quote Request from $name";
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        // Email sent successfully
        echo "Thank you for your message. We will contact you shortly.";
    } else {
        // Email not sent
        echo "Sorry, there was an issue sending your message. Please try again later.";
    }
} else {
    // If the request method is not POST, display an error message
    echo "Sorry, this page cannot be accessed directly.";
}
?>
