<html>
<body>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Please fill out all fields and provide a valid email address.";
        exit;
    }

    $to = "rrss957673@gmail.com";
    $subject = "New message from your website";
    $message .= "\n\nFrom: $name ($email)";

    if (mail($to, $subject, $message)) {
        http_response_code(200);
        echo "Thank you for your message!";
    } else {
        http_response_code(500);
        echo "Oops! Something went wrong and we couldn't send your message.";
        echo "direct send mail to:rrss957673@gmail.com";
    }
} else {
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}
?>
</body>
</html>

