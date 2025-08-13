document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Capture the username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    //Output the data to console.log for debugging
    console.log(`Captured Credentials - Username: ${username}, Password: ${password}`);
});