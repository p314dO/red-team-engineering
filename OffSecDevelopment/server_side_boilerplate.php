<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // Create a string with the form data.
    $formData = "Username: $username\nPassword: $password\n\n";

}


?>
